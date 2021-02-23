import { Injectable } from '@angular/core';

import { Auth } from 'aws-amplify'
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
    var role

    if (value.isCommander.toLowerCase() === 'false'){
      role = "driver"
    }
    else{
      role = "commander"
    }

    if (role == "driver"){
      var { user } = await Auth.signUp(
        {
          username: value.email.toUpperCase(),
          password: value.password,
          attributes: {
              // other custom attributes 
              'custom:name': value.name.toUpperCase(),
              'custom:fleet': value.unit.toUpperCase(),
              'custom:company': value.company.toUpperCase(),
              'custom:license_num': value.licenseNum,
              'custom:license_type': value.licenseType,
              'custom:created': new Date(),
              'custom:mss_certified': false,
              'custom:flb_certified': false,
              'custom:belrex_certified': false,
              'custom:m3g_certified': false,
              'custom:role': "driver"
          }
      });
    }
    else
    {
      var { user } = await Auth.signUp(
        {
          username: value.email.toUpperCase(),
          password: value.password,
          attributes: {
              // other custom attributes 
              'custom:name': value.name.toUpperCase(),
              'custom:fleet': value.unit.toUpperCase(),
              'custom:company': value.company.toUpperCase(),
              'custom:license_num': value.licenseNum,
              'custom:license_type': value.licenseType,
              'custom:created': new Date(),
              'custom:mss_certified': false,
              'custom:flb_certified': false,
              'custom:belrex_certified': false,
              'custom:m3g_certified': false,
              'custom:role': "commander"
          }
      });
    }
    return user
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
    const {attributes} = await Auth.currentAuthenticatedUser();

    return attributes
  }
}
