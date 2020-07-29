import { Component, OnInit, wtfStartTimeRange } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DatabaseService, Drive, VehicleTypes, Mtrac } from '../services/database.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs'; // DateTime utility, See http://zetcode.com/javascript/dayjs/

@Component({
  selector: 'app-add-drive',
  templateUrl: './add-drive.page.html',
  styleUrls: ['./add-drive.page.scss'],
})

export class AddDrivePage implements OnInit {

  addDriveForm: FormGroup;
  endDriveForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  toast: any;
  today = new Date().toISOString();
  drive;
  updateStatus;
  showStatus = true;ƒ
  isToggled = false;
  isDisabled;
  mtrac;

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
    startLocation: [
      { type: 'required', message: 'Enter starting location' },
    ],
    startOdometer: [
      { type: 'required', message: 'Enter current Odometer value' },
    ],
    startTime: [
      { type: 'required', message: 'Enter current Time' },
    ],
    endLocation: [
      { type: 'required', message: 'Enter final location' },
    ],
    endOdometer: [
      { type: 'required', message: 'Enter final Odometer value' },
    ],
    endTime: [
      { type: 'required', message: 'Enter final Time' },
    ],
    fuelLevel: [
      { type: 'required', message: 'Indicate final fuel level' },
    ]
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
  // prevent user from selecting vehicle types that they are not current in - 10 days?
  public getapprovedvtypes(): Array<{text:string, ready: boolean}>[] {
        var vtypes =  VehicleTypes

        var driven = Object.keys(this.database.current.stats.most_recent_drive_by_vehicle_type);

        var canDrive = [];

        console.log(canDrive);

        driven.forEach((value) => {
          // check license 
          if (value == 'MSS') {
            if (this.database.current.user.mss_certified == false){
              console.log("No license")
              canDrive.push({text: value + " - NO LICENSE", ready: false})
            }
          }
          else if (value == 'FLB') {
            if (this.database.current.user.flb_certified == false){
              console.log("No license")
              canDrive.push({text: value + " - NO LICENSE", ready: false})
            }
          }
          else if (value == 'BELREX') {
            if (this.database.current.user.belrex_certified == false){
              console.log("No license")
              canDrive.push({text: value + " - NO LICENSE", ready: false})
            }
          }

          // check currency / JIT test
          var daysLastDriven = this.calculateDiff(this.database.current.stats.most_recent_drive_by_vehicle_type[value].$d);
          if (daysLastDriven <= 10){ // || this.database.current.stats.JIT==true){
              console.log("Current")
              canDrive.push({text: value, ready: true});
          }
          else {
            console.log("Not current")
            canDrive.push({text: value + " - NOT CURRENT", ready: false});         
          }
        });
/*
            if (value == 'MSS') {
                if (this.database.current.user.mss_certified == true 
                  canDrive = canDrive.filter( vtype => vtype == 'MSS');
                }
            }

            else if (value == 'FLB') {
                if (this.database.current.user.flb_certified != true || this.calculateDiff(this.database.current.stats.most_recent_drive_by_vehicle_type['FLB'].date) < 10) {
                  canDrive = canDrive.filter( vtype => vtype == 'FLB');
                }
            }
            else if (value == 'BELREX') {
                if (this.database.current.user.belrex_certified != true || this.calculateDiff(this.database.current.stats.most_recent_drive_by_vehicle_type['BELREX'].date) <    10) {
                  canDrive = canDrive.filter( vtype => vtype == 'BELREX');
                }
            }
        });*/

        console.log(canDrive)
        return canDrive;
  }

  calculateDiff(dateSent){
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
    }

  checkOperatorCurrencyValid(date:any){
    const today = dayjs();
    var period = 10;
    return today.diff(date,"day") < period ;
  }

