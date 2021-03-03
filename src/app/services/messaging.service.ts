import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { FCM } from '@ionic-native/fcm/ngx';

import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import * as subscriptions from './graphql/subscriptions';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(
    private platform: Platform,
    private database: DatabaseService,
    private fcm: FCM  // Firebase Cloud Messaging
  ) { }

  public init(email: string) {

    // Setup Firebase Cloud Messaging -- token handling,
    // notifications in foreground/background.

    if (this.platform.is('cordova')) {

      console.log(`> FCM: Initializing cloud messaging services: ${email}`);
      
      this.fcm.getToken().then(async token => {
      
        console.log(`> FCM: Token received: ${token}`);

        var tokenexists = false
        if (this.database.current.user.devices){
          if (this.database.current.user.devices.includes(token)){
            console.log("Token already exists!")
            tokenexists = true
          }  
        }

        if (!tokenexists){
          if (!this.database.current.user.devices){
            this.database.current.user.devices = []
          }
          this.database.current.user.devices.push(token)
          console.log("Added token to current user")
          var updateUser = await API.graphql(graphqlOperation(mutations.updateUser, {input: {email: this.database.current.user.email, devices: this.database.current.user.devices}}))
          console.log("updateUser", updateUser)
        }
        // this.database.write('devices',email,doc);
      });
      
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(`> FCM: Token refreshed: ${token}`);
        console.log(token);
      });

      this.fcm.onNotification().subscribe(data => {
      
        if (data.wasTapped) {
          console.log(`> FCM: Received in background: ${data}`);
//          this.router.navigate([data.landing_page, data.key3]);
        } else {
          console.log(`> FCM: Received token in foreground: ${data}`);
//          this.router.navigate([data.landing_page, data.key3]);
        }
      });

      console.log(`> FCM: initialization ok.`);
    }
  }
}
