import { Component, OnInit, wtfStartTimeRange } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DatabaseService, VehicleTypes, Mtrac } from '../services/database.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs'; // Datetime utility, See http://zetcode.com/javascript/dayjs/

@Component({
  selector: 'app-mtrac',
  templateUrl: './jitmtrac.page.html',
  styleUrls: ['./jitmtrac.page.scss'],
})

export class jitmtracPage implements OnInit {

  mtracForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  toast: any;
  today = new Date().toISOString();
  updateStatus;
  checkboxstatus = false;
  mtrac;
  driver = "";
  commander = "";

  validationMessages = {
    vehicleNumber: [
        { type: 'required', message: 'Vehicle Number is required.' },
        { type: 'minlength', message: 'Vehicle number must be at least 5 characters long.' }],
    vehicleType: [
        { type: 'required', message: 'Select a type of vehicle' },],
    licenseType: [
        { type: 'required', message: 'choose license type' },],
    rest: [
        { type: 'required', message: 'choose rest' },],
    health: [
        { type: 'required', message: 'choose health' },],
    weather: [
        { type: 'required', message: 'choose weather' },],
    route: [
        { type: 'required', message: 'choose route' },],
    detailType: [
        { type: 'required', message: 'choose detail type' },],
    vehicleServiceability: [
        { type: 'required', message: 'choose vehicle serviceability' },],
    startLocation: [
        { type: 'required', message: 'enter start location' },],
    endLocation: [
        { type: 'required', message: 'enter end location' },],
    incamp: [
        { type: 'required', message: 'select drive area' },],
};