  ngOnInit() {
    // Create form group of controls
    this.addDriveForm = this.formBuilder.group({
      date: new FormControl(this.today, Validators.compose([Validators.required])),
      vehicleNumber: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required])),
      vehicleType: new FormControl('', Validators.compose([Validators.required])),
      vehicleCommander: new FormControl('', Validators.compose([Validators.required])),
      startLocation: new FormControl('', Validators.compose([Validators.required])),
      startOdometer: new FormControl('', Validators.compose([Validators.required])),
      startTime: new FormControl(this.today, Validators.compose([Validators.required])),
      endLocation: new FormControl('', Validators.compose([Validators.required])),
      endOdometer: new FormControl('', Validators.compose([Validators.required])),
      endTime: new FormControl('', Validators.compose([Validators.required])),
      maintenance: new FormControl(''),
      fuelLevel: new FormControl('', Validators.compose([Validators.required])),
      driveComments: new FormControl(''),
      driveStatus: new FormControl(''),
      radioVerify: new FormControl({ value: '', disabled: true }),
      radioReject: new FormControl({ value: '', disabled: true }),
      incamp: new FormControl ('')
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
    if (this.drive != null) {
      console.log('drive status: ' + this.drive.status);
      console.log('is commander: ' + this.database.current.user.is_commander);
    }
    if (this.drive == null) { // start a new drive
      this.mtrac = this.database.current.mtrac_to_edit;
      this.startDriveControls();
      this.updateStatus = false;
      this.isDisabled = false;
      this.showStatus = false;
    } else {  // retrieving an existing drive
      if (this.drive.driver != this.database.current.user.email && this.database.current.user.is_admin) {
        console.log('editing drive info - admin user');
        this.editDriveControls();
        this.updateStatus = true;
        this.showStatus = true;
        this.isDisabled = false;
      } else if
      (this.drive.status === 'pending' || this.drive.status === 'verified' || ((this.drive.status === 'in-progress' || this.drive.status === 'rejected') && this.drive.commander == this.database.current.user.email)) {
        // view only
        console.log('viewing a drive');
        this.updateStatus = false;
        this.showStatus = true;
        this.isDisabled = true;
        this.viewDriveControls();
      } else if (this.drive.status === 'in-progress' && this.drive.driver == this.database.current.user.email) {
        // driver enter details to complete drive
        console.log('completing an in-progress drive - driver');
        this.updateStatus = false;
        this.isDisabled = false;
        this.showStatus = false;
        this.endDriveControls();
      } else if ((this.drive.status === 'rejected' && this.drive.driver == this.database.current.user.email)) {
        console.log('editing rejected drive info - driver')
        // driver edit details for rejected drive
        this.updateStatus = false;
        this.showStatus = true;
        this.isDisabled = false;
        this.editDriveControls();
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
    this.setEndDriveDetails();
    this.setDriveStatusControls();

    // if commander and drive status is pending, add verified and reject controls
    // else display ok button
    if (this.drive.commander == this.database.current.user.email && this.drive.status === 'pending') {
      console.log('commander need to approve/reject drive');
      this.updateStatus = true;
      this.addDriveForm.get('driveStatus').setValidators(Validators.required);
      this.addDriveForm.get('radioVerify').enable();
      this.addDriveForm.get('radioReject').enable();
    }
   }

  startDriveControls() {
    this.addDriveForm.get('date').setValue(this.today);
    this.addDriveForm.get('startTime').setValue(this.today);
    this.addDriveForm.get('incamp').setValue(this.mtrac.incamp);
    this.addDriveForm.get('vehicleNumber').setValue(this.mtrac.vehicleNumber);
    this.addDriveForm.get('vehicleCommander').setValue(this.mtrac.commander);
    this.addDriveForm.get('startLocation').setValue(this.mtrac.startLocation);
    // clear validators for end drive controls
    this.addDriveForm.get('endLocation').clearValidators();
    this.addDriveForm.get('endOdometer').clearValidators();
    this.addDriveForm.get('endTime').clearValidators();
    this.addDriveForm.get('fuelLevel').clearValidators();
  }

  endDriveControls() {
    console.log('incomplete drive exist');
    this.setStartDriveDetails();
    // set end Time to current time
    const time2 = dayjs(new Date(this.today)).format('HH:mm');
    this.addDriveForm.get('endTime').setValue(time2);
  }

  editDriveControls() {
    this.addDriveForm.reset();
    this.setStartDriveDetails();
    this.setEndDriveDetails();
    this.setDriveStatusControls();
  }

  setStartDriveDetails() {
    // Stage-1 details
    // populate values of start drive fields
    this.addDriveForm.get('date').setValue(this.drive.date);
    this.addDriveForm.get('vehicleNumber').setValue(this.drive.vehicle.toUpperCase());
    this.addDriveForm.get('vehicleType').setValue(this.drive.vehicle_type);
    this.addDriveForm.get('vehicleCommander').setValue(this.drive.commander);
    this.addDriveForm.get('startLocation').setValue(this.drive.start_location.toUpperCase());
    this.addDriveForm.get('startOdometer').setValue(this.drive.start_odometer);
    this.addDriveForm.get('startTime').setValue(this.drive.start_time);
    this.addDriveForm.get('incamp').setValue(this.drive.incamp);
    console.log('start time: ' + this.addDriveForm.value.startTime);
  }

  setEndDriveDetails() {
    // Stage-2 details
    // populate values of end drive fields
    this.addDriveForm.get('endLocation').setValue(this.drive.end_location.toUpperCase());
    this.addDriveForm.get('endOdometer').setValue(this.drive.end_odometer);
    this.addDriveForm.get('endTime').setValue(this.drive.end_time);
    console.log('end time: ' +   this.addDriveForm.value.endTime);
    this.addDriveForm.get('fuelLevel').setValue(this.drive.fuel_level);
    this.addDriveForm.get('driveComments').setValue(this.drive.comments.toUpperCase());
    // set the maintenance toggle to check
    this.isToggled = this.drive.is_maintenance;
  }

  setDriveStatusControls() {
    if (this.showStatus) {
      this.addDriveForm.get('driveStatus').setValue(this.drive.status);
      console.log(this.addDriveForm.get('driveStatus').value);
    }
  }

  async endDrive(value) {
    // added this check as end drive details can be saved despite missing info.
    // check if all mandatory fields are entered
    if (!this.addDriveForm.valid) {
      this.errorMessage = 'Drive cannot be updated... missing end drive information.';
      this.showToast(this.errorMessage);
      console.log(this.errorMessage);
      return;
    }
    if (this.drive.commander != this.database.current.user.email)
    {try {
      const currentDrive = this.database.current.drive_history[0];

      // Stage 1 details : the user may made some changes to these info
      currentDrive.vehicle = this.addDriveForm.value.vehicleNumber.toUpperCase();
      currentDrive.vehicle_type = this.addDriveForm.value.vehicleType;
      currentDrive.commander =  this.addDriveForm.value.vehicleCommander;
      currentDrive.date = (this.addDriveForm.value.date).split('T')[0];
      currentDrive.start_location = this.addDriveForm.value.startLocation.toUpperCase();
      currentDrive.start_odometer = parseInt(this.addDriveForm.value.startOdometer);
      currentDrive.start_time = this.addDriveForm.value.startTime;
      currentDrive.fleet = this.database.current.user.fleet;
      currentDrive.company = this.database.current.user.company;
      currentDrive.incamp = this.addDriveForm.value.incamp;
      // Stage 2 details
      currentDrive.end_location = this.addDriveForm.value.endLocation;
      currentDrive.end_odometer = parseInt(this.addDriveForm.value.endOdometer);
     // const time2 = dayjs(new Date(this.addDriveForm.value.endTime)).format('HH:mm');
      currentDrive.end_time = this.addDriveForm.value.endTime;
      // store the maintenance toggle checked value in the drive document
      currentDrive.is_maintenance = this.isToggled;
      currentDrive.fuel_level = parseInt(this.addDriveForm.value.fuelLevel);
      console.log('Fuel level (UI): ' + currentDrive.fuel_level);

      currentDrive.comments = this.addDriveForm.value.driveComments;
      currentDrive.status = 'pending';
      await this.database.write('drive', currentDrive.id, currentDrive);
      this.errorMessage = '';
      this.successMessage = 'Your drive has been updated.';
      this.showToast(this.successMessage);
    } catch (err) {
      console.log(err);
      this.errorMessage = 'Update drive error: ${err}';
      this.successMessage = '';

      this.showToast(this.errorMessage);
    }}
  }

  async addDrive(value) {
    console.log('is Commander: ' + this.database.current.user.is_commander);
    if (this.drive!=null) {
      if (this.drive.commander == this.database.current.user.email) {
        // commander has verified/rejected drive, update drive status.
        this.drive.status = this.addDriveForm.get('driveStatus').value;
        console.log('Drive status: ' + this.drive.status);
        // update status in database
        await this.database.write('drive', this.drive.id, this.drive);
        this.errorMessage = '';
        this.successMessage = 'The drive status has been updated successfully.';
        this.showToast(this.successMessage);
        }

      else if (this.database.current.drive_in_progress != null || this.drive != null) {
        // the submit is to complete the drive information
        console.log('Updating start and end drive details...');
        this.endDrive(value);
    }
    } else { // the submit is to capture start drive information
      try {
        this.mtrac = this.database.current.mtrac_to_edit;
        const time = dayjs(new Date(this.addDriveForm.value.startTime)).format('HH:mm');
        var new_drive: Drive = {
          created: this.database.getTimeStamp(),
          driver: this.database.current.user.email,
          status: "in-progress",

          // Stage-1 details
          vehicle: this.addDriveForm.value.vehicleNumber.toUpperCase(),
          vehicle_type: this.addDriveForm.value.vehicleType,
          commander: this.addDriveForm.value.vehicleCommander,
          date: (this.addDriveForm.value.date).split('T')[0],
          start_location: this.addDriveForm.value.startLocation.toUpperCase(),
          start_odometer: parseInt(this.addDriveForm.value.startOdometer),
          start_time: time,
          fleet: this.database.current.user.fleet,
          company: this.database.current.user.company,
          incamp: this.addDriveForm.value.incamp,

        };
        console.log('new_drive=${JSON.stringify(new_drive)}');
        await this.database.write('drive', this.mtrac.id, new_drive);
        this.mtrac.status = "completed";
        await this.database.write('mtrac', this.mtrac.id, this.mtrac);

        this.errorMessage = '';
        this.successMessage = 'Your drive has been added.';

        this.showToast(this.successMessage);

      } catch (err) {

        this.errorMessage = `Add drive error: ${err}`;
        this.successMessage = '';
        console.log(this.errorMessage);
        console.log(this.addDriveForm.value.startLocation);
        this.showToast(this.errorMessage);
        //this.navCtrl.pop();
      }
    }
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

  onToggle() {
    //console.log("initial state - toggled: " + this.isToggled);
    if (this.isToggled) { this.isToggled = false; } else { this.isToggled = true; }
    //console.log("final state - toggled: " + this.isToggled);
  }

  showSubmit() {
    if (this.updateStatus || !this.isDisabled) { return true; }
    return false;
  }
}
