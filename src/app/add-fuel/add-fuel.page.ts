import { Component, OnInit, wtfStartTimeRange } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DatabaseService, Fuel, VehicleTypes } from '../services/database.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs'; // Datetime utility, See http://zetcode.com/javascript/dayjs/

@Component({
  selector: 'app-add-fuel',
  templateUrl: './add-fuel.page.html',
  styleUrls: ['./add-fuel.page.scss'],
})

export class AddFuelPage implements OnInit {

  addFuelForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  toast: any;
  today = new Date().toISOString();
  fuel: Fuel;
  updateStatus;


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
    location: [
      { type: 'required', message: 'Enter starting location' },
    ],
    time: [
      { type: 'required', message: 'Enter current time' },
    ],
    FuelTopUp: [
      { type: 'required', message: 'Enter FuelTopUp value' },
    ],
  };

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public database: DatabaseService,
    public route: ActivatedRoute
  ) { }

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
    // Create form group of controls
    this.addFuelForm = this.formBuilder.group({
      date: new FormControl(this.today, Validators.compose([Validators.required])),
      vehicleNumber: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required])),
      vehicleType: new FormControl('', Validators.compose([Validators.required])),
      location: new FormControl('', Validators.compose([Validators.required])),
      time: new FormControl(this.today, Validators.compose([Validators.required])),
      FuelType: new FormControl('', Validators.compose([Validators.required])),
      FuelTopUp: new FormControl('', Validators.compose([Validators.required])),
    });
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

  getfueltype() {
    if (this.addFuelForm.value.vehicleType == "OUV" || this.addFuelForm.value.vehicleType == "5TON") {
      return "diesel" }
    else if (this.addFuelForm.value.vehicleType != "") {
      return "petrol" }
  }

  async addFuel(value)
  {
    if (this.fuel == null)
    {
      try {
        const time2 = dayjs(new Date(this.addFuelForm.value.time)).format('HH:mm');
        var new_fuel: Fuel =
        {
          created: this.database.getTimeStamp(),
          driver: this.database.current.user.email,
          // Stage-1 details
          vehicle: this.addFuelForm.value.vehicleNumber,
          vehicle_type: this.addFuelForm.value.vehicleType,
          date: (this.addFuelForm.value.date).split('T')[0],
          location: this.addFuelForm.value.location,
          time: time2,
          fleet: this.database.current.user.fleet,
          company: this.database.current.user.company,
          FuelTopUp: this.addFuelForm.value.FuelTopUp,
        };
        let subAutoID = this.database.collection('fuel').doc().id;
        new_fuel.id = subAutoID
        console.log('new_fuel=${JSON.stringify(new_fuel)}');
        await this.database.write('fuel', new_fuel.id, new_fuel);
        this.errorMessage = '';
        this.successMessage = 'Your Fuel has been added.';

        this.showToast(this.successMessage);
        this.navCtrl.pop();
      } catch (err) {

        this.errorMessage = `Add Fuel error: ${err}`;
        this.successMessage = '';

        this.showToast(this.errorMessage);
        this.navCtrl.pop();
      }
    }
  }
}
