import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

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

  registerUser(value: { email: string; password: string; }) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err));
    });
   }

  loginUser(value: { email: string; password: string; }) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => {
          return reject(err);
        });
    });
  }

  logoutUser() {
    console.log("> logout");
    return new Promise((resolve, reject) => {
      if ( firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log('LOG Out');
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
   }

   userDetails(){
     return firebase.auth().currentUser;
   }
}
