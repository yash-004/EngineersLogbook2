(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-commander-commander-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commander/commander.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commander/commander.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Commander</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button left routerLink=\"/\" routerDirection=\"root\" fill=\"clear\" slot=\"primary\">\r\n        Logout<ion-icon name=\"log-out\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- Notifications -->\r\n  <ion-item class=\"headers\" text-center><ion-label style=\"margin-bottom: 0;\"><h1> Notifications </h1></ion-label></ion-item>\r\n\r\n  <ion-card *ngFor=\"let drive of getPendingDrives()\" padding>\r\n\r\n    <ion-fab vertical=\"top\" horizontal=\"end\">\r\n      <!--ion-fab-button size=\"small\" (click)=\"click(drive)\">View</ion-fab-button-->\r\n      <ion-fab-button size=\"small\" (click)=\"click(drive)\"><ion-icon name='share-alt'></ion-icon></ion-fab-button>\r\n      <!--ion-button fill=\"outline\" size=\"small\" (click)=\"click(drive)\">View</ion-button-->\r\n    </ion-fab>\r\n\r\n    <ion-card-subtitle color='danger'><strong>Pending review</strong></ion-card-subtitle>\r\n    <ion-card-title>{{drive.date}}</ion-card-title>\r\n\r\n    <ion-card-content no-padding>\r\n      Your drive on <b>{{drive.date}}</b> with <b>{{drive.driver}}</b> from\r\n      <b>{{drive.start_location}}</b> (<b>{{drive.start_time}}</b>) to \r\n      <b>{{drive.end_location}}</b> (<b>{{drive.end_time}}</b>)\r\n      is pending review.\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n  <ion-card *ngFor=\"let form of getPendingMTRAC()\" padding>\r\n    <ion-fab vertical=\"top\" horizontal=\"end\">\r\n      <!--ion-fab-button size=\"small\" (click)=\"click(drive)\">View</ion-fab-button-->\r\n      <ion-fab-button size=\"small\" (click)=\"clickmtrac(form)\"><ion-icon name='share-alt'></ion-icon></ion-fab-button>\r\n      <!--ion-button fill=\"outline\" size=\"small\" (click)=\"click(drive)\">View</ion-button-->\r\n    </ion-fab>\r\n    <ion-card-title>Complete MT-RAC</ion-card-title>\r\n  </ion-card>\r\n\r\n\r\n\r\n  <ion-item class=\"headers\" text-center><ion-label style=\"margin-bottom: 0;\"><h1> Operators </h1></ion-label></ion-item>\r\n\r\n  <ion-card>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Driver</ion-label>\r\n        <ion-select id=\"driverlist\" interface=\"popover\" class=\"full-width-select\" value=\"ALL\">\r\n          <ion-select-option value=\"ALL\">ALL</ion-select-option>\r\n          <ion-select-option text-wrap *ngFor=\"let driver of database.current.all_drivers_of_commander\" value={{driver.email}} class=\"custom-font-size\">{{driver.email}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card>\r\n  <ion-card *ngFor=\"let driver of getDrivers()\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle><ion-icon name=\"person\" text-center (click)=\"showother()\"></ion-icon> <strong> {{driver.name}} ({{driver.email}})</strong></ion-card-subtitle>\r\n      <ion-card-subtitle (click)=\"showother()\">Last drive: {{driver.summary.most_recent_drive | date: \"dd/MM/yyyy hh:mm\"}}, {{driver.summary.most_recent_drive | daysAgo}} days ago</ion-card-subtitle>\r\n      <ion-label position=\"stacked\" *ngIf=\"checkAll()==true\"><h2>Certifications</h2></ion-label>\r\n      <ion-button *ngIf=\"checkAll()==false\" (click)=\"showEdit()\">Certifications <ion-icon name=\"settings\"></ion-icon></ion-button>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label color=\"success\"> OUV </ion-label>\r\n          </ion-col>\r\n          <ion-col offset-4>\r\n            <ion-label color=\"success\"> 5TON </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label *ngIf=\"driver.mss_certified == true\" color=\"success\" > MSS </ion-label>\r\n          </ion-col>\r\n          <ion-col offset-4 >\r\n            <ion-label *ngIf=\"driver.flb_certified == true\" color=\"success\"> FLB </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-label *ngIf=\"driver.belrex_certified == true\" color=\"success\"> BELREX </ion-label>\r\n          </ion-col>\r\n          <ion-col offset-4>\r\n            <ion-label *ngIf=\"driver.m3g_certified == true\" color=\"success\"> M3G </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-card *ngIf=\"checkEditDriverStatus()==true\">\r\n        <ion-list>\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">MSS</ion-label>\r\n            <ion-select id=\"mss\" interface=\"popover\" value={{driver.mss_certified}}>\r\n              <ion-select-option value=\"true\">Certified</ion-select-option>\r\n              <ion-select-option value=\"false\">Not Certified</ion-select-option>\r\n            </ion-select>\r\n            <ion-label position=\"stacked\">FLB</ion-label>\r\n            <ion-select id=\"flb\" interface=\"popover\" value={{driver.flb_certified}}>\r\n              <ion-select-option value=\"true\">Certified</ion-select-option>\r\n              <ion-select-option value=\"false\">Not Certified</ion-select-option>\r\n            </ion-select>\r\n            <ion-label position=\"stacked\">BELREX</ion-label>\r\n            <ion-select id=\"belrex\" interface=\"popover\" value={{driver.belrex_certified}}>\r\n              <ion-select-option value=\"true\">Certified</ion-select-option>\r\n              <ion-select-option value=\"false\">Not Certified</ion-select-option>\r\n            </ion-select>\r\n            <ion-label position=\"stacked\">M3G</ion-label>\r\n            <ion-select id=\"m3g\" interface=\"popover\" value={{driver.m3g_certified}}>\r\n              <ion-select-option value=\"true\">Certified</ion-select-option>\r\n              <ion-select-option value=\"false\">Not Certified</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-button (click)=\"updateCertfication(getDriver())\">save changes</ion-button>\r\n      </ion-card>\r\n    </ion-card-header>\r\n\r\n\r\n\r\n\r\n    <ion-card-content>\r\n      <ion-grid class=\"table\" no-padding>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"4\" class=\"bubble-text\" no-padding><ion-card no-padding (click)=\"showdrives()\">\r\n            <div class=\"ion-text-center\" style=\"width: 100%;\">\r\n              <ion-icon name=\"car\" size=\"large\" ></ion-icon><br>\r\n              <div class=\"shift_up\">Drives</div>\r\n              <div class=\"slide_num\">{{driver.summary.drive_count}}</div>\r\n              <ion-label *ngIf=\"checkDriveStatus()\">\r\n                <h6 *ngFor=\"let vehicle of driver.summary.most_recent_drive_by_vehicle_type | keyvalue\">\r\n                  {{vehicle.key}} : {{getDrivesbyVehicleType(vehicle.key, driver)}}\r\n                </h6>\r\n              </ion-label>\r\n            </div>\r\n          </ion-card></ion-col>\r\n\r\n          <ion-col size=\"4\" class=\"bubble-text\" no-padding><ion-card no-padding (click)=\"showmileage()\">\r\n            <div class=\"ion-text-center\" style=\"width: 100%;\">\r\n              <ion-icon name=\"speedometer\" size=\"large\"></ion-icon><br>\r\n              <div class=\"shift_up\">Mileage</div>\r\n              <div class=\"slide_num\">{{driver.summary.mileage_km}} km</div>\r\n              <ion-label *ngIf=\"checkMileageStatus()\">\r\n                <h6 *ngFor=\"let vehicle of driver.summary.most_recent_drive_by_vehicle_type | keyvalue\">\r\n                  {{vehicle.key}} : {{getMileagebyVehicleType(driver.summary.mileage_by_vehicle_type, vehicle.key)}}\r\n                </h6>\r\n              </ion-label>\r\n            </div>\r\n          </ion-card></ion-col>\r\n\r\n          <ion-col size=\"4\" class=\"bubble-text\" no-padding><ion-card no-padding>\r\n            <div class=\"ion-text-center\" style=\"width: 100%;\" (click)=\"showother()\">\r\n              <ion-icon name=\"clock\" size=\"large\"></ion-icon><br>\r\n              <div class=\"shift_up\">Time Driven</div>\r\n              <div class=\"slide_num\">{{driver.summary.duration_minutes / 60 | number : '1.0-1' }} hours</div>\r\n            </div>\r\n          </ion-card></ion-col>\r\n\r\n\r\n          <ion-row text-center style=\"padding: 0 10px\" *ngIf=\"checkDriveStatus() || checkMileageStatus() || checkOtherStatus()\" (click)=\"showother()\">\r\n            <ion-col>\r\n              average drive distance: <br/> {{driver.summary.mileage_km / driver.summary.drive_count | number : '1.0-1'}} km\r\n            </ion-col>\r\n            <ion-col>\r\n              average drive duration: <br/>{{driver.summary.duration_minutes / 60 / driver.summary.drive_count | number : '1.0-1'}} hours\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-row>\r\n        <ion-row text-center (click)=\"showother()\">\r\n          <ion-col text-center><ion-card padding text-center>\r\n            <ion-grid>\r\n              <ion-row><ion-col><ion-card-title text-center>\r\n                <strong>JIT Countdown</strong>\r\n              </ion-card-title></ion-col></ion-row>\r\n\r\n              <ion-row><ion-col><ion-card-subtitle>\r\n\r\n                <ion-grid><ion-row><ion-col><ion-label *ngIf=\"checkTimelefttoJIT(driver.summary.most_recent_drive) == false\" color='danger' text-center>\r\n                  <strong><h2>\r\n                    DO JIT NOW!\r\n                  </h2></strong>\r\n                </ion-label></ion-col></ion-row></ion-grid>\r\n\r\n                <ion-label>\r\n                  <ion-item *ngIf=\"checkTimelefttoJIT(driver.summary.most_recent_drive) == true\" text-center>\r\n                    <ion-grid><ion-row><ion-col><countdown [config]=\"{leftTime: getTimelefttoJIT(driver.summary.most_recent_drive), format: 'dd'}\"></countdown>\r\n                        <h6 style=\"padding-bottom: 5px\">days</h6></ion-col>\r\n                      <ion-col><countdown [config]=\"{leftTime: getTimelefttoJIT(driver.summary.most_recent_drive), format: 'HH'}\"></countdown>\r\n                        <h6 style=\"padding-bottom: 5px\">hrs</h6></ion-col>\r\n                      <ion-col><countdown [config]=\"{leftTime: getTimelefttoJIT(driver.summary.most_recent_drive), format: 'mm'}\"></countdown>\r\n                        <h6 style=\"padding-bottom: 5px\">mins</h6></ion-col>\r\n                      <ion-col><countdown [config]=\"{leftTime: getTimelefttoJIT(driver.summary.most_recent_drive), format: 'ss'}\"></countdown>\r\n                        <h6 style=\"padding-bottom: 5px\">sec</h6></ion-col></ion-row></ion-grid>\r\n                  </ion-item>\r\n                </ion-label>\r\n           </ion-card-subtitle></ion-col></ion-row></ion-grid>\r\n          </ion-card></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <!--<ion-grid  class=\"ion-no-padding\">\r\n        <ion-row text-center>\r\n          <ion-col text-center><ion-icon name=\"car\"></ion-icon> <br> Total Drives: <br> {{driver.summary.drive_count}}</ion-col>\r\n          <ion-col text-center><ion-icon name=\"speedometer\"></ion-icon> <br> Total Mileage:<br> {{driver.summary.mileage_km}} KM</ion-col>\r\n          <ion-col text-center><ion-icon name=\"clock\"></ion-icon> <br> Time Driven: <br> {{driver.summary.duration_minutes / 60 | number : '1.0-1' }} hours</ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>-->\r\n\r\n      <ion-item *ngFor=\"let vehicle of driver.summary.most_recent_drive_by_vehicle_type | keyvalue\" (click)=\"showother()\">\r\n\r\n\r\n          <ion-col *ngIf=\"checkOtherStatus()\" (click)=\"showother()\">\r\n            <ion-label *ngIf=\"checkOtherStatus()\">\r\n              <h3 class=\"underline\" *ngIf=\"checkOperatorCurrencyValid(vehicle.key,driver.summary.most_recent_drive_by_vehicle_type[vehicle.key])\">{{vehicle.key}}</h3>\r\n            </ion-label >\r\n            <ion-label  color='danger' *ngIf=\"checkOtherStatus()\">\r\n               <h3 class=\"underline\" *ngIf=\"checkOperatorCurrencyInvalid(vehicle.key,driver.summary.most_recent_drive_by_vehicle_type[vehicle.key])\">{{vehicle.key}}</h3>\r\n            </ion-label>\r\n          \r\n           Last Drive: {{driver.summary.most_recent_drive_by_vehicle_type[vehicle.key] | date: \"dd/MM/yyyy\"}}\r\n           ({{driver.summary.most_recent_drive_by_vehicle_type[vehicle.key] | daysAgo}} days ago)</ion-col>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".div {\n  text-align: center;\n  border: 6px solid black; }\n\n.vertical-align-content > * {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important; }\n\n.full-width-select {\n  width: 100%;\n  max-width: 100%; }\n\n.custom-font-size {\n  font-size: 0.8em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbWFuZGVyL0M6XFxVc2Vyc1xcUnVpXFxBbmRyb2lkU3R1ZGlvUHJvamVjdHNcXEVuZ2luZWVyc0xvZ2Jvb2syL3NyY1xcYXBwXFxwYWdlc1xcY29tbWFuZGVyXFxjb21tYW5kZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQUUzQjtFQUVLLCtCQUF1QjtFQUF2Qix3QkFBdUI7RUFDdkIsZ0NBQStCO0VBQy9CLG9DQUE2QjtVQUE3Qiw4QkFBNkIsRUFBQTs7QUFHbEM7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVqQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tbWFuZGVyL2NvbW1hbmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgYmxhY2s7XHJcbn1cclxuLnZlcnRpY2FsLWFsaWduLWNvbnRlbnQgPiAqXHJcbntcclxuICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxuICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnVsbC13aWR0aC1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uY3VzdG9tLWZvbnQtc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59Il19 */");

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
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");








let CommanderPage = class CommanderPage {
    constructor(navCtrl, database, platform, geolocation, toastController) {
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
            var m3gc = document.getElementById("m3g").value.toLowerCase() === 'true';
            driver.mss_certified = mssc;
            driver.flb_certified = flbc;
            driver.belrex_certified = belrexc;
            driver.m3g_certified = m3gc;
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
        if (this.database.current.user.is_admin == true) {
            return drivers == "ALL";
        }
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
    checkEditDriverStatus() {
        if (this.database.current.user.is_admin == true) {
            return this.drivereditstatus;
        }
        return false;
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
    getDrivesbyVehicleType(vehicle, drvr) {
        for (var type of _services_database_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypes"]) {
            var drv = 0;
            if (type == vehicle) {
                var dhis = this.database.current.drive_history.filter((drive) => { return drive.driver === drvr.email; });
                for (let trip of dhis) {
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
    getPendingMTRAC() {
        return this.database.current.mtrac_history.filter((form) => {
            if (this.database.current.user.email === form.commander) {
                return form.status === 'pending';
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
    clickmtrac(form) {
        this.database.current.mtrac_to_edit = form;
        console.log(`> Navigating to mtracPage for mtrac id=${form.id}`);
        this.navCtrl.navigateForward(['/mtrac']);
    }
};
CommanderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
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
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], CommanderPage);



/***/ })

}]);
//# sourceMappingURL=pages-commander-commander-module-es2015.js.map