  public licenseTypes = [{value:"L",text:"CAT A, B"},{value:"M",text:"CAT C"},{value:"H",text:"CAT D"},{value:"N",text:"Have never been trained and familiarized in the vehicle that you will be driving"}] 
  public selectedLicense;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public database: DatabaseService,
    public route: ActivatedRoute
  ) {
      // Autoselect correct license
      this.selectLicenseType();
      console.log(this.selectedLicense)
      this.mtrac = this.database.current.mtrac_to_edit;
  }

  checklistcmd = [
    {listID: 1, name:"To be responsible for the discipline and safety of all passengers/crew in the assigned transport detail."},
    {listID: 2, name:"To assist to look out for obstruction, hazard or danger. If the driver is reversing, there is no requirement for the vehiucle commander to guide the driver. However, VC should render assistance to the driver when requested."},
    {listID: 3, name:"Go through intended route with the driver."},
    {listID: 4, name:"If unsure of route or lost, to instruct the driver to stop the vehicle at a safe place to re-orientate or seek further instructions."},
    {listID: 5, name:"If involved in an accident, to inform unit about the accident and assit the driver to manage the accident."},
    {listID: 6, name:"To check and endorse the MT-RAC."},
    ];

  public getapprovedvtypes(): Array<{text:string, ready: boolean}>[] {
    var vtypes =  VehicleTypes

    var driven = Object.keys(this.database.current.stats.most_recent_drive_by_vehicle_type);

    var canDrive = [];

    //console.log(canDrive);

    driven.forEach((value) => {
      // check license 
      if (value == 'MSS') {
        if (this.database.current.user.mss_certified == false){
          canDrive.push({text: value + " - NO LICENSE", ready: false})
        }
      }
      else if (value == 'FLB') {
        if (this.database.current.user.flb_certified == false){
          canDrive.push({text: value + " - NO LICENSE", ready: false})
        }
      }
      else if (value == 'BELREX') {
        if (this.database.current.user.belrex_certified == false){
          canDrive.push({text: value + " - NO LICENSE", ready: false})
        }
      }

      // check currency / JIT test
      var daysLastDriven = this.calculateDiff(this.database.current.stats.most_recent_drive_by_vehicle_type[value].$d);
      if (daysLastDriven <= 100){ // || this.database.current.stats.JIT==true){
          canDrive.push({text: value, ready: true});
      }
      else {
        canDrive.push({text: value, ready: true});         
      }
    });

    //console.log(canDrive)
    return canDrive;
  }

  calculateDiff(dateSent){
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
  }

  public selectLicenseType() {
    // Autofill Driving Experience License Type based on Cat status from driver's licensetype
    this.mtrac = this.database.current.mtrac_to_edit;
    if (this.mtrac != null) {
      console.log(this.database.current.user.licence_type)
      if (this.database.current.user.email == this.mtrac.driver){
        if (this.database.current.user.licence_type == "A" || this.database.current.user.licence_type == "B"){
          this.selectedLicense = this.licenseTypes[0].value
        } 
        else if (this.database.current.user.licence_type == "C"){
          this.selectedLicense = this.licenseTypes[1].value
        } 
        else if (this.database.current.user.licence_type == "D"){
          this.selectedLicense = this.licenseTypes[2].value
        } 
        else{
          this.selectedLicense = this.licenseTypes[3].value
        }
      }
    }
    else {
      if (this.database.current.user.licence_type == "A" || this.database.current.user.licence_type == "B"){
        this.selectedLicense = this.licenseTypes[0].value
      } 
      else if (this.database.current.user.licence_type == "C"){
        this.selectedLicense = this.licenseTypes[1].value
      } 
      else if (this.database.current.user.licence_type == "D"){
        this.selectedLicense = this.licenseTypes[2].value
      } 
      else{
        this.selectedLicense = this.licenseTypes[3].value
      }
    }
  }

  ngOnInit() {
      this.mtracForm = this.formBuilder.group({
        vehicleNumber: new FormControl('', Validators.compose([Validators.minLength(5), Validators.required])),
        licenseType: new FormControl('', Validators.compose([Validators.required])),
        vehicleType: new FormControl('', Validators.compose([Validators.required])),
        vehicleType2: new FormControl('', Validators.compose([Validators.required])),
        rest: new FormControl('', Validators.compose([Validators.required])),
        health: new FormControl('', Validators.compose([Validators.required])),
        weather: new FormControl('', Validators.compose([Validators.required])),
        route: new FormControl('', Validators.compose([Validators.required])),
        detailType: new FormControl('L', Validators.compose([Validators.required])),
        vc: new FormControl(''),
        vehicleServiceability: new FormControl('', Validators.compose([Validators.required])),
        incamp: new FormControl('true', Validators.compose([Validators.required])),
        startLocation: new FormControl('JIT', Validators.compose([Validators.required])),
        endLocation: new FormControl('JIT', Validators.compose([Validators.required])),
        commander: new FormControl('', Validators.compose([Validators.required])),

        cmdlicense: new FormControl({value: false, disabled: true }),
        cmdspeedlimit: new FormControl({value: false, disabled: true }),
        cmddanger: new FormControl({value: false, disabled: true }),
        cmdreverse: new FormControl({value: false, disabled: true }),
        seatbeltcommander: new FormControl({value: false, disabled: true }),
        seatingcommander: new FormControl({value: false, disabled: true }),
        safetystrapcommander: new FormControl({value: false, disabled: true }),
        smokingcommander: new FormControl({value: false, disabled: true }),
        loadcommander: new FormControl({value: false, disabled: true }),
        seatbelttroopscommander: new FormControl({value: false, disabled: true }),
        accidentcommander: new FormControl({value: false, disabled: true }),
        mtraccompletecommander: new FormControl({value: false, disabled: true }),
        cmdchecklistcomplete: new FormControl({value: false, disabled: true }),
        commandermtrac: new FormControl({value: false, disabled: true }),

        seatbeltdriver: new FormControl(false, Validators.compose([Validators.requiredTrue])),
        seatingdriver: new FormControl(false, Validators.compose([Validators.requiredTrue])),
        safetystrapdriver: new FormControl(false),
        smokingdriver: new FormControl(false, Validators.compose([Validators.requiredTrue])),
        loaddriver: new FormControl(false, Validators.compose([Validators.requiredTrue])),
        seatbelttroopsdriver: new FormControl(false, Validators.compose([Validators.requiredTrue])),
        accidentdriver: new FormControl(false, Validators.compose([Validators.requiredTrue])),
        mtraccompletedriver: new FormControl(false, Validators.compose([Validators.requiredTrue])),
        drivermtrac: new FormControl(false, Validators.compose([Validators.requiredTrue])),
    });
    this.mtrac = this.database.current.mtrac_to_edit;
    if (this.mtrac != null)
    {
        if (this.database.current.user.email == this.mtrac.commander && this.mtrac.status === 'pending')
        {
            this.commander = this.mtrac.commander;
            this.setmtracDetails();
            this.mtracForm.disable();

            this.mtracForm.get('cmdlicense').enable();
            this.mtracForm.get('cmdspeedlimit').enable();
            this.mtracForm.get('cmddanger').enable();
            this.mtracForm.get('cmdreverse').enable();
            this.mtracForm.get('seatbeltcommander').enable();
            this.mtracForm.get('seatingcommander').enable();
            this.mtracForm.get('safetystrapcommander').enable();
            this.mtracForm.get('smokingcommander').enable();
            this.mtracForm.get('loadcommander').enable();
            this.mtracForm.get('seatbelttroopscommander').enable();
            this.mtracForm.get('accidentcommander').enable();
            this.mtracForm.get('mtraccompletecommander').enable();
            this.mtracForm.get('cmdchecklistcomplete').enable();
            this.mtracForm.get('commandermtrac').enable();
        }
        else if (this.database.current.user.email == this.mtrac.driver && this.mtrac.status === 'verified')
        {
            this.driver = this.mtrac.driver;
            this.setmtracDetails();
            this.mtracForm.disable();
        }
        else if (this.database.current.user.email == this.mtrac.driver && this.mtrac.status === 'pending')
        {
            this.driver = this.mtrac.driver;
            this.setmtracDetails();
            this.mtracForm.disable();
        }
    }
    else
    {
        this.driver = this.database.current.user.email
    }
  }

  setmtracDetails() {
    // Stage-1 details
    // populate values of start mtrac fields
    this.mtracForm.get('commander').setValue(this.mtrac.commander);
    this.mtracForm.get('vehicleNumber').setValue(this.mtrac.vehicleNumber.toUpperCase());
    this.mtracForm.get('vehicleType').setValue(this.mtrac.vehicle_type);
    this.mtracForm.get('vehicleType2').setValue(this.mtrac.vehicleType2);
    this.mtracForm.get('licenseType').setValue(this.mtrac.licenseType);
    this.mtracForm.get('incamp').setValue(this.mtrac.incamp);
    this.mtracForm.get('rest').setValue(this.mtrac.rest);
    this.mtracForm.get('health').setValue(this.mtrac.health);
    this.mtracForm.get('weather').setValue(this.mtrac.weather);
    this.mtracForm.get('route').setValue(this.mtrac.route);
    this.mtracForm.get('detailType').setValue(this.mtrac.detailType);
    this.mtracForm.get('vc').setValue(this.mtrac.vc);
    this.mtracForm.get('vehicleServiceability').setValue(this.mtrac.vehicleServiceability);
    this.mtracForm.get('startLocation').setValue(this.mtrac.startLocation);
    this.mtracForm.get('endLocation').setValue(this.mtrac.endLocation);

    this.mtracForm.get('cmdlicense').setValue(this.mtrac.cmdlicense);
    this.mtracForm.get('cmdspeedlimit').setValue(this.mtrac.cmdspeedlimit);
    this.mtracForm.get('cmddanger').setValue(this.mtrac.cmddanger);
    this.mtracForm.get('cmdreverse').setValue(this.mtrac.cmdreverse);
    this.mtracForm.get('seatbeltcommander').setValue(this.mtrac.seatbeltcommander);
    this.mtracForm.get('seatingcommander').setValue(this.mtrac.seatingcommander);
    this.mtracForm.get('safetystrapcommander').setValue(this.mtrac.safetystrapcommander);
    this.mtracForm.get('smokingcommander').setValue(this.mtrac.smokingcommander);
    this.mtracForm.get('loadcommander').setValue(this.mtrac.loadcommander);
    this.mtracForm.get('seatbelttroopscommander').setValue(this.mtrac.seatbelttroopscommander);
    this.mtracForm.get('accidentcommander').setValue(this.mtrac.accidentcommander);
    this.mtracForm.get('mtraccompletecommander').setValue(this.mtrac.mtraccompletecommander);
    this.mtracForm.get('cmdchecklistcomplete').setValue(this.mtrac.cmdchecklistcomplete);

    this.mtracForm.get('seatbeltdriver').setValue(this.mtrac.seatbeltdriver);
    this.mtracForm.get('seatingdriver').setValue(this.mtrac.seatingdriver);
    this.mtracForm.get('safetystrapdriver').setValue(this.mtrac.safetystrapdriver);
    this.mtracForm.get('smokingdriver').setValue(this.mtrac.smokingdriver);
    this.mtracForm.get('loaddriver').setValue(this.mtrac.loaddriver);
    this.mtracForm.get('seatbelttroopsdriver').setValue(this.mtrac.seatbelttroopsdriver);
    this.mtracForm.get('accidentdriver').setValue(this.mtrac.accidentdriver);
    this.mtracForm.get('mtraccompletedriver').setValue(this.mtrac.mtraccompletedriver);
    this.mtracForm.get('commandermtrac').setValue(this.mtrac.commandermtrac);
    this.mtracForm.get('drivermtrac').setValue(this.mtrac.drivermtrac);
    }


 

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

  getcdt() {
    var cd = new Date(); // for now
    var cdt = cd.getDate() + "/"
                + (cd.getMonth()+1)  + "/"
                + cd.getFullYear() + " @ "
                + this.timenow();
    return cdt
    }

  timenow() {
    var ct = new Date(); // for now
    var r = "";
    if (ct.getHours() < 10) {
        r += 0;
        r += ct.getHours();
    }
    else {
        r += ct.getHours();
    }
    r += ":";
    if (ct.getMinutes() < 10) {
        r += 0;
        r += ct.getMinutes();
    }
    else {
        r += ct.getMinutes();
    }
    return r;
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

  getoverallrisk() {
    var licenseType = this.mtracForm.get('licenseType').value;
    var vehicleType2 = this.mtracForm.get('vehicleType2').value;
    var rest = this.mtracForm.get('rest').value;
    var health = this.mtracForm.get('health').value;
    var weather = this.mtracForm.get('weather').value;
    var route = this.mtracForm.get('route').value;
    var detailType = this.mtracForm.get('detailType').value;
    var vc = this.mtracForm.get('vc').value;
    var vehicleServiceability = this.mtracForm.get('vehicleServiceability').value;
    if (licenseType=="N" || health=="N" || vc=="N" || vehicleServiceability=="N" || licenseType=="" || health=="" || vehicleServiceability=="") {
        return false;
    }
    else if (licenseType=="H" || vehicleType2=="H" || rest=="H" || health=="H" || weather=="H" || route=="H" || detailType=="H" || vc=="H" || vehicleServiceability=="H") {
        return "HIGH";
    }
    else if (licenseType=="M" || vehicleType2=="M" || rest=="M" || health=="M" || weather=="M" || route=="M" || detailType=="M" || vc=="M" || vehicleServiceability=="M") {
        return "MEDIUM";
    }
    else if (licenseType=="L" || vehicleType2=="L" || rest=="L" || health=="L" || weather=="L" || route=="L" || detailType=="L" || vc=="L" || vehicleServiceability=="L") {
        return "LOW";
    }
  }

  getcmdchecklistcomplete(){
    if (this.mtracForm.get('cmdlicense').value == false ||
    this.mtracForm.get('cmdspeedlimit').value == false ||
    this.mtracForm.get('cmddanger').value == false ||
    this.mtracForm.get('cmdreverse').value == false ||
    this.mtracForm.get('seatbeltcommander').value == false ||
    this.mtracForm.get('seatingcommander').value == false ||
    this.mtracForm.get('safetystrapcommander').value == false ||
    this.mtracForm.get('smokingcommander').value == false ||
    this.mtracForm.get('loadcommander').value == false ||
    this.mtracForm.get('seatbelttroopscommander').value == false ||
    this.mtracForm.get('accidentcommander').value == false ||
    this.mtracForm.get('mtraccompletecommander').value == false ||
    this.mtracForm.get('cmdchecklistcomplete').value == false ||
    this.mtracForm.get('commandermtrac').value == false)
    {
    return false;
    }
    return true;
  }

 getcmdchecklistcomplete2(){
    if (this.mtracForm.get('cmdlicense').value == false ||
    this.mtracForm.get('cmdspeedlimit').value == false ||
    this.mtracForm.get('cmddanger').value == false ||
    this.mtracForm.get('cmdreverse').value == false ||
    this.mtracForm.get('seatbeltcommander').value == false ||
    this.mtracForm.get('seatingcommander').value == false ||
    this.mtracForm.get('safetystrapcommander').value == false ||
    this.mtracForm.get('smokingcommander').value == false ||
    this.mtracForm.get('loadcommander').value == false ||
    this.mtracForm.get('seatbelttroopscommander').value == false ||
    this.mtracForm.get('accidentcommander').value == false ||
    this.mtracForm.get('mtraccompletecommander').value == false ||
    this.mtracForm.get('cmdchecklistcomplete').value == false)
    {
    return false;
    }
    return true;
  }

  getdriverchecklistcomplete(){
    if (this.mtracForm.get('seatbeltdriver').value == false ||
    this.mtracForm.get('seatingdriver').value == false ||
    this.mtracForm.get('safetystrapdriver').value == false ||
    this.mtracForm.get('smokingdriver').value == false ||
    this.mtracForm.get('loaddriver').value == false ||
    this.mtracForm.get('seatbelttroopsdriver').value == false ||
    this.mtracForm.get('accidentdriver').value == false ||
    this.mtracForm.get('mtraccompletedriver').value == false ||
    this.mtracForm.get('drivermtrac').value == false )
    {
    return false;
    }
    return true;
  }

  async addmtrac(value) {
    if (this.mtrac == null)
    {
      try {
        var new_mtrac: Mtrac =
        {
          created: this.database.getTimeStamp(),
          driver: this.database.current.user.email,
          commander: this.mtracForm.value.commander,
          status: "pending",
          is_jit: true,
          // Stage-1 details
          vehicleNumber: this.mtracForm.value.vehicleNumber,
          vehicle_type: this.mtracForm.value.vehicleType,
          startLocation: this.mtracForm.value.startLocation,
          endLocation: this.mtracForm.value.endLocation,
          fleet: this.database.current.user.fleet,
          company: this.database.current.user.company,
          licenseType: this.mtracForm.value.licenseType,
          vehicleType2: this.mtracForm.value.vehicleType2,
          rest: this.mtracForm.value.rest,
          health: this.mtracForm.value.health,
          weather: this.mtracForm.value.weather,
          route: this.mtracForm.value.route,
          detailType: this.mtracForm.value.detailType,
          vc: this.mtracForm.value.vc,
          vehicleServiceability: this.mtracForm.value.vehicleServiceability,
          incamp: this.mtracForm.value.incamp,

          cmdlicense: false,
          cmdspeedlimit: false,
          cmddanger: false,
          cmdreverse: false,
          seatbeltcommander: false,
          seatingcommander: false,
          safetystrapcommander: false,
          smokingcommander: false,
          loadcommander: false,
          seatbelttroopscommander: false,
          accidentcommander: false,
          mtraccompletecommander: false,
          cmdchecklistcomplete: false,

          seatbeltdriver: this.mtracForm.value.seatbeltdriver,
          seatingdriver: this.mtracForm.value.seatingdriver,
          safetystrapdriver: this.mtracForm.value.safetystrapdriver,
          smokingdriver: this.mtracForm.value.smokingdriver,
          loaddriver: this.mtracForm.value.loaddriver,
          seatbelttroopsdriver: this.mtracForm.value.seatbelttroopsdriver,
          accidentdriver: this.mtracForm.value.accidentdriver,
          mtraccompletedriver: this.mtracForm.value.mtraccompletedriver,
          drivermtrac: this.mtracForm.value.drivermtrac,
          commandermtrac: false,
        };
        let subAutoID = this.database.collection('mtrac').doc().id;
        new_mtrac.id = subAutoID
        console.log('new_mtrac=${JSON.stringify(new_mtrac)}');
        await this.database.write('mtrac', new_mtrac.id, new_mtrac);
        this.errorMessage = '';
        this.successMessage = 'Your MT-RAC form has been submitted to your vehicle commander for approval.';
        this.showToast(this.successMessage);
      } catch (err) {

        this.errorMessage = `Add MT-RAC error: ${err}`;
        this.successMessage = '';

        this.showToast(this.errorMessage);
        console.log(this.errorMessage);
        this.navCtrl.pop();
      }
    }
    else if (this.database.current.user.is_commander)
    {
        // commander has verified/rejected drive, update drive status.
        this.mtrac.status = "verified";
        this.mtrac.cmdlicense= this.mtracForm.get('cmdlicense').value;
        this.mtrac.cmdspeedlimit= this.mtracForm.get('cmdspeedlimit').value;
        this.mtrac.cmddanger= this.mtracForm.get('cmddanger').value;
        this.mtrac.cmdreverse= this.mtracForm.get('cmdreverse').value;
        this.mtrac.seatbeltcommander= this.mtracForm.get('seatbeltcommander').value;
        this.mtrac.seatingcommander= this.mtracForm.get('seatingcommander').value;
        this.mtrac.safetystrapcommander= this.mtracForm.get('safetystrapcommander').value;
        this.mtrac.smokingcommander= this.mtracForm.get('smokingcommander').value;
        this.mtrac.loadcommander= this.mtracForm.get('loadcommander').value;
        this.mtrac.seatbelttroopscommander= this.mtracForm.get('seatbelttroopscommander').value;
        this.mtrac.accidentcommander= this.mtracForm.get('accidentcommander').value;
        this.mtrac.mtraccompletecommander= this.mtracForm.get('mtraccompletecommander').value;
        this.mtrac.cmdchecklistcomplete= this.mtracForm.get('cmdchecklistcomplete').value;
        this.mtrac.commandermtrac= this.mtracForm.get('commandermtrac').value;
        // update status in database
        await this.database.write('mtrac', this.mtrac.id, this.mtrac);
        this.errorMessage = '';
        this.successMessage = 'The MT-RAC Form is completed successfully.';
        this.showToast(this.successMessage);
    }
  }
}