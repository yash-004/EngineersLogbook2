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

@Component({
  selector: 'app-CmdMap',
  templateUrl:'./CmdMap.page.html',
  styleUrls: ['./CmdMap.page.scss'],
})

export class CmdMapPage {

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: any;
  markers = [];
  drvr: any;
  ref = firebase.database().ref('geolocations/');
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
          let updatelocation = new google.maps.LatLng(this.database.current.user.location.lat, this.database.current.user.location.lng);
          console.log(data.latitude,data.longitude);
          console.log(this.database.current.user.location.lat, this.database.current.user.location.lng);
          this.addMarker(updatelocation,image,this.database.current.user.name);
          this.setMapOnAll(this.map);
      });
    });
  }

  initMap() {
    console.log(this.database.current.user);
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
    let mylocation = new google.maps.LatLng(parseFloat( resp.coords.latitude.toFixed(9)),parseFloat(resp.coords.longitude.toFixed(9)) );
    if ( ( parseFloat(resp.coords.latitude.toFixed(9)), parseFloat(resp.coords.longitude.toFixed(9)) ) != (this.database.current.user.location.lat, this.database.current.user.location.lng) )
    {
      this.database.current.user.location = {lat: parseFloat(resp.coords.latitude.toFixed(9)),lng: parseFloat(resp.coords.longitude.toFixed(9))};
      this.database.write('user', this.database.current.user.email, this.database.current.user);
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement,
    {
        zoom: 15,
        center: mylocation
    });
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      let updatelocation = new google.maps.LatLng(parseFloat(data.coords.latitude.toFixed(9)),parseFloat(data.coords.longitude.toFixed(9)));
      if ( ( parseFloat(data.coords.latitude.toFixed(9)), parseFloat(data.coords.longitude.toFixed(9)) ) != (this.database.current.user.location.lat, this.database.current.user.location.lng) )
      {
        this.deleteMarkers();
        let image = 'assets/car.png';
        this.addMarker(updatelocation,image,this.database.current.user.name);
        this.setMapOnAll(this.map);
        this.map.panTo(updatelocation);
        this.database.current.user.location = {lat: parseFloat(data.coords.latitude.toFixed(9)),lng: parseFloat(data.coords.longitude.toFixed(9))};
        console.log(this.database.current.user.location);
        console.log("write");
        this.database.write('user', this.database.current.user.email, this.database.current.user);
      }
      console.log("notmoved");
      this.deleteMarkers();
      for (const driver of this.database.current.all_drivers_of_commander)
        {
          this.updatedriverloc(driver.email).then(result => { var drvrloc = new google.maps.LatLng(result.lat,result.lng);let image = 'assets/car.png';this.addMarker(drvrloc,image,driver.name); console.log(driver.email); console.log(result);});
        }
      let image = 'assets/car.png';
      this.addMarker(updatelocation,image,this.database.current.user.name);
      this.setMapOnAll(this.map);
    });
  }

  async updatedriverloc(email: string) {
    var result =  await this.database.read('user',email);
    this.drvr = {
      driver: result.data() as User,
    };
    return this.drvr.driver.location;
  }

  addMarker(location, image, name) {
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: image,
      label: name
    });
    this.markers.push(marker);
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
/*

for (var driver of this.database.current.all_drivers_of_commander){
      var drvrloc = new google.maps.LatLng(driver.location.lat,driver.location.lng);
      let image = 'assets/car.png';
      this.addMarker(drvrloc,image,driver.name);
      this.setMapOnAll(this.map);
parseFloat(.toFixed(9))
    }*/
