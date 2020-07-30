(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar>\r\n    <ion-title>History</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button left routerLink=\"/\" routerDirection=\"root\" fill=\"clear\" slot=\"primary\">\r\n        Logout<ion-icon name=\"log-out\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-card>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Vehicle Type</ion-label>\r\n      <ion-select id=\"vehitype\" interface=\"popover\" value=\"ALL\">\r\n        <ion-select-option value=\"ALL\">ALL</ion-select-option>\r\n        <ion-select-option *ngFor =\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\" value={{vehicle.key}} class=\"custom-font-size\">{{vehicle.key}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-card>\r\n\r\n<ion-content>\r\n\r\n  <!-- Month/date Selector (Sticky header) -->\r\n\r\n  <ion-item-divider sticky>\r\n    <ion-grid>\r\n      <ion-row class=\"vertical-align-content\">\r\n        <ion-col no-padding text-center size=3>\r\n            <ion-button size=\"small\" (click)=\"incrementFilterPeriod(-1)\"><ion-icon name=\"return-left\"></ion-icon></ion-button>\r\n        </ion-col>\r\n\r\n        <ion-col no-padding text-center>\r\n          <h4>{{getFilterPeriodString()}}</h4>\r\n        </ion-col>\r\n\r\n        <ion-col no-padding text-center size=3>\r\n            <ion-button size=\"small\" (click)=\"incrementFilterPeriod(+1)\"><ion-icon name=\"return-right\"></ion-icon></ion-button>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item-divider>\r\n\r\n  <div style=\"display: block\">\r\n    <canvas baseChart\r\n                [data]=\"chartData\"\r\n                [labels]=\"chartLabels\"\r\n                [chartType]=\"chartType\"\r\n                [colors]=\"chartColors\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\"></canvas>\r\n  </div>\r\n\r\n  <ion-card>\r\n      <div class=\"ion-text-center\" style=\"width: 100%;\">\r\n        <ion-icon name=\"speedometer\" size=\"small\"></ion-icon>\r\n        <ion-label class=\"slide_num\" *ngIf=\"getFilterPeriodString()=='All'\"> Total Mileage: {{getMileage()}} km</ion-label>\r\n        <ion-label *ngIf=\"getFilterPeriodString()!='All'\" class=\"slide_num\"> {{getFilterPeriodString()}} Total Mileage: {{getMileage()}} km</ion-label><br>\r\n        <ion-col *ngFor=\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\">\r\n          {{vehicle.key}} : {{getMileagebyVehicleType(vehicle.key)}}\r\n        </ion-col>\r\n      </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngFor=\"let trip of getDrives()\">\r\n    <br>\r\n    <app-drive-view expandHeight='150px' expandWidth='100px' [drive]=\"trip\"></app-drive-view>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n<!--\r\n    <ion-row >\r\n      <ion-col align=\"center\">\r\n      <ion-card >\r\n    <ion-card-header>\r\n      <ion-card-subtitle>\r\n          <ion-item class=\"card\">\r\n          <ion-label position=\"floating\"></ion-label>\r\n          <ion-input disabled type=\"date\" name=\"text_drivedate\" color=\"success\">  </ion-input>\r\n            </ion-item>\r\n        </ion-card-subtitle>\r\n      <ion-card-title>\r\n        <ion-item class=\"card\" >\r\n          <ion-label color=\"success\" position=\"floating\">VehicleType</ion-label>\r\n          <ion-input color=\"success\" disabled type=\"number\" name=\"text_drivevehicletype\">  </ion-input>\r\n            </ion-item>\r\n    </ion-card-title>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      \r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col >\r\n            <ion-item class=\"card\">\r\n          <ion-label color=\"success\" position=\"floating\">Total Time Driven</ion-label>\r\n          <ion-input disabled type=\"number\" name=\"text_driveduration\" color=\"success\">  </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"card\">\r\n          <ion-label color=\"success\" position=\"floating\">Total Mileage</ion-label>\r\n          <ion-input disabled type=\"number\" name=\"text_drivemileage\" color=\"success\">  </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n-->\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/history/history.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");
/* harmony import */ var _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../drive-view/drive-view.module */ "./src/app/drive-view/drive-view.module.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");









