"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AddDrivePage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var database_service_1 = require("../services/database.service");
var dayjs = require("dayjs"); // DateTime utility, See http://zetcode.com/javascript/dayjs/
var AddDrivePage = /** @class */ (function () {
    function AddDrivePage(navCtrl, formBuilder, toastController, database, route) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.database = database;
        this.route = route;
        this.errorMessage = '';
        this.successMessage = '';
        this.today = new Date().toISOString();
        this.showStatus = true;
        this.isToggled = false;
        this.validationMessages = {
            date: [
                { type: 'required', message: 'Date is required.' }
            ],
            vehicleNumber: [
                { type: 'required', message: 'Vehicle Number is required.' },
                { type: 'minlength', message: 'Vehicle number must be at least 5 characters long.' }
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
                { type: 'min', message: 'must be equal to or more than start odometer' }
            ],
            endTime: [
                { type: 'required', message: 'Enter final Time' },
                { type: 'min', message: 'must be equal to or more than start time' }
            ],
            fuelLevel: [
                { type: 'required', message: 'Indicate final fuel level' },
            ]
        };
        this.checklistf = [
            { listID: 1, name: "I have completed my JIT training.", ischecked: false },
        ];
        this.checklistt = [
            { listID: 1, name: "I have completed my JIT training.", ischecked: false },
        ];
        this.selectedArray = [];
    }
    AddDrivePage.prototype.gettime = function () {
        var cd = new Date(); // for now
        var nmtmoringstart = new Date();
        nmtmoringstart.setHours(7, 30, 0);
        var nmtmoringend = new Date();
        nmtmoringend.setHours(9, 30, 0);
        var nmtnightstart = new Date();
        nmtnightstart.setHours(17, 30, 0);
        var nmtnightend = new Date();
        nmtnightend.setHours(19, 30, 0);
        if (cd >= nmtmoringstart && cd < nmtmoringend) {
            return false;
        }
        if (cd >= nmtnightstart && cd < nmtnightend) {
            return false;
        }
        return true;
    };
    // prevent user from selecting vehicle types that they are not current in - 10 days?
    AddDrivePage.prototype.getapprovedvtypes = function () {
        var _this = this;
        var vtypes = database_service_1.VehicleTypes;
        //var driven = Object.keys(this.database.current.stats.most_recent_drive_by_vehicle_type);
        var driven = Object.values(database_service_1.VehicleTypes);
        var canDrive = [];
        //console.log(canDrive);
        driven.forEach(function (value) {
            // check license 
            if (value == 'Monster') {
                if (_this.database.current.user.mss_certified == false) {
                    canDrive.push({ text: value + " - NO LICENSE", ready: false });
                }
            }
            else if (value == 'Fly') {
                if (_this.database.current.user.flb_certified == false) {
                    canDrive.push({ text: value + " - NO LICENSE", ready: false });
                }
            }
            else if (value == 'Bunny') {
                if (_this.database.current.user.belrex_certified == false) {
                    canDrive.push({ text: value + " - NO LICENSE", ready: false });
                }
            }
            else {
                canDrive.push({ text: value, ready: true });
            }
        });
        //console.log(canDrive)
        return canDrive;
    };
    AddDrivePage.prototype.calculateDiff = function (dateSent) {
        var currentDate = new Date();
        dateSent = new Date(dateSent);
        return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
    };
    AddDrivePage.prototype.checkOperatorCurrencyValid = function (date) {
        var today = dayjs();
        var period = 10;
        return today.diff(date, "day") < period;
    };
    AddDrivePage.prototype.onChange = function (name) {
        if (this.selectedArray.includes(name)) {
            this.selectedArray = this.selectedArray.filter(function (value) { return value != name; });
        }
        else {
            this.selectedArray.push(name);
        }
    };
    AddDrivePage.prototype.ngOnInit = function () {
        // Create form group of controls
        this.addDriveForm = this.formBuilder.group({
            date: new forms_1.FormControl(this.today, forms_1.Validators.compose([forms_1.Validators.required])),
            vehicleNumber: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.minLength(5), forms_1.Validators.required])),
            vehicleType: new forms_1.FormControl(''),
            vehicleCommander: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            startLocation: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            startOdometer: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            startTime: new forms_1.FormControl(this.today, forms_1.Validators.compose([forms_1.Validators.required])),
            endLocation: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            endOdometer: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            endTime: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            maintenance: new forms_1.FormControl(''),
            fuelLevel: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            driveComments: new forms_1.FormControl(''),
            driveStatus: new forms_1.FormControl(''),
            radioVerify: new forms_1.FormControl({ value: '', disabled: true }),
            radioReject: new forms_1.FormControl({ value: '', disabled: true }),
            incamp: new forms_1.FormControl(''),
            jit_complete: new forms_1.FormControl({ value: false, disabled: false })
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
            this.is_jit = this.mtrac.is_jit;
            this.startDriveControls();
            this.updateStatus = false;
            this.isDisabled = false;
            this.showStatus = false;
        }
        else { // retrieving an existing drive
            if (this.drive.driver != this.database.current.user.email && this.database.current.user.is_admin) {
                console.log('editing drive info - admin user');
                this.editDriveControls();
                this.is_jit = this.drive.is_jit;
                this.updateStatus = true;
                this.showStatus = true;
                this.isDisabled = false;
            }
            else if (this.drive.status === 'pending' || this.drive.status === 'verified' || ((this.drive.status === 'in-progress' || this.drive.status === 'rejected') && this.drive.commander == this.database.current.user.email)) {
                // view only
                console.log('viewing a drive');
                this.is_jit = this.drive.is_jit;
                this.updateStatus = false;
                this.showStatus = true;
                this.isDisabled = true;
                this.viewDriveControls();
            }
            else if (this.drive.status === 'in-progress' && this.drive.driver == this.database.current.user.email) {
                // driver enter details to complete drive
                console.log('completing an in-progress drive - driver');
                this.is_jit = this.drive.is_jit;
                this.updateStatus = false;
                this.isDisabled = false;
                this.showStatus = false;
                this.endDriveControls();
            }
            else if ((this.drive.status === 'rejected' && this.drive.driver == this.database.current.user.email)) {
                console.log('editing rejected drive info - driver');
                this.is_jit = this.drive.is_jit;
                // driver edit details for rejected drive
                this.updateStatus = false;
                this.showStatus = true;
                this.isDisabled = false;
                this.editDriveControls();
            }
        }
    };
    AddDrivePage.prototype.viewDriveControls = function () {
        this.addDriveForm.disable();
        //   this.isDisabled = this.addDriveForm.disabled;
        console.log('form is disabled? ' + this.isDisabled);
        console.log('update status? ' + this.updateStatus);
        this.setStartDriveDetails();
        this.setEndDriveDetails();
        //  this.setDriveStatusControls();
        // if commander and drive status is pending, add verified and reject controls
        // else display ok button
        if (this.drive.commander == this.database.current.user.email && this.drive.status === 'pending') {
            console.log('commander need to approve/reject drive');
            this.updateStatus = true;
            //this.addDriveForm.get('driveStatus').setValidators(Validators.required);
            this.addDriveForm.get('radioVerify').enable();
            this.addDriveForm.get('radioReject').enable();
        }
    };
    AddDrivePage.prototype.startDriveControls = function () {
        this.addDriveForm.get('date').setValue(this.today);
        this.addDriveForm.get('startTime').setValue(this.today);
        this.addDriveForm.get('incamp').setValue(this.mtrac.incamp);
        this.addDriveForm.get('vehicleNumber').setValue(this.mtrac.vehicleNumber);
        this.addDriveForm.get('vehicleType').setValue(this.mtrac.vehicle_type);
        this.addDriveForm.get('vehicleCommander').setValue(this.mtrac.commander);
        this.addDriveForm.get('startLocation').setValue(this.mtrac.startLocation);
        // clear validators for end drive controls
        this.addDriveForm.get('endLocation').clearValidators();
        this.addDriveForm.get('endOdometer').clearValidators();
        this.addDriveForm.get('endTime').clearValidators();
        this.addDriveForm.get('fuelLevel').clearValidators();
    };
    AddDrivePage.prototype.endDriveControls = function () {
        console.log('incomplete drive exist');
        this.setStartDriveDetails();
        // set end Time to current time
        var time2 = dayjs(new Date(this.today)).format('HH:mm');
        this.addDriveForm.get('endTime').setValue(time2);
    };
    AddDrivePage.prototype.editDriveControls = function () {
        this.addDriveForm.reset();
        this.setStartDriveDetails();
        this.setEndDriveDetails();
        //this.setDriveStatusControls();
    };
    AddDrivePage.prototype.setStartDriveDetails = function () {
        // Stage-1 details
        // populate values of start drive fields
        this.addDriveForm.get('date').setValue(this.drive.date);
        this.addDriveForm.get('vehicleNumber').setValue(this.drive.vehicle.toUpperCase());
        this.addDriveForm.get('vehicleType').setValue(this.drive.vehicle_type);
        this.addDriveForm.get('vehicleCommander').setValue(this.drive.commander);
        this.addDriveForm.get('startLocation').setValue(this.drive.start_location.toUpperCase());
        this.addDriveForm.get('startOdometer').setValue(this.drive.start_odometer);
        this.addDriveForm.get('endOdometer').setValidators(forms_1.Validators.min(this.drive.start_odometer));
        this.addDriveForm.get('startTime').setValue(this.drive.start_time);
        this.addDriveForm.get('endTime').setValidators(forms_1.Validators.min(this.drive.start_time));
        this.addDriveForm.get('incamp').setValue(this.drive.incamp);
        console.log('start time: ' + this.addDriveForm.value.startTime);
    };
    AddDrivePage.prototype.setEndDriveDetails = function () {
        // Stage-2 details
        // populate values of end drive fields
        this.addDriveForm.get('endLocation').setValue(this.drive.end_location.toUpperCase());
        this.addDriveForm.get('endOdometer').setValue(this.drive.end_odometer);
        this.addDriveForm.get('endTime').setValue(this.drive.end_time);
        console.log('end time: ' + this.addDriveForm.value.endTime);
        this.addDriveForm.get('fuelLevel').setValue(this.drive.fuel_level);
        this.addDriveForm.get('driveComments').setValue(this.drive.comments.toUpperCase());
        this.addDriveForm.get('jit_complete').setValue(true);
        // set the maintenance toggle to check
        this.isToggled = this.drive.is_maintenance;
    };
    /*
    setDriveStatusControls() {
      if (this.showStatus) {
        this.addDriveForm.get('driveStatus').setValue(this.drive.status);
        console.log(this.addDriveForm.get('driveStatus').value);
      }
    }*/
    AddDrivePage.prototype.endDrive = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var currentDrive, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // added this check as end drive details can be saved despite missing info.
                        // check if all mandatory fields are entered
                        if (!this.addDriveForm.valid) {
                            this.errorMessage = 'Drive cannot be updated... missing end drive information.';
                            this.showToast(this.errorMessage);
                            console.log(this.errorMessage);
                            return [2 /*return*/];
                        }
                        if (!(this.drive.commander != this.database.current.user.email)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        currentDrive = this.database.current.drive_history[0];
                        // Stage 1 details : the user may made some changes to these info
                        currentDrive.vehicle = this.addDriveForm.value.vehicleNumber.toUpperCase();
                        currentDrive.commander = this.addDriveForm.value.vehicleCommander;
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
                        return [4 /*yield*/, this.database.write('drive', currentDrive.id, currentDrive)];
                    case 2:
                        _a.sent();
                        this.errorMessage = '';
                        this.successMessage = 'Your drive has been updated.';
                        this.showToast(this.successMessage);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        this.errorMessage = 'Update drive error: ${err}';
                        this.successMessage = '';
                        this.showToast(this.errorMessage);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AddDrivePage.prototype.addDrive = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var time, new_drive, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('is Commander: ' + this.database.current.user.is_commander);
                        if (!(this.drive != null)) return [3 /*break*/, 4];
                        if (!(this.drive.commander == this.database.current.user.email)) return [3 /*break*/, 2];
                        // commander has verified/rejected drive, update drive status.
                        //this.drive.status = this.addDriveForm.get('driveStatus').value;
                        console.log('Drive status: ' + this.drive.status);
                        // update status in database
                        return [4 /*yield*/, this.database.write('drive', this.drive.id, this.drive)];
                    case 1:
                        // update status in database
                        _a.sent();
                        this.errorMessage = '';
                        this.successMessage = 'The drive status has been updated successfully.';
                        this.showToast(this.successMessage);
                        return [3 /*break*/, 3];
                    case 2:
                        if (this.database.current.drive_in_progress != null || this.drive != null) {
                            // the submit is to complete the drive information
                            console.log('Updating start and end drive details...');
                            this.endDrive(value);
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 8];
                    case 4:
                        _a.trys.push([4, 7, , 8]);
                        this.mtrac = this.database.current.mtrac_to_edit;
                        time = dayjs(new Date(this.addDriveForm.value.startTime)).format('HH:mm');
                        new_drive = {
                            created: this.database.getTimeStamp(),
                            driver: this.database.current.user.email,
                            status: "in-progress",
                            is_jit: this.mtrac.is_jit,
                            // Stage-1 details
                            vehicle: this.addDriveForm.value.vehicleNumber.toUpperCase(),
                            vehicle_type: this.mtrac.vehicle_type,
                            commander: this.addDriveForm.value.vehicleCommander,
                            date: (this.addDriveForm.value.date).split('T')[0],
                            start_location: this.addDriveForm.value.startLocation.toUpperCase(),
                            start_odometer: parseInt(this.addDriveForm.value.startOdometer),
                            start_time: time,
                            fleet: this.database.current.user.fleet,
                            company: this.database.current.user.company,
                            incamp: this.addDriveForm.value.incamp
                        };
                        console.log('new_drive=${JSON.stringify(new_drive)}');
                        return [4 /*yield*/, this.database.write('drive', this.mtrac.id, new_drive)];
                    case 5:
                        _a.sent();
                        this.mtrac.status = "completed";
                        return [4 /*yield*/, this.database.write('mtrac', this.mtrac.id, this.mtrac)];
                    case 6:
                        _a.sent();
                        this.errorMessage = '';
                        this.successMessage = 'Your drive has been added.';
                        this.showToast(this.successMessage);
                        return [3 /*break*/, 8];
                    case 7:
                        err_2 = _a.sent();
                        this.errorMessage = "Add drive error: " + err_2;
                        this.successMessage = '';
                        console.log(this.errorMessage);
                        console.log(this.addDriveForm.value.startLocation);
                        this.showToast(this.errorMessage);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    AddDrivePage.prototype.showToast = function (msg) {
        this.toastController.create({
            message: msg,
            duration: 2000,
            //  showCloseButton: true,
            //  closeButtonText: 'OK',
            position: 'middle'
        }).then(function (obj) {
            obj.present();
        });
    };
    AddDrivePage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    AddDrivePage.prototype.onToggle = function () {
        //console.log("initial state - toggled: " + this.isToggled);
        if (this.isToggled) {
            this.isToggled = false;
        }
        else {
            this.isToggled = true;
        }
        //console.log("final state - toggled: " + this.isToggled);
    };
    AddDrivePage.prototype.showSubmit = function () {
        if (this.updateStatus || !this.isDisabled) {
            return true;
        }
        return false;
    };
    AddDrivePage.prototype.accept = function () {
        this.drive.status = "verified";
    };
    AddDrivePage.prototype.reject = function () {
        this.drive.status = "rejected";
    };
    AddDrivePage = __decorate([
        core_1.Component({
            selector: 'app-add-drive',
            templateUrl: './add-drive.page.html',
            styleUrls: ['./add-drive.page.scss']
        })
    ], AddDrivePage);
    return AddDrivePage;
}());
exports.AddDrivePage = AddDrivePage;
