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
exports.jitmtracPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var database_service_1 = require("../services/database.service");
var jitmtracPage = /** @class */ (function () {
    function jitmtracPage(navCtrl, formBuilder, toastController, database, route) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.database = database;
        this.route = route;
        this.errorMessage = '';
        this.successMessage = '';
        this.today = new Date().toISOString();
        this.checkboxstatus = false;
        this.driver = "";
        this.commander = "";
        this.validationMessages = {
            vehicleNumber: [
                { type: 'required', message: 'Vehicle Number is required.' },
                { type: 'minlength', message: 'Vehicle number must be at least 5 characters long.' }
            ],
            vehicleType: [
                { type: 'required', message: 'Select a type of vehicle' },
            ],
            licenseType: [
                { type: 'required', message: 'choose license type' },
            ],
            rest: [
                { type: 'required', message: 'choose rest' },
            ],
            health: [
                { type: 'required', message: 'choose health' },
            ],
            weather: [
                { type: 'required', message: 'choose weather' },
            ],
            route: [
                { type: 'required', message: 'choose route' },
            ],
            detailType: [
                { type: 'required', message: 'choose detail type' },
            ],
            vehicleServiceability: [
                { type: 'required', message: 'choose vehicle serviceability' },
            ],
            startLocation: [
                { type: 'required', message: 'enter start location' },
            ],
            endLocation: [
                { type: 'required', message: 'enter end location' },
            ],
            incamp: [
                { type: 'required', message: 'select drive area' },
            ]
        };
        this.licenseTypes = [{ value: "L", text: "CAT A, B" }, { value: "M", text: "CAT C" }, { value: "H", text: "CAT D" }, { value: "N", text: "Have never been trained and familiarized in the vehicle that you will be driving" }];
        this.checklistcmd = [
            { listID: 1, name: "To be responsible for the discipline and safety of all passengers/crew in the assigned transport detail." },
            { listID: 2, name: "To assist to look out for obstruction, hazard or danger. If the driver is reversing, there is no requirement for the vehiucle commander to guide the driver. However, VC should render assistance to the driver when requested." },
            { listID: 3, name: "Go through intended route with the driver." },
            { listID: 4, name: "If unsure of route or lost, to instruct the driver to stop the vehicle at a safe place to re-orientate or seek further instructions." },
            { listID: 5, name: "If involved in an accident, to inform unit about the accident and assit the driver to manage the accident." },
            { listID: 6, name: "To check and endorse the MT-RAC." },
        ];
        // Autoselect correct license
        this.selectLicenseType();
        console.log(this.selectedLicense);
    }
    jitmtracPage.prototype.getapprovedvtypes = function () {
        var _this = this;
        var vtypes = database_service_1.VehicleTypes;
        var driven = Object.keys(this.database.current.stats.most_recent_drive_by_vehicle_type);
        var canDrive = [];
        //console.log(canDrive);
        driven.forEach(function (value) {
            // check license 
            if (value == 'MSS') {
                if (_this.database.current.user.mss_certified == false) {
                    canDrive.push({ text: value + " - NO LICENSE", ready: false });
                }
            }
            else if (value == 'FLB') {
                if (_this.database.current.user.flb_certified == false) {
                    canDrive.push({ text: value + " - NO LICENSE", ready: false });
                }
            }
            else if (value == 'BELREX') {
                if (_this.database.current.user.belrex_certified == false) {
                    canDrive.push({ text: value + " - NO LICENSE", ready: false });
                }
            }
            // check currency / JIT test
            var daysLastDriven = _this.calculateDiff(_this.database.current.stats.most_recent_drive_by_vehicle_type[value].$d);
            if (daysLastDriven <= 100) { // || this.database.current.stats.JIT==true){
                canDrive.push({ text: value, ready: true });
            }
            else {
                canDrive.push({ text: value, ready: true });
            }
        });
        //console.log(canDrive)
        return canDrive;
    };
    jitmtracPage.prototype.calculateDiff = function (dateSent) {
        var currentDate = new Date();
        dateSent = new Date(dateSent);
        return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
    };
    jitmtracPage.prototype.selectLicenseType = function () {
        // Autofill Driving Experience License Type based on Cat status from driver's licensetype
        console.log(this.database.current.user.licence_type);
        if (this.database.current.user.licence_type == "A" || this.database.current.user.licence_type == "B") {
            this.selectedLicense = this.licenseTypes[0].value;
        }
        else if (this.database.current.user.licence_type == "C") {
            this.selectedLicense = this.licenseTypes[1].value;
        }
        else if (this.database.current.user.licence_type == "D") {
            this.selectedLicense = this.licenseTypes[2].value;
        }
        else {
            this.selectedLicense = this.licenseTypes[3].value;
        }
    };
    jitmtracPage.prototype.ngOnInit = function () {
        this.mtracForm = this.formBuilder.group({
            vehicleNumber: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.minLength(5), forms_1.Validators.required])),
            licenseType: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            vehicleType: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            vehicleType2: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            rest: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            health: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            weather: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            route: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            detailType: new forms_1.FormControl('L', forms_1.Validators.compose([forms_1.Validators.required])),
            vc: new forms_1.FormControl(''),
            vehicleServiceability: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            incamp: new forms_1.FormControl('true', forms_1.Validators.compose([forms_1.Validators.required])),
            startLocation: new forms_1.FormControl('JIT', forms_1.Validators.compose([forms_1.Validators.required])),
            endLocation: new forms_1.FormControl('JIT', forms_1.Validators.compose([forms_1.Validators.required])),
            commander: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required])),
            cmdlicense: new forms_1.FormControl({ value: false, disabled: true }),
            cmdspeedlimit: new forms_1.FormControl({ value: false, disabled: true }),
            cmddanger: new forms_1.FormControl({ value: false, disabled: true }),
            cmdreverse: new forms_1.FormControl({ value: false, disabled: true }),
            seatbeltcommander: new forms_1.FormControl({ value: false, disabled: true }),
            seatingcommander: new forms_1.FormControl({ value: false, disabled: true }),
            safetystrapcommander: new forms_1.FormControl({ value: false, disabled: true }),
            smokingcommander: new forms_1.FormControl({ value: false, disabled: true }),
            loadcommander: new forms_1.FormControl({ value: false, disabled: true }),
            seatbelttroopscommander: new forms_1.FormControl({ value: false, disabled: true }),
            accidentcommander: new forms_1.FormControl({ value: false, disabled: true }),
            mtraccompletecommander: new forms_1.FormControl({ value: false, disabled: true }),
            cmdchecklistcomplete: new forms_1.FormControl({ value: false, disabled: true }),
            commandermtrac: new forms_1.FormControl({ value: false, disabled: true }),
            seatbeltdriver: new forms_1.FormControl(false, forms_1.Validators.compose([forms_1.Validators.requiredTrue])),
            seatingdriver: new forms_1.FormControl(false, forms_1.Validators.compose([forms_1.Validators.requiredTrue])),
            safetystrapdriver: new forms_1.FormControl(false),
            smokingdriver: new forms_1.FormControl(false, forms_1.Validators.compose([forms_1.Validators.requiredTrue])),
            loaddriver: new forms_1.FormControl(false, forms_1.Validators.compose([forms_1.Validators.requiredTrue])),
            seatbelttroopsdriver: new forms_1.FormControl(false, forms_1.Validators.compose([forms_1.Validators.requiredTrue])),
            accidentdriver: new forms_1.FormControl(false, forms_1.Validators.compose([forms_1.Validators.requiredTrue])),
            mtraccompletedriver: new forms_1.FormControl(false, forms_1.Validators.compose([forms_1.Validators.requiredTrue])),
            drivermtrac: new forms_1.FormControl(false, forms_1.Validators.compose([forms_1.Validators.requiredTrue]))
        });
        this.mtrac = this.database.current.mtrac_to_edit;
        if (this.mtrac != null) {
            if (this.database.current.user.email == this.mtrac.commander && this.mtrac.status === 'pending') {
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
            else if (this.database.current.user.email == this.mtrac.driver && this.mtrac.status === 'verified') {
                this.driver = this.mtrac.driver;
                this.setmtracDetails();
                this.mtracForm.disable();
            }
            else if (this.database.current.user.email == this.mtrac.driver && this.mtrac.status === 'pending') {
                this.driver = this.mtrac.driver;
                this.setmtracDetails();
                this.mtracForm.disable();
            }
        }
        else {
            this.driver = this.database.current.user.email;
        }
    };
    jitmtracPage.prototype.setmtracDetails = function () {
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
    };
    jitmtracPage.prototype.gettime = function () {
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
    jitmtracPage.prototype.getcdt = function () {
        var cd = new Date(); // for now
        var cdt = cd.getDate() + "/"
            + (cd.getMonth() + 1) + "/"
            + cd.getFullYear() + " @ "
            + this.timenow();
        return cdt;
    };
    jitmtracPage.prototype.timenow = function () {
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
    };
    jitmtracPage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    jitmtracPage.prototype.showSubmit = function () {
        return true;
    };
    jitmtracPage.prototype.showToast = function (msg) {
        this.toastController.create({
            message: msg,
            duration: 2000,
            //  showCloseButton: true,
            //  closeButtonText: 'OK',
            position: 'bottom'
        }).then(function (obj) {
            obj.present();
        });
    };
    jitmtracPage.prototype.getoverallrisk = function () {
        var licenseType = this.mtracForm.get('licenseType').value;
        var vehicleType2 = this.mtracForm.get('vehicleType2').value;
        var rest = this.mtracForm.get('rest').value;
        var health = this.mtracForm.get('health').value;
        var weather = this.mtracForm.get('weather').value;
        var route = this.mtracForm.get('route').value;
        var detailType = this.mtracForm.get('detailType').value;
        var vc = this.mtracForm.get('vc').value;
        var vehicleServiceability = this.mtracForm.get('vehicleServiceability').value;
        if (licenseType == "N" || health == "N" || vc == "N" || vehicleServiceability == "N" || licenseType == "" || health == "" || vehicleServiceability == "") {
            return false;
        }
        else if (licenseType == "H" || vehicleType2 == "H" || rest == "H" || health == "H" || weather == "H" || route == "H" || detailType == "H" || vc == "H" || vehicleServiceability == "H") {
            return "HIGH";
        }
        else if (licenseType == "M" || vehicleType2 == "M" || rest == "M" || health == "M" || weather == "M" || route == "M" || detailType == "M" || vc == "M" || vehicleServiceability == "M") {
            return "MEDIUM";
        }
        else if (licenseType == "L" || vehicleType2 == "L" || rest == "L" || health == "L" || weather == "L" || route == "L" || detailType == "L" || vc == "L" || vehicleServiceability == "L") {
            return "LOW";
        }
    };
    jitmtracPage.prototype.getcmdchecklistcomplete = function () {
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
            this.mtracForm.get('commandermtrac').value == false) {
            return false;
        }
        return true;
    };
    jitmtracPage.prototype.getcmdchecklistcomplete2 = function () {
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
            this.mtracForm.get('cmdchecklistcomplete').value == false) {
            return false;
        }
        return true;
    };
    jitmtracPage.prototype.getdriverchecklistcomplete = function () {
        if (this.mtracForm.get('seatbeltdriver').value == false ||
            this.mtracForm.get('seatingdriver').value == false ||
            this.mtracForm.get('safetystrapdriver').value == false ||
            this.mtracForm.get('smokingdriver').value == false ||
            this.mtracForm.get('loaddriver').value == false ||
            this.mtracForm.get('seatbelttroopsdriver').value == false ||
            this.mtracForm.get('accidentdriver').value == false ||
            this.mtracForm.get('mtraccompletedriver').value == false ||
            this.mtracForm.get('drivermtrac').value == false) {
            return false;
        }
        return true;
    };
    jitmtracPage.prototype.addmtrac = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var new_mtrac, subAutoID, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.mtrac == null)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        new_mtrac = {
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
                            commandermtrac: false
                        };
                        subAutoID = this.database.collection('mtrac').doc().id;
                        new_mtrac.id = subAutoID;
                        console.log('new_mtrac=${JSON.stringify(new_mtrac)}');
                        return [4 /*yield*/, this.database.write('mtrac', new_mtrac.id, new_mtrac)];
                    case 2:
                        _a.sent();
                        this.errorMessage = '';
                        this.successMessage = 'Your MT-RAC form has been submitted to your vehicle commander for approval.';
                        this.showToast(this.successMessage);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.errorMessage = "Add MT-RAC error: " + err_1;
                        this.successMessage = '';
                        this.showToast(this.errorMessage);
                        console.log(this.errorMessage);
                        this.navCtrl.pop();
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        if (!this.database.current.user.is_commander) return [3 /*break*/, 7];
                        // commander has verified/rejected drive, update drive status.
                        this.mtrac.status = "verified";
                        this.mtrac.cmdlicense = this.mtracForm.get('cmdlicense').value;
                        this.mtrac.cmdspeedlimit = this.mtracForm.get('cmdspeedlimit').value;
                        this.mtrac.cmddanger = this.mtracForm.get('cmddanger').value;
                        this.mtrac.cmdreverse = this.mtracForm.get('cmdreverse').value;
                        this.mtrac.seatbeltcommander = this.mtracForm.get('seatbeltcommander').value;
                        this.mtrac.seatingcommander = this.mtracForm.get('seatingcommander').value;
                        this.mtrac.safetystrapcommander = this.mtracForm.get('safetystrapcommander').value;
                        this.mtrac.smokingcommander = this.mtracForm.get('smokingcommander').value;
                        this.mtrac.loadcommander = this.mtracForm.get('loadcommander').value;
                        this.mtrac.seatbelttroopscommander = this.mtracForm.get('seatbelttroopscommander').value;
                        this.mtrac.accidentcommander = this.mtracForm.get('accidentcommander').value;
                        this.mtrac.mtraccompletecommander = this.mtracForm.get('mtraccompletecommander').value;
                        this.mtrac.cmdchecklistcomplete = this.mtracForm.get('cmdchecklistcomplete').value;
                        this.mtrac.commandermtrac = this.mtracForm.get('commandermtrac').value;
                        // update status in database
                        return [4 /*yield*/, this.database.write('mtrac', this.mtrac.id, this.mtrac)];
                    case 6:
                        // update status in database
                        _a.sent();
                        this.errorMessage = '';
                        this.successMessage = 'The MT-RAC Form is completed successfully.';
                        this.showToast(this.successMessage);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    jitmtracPage = __decorate([
        core_1.Component({
            selector: 'app-mtrac',
            templateUrl: './jitmtrac.page.html',
            styleUrls: ['./jitmtrac.page.scss']
        })
    ], jitmtracPage);
    return jitmtracPage;
}());
exports.jitmtracPage = jitmtracPage;
