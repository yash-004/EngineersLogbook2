function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar>\n    <ion-title>History</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button left routerLink=\"/\" routerDirection=\"root\" fill=\"clear\" slot=\"primary\">\n        Logout<ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-card>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"stacked\">Vehicle Type</ion-label>\n      <ion-select id=\"vehitype\" interface=\"popover\" value=\"ALL\">\n        <ion-select-option value=\"ALL\">ALL</ion-select-option>\n        <ion-select-option *ngFor =\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\" value={{vehicle.key}} class=\"custom-font-size\">{{vehicle.key}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-card>\n\n<ion-content>\n\n  <!-- Month/date Selector (Sticky header) -->\n\n  <ion-item-divider sticky>\n    <ion-grid>\n      <ion-row class=\"vertical-align-content\">\n        <ion-col no-padding text-center size=3>\n            <ion-button size=\"small\" (click)=\"incrementFilterPeriod(-1)\"><ion-icon name=\"return-left\"></ion-icon></ion-button>\n        </ion-col>\n\n        <ion-col no-padding text-center>\n          <h4>{{getFilterPeriodString()}}</h4>\n        </ion-col>\n\n        <ion-col no-padding text-center size=3>\n            <ion-button size=\"small\" (click)=\"incrementFilterPeriod(+1)\"><ion-icon name=\"return-right\"></ion-icon></ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-item-divider>\n\n  <div style=\"display: block\">\n    <canvas baseChart\n                [data]=\"chartData\"\n                [labels]=\"chartLabels\"\n                [chartType]=\"chartType\"\n                [colors]=\"chartColors\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n  </div>\n\n  <ion-card>\n      <div class=\"ion-text-center\" style=\"width: 100%;\">\n        <ion-icon name=\"speedometer\" size=\"small\"></ion-icon>\n        <ion-label class=\"slide_num\" *ngIf=\"getFilterPeriodString()=='All'\"> Total Mileage: {{getMileage()}} km</ion-label>\n        <ion-label *ngIf=\"getFilterPeriodString()!='All'\" class=\"slide_num\"> {{getFilterPeriodString()}} Total Mileage: {{getMileage()}} km</ion-label><br>\n        <ion-col *ngFor=\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\">\n          {{vehicle.key}} : {{getMileagebyVehicleType(vehicle.key)}}\n        </ion-col>\n      </div>\n  </ion-card>\n\n  <ion-card *ngFor=\"let trip of getDrives()\">\n    <br>\n    <app-drive-view expandHeight='150px' expandWidth='100px' [drive]=\"trip\"></app-drive-view>\n  </ion-card>\n\n</ion-content>\n<!--\n    <ion-row >\n      <ion-col align=\"center\">\n      <ion-card >\n    <ion-card-header>\n      <ion-card-subtitle>\n          <ion-item class=\"card\">\n          <ion-label position=\"floating\"></ion-label>\n          <ion-input disabled type=\"date\" name=\"text_drivedate\" color=\"success\">  </ion-input>\n            </ion-item>\n        </ion-card-subtitle>\n      <ion-card-title>\n        <ion-item class=\"card\" >\n          <ion-label color=\"success\" position=\"floating\">VehicleType</ion-label>\n          <ion-input color=\"success\" disabled type=\"number\" name=\"text_drivevehicletype\">  </ion-input>\n            </ion-item>\n    </ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col >\n            <ion-item class=\"card\">\n          <ion-label color=\"success\" position=\"floating\">Total Time Driven</ion-label>\n          <ion-input disabled type=\"number\" name=\"text_driveduration\" color=\"success\">  </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item class=\"card\">\n          <ion-label color=\"success\" position=\"floating\">Total Mileage</ion-label>\n          <ion-input disabled type=\"number\" name=\"text_drivemileage\" color=\"success\">  </ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n      </ion-col>\n    </ion-row>\n-->\n\n";
    /***/
  },

  /***/
  "./src/app/pages/history/history.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/history/history.module.ts ***!
    \*************************************************/

  /*! exports provided: HistoryPageModule */

  /***/
  function srcAppPagesHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
      return HistoryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/history/history.page.ts");
    /* harmony import */


    var _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../drive-view/drive-view.module */
    "./src/app/drive-view/drive-view.module.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");

    var routes = [{
      path: '',
      component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }];

    var HistoryPageModule = function HistoryPageModule() {
      _classCallCheck(this, HistoryPageModule);
    };

    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__["DriveViewModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"]],
      declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })], HistoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/history/history.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/history/history.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vertical-align-content > * {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.custom-font-size {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXdpc3RoYW0vR2l0SHViL0VuZ2luZWVyc0xvZ2Jvb2syL3NyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVLLCtCQUFBO0VBQUEsd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO1VBQUEsOEJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0FDQUw7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbC1hbGlnbi1jb250ZW50ID4gKlxue1xuICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICAgYWxpZ24tY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7ICAvLyB2ZXJ0aWNhbCBhbGlnbm1lbnRcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgIC8vIGhvcml6b250YWwgYWxpZ25tZW50XG59XG4uY3VzdG9tLWZvbnQtc2l6ZSB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn0iLCIudmVydGljYWwtYWxpZ24tY29udGVudCA+ICoge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tZm9udC1zaXplIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/history/history.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/history/history.page.ts ***!
    \***********************************************/

  /*! exports provided: HistoryPage */

  /***/
  function srcAppPagesHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
      return HistoryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/database.service */
    "./src/app/services/database.service.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! chartjs-plugin-labels */
    "./node_modules/chartjs-plugin-labels/src/chartjs-plugin-labels.js");
    /* harmony import */


    var chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! chartjs-chart-radial-gauge */
    "./node_modules/chartjs-chart-radial-gauge/build/Chart.RadialGauge.cjs.js");
    /* harmony import */


    var chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! chartjs-tsgauge */
    "./node_modules/chartjs-tsgauge/Gauge.js");
    /* harmony import */


    var chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js"); // DateTime utility, See http://zetcode.com/javascript/dayjs/


    var HistoryPage =
    /*#__PURE__*/
    function () {
      function HistoryPage(database, geolocation) {
        _classCallCheck(this, HistoryPage);

        this.database = database;
        this.geolocation = geolocation;
        this.select_month = 0;
        this.select_year = 0; // Build Doughnut chart of mileage per VehicleType

        this.chartLabels = Object.keys(this.database.current.stats.most_recent_drive_by_vehicle_type);
        this.chartData = [0, 0, 0, 0];
        this.chartType = 'doughnut';
        this.chartColors = [{
          backgroundColor: ["rgba(255,99,132,0.2)", "rgba(54, 162, 235,0.2)", "rgba(255, 206, 86,0.2)", "rgba(75, 192, 192,0.2)", "rgba(153, 102, 255,0.2)"],
          borderColor: ["rgba(255,99,132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"]
        }];
      }

      _createClass(HistoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.buildChart();
          var watch = this.geolocation.watchPosition();
          watch.subscribe(function (data) {
            if ((parseFloat(data.coords.latitude.toFixed(9)), parseFloat(data.coords.longitude.toFixed(9))) != (_this.database.current.user.location.lat, _this.database.current.user.location.lng)) {
              _this.database.current.user.location = {
                lat: parseFloat(data.coords.latitude.toFixed(9)),
                lng: parseFloat(data.coords.longitude.toFixed(9))
              };
              console.log(_this.database.current.user.location);
              console.log("write");

              _this.database.write('user', _this.database.current.user.email, _this.database.current.user);
            }
          });
        }
      }, {
        key: "getMileage",
        value: function getMileage() {
          var mileage = 0;
          var drives = this.getDrives();
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = drives[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var d = _step.value;
              mileage += d.end_odometer - d.start_odometer;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return mileage;
        }
      }, {
        key: "getMileagebyVehicleType",
        value: function getMileagebyVehicleType(vehicle) {
          var mileage = 0;
          var drives = this.getDrives();
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = drives[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var d = _step2.value;

              if (d.vehicle_type == vehicle) {
                mileage += d.end_odometer - d.start_odometer;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return mileage;
        }
      }, {
        key: "getDrives",
        value: function getDrives() {
          var _this2 = this;

          var drives = this.database.current.drive_history;
          var vtype = document.getElementById("vehitype").value;

          if (!this.select_month && !this.select_year) {
            if (vtype != "ALL") {
              return drives.filter(function (drive) {
                return drive.vehicle_type == vtype;
              });
            }

            return drives;
          } else {
            if (vtype != "ALL") {
              var a = drives.filter(function (drive) {
                return drive.vehicle_type == vtype;
              });
              return a.filter(function (drive) {
                var elem = drive.date.split("-");
                return (!_this2.select_year || parseInt(elem[0]) == _this2.select_year) && (!_this2.select_month || parseInt(elem[1]) == _this2.select_month);
              });
            }

            return drives.filter(function (drive) {
              var elem = drive.date.split("-");
              return (!_this2.select_year || parseInt(elem[0]) == _this2.select_year) && (!_this2.select_month || parseInt(elem[1]) == _this2.select_month);
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

      }, {
        key: "getFilterPeriodString",
        value: function getFilterPeriodString() {
          if (this.select_month == 0 || this.select_year == 0) {
            return "All";
          } else {
            var dt = dayjs__WEBPACK_IMPORTED_MODULE_3__(new Date(this.select_year, this.select_month - 1, 1)); // months in dayjs, Jan=0

            return dt.format("MMMM, YYYY");
          }
        }
      }, {
        key: "incrementFilterPeriod",
        value: function incrementFilterPeriod(delta) {
          var today = dayjs__WEBPACK_IMPORTED_MODULE_3__();
          var changed = true;

          if (delta == -1) {
            if (!this.select_month || !this.select_year) {
              // Current month/year
              this.select_month = today.month() + 1;
              this.select_year = today.year();
            } else {
              this.select_month--;

              if (this.select_month == 0) {
                // Roll back to previous year
                this.select_year--;
                this.select_month = 12;
              }
            }
          } else {
            if (!this.select_month || !this.select_year) {
              // Can't increment
              changed = false;
            } else {
              // When incrementing beyond current month/year, select "all"
              if (this.select_year == today.year() && this.select_month - 1 == today.month()) {
                this.select_year = this.select_month = 0;
              } else {
                this.select_month++;

                if (this.select_month == 13) {
                  // Roll over to next year
                  this.select_year++;
                  this.select_month = 1;
                }
              }
            }
          }

          if (changed) this.buildChart();
        }
      }, {
        key: "buildChart",
        value: function buildChart() {
          var _this3 = this;

          var count = Array(this.chartLabels.length).fill(0);
          this.getDrives().map(function (trip) {
            var valid_type = false;

            for (var i = 0; i < _this3.chartLabels.length; i++) {
              if (trip.vehicle_type === _this3.chartLabels[i]) {
                count[i] += _this3.database.distance(trip);
                valid_type = true;
              }
            }

            if (!valid_type) {
              console.log("### Error: Invalid vehicle type: ".concat(trip.vehicle_type, " in ").concat(trip.id));
            }
          }); //console.log(`>buildChart() = ${count}`);

          this.chartData = count;
        }
      }, {
        key: "chartClicked",
        value: function chartClicked(e) {//console.log(e);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(e) {//console.log(e);
        }
      }]);

      return HistoryPage;
    }();

    HistoryPage.ctorParameters = function () {
      return [{
        type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]
      }];
    };

    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.page.scss */
      "./src/app/pages/history/history.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]])], HistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-history-history-module-es5.js.map