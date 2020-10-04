import { Component, OnInit, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { DatabaseService, User, Drive, VehicleTypes, Mtrac } from '../../services/database.service';
import { Chart } from "chart.js";
import { PipesModule } from '../../pipes/pipes.module';
import * as dayjs from 'dayjs';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-commander',
  templateUrl: './commander.page.html',
  styleUrls: ['./commander.page.scss'],
})

export class CommanderPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    public database: DatabaseService,
    private platform: Platform,
    private geolocation: Geolocation,
    public toastController: ToastController, ) { }

  drivestatus = 9 > 10;
  mileagestatus = 9 > 10;
  otherstatus = 9 > 10;
  drivereditstatus = 9 > 10;
  successMessage = '';
  errorMessage = '';

  ngOnInit() {
  }

  public editDriver(driver: string) : User[] {
    var drivr = this.database.current.all_drivers_of_commander;
    drivr = drivr.filter( (drvr) => drvr.email == driver);
    this.drivereditstatus = !this.drivereditstatus;
    return drivr;
  }

  public showEdit() {
    return this.drivereditstatus = !this.drivereditstatus;
  }

  public getDrvr(driver: string) : User[] {
    var drivr = this.database.current.all_drivers_of_commander;
    return drivr.filter( (drvr) => drvr.email == driver);
  }

  public getDrivers() : User[] {
    var drivers = this.database.current.all_drivers_of_commander;
    var drvrs = (<HTMLInputElement>document.getElementById("driverlist")).value;
    if (drvrs != "ALL") {
      return drivers.filter( (driver) => driver.email == drvrs);
    }
    return drivers
  }

  public getDriver() : User {
    var driver = this.database.current.all_drivers_of_commander;
    var drvrs = (<HTMLInputElement>document.getElementById("driverlist")).value;
    return driver.filter( (driver) => driver.email == drvrs)[0];
  }

  async updateCertfication(driver: any) {
    //console.log(driver);
    var mssc = (<HTMLInputElement>document.getElementById("mss")).value.toLowerCase() === 'true';
    var flbc = (<HTMLInputElement>document.getElementById("flb")).value.toLowerCase() === 'true';
    var belrexc = (<HTMLInputElement>document.getElementById("belrex")).value.toLowerCase() === 'true';
    var m3gc = (<HTMLInputElement>document.getElementById("m3g")).value.toLowerCase() === 'true';
    driver.mss_certified = mssc;
    driver.flb_certified = flbc;
    driver.belrex_certified = belrexc;
    driver.m3g_certified = m3gc;
    try {
      await this.database.write('user',driver.email,driver);
      this.drivereditstatus = !this.drivereditstatus;
      this.successMessage = 'the driver account has been updated.';
      this.showToast(this.successMessage);
    } catch(err) {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = '';
    }
  }

  public checkAll() {
    var drivers = (<HTMLInputElement>document.getElementById("driverlist")).value;
     if (this.database.current.user.is_admin == true)
    { return drivers == "ALL"; }
    return true;
  }


  showToast(msg) {
    this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    }).then((obj) => {
      obj.present();
    });
  }

  public checkEditDriverStatus() {
    if (this.database.current.user.is_admin == true)
    {
      return this.drivereditstatus;
    }
    return false;
  }
  
  public checkOperatorCurrencyValid(vehicletype:string, date:any){
    const today = dayjs();
    var period =  8;
    return today.diff(date,"day") < period ;
  }

  public checkOperatorCurrencyInvalid(vehicletype:string, date:any){
    const today = dayjs();
    var period = 8;
    return today.diff(date,"day") > period ;
  }

  public showdrives(){
    this.drivestatus = !this.drivestatus;
  }

  public checkDriveStatus(){
    return this.drivestatus;
  }

  public showmileage(){
    this.mileagestatus = !this.mileagestatus;
  }

  public checkMileageStatus(){
    return this.mileagestatus;
  }

  public showother(){
    this.otherstatus = !this.otherstatus;
  }

  public checkOtherStatus(){
    return this.otherstatus;
  }

  public getMileagebyVehicleType(data: any,vehicle: any) {
    for (var type of VehicleTypes) {
      if (type == vehicle) {
        if (data[type] != null) {
          return data[type] + " km";
        }
      }
    }
  }

  public getDrivesbyVehicleType(vehicle: any, drvr: any) {
    for (var type of VehicleTypes) {
      var drv = 0
      if (type == vehicle){
        var dhis = this.database.current.drive_history.filter( (drive) => { return drive.driver === drvr.email });
        for (let trip of dhis) {
          if (trip.vehicle_type == vehicle) {
            drv += 1;
          }
        }
      return drv;
      }
    }
  }

  public getPendingDrives() : Drive[] {
    return this.database.current.drive_history.filter( (drive) => { if (this.database.current.user.email === drive.commander) {
      return drive.status === 'pending';}
    });
  }

  public getPendingMTRAC() : Mtrac[] {
    return this.database.current.mtrac_history.filter( (form) => { if (this.database.current.user.email === form.commander) {
      return form.status === 'pending';}
    });
  }

  public getDriverName(driver: string) {
    for (let d of this.database.current.all_drivers_of_commander){
      if (d.email == driver) {
        console.log(d.name);
        return d.name;
      }
    }
  }

  public getApprovedDrives() : Drive[] {
    return this.database.current.drive_history.filter( (drive) => {
      return drive.status === 'verified';
    });
  }

  public checkTimelefttoJIT(date: any) {
    const today = dayjs();
    var period = 8;
    var left = period - today.diff(date,"day");
    if (left < 0){
      return false };
    return true;
  }

  public getTimelefttoJIT(date:any ) {
    const today = dayjs();
    var period = 7*24*60*60;
    var left = period - today.diff(date,"s");
    return left;
  }

  public click(drive: Drive): void {
    this.database.current.drive_to_edit = drive;
    console.log(`> Navigating to AddDrivePage for drive id=${drive.id}`);
    this.navCtrl.navigateForward(['/add-drive']);
  }

 public clickmtrac(form: Mtrac): void {
    this.database.current.mtrac_to_edit = form;
    console.log(`> Navigating to mtracPage for mtrac id=${form.id}`);
    if (form.is_jit == true){
      this.navCtrl.navigateForward(['/jitmtrac']);
    }
    else {
      this.navCtrl.navigateForward(['/mtrac']);
    }
  }

/*//  public click1(driver: User): void {
    for (let user of this.database.current.all_drivers_of_commander) {
      driver = user
      console.log(`> Navigating to History for email=${driver.email}`)
      this.navCtrl.navigateForward(['/history'])
    };
  }*/

}
