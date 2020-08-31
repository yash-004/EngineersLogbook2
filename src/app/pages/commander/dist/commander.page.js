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
exports.CommanderPage = void 0;
var core_1 = require("@angular/core");
var database_service_1 = require("../../services/database.service");
var dayjs = require("dayjs");
var CommanderPage = /** @class */ (function () {
    function CommanderPage(navCtrl, database, platform, geolocation, toastController) {
        this.navCtrl = navCtrl;
        this.database = database;
        this.platform = platform;
        this.geolocation = geolocation;
        this.toastController = toastController;
        this.drivestatus = 9 > 10;
        this.mileagestatus = 9 > 10;
        this.otherstatus = 9 > 10;
        this.drivereditstatus = 9 > 10;
        this.successMessage = '';
        this.errorMessage = '';
    }
    CommanderPage.prototype.ngOnInit = function () {
    };
    CommanderPage.prototype.editDriver = function (driver) {
        var drivr = this.database.current.all_drivers_of_commander;
        drivr = drivr.filter(function (drvr) { return drvr.email == driver; });
        this.drivereditstatus = !this.drivereditstatus;
        return drivr;
    };
    CommanderPage.prototype.showEdit = function () {
        return this.drivereditstatus = !this.drivereditstatus;
    };
    CommanderPage.prototype.getDrvr = function (driver) {
        var drivr = this.database.current.all_drivers_of_commander;
        return drivr.filter(function (drvr) { return drvr.email == driver; });
    };
    CommanderPage.prototype.getDrivers = function () {
        var drivers = this.database.current.all_drivers_of_commander;
        var drvrs = document.getElementById("driverlist").value;
        if (drvrs != "ALL") {
            return drivers.filter(function (driver) { return driver.email == drvrs; });
        }
        return drivers;
    };
    CommanderPage.prototype.getDriver = function () {
        var driver = this.database.current.all_drivers_of_commander;
        var drvrs = document.getElementById("driverlist").value;
        return driver.filter(function (driver) { return driver.email == drvrs; })[0];
    };
    CommanderPage.prototype.updateCertfication = function (driver) {
        return __awaiter(this, void 0, void 0, function () {
            var mssc, flbc, belrexc, m3gc, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mssc = document.getElementById("mss").value.toLowerCase() === 'true';
                        flbc = document.getElementById("flb").value.toLowerCase() === 'true';
                        belrexc = document.getElementById("belrex").value.toLowerCase() === 'true';
                        m3gc = document.getElementById("m3g").value.toLowerCase() === 'true';
                        driver.mss_certified = mssc;
                        driver.flb_certified = flbc;
                        driver.belrex_certified = belrexc;
                        driver.m3g_certified = m3gc;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.database.write('user', driver.email, driver)];
                    case 2:
                        _a.sent();
                        this.drivereditstatus = !this.drivereditstatus;
                        this.successMessage = 'the driver account has been updated.';
                        this.showToast(this.successMessage);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        this.errorMessage = err_1.message;
                        this.successMessage = '';
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CommanderPage.prototype.checkAll = function () {
        var drivers = document.getElementById("driverlist").value;
        if (this.database.current.user.is_admin == true) {
            return drivers == "ALL";
        }
        return true;
    };
    CommanderPage.prototype.showToast = function (msg) {
        this.toastController.create({
            message: msg,
            duration: 2000,
            position: 'middle'
        }).then(function (obj) {
            obj.present();
        });
    };
    CommanderPage.prototype.checkEditDriverStatus = function () {
        if (this.database.current.user.is_admin == true) {
            return this.drivereditstatus;
        }
        return false;
    };
    CommanderPage.prototype.checkOperatorCurrencyValid = function (vehicletype, date) {
        var today = dayjs();
        var period = 8;
        return today.diff(date, "day") < period;
    };
    CommanderPage.prototype.checkOperatorCurrencyInvalid = function (vehicletype, date) {
        var today = dayjs();
        var period = 8;
        return today.diff(date, "day") > period;
    };
    CommanderPage.prototype.showdrives = function () {
        this.drivestatus = !this.drivestatus;
    };
    CommanderPage.prototype.checkDriveStatus = function () {
        return this.drivestatus;
    };
    CommanderPage.prototype.showmileage = function () {
        this.mileagestatus = !this.mileagestatus;
    };
    CommanderPage.prototype.checkMileageStatus = function () {
        return this.mileagestatus;
    };
    CommanderPage.prototype.showother = function () {
        this.otherstatus = !this.otherstatus;
    };
    CommanderPage.prototype.checkOtherStatus = function () {
        return this.otherstatus;
    };
    CommanderPage.prototype.getMileagebyVehicleType = function (data, vehicle) {
        for (var _i = 0, VehicleTypes_1 = database_service_1.VehicleTypes; _i < VehicleTypes_1.length; _i++) {
            var type = VehicleTypes_1[_i];
            if (type == vehicle) {
                if (data[type] != null) {
                    return data[type] + " km";
                }
            }
        }
    };
    CommanderPage.prototype.getDrivesbyVehicleType = function (vehicle, drvr) {
        for (var _i = 0, VehicleTypes_2 = database_service_1.VehicleTypes; _i < VehicleTypes_2.length; _i++) {
            var type = VehicleTypes_2[_i];
            var drv = 0;
            if (type == vehicle) {
                var dhis = this.database.current.drive_history.filter(function (drive) { return drive.driver === drvr.email; });
                for (var _a = 0, dhis_1 = dhis; _a < dhis_1.length; _a++) {
                    var trip = dhis_1[_a];
                    if (trip.vehicle_type == vehicle) {
                        drv += 1;
                    }
                }
                return drv;
            }
        }
    };
    CommanderPage.prototype.getPendingDrives = function () {
        var _this = this;
        return this.database.current.drive_history.filter(function (drive) {
            if (_this.database.current.user.email === drive.commander) {
                return drive.status === 'pending';
            }
        });
    };
    CommanderPage.prototype.getPendingMTRAC = function () {
        var _this = this;
        return this.database.current.mtrac_history.filter(function (form) {
            if (_this.database.current.user.email === form.commander) {
                return form.status === 'pending';
            }
        });
    };
    CommanderPage.prototype.getApprovedDrives = function () {
        return this.database.current.drive_history.filter(function (drive) {
            return drive.status === 'verified';
        });
    };
    CommanderPage.prototype.checkTimelefttoJIT = function (date) {
        var today = dayjs();
        var period = 8;
        var left = period - today.diff(date, "day");
        if (left < 0) {
            return false;
        }
        ;
        return true;
    };
    CommanderPage.prototype.getTimelefttoJIT = function (date) {
        var today = dayjs();
        var period = 7 * 24 * 60 * 60;
        var left = period - today.diff(date, "s");
        return left;
    };
    CommanderPage.prototype.click = function (drive) {
        this.database.current.drive_to_edit = drive;
        console.log("> Navigating to AddDrivePage for drive id=" + drive.id);
        this.navCtrl.navigateForward(['/add-drive']);
    };
    CommanderPage.prototype.clickmtrac = function (form) {
        this.database.current.mtrac_to_edit = form;
        console.log("> Navigating to mtracPage for mtrac id=" + form.id);
        if (form.is_jit == true) {
            this.navCtrl.navigateForward(['/jitmtrac']);
        }
        else {
            this.navCtrl.navigateForward(['/mtrac']);
        }
    };
    CommanderPage = __decorate([
        core_1.Component({
            selector: 'app-commander',
            templateUrl: './commander.page.html',
            styleUrls: ['./commander.page.scss']
        })
    ], CommanderPage);
    return CommanderPage;
}());
exports.CommanderPage = CommanderPage;
