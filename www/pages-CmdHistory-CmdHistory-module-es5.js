function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-CmdHistory-CmdHistory-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdHistory/CmdHistory.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdHistory/CmdHistory.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCmdHistoryCmdHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar>\r\n    <ion-title>History</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button left routerLink=\"/\" routerDirection=\"root\" fill=\"clear\" slot=\"primary\">\r\n        Logout<ion-icon name=\"log-out\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-card>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Driver</ion-label>\r\n      <ion-select id=\"drvr\" interface=\"popover\" value=\"ALL\" class=\"full-width-select\">\r\n        <ion-select-option value=\"ALL\">ALL</ion-select-option>\r\n        <ion-select-option text-wrap *ngFor=\"let driver of database.current.all_drivers_of_commander\" value={{driver.email}} class=\"custom-font-size\">{{driver.email}}</ion-select-option>\r\n      </ion-select>\r\n      <ion-label position=\"stacked\">Vehicle Type</ion-label>\r\n        <ion-select id=\"vehitype\" interface=\"popover\" value=\"ALL\" class=\"full-width-select\">\r\n          <ion-select-option value=\"ALL\">ALL</ion-select-option>\r\n          <ion-select-option text-wrap *ngFor =\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\" value={{vehicle.key}} class=\"custom-font-size\">{{vehicle.key}}</ion-select-option>\r\n        </ion-select>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-card>\r\n\r\n<ion-content>\r\n\r\n  <!-- Month/date Selector (Sticky header) -->\r\n\r\n  <ion-item-divider sticky>\r\n    <ion-grid>\r\n      <ion-row class=\"vertical-align-content\">\r\n        <ion-col no-padding text-center size=3>\r\n            <ion-button size=\"small\" (click)=\"incrementFilterPeriod(-1)\"><ion-icon name=\"return-left\"></ion-icon></ion-button>\r\n        </ion-col>\r\n\r\n        <ion-col no-padding text-center>\r\n          <h4>{{getFilterPeriodString()}}</h4>\r\n        </ion-col>\r\n\r\n        <ion-col no-padding text-center size=3>\r\n            <ion-button size=\"small\" (click)=\"incrementFilterPeriod(+1)\"><ion-icon name=\"return-right\"></ion-icon></ion-button>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item-divider>\r\n\r\n  <div style=\"display: block\">\r\n    <canvas baseChart\r\n                [data]=\"chartData\"\r\n                [labels]=\"chartLabels\"\r\n                [chartType]=\"chartType\"\r\n                [colors]=\"chartColors\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\"></canvas>\r\n  </div>\r\n\r\n  <ion-card>\r\n    <div class=\"ion-text-center\" style=\"width: 100%;\">\r\n      <ion-icon name=\"speedometer\" size=\"small\"></ion-icon>\r\n      <ion-label class=\"slide_num\" *ngIf=\"getFilterPeriodString()=='All'\"> Total Mileage: {{getMileage()}} km</ion-label>\r\n      <ion-label *ngIf=\"getFilterPeriodString()!='All'\" class=\"slide_num\"> {{getFilterPeriodString()}} Total Mileage: {{getMileage()}} km</ion-label><br>\r\n      <ion-col *ngFor=\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\">\r\n        {{vehicle.key}} : {{getMileagebyVehicleType(vehicle.key)}}\r\n      </ion-col>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <ion-card *ngFor=\"let trip of getDrives()\">\r\n    <br>\r\n    <app-drive-view expandHeight='150px' expandWidth='100px' [drive]=\"trip\"></app-drive-view>\r\n  </ion-card>\r\n\r\n<!--\r\n    <ion-row >\r\n      <ion-col align=\"center\">\r\n      <ion-card >\r\n    <ion-card-header>\r\n      <ion-card-subtitle>\r\n          <ion-item class=\"card\">\r\n          <ion-label position=\"floating\"></ion-label>\r\n          <ion-input disabled type=\"date\" name=\"text_drivedate\" color=\"success\">  </ion-input>\r\n            </ion-item>\r\n        </ion-card-subtitle>\r\n      <ion-card-title>\r\n        <ion-item class=\"card\" >\r\n          <ion-label color=\"success\" position=\"floating\">VehicleType</ion-label>\r\n          <ion-input color=\"success\" disabled type=\"number\" name=\"text_drivevehicletype\">  </ion-input>\r\n            </ion-item>\r\n    </ion-card-title>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content>\r\n\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col >\r\n            <ion-item class=\"card\">\r\n          <ion-label color=\"success\" position=\"floating\">Total Time Driven</ion-label>\r\n          <ion-input disabled type=\"number\" name=\"text_driveduration\" color=\"success\">  </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-item class=\"card\">\r\n          <ion-label color=\"success\" position=\"floating\">Total Mileage</ion-label>\r\n          <ion-input disabled type=\"number\" name=\"text_drivemileage\" color=\"success\">  </ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n-->\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/CmdHistory/CmdHistory.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/CmdHistory/CmdHistory.module.ts ***!
    \*******************************************************/

  /*! exports provided: CmdHistoryPageModule */

  /***/
  function srcAppPagesCmdHistoryCmdHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CmdHistoryPageModule", function () {
      return CmdHistoryPageModule;
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


    var _CmdHistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./CmdHistory.page */
    "./src/app/pages/CmdHistory/CmdHistory.page.ts");
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
      component: _CmdHistory_page__WEBPACK_IMPORTED_MODULE_6__["CmdHistoryPage"]
    }];

    var CmdHistoryPageModule = function CmdHistoryPageModule() {
      _classCallCheck(this, CmdHistoryPageModule);
    };

    CmdHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__["DriveViewModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"]],
      declarations: [_CmdHistory_page__WEBPACK_IMPORTED_MODULE_6__["CmdHistoryPage"]]
    })], CmdHistoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/CmdHistory/CmdHistory.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/CmdHistory/CmdHistory.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCmdHistoryCmdHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".vertical-align-content > * {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important; }\n\n.full-width-select {\n  width: 100%;\n  max-width: 100%; }\n\n.custom-font-size {\n  font-size: 0.8em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQ21kSGlzdG9yeS9DOlxcVXNlcnNcXFJ1aVxcQW5kcm9pZFN0dWRpb1Byb2plY3RzXFxFbmdpbmVlcnNMb2dib29rMi9zcmNcXGFwcFxccGFnZXNcXENtZEhpc3RvcnlcXENtZEhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUssK0JBQXVCO0VBQXZCLHdCQUF1QjtFQUN2QixnQ0FBK0I7RUFDL0Isb0NBQTZCO1VBQTdCLDhCQUE2QjtFQUM3QixtQ0FBa0M7VUFBbEMsa0NBQWtDLEVBQUE7O0FBRXZDO0VBQ0UsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFFakI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0NtZEhpc3RvcnkvQ21kSGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWwtYWxpZ24tY29udGVudCA+ICpcclxue1xyXG4gICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7ICAvLyB2ZXJ0aWNhbCBhbGlnbm1lbnRcclxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50OyAgLy8gaG9yaXpvbnRhbCBhbGlnbm1lbnRcclxufVxyXG4uZnVsbC13aWR0aC1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uY3VzdG9tLWZvbnQtc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/CmdHistory/CmdHistory.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/CmdHistory/CmdHistory.page.ts ***!
    \*****************************************************/

  /*! exports provided: CmdHistoryPage */

  /***/
  function srcAppPagesCmdHistoryCmdHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CmdHistoryPage", function () {
      return CmdHistoryPage;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js"); // DateTime utility, See http://zetcode.com/javascript/dayjs/;


    var CmdHistoryPage =
    /*#__PURE__*/
    function () {
      function CmdHistoryPage(database, geolocation) {
        _classCallCheck(this, CmdHistoryPage);

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

      _createClass(CmdHistoryPage, [{
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
          var drvr = document.getElementById("drvr").value; // 4 cases
          // if vtype = X and drvr = X
          // if vtype = ALL and drvr = X
          // if vtype = X and drvr = ALL
          // if vtype = ALL and drvr = ALL

          if (!this.select_month && !this.select_year) {
            // if vtype = X and drvr = X
            if (vtype != "ALL" && drvr != "ALL") {
              var r = drives.filter(function (drive) {
                return drive.vehicle_type == vtype;
              });
              return r.filter(function (drive) {
                return drive.driver == drvr;
              });
            } // if vtype = ALL and drvr = X
            else if (vtype == "ALL" && drvr != "ALL") {
                return drives.filter(function (drive) {
                  return drive.driver == drvr;
                });
              } // if vtype = X and drvr = ALL
              else if (vtype != "ALL" && drvr == "ALL") {
                  return drives.filter(function (drive) {
                    return drive.vehicle_type == vtype;
                  });
                } // if vtype = ALL and drvr = ALL


            return drives;
          } else {
            // if vtype = X and drvr = X
            if (vtype != "ALL" && drvr != "ALL") {
              var r = drives.filter(function (drive) {
                return drive.vehicle_type == vtype;
              });
              var r = r.filter(function (drive) {
                return drive.driver == drvr;
              });
              return r.filter(function (drive) {
                var elem = drive.date.split("-");
                return (!_this2.select_year || parseInt(elem[0]) == _this2.select_year) && (!_this2.select_month || parseInt(elem[1]) == _this2.select_month);
              });
            } // if vtype = ALL and drvr = X
            else if (vtype == "ALL" && drvr != "ALL") {
                var r = drives.filter(function (drive) {
                  return drive.driver == drvr;
                });
                return r.filter(function (drive) {
                  var elem = drive.date.split("-");
                  return (!_this2.select_year || parseInt(elem[0]) == _this2.select_year) && (!_this2.select_month || parseInt(elem[1]) == _this2.select_month);
                });
              } // if vtype = X and drvr = ALL
              else if (vtype != "ALL" && drvr == "ALL") {
                  var r = drives.filter(function (drive) {
                    return drive.vehicle_type == vtype;
                  });
                  return r.filter(function (drive) {
                    var elem = drive.date.split("-");
                    return (!_this2.select_year || parseInt(elem[0]) == _this2.select_year) && (!_this2.select_month || parseInt(elem[1]) == _this2.select_month);
                  });
                } // if vtype = ALL and drvr = ALL


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

      return CmdHistoryPage;
    }();

    CmdHistoryPage.ctorParameters = function () {
      return [{
        type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }];
    };

    CmdHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cmd_history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./CmdHistory.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdHistory/CmdHistory.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./CmdHistory.page.scss */
      "./src/app/pages/CmdHistory/CmdHistory.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]])], CmdHistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-CmdHistory-CmdHistory-module-es5.js.map