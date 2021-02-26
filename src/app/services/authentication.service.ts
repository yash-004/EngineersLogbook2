import { Injectable } from '@angular/core';

import { Auth } from 'aws-amplify'

import { User } from './database.service'
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
    const user = await Auth.currentAuthenticatedUser();
    return user
  }

  getCurrentUser(user){

    var is_admin
    var is_commander
    var is_driver

    if (user.attributes["custom:role"] == "admin"){
      is_admin = true
      is_commander = true
      is_driver = false
    }
    else if (user.attributes["custom:role"] == "commander"){
      is_admin = false
      is_commander = true
      is_driver = false   
    }
    else{
      is_admin = false
      is_commander = false
      is_driver = true   
    }

    return {
      created: user.attributes["custom:created"],
      name: user.attributes["custom:name"],
      email: user.attributes.email,
      fleet: user.attributes["custom:fleet"],
      company: user.attributes["custom:company"],
      is_admin: is_admin,  // Superuser
      is_commander: is_commander,
      location: user.attributes["custom:location"],
      admin_level: user.attributes["custom:admin_level"],
      
      // For drivers only
      is_driver: is_driver,
      licence_num: user.attributes["custom:license_num"],
      
      licence_type: user.attributes["custom:license_type"],
      mss_certified: user.attributes["custom:mss_certified"],
      flb_certified: user.attributes["custom:flb_certified"],
      belrex_certified: user.attributes["custom:belrex_certified"],
      m3g_certified: user.attributes["custom:m3g_certified"]
    } as User
  }
}