const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }
];
let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__["DriveViewModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"]
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
        ]
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/pages/history/history.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vertical-align-content > * {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important; }\n\n.custom-font-size {\n  font-size: 0.8em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yeS9DOlxcVXNlcnNcXFJ1aVxcQW5kcm9pZFN0dWRpb1Byb2plY3RzXFxFbmdpbmVlcnNMb2dib29rMi9zcmNcXGFwcFxccGFnZXNcXGhpc3RvcnlcXGhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUssK0JBQXVCO0VBQXZCLHdCQUF1QjtFQUN2QixnQ0FBK0I7RUFDL0Isb0NBQTZCO1VBQTdCLDhCQUE2QjtFQUM3QixtQ0FBa0M7VUFBbEMsa0NBQWtDLEVBQUE7O0FBRXZDO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsLWFsaWduLWNvbnRlbnQgPiAqXHJcbntcclxuICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcclxuICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIhaW1wb3J0YW50OyAgLy8gdmVydGljYWwgYWxpZ25tZW50XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgIC8vIGhvcml6b250YWwgYWxpZ25tZW50XHJcbn1cclxuLmN1c3RvbS1mb250LXNpemUge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/history/history.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chartjs-plugin-labels */ "./node_modules/chartjs-plugin-labels/src/chartjs-plugin-labels.js");
/* harmony import */ var chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chartjs-chart-radial-gauge */ "./node_modules/chartjs-chart-radial-gauge/build/Chart.RadialGauge.cjs.js");
/* harmony import */ var chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chartjs-tsgauge */ "./node_modules/chartjs-tsgauge/Gauge.js");
/* harmony import */ var chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");



 // DateTime utility, See http://zetcode.com/javascript/dayjs/




let HistoryPage = class HistoryPage {
    constructor(database, geolocation) {
        this.database = database;
        this.geolocation = geolocation;
        this.select_month = 0;
        this.select_year = 0;
        // Build Doughnut chart of mileage per VehicleType
        this.chartLabels = Object.keys(this.database.current.stats.most_recent_drive_by_vehicle_type);
        this.chartData = [0, 0, 0, 0];
        this.chartType = 'doughnut';
        this.chartColors = [{ backgroundColor: [
                    "rgba(255,99,132,0.2)",
                    "rgba(54, 162, 235,0.2)",
                    "rgba(255, 206, 86,0.2)",
                    "rgba(75, 192, 192,0.2)",
                    "rgba(153, 102, 255,0.2)",
                ],
                borderColor: [
                    "rgba(255,99,132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                ]
            }];
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
    getMileage() {
        var mileage = 0;
        var drives = this.getDrives();
        for (var d of drives) {
            mileage += d.end_odometer - d.start_odometer;
        }
        return mileage;
    }
    getMileagebyVehicleType(vehicle) {
        var mileage = 0;
        var drives = this.getDrives();
        for (var d of drives) {
            if (d.vehicle_type == vehicle) {
                mileage += d.end_odometer - d.start_odometer;
            }
        }
        return mileage;
    }
    getDrives() {
        var drives = this.database.current.drive_history;
        var vtype = document.getElementById("vehitype").value;
        if (!this.select_month && !this.select_year) {
            if (vtype != "ALL") {
                return drives.filter((drive) => drive.vehicle_type == vtype);
            }
            return drives;
        }
        else {
            if (vtype != "ALL") {
                var a = drives.filter((drive) => drive.vehicle_type == vtype);
                return a.filter((drive) => {
                    var elem = drive.date.split("-");
                    return (!this.select_year || parseInt(elem[0]) == this.select_year)
                        && (!this.select_month || parseInt(elem[1]) == this.select_month);
                });
            }
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
        var count = Array(this.chartLabels.length).fill(0);
        this.getDrives().map((trip) => {
            var valid_type = false;
            for (let i = 0; i < this.chartLabels.length; i++) {
                if (trip.vehicle_type === this.chartLabels[i]) {
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
HistoryPage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] }
];
HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]])
], HistoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module-es2015.js.map