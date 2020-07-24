(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-CmdHistory-CmdHistory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdHistory/CmdHistory.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdHistory/CmdHistory.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar>\n    <ion-title>History</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button left routerLink=\"/\" routerDirection=\"root\" fill=\"clear\" slot=\"primary\">\n        Logout<ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-card>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">Driver</ion-label>\n      <ion-select id=\"drvr\" interface=\"popover\" value=\"ALL\" class=\"full-width-select\">\n        <ion-select-option value=\"ALL\">ALL</ion-select-option>\n        <ion-select-option text-wrap *ngFor=\"let driver of database.current.all_drivers_of_commander\" value={{driver.email}} class=\"custom-font-size\">{{driver.email}}</ion-select-option>\n      </ion-select>\n      <ion-label position=\"stacked\">Vehicle Type</ion-label>\n        <ion-select id=\"vehitype\" interface=\"popover\" value=\"ALL\" class=\"full-width-select\">\n          <ion-select-option value=\"ALL\">ALL</ion-select-option>\n          <ion-select-option text-wrap *ngFor =\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\" value={{vehicle.key}} class=\"custom-font-size\">{{vehicle.key}}</ion-select-option>\n        </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<ion-content>\n\n  <!-- Month/date Selector (Sticky header) -->\n\n  <ion-item-divider sticky>\n    <ion-grid>\n      <ion-row class=\"vertical-align-content\">\n        <ion-col no-padding text-center size=3>\n            <ion-button size=\"small\" (click)=\"incrementFilterPeriod(-1)\"><ion-icon name=\"return-left\"></ion-icon></ion-button>\n        </ion-col>\n\n        <ion-col no-padding text-center>\n          <h4>{{getFilterPeriodString()}}</h4>\n        </ion-col>\n\n        <ion-col no-padding text-center size=3>\n            <ion-button size=\"small\" (click)=\"incrementFilterPeriod(+1)\"><ion-icon name=\"return-right\"></ion-icon></ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-item-divider>\n\n  <div style=\"display: block\">\n    <canvas baseChart\n                [data]=\"chartData\"\n                [labels]=\"chartLabels\"\n                [chartType]=\"chartType\"\n                [colors]=\"chartColors\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n  </div>\n\n  <ion-card *ngFor=\"let trip of getDrives()\">\n    <br>\n    <app-drive-view expandHeight='150px' expandWidth='100px' [drive]=\"trip\"></app-drive-view>\n  </ion-card>\n\n<!--\n    <ion-row >\n      <ion-col align=\"center\">\n      <ion-card >\n    <ion-card-header>\n      <ion-card-subtitle>\n          <ion-item class=\"card\">\n          <ion-label position=\"floating\"></ion-label>\n          <ion-input disabled type=\"date\" name=\"text_drivedate\" color=\"success\">  </ion-input>\n            </ion-item>\n        </ion-card-subtitle>\n      <ion-card-title>\n        <ion-item class=\"card\" >\n          <ion-label color=\"success\" position=\"floating\">VehicleType</ion-label>\n          <ion-input color=\"success\" disabled type=\"number\" name=\"text_drivevehicletype\">  </ion-input>\n            </ion-item>\n    </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <ion-item class=\"card\">\n          <ion-label color=\"success\" position=\"floating\">Total Time Driven</ion-label>\n          <ion-input disabled type=\"number\" name=\"text_driveduration\" color=\"success\">  </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item class=\"card\">\n          <ion-label color=\"success\" position=\"floating\">Total Mileage</ion-label>\n          <ion-input disabled type=\"number\" name=\"text_drivemileage\" color=\"success\">  </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n      </ion-col>\n    </ion-row>\n-->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/CmdHistory/CmdHistory.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/CmdHistory/CmdHistory.module.ts ***!
  \*******************************************************/
/*! exports provided: CmdHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmdHistoryPageModule", function() { return CmdHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _CmdHistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CmdHistory.page */ "./src/app/pages/CmdHistory/CmdHistory.page.ts");
/* harmony import */ var _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../drive-view/drive-view.module */ "./src/app/drive-view/drive-view.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");









