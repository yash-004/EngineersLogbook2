(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-commander-commander-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commander/commander.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commander/commander.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Commander</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button left routerLink=\"/\" routerDirection=\"root\" fill=\"clear\" slot=\"primary\">\n        Logout<ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Notifications -->\n  <ion-item class=\"headers\" text-center><ion-label style=\"margin-bottom: 0;\"><h1> Notifications </h1></ion-label></ion-item>\n\n  <ion-card *ngFor=\"let drive of getPendingDrives()\" padding>\n\n    <ion-fab vertical=\"top\" horizontal=\"end\">\n      <!--ion-fab-button size=\"small\" (click)=\"click(drive)\">View</ion-fab-button-->\n      <ion-fab-button size=\"small\" (click)=\"click(drive)\"><ion-icon name='share-alt'></ion-icon></ion-fab-button>\n      <!--ion-button fill=\"outline\" size=\"small\" (click)=\"click(drive)\">View</ion-button-->\n    </ion-fab>\n\n    <ion-card-subtitle color='danger'><strong>Pending review</strong></ion-card-subtitle>\n    <ion-card-title>{{drive.date}}</ion-card-title>\n\n    <ion-card-content no-padding>\n      Your drive on <b>{{drive.date}}</b> with <b>{{drive.driver}}</b> from\n      <b>{{drive.start_location}}</b> (<b>{{drive.start_time}}</b>) to \n      <b>{{drive.end_location}}</b> (<b>{{drive.end_time}}</b>)\n      is pending review.\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-item class=\"headers\" text-center><ion-label style=\"margin-bottom: 0;\"><h1> Operators </h1></ion-label></ion-item>\n\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Driver</ion-label>\n        <ion-select id=\"driverlist\" interface=\"popover\" class=\"full-width-select\" value=\"ALL\">\n          <ion-select-option value=\"ALL\">ALL</ion-select-option>\n          <ion-select-option text-wrap *ngFor=\"let driver of database.current.all_drivers_of_commander\" value={{driver.email}} class=\"custom-font-size\">{{driver.email}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-card *ngFor=\"let driver of getDrivers()\">\n    <ion-card-header>\n      <ion-card-subtitle><ion-icon name=\"person\" text-center (click)=\"showother()\"></ion-icon> <strong> {{driver.name}} ({{driver.email}})</strong></ion-card-subtitle>\n      <ion-card-subtitle (click)=\"showother()\">Last drive: {{driver.summary.most_recent_drive | date: \"dd/MM/yyyy hh:mm\"}}, {{driver.summary.most_recent_drive | daysAgo}} days ago</ion-card-subtitle>\n      <ion-label position=\"stacked\" *ngIf=\"checkAll()==true\"><h2>Certifications</h2></ion-label>\n      <ion-button *ngIf=\"checkAll()==false\" (click)=\"showEdit()\">Certifications <ion-icon name=\"settings\"></ion-icon></ion-button>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label color=\"success\"> OUV </ion-label>\n          </ion-col>\n          <ion-col offset-4>\n            <ion-label color=\"success\"> 5TON </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label *ngIf=\"driver.mss_certified == true\" color=\"success\" > MSS </ion-label>\n          </ion-col>\n          <ion-col offset-4 >\n            <ion-label *ngIf=\"driver.flb_certified == true\" color=\"success\"> FLB </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label *ngIf=\"driver.belrex_certified == true\" color=\"success\"> BELREX </ion-label>\n          </ion-col>\n          <ion-col offset-4>\n            <ion-label>  </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-card *ngIf=\"checkEditDriverStatus()==true\">\n        <ion-list>\n          <ion-item>\n            <ion-label position=\"stacked\">MSS</ion-label>\n            <ion-select id=\"mss\" interface=\"popover\" value={{driver.mss_certified}}>\n              <ion-select-option value=\"true\">Certified</ion-select-option>\n              <ion-select-option value=\"false\">Not Certified</ion-select-option>\n            </ion-select>\n            <ion-label position=\"stacked\">FLB</ion-label>\n            <ion-select id=\"flb\" interface=\"popover\" value={{driver.flb_certified}}>\n              <ion-select-option value=\"true\">Certified</ion-select-option>\n              <ion-select-option value=\"false\">Not Certified</ion-select-option>\n            </ion-select>\n            <ion-label position=\"stacked\">BELREX</ion-label>\n            <ion-select id=\"belrex\" interface=\"popover\" value={{driver.belrex_certified}}>\n              <ion-select-option value=\"true\">Certified</ion-select-option>\n              <ion-select-option value=\"false\">Not Certified</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        <ion-button (click)=\"updateCertfication(getDriver())\">save changes</ion-button>\n      </ion-card>\n    </ion-card-header>\n\n\n\n\n    <ion-card-content>\n      <ion-grid class=\"table\" no-padding>\n\n        <ion-row>\n          <ion-col size=\"4\" class=\"bubble-text\" no-padding><ion-card no-padding (click)=\"showdrives()\">\n            <div class=\"ion-text-center\" style=\"width: 100%;\">\n              <ion-icon name=\"car\" size=\"large\" ></ion-icon><br>\n              <div class=\"shift_up\">Drives</div>\n              <div class=\"slide_num\">{{driver.summary.drive_count}}</div>\n              <ion-label *ngIf=\"checkDriveStatus()\">\n                <h6 *ngFor=\"let vehicle of driver.summary.most_recent_drive_by_vehicle_type | keyvalue\">\n                  {{vehicle.key}} : {{getDrivesbyVehicleType(vehicle.key)}}\n                </h6>\n              </ion-label>\n            </div>\n          </ion-card></ion-col>\n\n          <ion-col size=\"4\" class=\"bubble-text\" no-padding><ion-card no-padding (click)=\"showmileage()\">\n            <div class=\"ion-text-center\" style=\"width: 100%;\">\n              <ion-icon name=\"speedometer\" size=\"large\"></ion-icon><br>\n              <div class=\"shift_up\">Mileage</div>\n              <div class=\"slide_num\">{{driver.summary.mileage_km}} km</div>\n              <ion-label *ngIf=\"checkMileageStatus()\">\n                <h6 *ngFor=\"let vehicle of driver.summary.most_recent_drive_by_vehicle_type | keyvalue\">\n                  {{vehicle.key}} : {{getMileagebyVehicleType(driver.summary.mileage_by_vehicle_type, vehicle.key)}}\n                </h6>\n              </ion-label>\n            </div>\n          </ion-card></ion-col>\n\n          <ion-col size=\"4\" class=\"bubble-text\" no-padding><ion-card no-padding>\n            <div class=\"ion-text-center\" style=\"width: 100%;\" (click)=\"showother()\">\n              <ion-icon name=\"clock\" size=\"large\"></ion-icon><br>\n              <div class=\"shift_up\">Time Driven</div>\n              <div class=\"slide_num\">{{driver.summary.duration_minutes / 60 | number : '1.0-1' }} hours</div>\n            </div>\n          </ion-card></ion-col>\n\n\n          <ion-row text-center style=\"padding: 0 10px\" *ngIf=\"checkDriveStatus() || checkMileageStatus() || checkOtherStatus()\" (click)=\"showother()\">\n            <ion-col>\n              average drive distance: <br/> {{driver.summary.mileage_km / driver.summary.drive_count | number : '1.0-1'}} km\n            </ion-col>\n            <ion-col>\n              average drive duration: <br/>{{driver.summary.duration_minutes / 60 / driver.summary.drive_count | number : '1.0-1'}} hours\n            </ion-col>\n          </ion-row>\n\n          <ion-row text-center (click)=\"showother()\">\n            <ion-col text-center><ion-card text-center>\n              <ion-card-title text-center>\n                <strong>JIT Countdown</strong>\n              </ion-card-title>\n              <ion-card-subtitle><strong>\n                <ion-label color='danger' text-center>\n                  <h2 *ngIf=\"checkTimelefttoJIT(driver.summary.most_recent_drive) == false\" style=\"padding: 0 100px\" text-center>\n                    JIT REQUIRED!\n                  </h2>\n                </ion-label>\n                <ion-label>\n                  <ion-item *ngIf=\"checkTimelefttoJIT(driver.summary.most_recent_drive) == true\" style=\"padding: 0 55px\" text-center>\n                    <countdown [config]=\"{leftTime: getTimelefttoJIT(driver.summary.most_recent_drive), format: 'dd'}\"></countdown>\n                    <h6 style=\"padding-bottom: 5px\">days&ensp;</h6>\n                    <countdown [config]=\"{leftTime: getTimelefttoJIT(driver.summary.most_recent_drive), format: 'HH'}\"></countdown>\n                    <h6 style=\"padding-bottom: 5px\">hrs&ensp;</h6>\n                    <countdown [config]=\"{leftTime: getTimelefttoJIT(driver.summary.most_recent_drive), format: 'mm'}\"></countdown>\n                    <h6 style=\"padding-bottom: 5px\">mins&ensp;</h6>\n                    <countdown [config]=\"{leftTime: getTimelefttoJIT(driver.summary.most_recent_drive), format: 'ss'}\"></countdown>\n                    <h6 style=\"padding-bottom: 5px\">sec&ensp;</h6>\n                  </ion-item>\n                </ion-label>\n              </strong></ion-card-subtitle>\n            </ion-card></ion-col>\n          </ion-row>\n        </ion-row>\n      </ion-grid>\n      <!--<ion-grid  class=\"ion-no-padding\">\n        <ion-row text-center>\n          <ion-col text-center><ion-icon name=\"car\"></ion-icon> <br> Total Drives: <br> {{driver.summary.drive_count}}</ion-col>\n          <ion-col text-center><ion-icon name=\"speedometer\"></ion-icon> <br> Total Mileage:<br> {{driver.summary.mileage_km}} KM</ion-col>\n          <ion-col text-center><ion-icon name=\"clock\"></ion-icon> <br> Time Driven: <br> {{driver.summary.duration_minutes / 60 | number : '1.0-1' }} hours</ion-col>\n        </ion-row>\n\n      </ion-grid>-->\n\n      <ion-item *ngFor=\"let vehicle of driver.summary.most_recent_drive_by_vehicle_type | keyvalue\" (click)=\"showother()\">\n\n\n          <ion-col *ngIf=\"checkOtherStatus()\" (click)=\"showother()\">\n            <ion-label *ngIf=\"checkOtherStatus()\">\n              <h3 class=\"underline\" *ngIf=\"checkOperatorCurrencyValid(vehicle.key,driver.summary.most_recent_drive_by_vehicle_type[vehicle.key])\">{{vehicle.key}}</h3>\n            </ion-label >\n            <ion-label  color='danger' *ngIf=\"checkOtherStatus()\">\n               <h3 class=\"underline\" *ngIf=\"checkOperatorCurrencyInvalid(vehicle.key,driver.summary.most_recent_drive_by_vehicle_type[vehicle.key])\">{{vehicle.key}}</h3>\n            </ion-label>\n          \n           Last Drive: {{driver.summary.most_recent_drive_by_vehicle_type[vehicle.key] | date: \"dd/MM/yyyy\"}}\n           ({{driver.summary.most_recent_drive_by_vehicle_type[vehicle.key] | daysAgo}} days ago)</ion-col>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/commander/commander.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/commander/commander.module.ts ***!
  \*****************************************************/
/*! exports provided: CommanderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommanderPageModule", function() { return CommanderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _commander_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commander.page */ "./src/app/pages/commander/commander.page.ts");
/* harmony import */ var _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../drive-view/drive-view.module */ "./src/app/drive-view/drive-view.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");










