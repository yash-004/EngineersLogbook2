import { Injectable } from '@angular/core';

import { API, Auth, graphqlOperation } from 'aws-amplify';

import { DatabaseService, User } from './database.service'

import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private platform: Platform, private fcm: FCM) { 

    /*
    firebase.auth().onAuthStateChanged( (authData) => {
      console.log(`> AuthStateChanged: ${JSON.stringify(authData)}`);
    });
    */
  }

  // registerUser(value: { email: string; password: string; }) {
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  //     .then(
  //       res => resolve(res),
  //       err => reject(err));
  //   });
  //  }

  async registerUser(value) {
    var { user } = await Auth.signUp(
      {
        username: value.email.toUpperCase(),
        password: value.password,
    });

    var new_user: User = {
      name: value.name.toUpperCase(),
      email: value.email.toUpperCase(),
      fleet: value.unit.toUpperCase(),
      company: value.company.toUpperCase(),
      licence_num: value.licenseNum,
      licence_type: value.licenseType,
      mss_certified: false,
      flb_certified: false,
      belrex_certified: false,
      m3g_certified: false,
      is_driver: value.isCommander.toLowerCase() === 'false',
      is_commander: value.isCommander.toLowerCase() === 'true',
      admin_level: 1,
    };

    var dbuser = await API.graphql(graphqlOperation(mutations.createUser, {input: new_user}))

    return dbuser["data"]["createUser"]
   }

  // loginUser(value: { email: string; password: string; }) {
  //   return new Promise<any>((resolve, reject) => {
  //     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
  //     .then(
  //       res => resolve(res),
  //       err => {
  //         return reject(err);
  //       });
  //   });
  // }

  async loginUser(value) {
    const user = await Auth.signIn(value.email, value.password);
    return user
  }

  async unregisterToken(){
    if (this.platform.is('cordova')) {
      
      this.fcm.getToken().then(async token => {
      
        console.log(`> FCM: Token received: ${token}`);

        var tokenexists = false

        var user = await this.userDetails();
        if (user.devices){
          if (user.devices.includes(token)){
            console.log("Current token found!")
            var index = user.devices.indexOf(token);
            if (index !== -1) {
              console.log("Removing token")
              user.devices.splice(index, 1);
              var updateUser = await API.graphql(graphqlOperation(mutations.updateUser, {input: {email: user.email, devices: user.devices}}))
              console.log("updateUserToken",updateUser)
            }
          }  
        }
        // this.database.write('devices',email,doc);
      });
    }
  }

  async logoutUser() {
    console.log("> logout");
    await this.unregisterToken()
    await Auth.signOut();

   }



  async userDetails(){
    const user = await Auth.currentAuthenticatedUser();

    var res = await API.graphql(graphqlOperation(queries.getUser, {email: user.attributes.email}));

    var dbUser = res["data"]["getUser"] as User

    return dbUser
  }
}