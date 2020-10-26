import { Component, OnInit, wtfStartTimeRange } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DatabaseService, Drive, VehicleTypes } from '../services/database.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs'; // DateTime utility, See http://zetcode.com/javascript/dayjs/

@Component({
  selector: 'app-reportvehicle',
  templateUrl: './reportvehicle.page.html',
  styleUrls: ['./reportvehicle.page.scss'],
})

export class ReportVehiclePage implements OnInit {

  addDriveForm: FormGroup;
  endDriveForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  toast: any;
  today = new Date().toISOString();
  drive;
  updateStatus;
  showStatus = true;
  isToggled = false;
  isDisabled;
  report;

  validationMessages = {
    date: [
      { type: 'required', message: 'Date is required.' }],
    vehicleNumber: [
      { type: 'required', message: 'Vehicle Number is required.' },
      { type: 'minlength', message: 'Vehicle number must be at least 5 characters long.' }
    ],
    vehicleType: [
      { type: 'required', message: 'Select a type of vehicle' },
    ],
    vehicleCommander: [
      { type: 'required', message: 'Select the Vehicle Commanders Name' },
    ],
    endLocation: [
      { type: 'required', message: 'Enter current location address' },
    ],
    driveComments: [
      { type: 'required', message: 'Enter description of incident' },
    ],
  };

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public database: DatabaseService,
    public route: ActivatedRoute
  ) { }

  gettime() {
    var cd = new Date(); // for now
    var nmtmoringstart = new Date();
    nmtmoringstart.setHours(7,30,0);
    var nmtmoringend = new Date();
    nmtmoringend.setHours(9,30,0);
    var nmtnightstart = new Date();
    nmtnightstart.setHours(17,30,0);
    var nmtnightend = new Date();
    nmtnightend.setHours(19,30,0);
    if (cd >= nmtmoringstart && cd < nmtmoringend){
      return false;
    }
    if (cd >= nmtnightstart && cd < nmtnightend){
      return false;
    }
    return true;
  }

  public getapprovedvtypes(): string[] {
        var vtypes =  VehicleTypes
        if (this.database.current.user.mss_certified != true) {
            vtypes = vtypes.filter( vtype => vtype != 'Monster');
        }
        if (this.database.current.user.flb_certified != true) {
            vtypes = vtypes.filter( vtype => vtype != 'Fly');
        }
        if (this.database.current.user.belrex_certified != true) {
            vtypes = vtypes.filter( vtype => vtype != 'Bunny');
        }
        return vtypes

  }

  ngOnInit() {
    // Create form group of controls
    this.addDriveForm = this.formBuilder.group({
      date: new FormControl(this.today, Validators.compose([Validators.required])),
      vehicleNumber: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required])),
      vehicleType: new FormControl('', Validators.compose([Validators.required])),
      vehicleCommander: new FormControl('', Validators.compose([Validators.required])),
      startLocation: new FormControl('', Validators.compose([Validators.required])),
      startTime: new FormControl(this.today, Validators.compose([Validators.required])),
      endTime: new FormControl(this.today, Validators.compose([Validators.required])),
      endLocation: new FormControl('', Validators.compose([Validators.required])),
      endOdometer: new FormControl('', Validators.compose([Validators.required])),
      incamp: new FormControl (''),
      driveComments: new FormControl('', Validators.compose([Validators.required])),
    });

  //  this.updateStatus = false;
  //  this.isDisabled = false;

    // get the drive the user selected
    this.drive = this.database.current.drive_to_edit;
    if (this.drive != null) {
      console.log('In add drive page: drive id:' + this.drive.id);
    }
    // Has gotten the info so reset drive_to_edit
    this.database.current.drive_to_edit = null;

    /* if user did not select any drive, ie user clicked on fab button,
        check if there is an incompleted drive
     */
    if (this.drive == null) {
      this.drive = this.database.current.drive_in_progress;
    }
    if (this.drive) {
      console.log('drive status: ' + this.drive.status);
      console.log('is commander: ' + this.database.current.user.is_commander);
    }
    if (this.drive == null) { // start a new drive
      this.startDriveControls();
      this.updateStatus = false;
      this.isDisabled = false;
      this.showStatus = false;
    } else {  // retrieving an existing drive
      if (this.drive.status === 'pending' || this.drive.status === 'in-progress') {
        // view only
        console.log('viewing a drive');
        this.updateStatus = false;
        this.showStatus = true;
        this.viewDriveControls();
      } else if (this.drive.status === 'in-progress' && !this.database.current.user.is_commander) {
        // driver enter details to complete drive
        console.log('completing an in-progress drive - driver');
        this.updateStatus = false;
        this.isDisabled = false;
        this.showStatus = false;
        this.endDriveControls();
      }
    }
  }

  viewDriveControls()
  {
    this.addDriveForm.disable();
 //   this.isDisabled = this.addDriveForm.disabled;
    console.log('form is disabled? ' + this.isDisabled);
    console.log('update status? ' + this.updateStatus);
    this.setStartDriveDetails();
    this.endDriveControls();
    }

  startDriveControls() {
    this.addDriveForm.get('date').setValue(this.today);
    this.addDriveForm.get('startTime').setValue(this.today);
    // clear validators for end drive controls
  }

  endDriveControls() {
    console.log('incomplete drive exist');
    this.setStartDriveDetails();
    // set end Time to current time
    const time2 = dayjs(new Date(this.today)).format('HH:mm');
    this.addDriveForm.get('endTime').setValue(time2);
    this.addDriveForm.get('driveComments').enable();
    this.addDriveForm.get('endLocation').enable();
  }

  setStartDriveDetails() {
    // Stage-1 details
    // populate values of start drive fields
    this.addDriveForm.get('date').setValue(this.drive.date);
    this.addDriveForm.get('vehicleNumber').setValue(this.drive.vehicle.toUpperCase());
    this.addDriveForm.get('vehicleType').setValue(this.drive.vehicle_type);
    this.addDriveForm.get('vehicleCommander').setValue(this.drive.commander);
    this.addDriveForm.get('startLocation').setValue(this.drive.start_location.toUpperCase());
    this.addDriveForm.get('startTime').setValue(this.drive.start_time);
    this.addDriveForm.get('incamp').setValue(this.drive.incamp);
    console.log('start time: ' + this.addDriveForm.value.startTime);
  }

  async addDrive(value) {
      var new_report = {
          created: this.database.getTimeStamp(),
          driver: this.database.current.user.email,
          status: "in-progress",
          vehicle_number: this.drive.vehicle,
          vehicle_type: this.drive.vehicle_type,
          commander: this.drive.commander,
          date: (this.addDriveForm.value.date).split('T')[0],
          start_location: this.drive.start_location,
          start_time: this.drive.start_time,
          fleet: this.database.current.user.fleet,
          company: this.database.current.user.company,
          incamp: this.addDriveForm.value.incamp,
          incident_location: this.addDriveForm.value.endLocation,
          description: this.addDriveForm.value.driveComments,
          incident_coordinates: this.database.current.user.location,
        };
      await this.database.write('vehiclebreakdown', this.drive.id, new_report);
      this.successMessage = 'Your report has been sent.';
      this.showToast(this.successMessage);
      this.navCtrl.pop();
  }

  showToast(msg) {
    this.toastController.create({
      message: msg,
      duration: 2000,
      //  showCloseButton: true,
      //  closeButtonText: 'OK',
      position: 'middle'
    }).then((obj) => {
      obj.present();
    });
  }

  onCancel() {
    this.navCtrl.pop();
  }

  showSubmit() {
    if (!this.isDisabled) { return true; }
    return false;
  }
}