const routes = [
    {
        path: '',
        component: _commander_page__WEBPACK_IMPORTED_MODULE_6__["CommanderPage"]
    }
];
let CommanderPageModule = class CommanderPageModule {
};
CommanderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__["DriveViewModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
        ],
        declarations: [_commander_page__WEBPACK_IMPORTED_MODULE_6__["CommanderPage"]]
    })
], CommanderPageModule);



/***/ }),

/***/ "./src/app/pages/commander/commander.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/commander/commander.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".div {\n  text-align: center;\n  border: 6px solid black;\n}\n\n.vertical-align-content > * {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n\n.full-width-select {\n  width: 100%;\n  max-width: 100%;\n}\n\n.custom-font-size {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YXNoZGl4aXQvRGVza3RvcC9FbmdpbmVlcnNMb2dib29rMi9zcmMvYXBwL3BhZ2VzL2NvbW1hbmRlci9jb21tYW5kZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21tYW5kZXIvY29tbWFuZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURDQTtFQUVLLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7QUNDTDs7QURFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tbWFuZGVyL2NvbW1hbmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDZweCBzb2xpZCBibGFjaztcbn1cbi52ZXJ0aWNhbC1hbGlnbi1jb250ZW50ID4gKlxue1xuICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICAgYWxpZ24tY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XG59XG5cbi5mdWxsLXdpZHRoLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uY3VzdG9tLWZvbnQtc2l6ZSB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn0iLCIuZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDZweCBzb2xpZCBibGFjaztcbn1cblxuLnZlcnRpY2FsLWFsaWduLWNvbnRlbnQgPiAqIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uZnVsbC13aWR0aC1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tLWZvbnQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/commander/commander.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/commander/commander.page.ts ***!
  \***************************************************/
/*! exports provided: CommanderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommanderPage", function() { return CommanderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);







let CommanderPage = class CommanderPage {
    constructor(navCtrl, database, platform, toastController) {
        this.navCtrl = navCtrl;
        this.database = database;
        this.platform = platform;
        this.toastController = toastController;
        this.drivestatus = 9 > 10;
        this.mileagestatus = 9 > 10;
        this.otherstatus = 9 > 10;
        this.drivereditstatus = 9 > 10;
        this.successMessage = '';
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    editDriver(driver) {
        var drivr = this.database.current.all_drivers_of_commander;
        drivr = drivr.filter((drvr) => drvr.email == driver);
        this.drivereditstatus = !this.drivereditstatus;
        return drivr;
    }
    showEdit() {
        return this.drivereditstatus = !this.drivereditstatus;
    }
    getDrvr(driver) {
        var drivr = this.database.current.all_drivers_of_commander;
        return drivr.filter((drvr) => drvr.email == driver);
    }
    getDrivers() {
        var drivers = this.database.current.all_drivers_of_commander;
        var drvrs = document.getElementById("driverlist").value;
        if (drvrs != "ALL") {
            return drivers.filter((driver) => driver.email == drvrs);
        }
        return drivers;
    }
    getDriver() {
        var driver = this.database.current.all_drivers_of_commander;
        var drvrs = document.getElementById("driverlist").value;
        return driver.filter((driver) => driver.email == drvrs)[0];
    }
    updateCertfication(driver) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log(driver);
            var mssc = document.getElementById("mss").value.toLowerCase() === 'true';
            var flbc = document.getElementById("flb").value.toLowerCase() === 'true';
            var belrexc = document.getElementById("belrex").value.toLowerCase() === 'true';
            driver.mss_certified = mssc;
            driver.flb_certified = flbc;
            driver.belrex_certified = belrexc;
            try {
                yield this.database.write('user', driver.email, driver);
                this.drivereditstatus = !this.drivereditstatus;
                this.successMessage = 'the driver account has been updated.';
                this.showToast(this.successMessage);
            }
            catch (err) {
                console.log(err);
                this.errorMessage = err.message;
                this.successMessage = '';
            }
        });
    }
    checkAll() {
        var drivers = document.getElementById("driverlist").value;
        return drivers == "ALL";
    }
    showToast(msg) {
        this.toastController.create({
            message: msg,
            duration: 2000,
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'middle'
        }).then((obj) => {
            obj.present();
        });
    }
    checkEditDriverStatus() {
        return this.drivereditstatus;
    }
    checkOperatorCurrencyValid(vehicletype, date) {
        const today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        var period = 8;
        return today.diff(date, "day") < period;
    }
    checkOperatorCurrencyInvalid(vehicletype, date) {
        const today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        var period = 8;
        return today.diff(date, "day") > period;
    }
    showdrives() {
        this.drivestatus = !this.drivestatus;
    }
    checkDriveStatus() {
        return this.drivestatus;
    }
    showmileage() {
        this.mileagestatus = !this.mileagestatus;
    }
    checkMileageStatus() {
        return this.mileagestatus;
    }
    showother() {
        this.otherstatus = !this.otherstatus;
    }
    checkOtherStatus() {
        return this.otherstatus;
    }
    getMileagebyVehicleType(data, vehicle) {
        for (var type of _services_database_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypes"]) {
            if (type == vehicle) {
                if (data[type] != null) {
                    return data[type] + " km";
                }
            }
        }
    }
    getDrivesbyVehicleType(vehicle) {
        for (var type of _services_database_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypes"]) {
            var drv = 0;
            if (type == vehicle) {
                for (let trip of this.database.current.drive_history) {
                    if (trip.vehicle_type == vehicle) {
                        drv += 1;
                    }
                }
                return drv;
            }
        }
    }
    getPendingDrives() {
        return this.database.current.drive_history.filter((drive) => {
            if (this.database.current.user.email === drive.commander) {
                return drive.status === 'pending';
            }
        });
    }
    getApprovedDrives() {
        return this.database.current.drive_history.filter((drive) => {
            return drive.status === 'verified';
        });
    }
    checkTimelefttoJIT(date) {
        const today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        var period = 8;
        var left = period - today.diff(date, "day");
        if (left < 0) {
            return false;
        }
        ;
        return true;
    }
    getTimelefttoJIT(date) {
        const today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        var period = 7 * 24 * 60 * 60;
        var left = period - today.diff(date, "s");
        return left;
    }
    click(drive) {
        this.database.current.drive_to_edit = drive;
        console.log(`> Navigating to AddDrivePage for drive id=${drive.id}`);
        this.navCtrl.navigateForward(['/add-drive']);
    }
};
CommanderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
CommanderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-commander',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./commander.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commander/commander.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./commander.page.scss */ "./src/app/pages/commander/commander.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], CommanderPage);



/***/ })

}]);
//# sourceMappingURL=pages-commander-commander-module-es2015.js.map