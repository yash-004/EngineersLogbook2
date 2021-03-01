import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { DatabaseService, User, Drive, VehicleTypes } from '../../services/database.service';
import { Chart } from "chart.js";
import { PipesModule } from '../../pipes/pipes.module';
import * as dayjs from 'dayjs';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Device } from '@ionic-native/device/ngx';
import * as firebase from 'firebase';
declare var google: any;

import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as queries from '../../services/graphql/queries';
import * as mutations from '../../services/graphql/mutations';
import * as subscriptions from '../../services/graphql/subscriptions';

@Component({
  selector: 'app-map',
  templateUrl:'./map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage {

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: any;
  markers = [];
  ref = firebase.database().ref('geolocations/');
  drive;

  constructor(public navCtrl: NavController,
    public platform: Platform,
    private geolocation: Geolocation,
    public database: DatabaseService,
    private device: Device) {
    platform.ready().then(() => {
      this.initMap();
    });
    this.ref.on('value', resp => {
      this.deleteMarkers();
      snapshotToArray(resp).forEach(data => {
          let image = 'assets/car.png';
          let updatelocation = new google.maps.LatLng(data.latitude,data.longitude);
          this.addMarker(updatelocation,image);
          this.setMapOnAll(this.map);
      });
    });
  }

  initMap() {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 2500, enableHighAccuracy: true }).then(async (resp) => {
    let mylocation = new google.maps.LatLng(parseFloat(resp.coords.latitude.toFixed(9)), parseFloat(resp.coords.longitude.toFixed(9)));
    if ((parseFloat(resp.coords.latitude.toFixed(9)), parseFloat(resp.coords.longitude.toFixed(9))) != (this.database.current.user.location.lat, this.database.current.user.location.lng))
    {
      this.database.current.user.location = {lat: parseFloat(resp.coords.latitude.toFixed(9)),lng: parseFloat(resp.coords.longitude.toFixed(9))};
      // this.database.write('user', this.database.current.user.email, this.database.current.user);

      this.database.current.user.location = JSON.stringify(this.database.current.user.location)
      var updateuser = await API.graphql(graphqlOperation(mutations.updateUser, {input: {...this.database.current.user, createdAt: undefined, updatedAt: undefined}}))
      console.log("updateuser", updateuser)
      this.database.current.user.location = JSON.parse(this.database.current.user.location)

    }
    this.map = new google.maps.Map(this.mapElement.nativeElement,
    {
        zoom: 15,
        center: mylocation
    });
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe(async (data) => {
      let updatelocation = new google.maps.LatLng(parseFloat(data.coords.latitude.toFixed(9)), parseFloat(data.coords.longitude.toFixed(9)));
      if ((parseFloat(data.coords.latitude.toFixed(9)), parseFloat(data.coords.longitude.toFixed(9))) != (this.database.current.user.location.lat, this.database.current.user.location.lng))
      {
        this.database.current.user.location = {lat: parseFloat(data.coords.latitude.toFixed(9)),lng: parseFloat(data.coords.longitude.toFixed(9))};
        console.log(this.database.current.user.location);
        // this.database.write('user', this.database.current.user.email, this.database.current.user);

        this.database.current.user.location = JSON.stringify(this.database.current.user.location)
        var updateuser = await API.graphql(graphqlOperation(mutations.updateUser, {input: {...this.database.current.user, createdAt: undefined, updatedAt: undefined}}))
        console.log("updateuser", updateuser)
        this.database.current.user.location = JSON.parse(this.database.current.user.location)

      }
      this.deleteMarkers();
      if (this.map) {this.updatemap();}
    });
    if (this.map) {this.updatemap();}
  }



  addMarker(location, image) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: image
    });
    this.markers.push(marker);
  }

  public updatemap() {
    let image = 'assets/car.png';
    var updatelocation = new google.maps.LatLng(this.database.current.user.location.lat, this.database.current.user.location.lng);
    this.addMarker(updatelocation,image);
    this.setMapOnAll(this.map);
    this.map.panTo(updatelocation);
  }

  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }

  clearMarkers() {
    this.setMapOnAll(null);
  }

  deleteMarkers() {
    this.clearMarkers();
    this.markers = [];
  }

  public click(): void {
    this.drive = this.getPendingDrives();
    console.log(this.drive);
    this.database.current.drive_to_edit = this.drive[0];
    console.log(`> Navigating to AddDrivePage for drive id=${this.drive.id}`);
    this.navCtrl.navigateForward(['/reportvehicle']);
  }

  public getPendingDrives() : Drive[] {
    return this.database.current.drive_history.filter( (drive) => { if (this.database.current.user.email === drive.driver) {
      return drive.status === 'in-progress';}
    });
  }
}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};