import { Injectable } from '@angular/core';

import { API, Auth, graphqlOperation } from 'aws-amplify';

import { User } from './database.service'

import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { 

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
      location: JSON.stringify({lat: 0, lng: 0}),
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

  async logoutUser() {
    console.log("> logout");
    await Auth.signOut();
   }



  async userDetails(){
    const user = await Auth.currentAuthenticatedUser();

    var res = await API.graphql(graphqlOperation(queries.getUser, {email: user.attributes.email}));

    var dbUser = res["data"]["getUser"] as User

    dbUser.location = JSON.parse(dbUser.location)

    return dbUser
  }
}