const routes = [
    {
        path: '',
        component: _CmdHistory_page__WEBPACK_IMPORTED_MODULE_6__["CmdHistoryPage"]
    }
];
let CmdHistoryPageModule = class CmdHistoryPageModule {
};
CmdHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__["DriveViewModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"]
        ],
        declarations: [_CmdHistory_page__WEBPACK_IMPORTED_MODULE_6__["CmdHistoryPage"]
        ]
    })
], CmdHistoryPageModule);



/***/ }),

/***/ "./src/app/pages/CmdHistory/CmdHistory.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/CmdHistory/CmdHistory.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vertical-align-content > * {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.full-width-select {\n  width: 100%;\n  max-width: 100%;\n}\n\n.custom-font-size {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXdpc3RoYW0vR2l0SHViL0VuZ2luZWVyc0xvZ2Jvb2syL3NyYy9hcHAvcGFnZXMvQ21kSGlzdG9yeS9DbWRIaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvQ21kSGlzdG9yeS9DbWRIaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVLLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDQUw7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0ksZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0NtZEhpc3RvcnkvQ21kSGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWwtYWxpZ24tY29udGVudCA+ICpcbntcbiAgICAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIhaW1wb3J0YW50OyAgLy8gdmVydGljYWwgYWxpZ25tZW50XG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7ICAvLyBob3Jpem9udGFsIGFsaWdubWVudFxufVxuLmZ1bGwtd2lkdGgtc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5jdXN0b20tZm9udC1zaXplIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xufSIsIi52ZXJ0aWNhbC1hbGlnbi1jb250ZW50ID4gKiB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmZ1bGwtd2lkdGgtc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1mb250LXNpemUge1xuICBmb250LXNpemU6IDAuOGVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/CmdHistory/CmdHistory.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/CmdHistory/CmdHistory.page.ts ***!
  \*****************************************************/
