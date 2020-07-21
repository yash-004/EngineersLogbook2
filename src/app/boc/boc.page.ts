import { Component, OnInit, wtfStartTimeRange } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DatabaseService, VehicleTypes } from '../services/database.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
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
      { type: 'required', message: 'Date is required.' }],
    time: [
      { type: 'required', message: 'Enter current time' },
    ],

  };

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public database: DatabaseService,
    public route: ActivatedRoute
  ) { }

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
