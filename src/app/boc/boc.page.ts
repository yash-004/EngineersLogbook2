import{Component, OnInit, wtfStartTimeRange,}from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl}from '@angular/forms';
import {NavController}from '@ionic/angular';
import {DatabaseService, VehicleTypes }from '../services/database.service';
import {ToastController}from '@ionic/angular';
import {ActivatedRoute }from '@angular/router';
import * as dayjs from 'dayjs'; // Datetime utility, See http://zetcode.com/javascript/dayjs/

@Component({
selector: 'app-boc',
templateUrl: './boc.page.html',
styleUrls: ['./boc.page.scss'],
})

export class bocPage implements OnInit {


bocForm: FormGroup;
errorMessage = '';
successMessage = '';
toast: any;
today = new Date().toISOString();
updateStatus;
checkboxstatus = false;


validationMessages = {
date: [
{type: 'required', message: 'Date is required.'
}],
time: [
{type: 'required', message: 'Enter current time'
},
],

};

 checklist = [
{listID: 1, name:"Check Engine Oil in between minimum and maximum level.",ischecked: false},
{listID: 2, name:"Check Brake Fluid is between minimum minimum and maximum level. (if applicable)",ischecked: false},
{listID: 3, name:"Check Clutch Fluid is between minimum minimum and maximum level. (if applicable)",ischecked: false},
{listID: 4, name:"Check Power Steering Oil is between minimum minimum and maximum level.",ischecked: false},
{listID: 5, name:"Check Radiator Coolant is filled to the required level.",ischecked: false},
{listID: 6, name:"Check all wheel nuts are intact & tyre side wall for physical damage.",ischecked: false},
{listID: 7, name:"Check Canopy Ropes are tightened. (if applicable)",ischecked: false},
{listID: 8, name:"Check Battery terminal / mounting bracket secured & terminal insulators are intact.",ischecked: false},
{listID: 9, name:"Check Front & Rear Seat Belts are able to buckle & lock.",ischecked: false},
{listID: 10, name:"Check Headlight / Signal Height / Tail Height / Brake Light / Horn / Wipers are working.",ischecked: false},
{listID: 11, name:"Check instrument panel warning lights and buzzer are working.",ischecked: false},
{listID: 12, name:"Check SWD / IVD are working.",ischecked: false},
{listID: 13, name:"Check Fuel Tank level. (not less than 1/2 tank)",ischecked: false},
{listID: 14, name:"Check for abnormal noise, vibration and burning smell.",ischecked: false},
{listID: 15, name:"Check that reverse sensor is switched on. (for OUV)",ischecked: false},
{listID: 16, name:"Check that reverse camera is working. (if applicable)",ischecked: false}
];

constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public database: DatabaseService,
    public route: ActivatedRoute
  ) { }

    selectedArray : any = [];

onChange(name) {
if(this.selectedArray.includes(name)) {
    this.selectedArray = this.selectedArray.filter((value)=>value!=name);
} else {
    this.selectedArray.push(name)
}
}
  public setcheckboxstatus(){
    this.checkboxstatus =! this.checkboxstatus;
    }


  public getcheckboxstatus(){
    return this.checkboxstatus;
  }

  public getapprovedvtypes(): string[] {
        var vtypes =  VehicleTypes
        if (this.database.current.user.mss_certified != true) {
            vtypes = vtypes.filter( vtype => vtype != 'MSS');
        }
        if (this.database.current.user.flb_certified != true) {
            vtypes = vtypes.filter( vtype => vtype != 'FLB');
        }
        if (this.database.current.user.belrex_certified != true) {
            vtypes = vtypes.filter( vtype => vtype != 'BELREX');
        return vtypes
        }
  }

  ngOnInit() {
  }

  onCancel() {
    this.navCtrl.pop();
  }

  showSubmit() {
    return true;
  }

  showToast(msg) {
    this.toastController.create({
      message: msg,
      duration: 2000,
      //  showCloseButton: true,
      //  closeButtonText: 'OK',
      position: 'bottom'
    }).then((obj) => {
      obj.present();
    });
  }

}
