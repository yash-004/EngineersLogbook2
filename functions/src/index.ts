
const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.onUserCreated = functions.firestore
  .document('/user/{email}')
  .onCreate( async (snap:any, context:any) => {

    const email = context.params.email;
    const new_user = snap.data();

    console.log(`New user: ${JSON.stringify(new_user)}`);
    
    const payload = {
      notification: {
        title: 'Engineer’s Logbook',
        body: `Created new user: ${new_user.name} (${email}).`,
        sound: 'default',
        badge: '1'
      }
    };

    const devices = admin.firestore().collection('devices');
    devices.get("superuser@gmail.com").then( (token:any) => { admin.messaging().sendToDevice(token, payload); });

    //sendPushNotification(new_user,payload);
  });  // End of cloud function
  

exports.onDriveWrite = functions.firestore
  .document('/drive/{id}')
  .onWrite( async (change:any, context:any) => {

    const id = context.params.id;

    const previous_trip = change.before.data();
    const trip = change.after.data();

    console.log(`onWrite: ${id}`);
    console.log(`onWrite: bef=${JSON.stringify(previous_trip)}`);
    console.log(`onWrite: aft=${JSON.stringify(trip)}`);

    // Only notify if status has changed (previous_trip==null for newly created drive)
    if (previous_trip && previous_trip.status === trip.status) return;

    const payload = {
      notification: {
        title: 'Engineer’s Logbook',
        sound: 'default',
        badge: '1',
        body: ''
      }
    };

    const devices = admin.firestore().collection('/devices');

    if (trip.status === 'in-progress') {
      // Send message to commander about this newly initiated trip
      payload.notification.body = `Your drive with ${trip.driver} starting at ${trip.start_location} is in progress.`;
      console.log(`Status:in-progress: ${payload.notification.body}`);
      devices.doc(trip.commander).get().then( (doc:any) => { admin.messaging().sendToDevice(doc.data().token, payload); 
        //console.log(`devices.get(${trip.commander}) => ${JSON.stringify(doc)}`);
      });
    } else 
    if (trip.status === 'pending') {
      // Send reminder to commander to review this newly completed trip
      payload.notification.body = `Your drive with ${trip.driver} from ${trip.start_location} to ${trip.end_location} is pending your approval.`;
      console.log(`Status:pending: ${payload.notification.body}`);
      devices.doc(trip.commander).get().then( (doc:any) => { admin.messaging().sendToDevice(doc.data().token, payload); });
    } else 
    if (trip.status === 'rejected') {
      // Send message to driver to fix rejected drive details
      payload.notification.body = `Your drive from ${trip.start_location} to ${trip.end_location} was rejected.`;
      console.log(`Status:rejected: ${payload.notification.body}`);
      devices.doc(trip.driver).get().then( (doc:any) => { admin.messaging().sendToDevice(doc.data().token, payload); });
    } else 
    if (trip.status === 'verified') {
      // Send message to driver about verified drive
      payload.notification.body = `Your drive from ${trip.start_location} to ${trip.end_location} has been verified.`;
      console.log(`Status:verified: ${payload.notification.body}`);
      devices.doc(trip.driver).get().then( (doc:any) => { admin.messaging().sendToDevice(doc.data().token, payload); });
    } else {
      payload.notification.body = `Updated drive details: ${trip.driver}, from ${trip.start_location} to ${trip.end_location}.`;
      console.log(`Update status=${trip.status}: ${payload.notification.body}`);
    }

  });  // End of cloud function