/*! exports provided: CmdHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmdHistoryPage", function() { return CmdHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");



 // DateTime utility, See http://zetcode.com/javascript/dayjs/;

let CmdHistoryPage = class CmdHistoryPage {
    constructor(database, geolocation) {
        this.database = database;
        this.geolocation = geolocation;
        this.select_month = 0;
        this.select_year = 0;
        // Build Doughnut chart of mileage per VehicleType
        this.chartLabels = _services_database_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypes"];
        this.chartData = [0, 0, 0, 0];
        this.chartType = 'doughnut';
        this.chartColors = [{ backgroundColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ] }];
    }
    ngOnInit() {
        this.buildChart();
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            if ((parseFloat(data.coords.latitude.toFixed(9)), parseFloat(data.coords.longitude.toFixed(9))) != (this.database.current.user.location.lat, this.database.current.user.location.lng)) {
                this.database.current.user.location = { lat: parseFloat(data.coords.latitude.toFixed(9)), lng: parseFloat(data.coords.longitude.toFixed(9)) };
                console.log(this.database.current.user.location);
                console.log("write");
                this.database.write('user', this.database.current.user.email, this.database.current.user);
            }
        });
    }
    getDrives() {
        var drives = this.database.current.drive_history;
        var vtype = document.getElementById("vehitype").value;
        var drvr = document.getElementById("drvr").value;
        // 4 cases
        // if vtype = X and drvr = X
        // if vtype = ALL and drvr = X
        // if vtype = X and drvr = ALL
        // if vtype = ALL and drvr = ALL
        if (!this.select_month && !this.select_year) {
            // if vtype = X and drvr = X
            if (vtype != "ALL" && drvr != "ALL") {
                var r = drives.filter((drive) => drive.vehicle_type == vtype);
                return r.filter((drive) => drive.driver == drvr);
            }
            // if vtype = ALL and drvr = X
            else if (vtype == "ALL" && drvr != "ALL") {
                return drives.filter((drive) => drive.driver == drvr);
            }
            // if vtype = X and drvr = ALL
            else if (vtype != "ALL" && drvr == "ALL") {
                return drives.filter((drive) => drive.vehicle_type == vtype);
            }
            // if vtype = ALL and drvr = ALL
            return drives;
        }
        else {
            // if vtype = X and drvr = X
            if (vtype != "ALL" && drvr != "ALL") {
                var r = drives.filter((drive) => drive.vehicle_type == vtype);
                var r = r.filter((drive) => drive.driver == drvr);
                return r.filter((drive) => {
                    var elem = drive.date.split("-");
                    return (!this.select_year || parseInt(elem[0]) == this.select_year)
                        && (!this.select_month || parseInt(elem[1]) == this.select_month);
                });
            }
            // if vtype = ALL and drvr = X
            else if (vtype == "ALL" && drvr != "ALL") {
                var r = drives.filter((drive) => drive.driver == drvr);
                return r.filter((drive) => {
                    var elem = drive.date.split("-");
                    return (!this.select_year || parseInt(elem[0]) == this.select_year)
                        && (!this.select_month || parseInt(elem[1]) == this.select_month);
                });
            }
            // if vtype = X and drvr = ALL
            else if (vtype != "ALL" && drvr == "ALL") {
                var r = drives.filter((drive) => drive.vehicle_type == vtype);
                return r.filter((drive) => {
                    var elem = drive.date.split("-");
                    return (!this.select_year || parseInt(elem[0]) == this.select_year)
                        && (!this.select_month || parseInt(elem[1]) == this.select_month);
                });
            }
            // if vtype = ALL and drvr = ALL
            return drives.filter((drive) => {
                var elem = drive.date.split("-");
                return (!this.select_year || parseInt(elem[0]) == this.select_year)
                    && (!this.select_month || parseInt(elem[1]) == this.select_month);
            });
        }
    }
    /*public getDrives() : Drive[] {
  
      var drives = this.database.current.drive_history;
  
      if (!this.select_month && !this.select_year) return drives; // No filter
  
      return drives.filter( (drive) => {
        var elem = drive.date.split("-");
        return (!this.select_year||parseInt(elem[0])==this.select_year)
          && (!this.select_month||parseInt(elem[1])==this.select_month);
      });
    }*/
    getFilterPeriodString() {
        if (this.select_month == 0 || this.select_year == 0) {
            return "All";
        }
        else {
            const dt = dayjs__WEBPACK_IMPORTED_MODULE_3__(new Date(this.select_year, this.select_month - 1, 1)); // months in dayjs, Jan=0
            return dt.format("MMMM, YYYY");
        }
    }
    incrementFilterPeriod(delta) {
        const today = dayjs__WEBPACK_IMPORTED_MODULE_3__();
        var changed = true;
        if (delta == -1) {
            if (!this.select_month || !this.select_year) {
                // Current month/year
                this.select_month = today.month() + 1;
                this.select_year = today.year();
            }
            else {
                this.select_month--;
                if (this.select_month == 0) {
                    // Roll back to previous year
                    this.select_year--;
                    this.select_month = 12;
                }
            }
        }
        else {
            if (!this.select_month || !this.select_year) {
                // Can't increment
                changed = false;
            }
            else {
                // When incrementing beyond current month/year, select "all"
                if (this.select_year == today.year() && (this.select_month - 1) == today.month()) {
                    this.select_year = this.select_month = 0;
                }
                else {
                    this.select_month++;
                    if (this.select_month == 13) {
                        // Roll over to next year
                        this.select_year++;
                        this.select_month = 1;
                    }
                }
            }
        }
        if (changed)
            this.buildChart();
    }
    buildChart() {
        var count = Array(_services_database_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypes"].length).fill(0);
        this.getDrives().map((trip) => {
            var valid_type = false;
            for (let i = 0; i < _services_database_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypes"].length; i++) {
                if (trip.vehicle_type === _services_database_service__WEBPACK_IMPORTED_MODULE_2__["VehicleTypes"][i]) {
                    count[i] += this.database.distance(trip);
                    valid_type = true;
                }
            }
            if (!valid_type) {
                console.log(`### Error: Invalid vehicle type: ${trip.vehicle_type} in ${trip.id}`);
            }
        });
        //console.log(`>buildChart() = ${count}`);
        this.chartData = count;
    }
    chartClicked(e) {
        //console.log(e);
    }
    chartHovered(e) {
        //console.log(e);
    }
};
CmdHistoryPage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] }
];
CmdHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cmd_history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./CmdHistory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdHistory/CmdHistory.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./CmdHistory.page.scss */ "./src/app/pages/CmdHistory/CmdHistory.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]])
], CmdHistoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-CmdHistory-CmdHistory-module-es2015.js.map