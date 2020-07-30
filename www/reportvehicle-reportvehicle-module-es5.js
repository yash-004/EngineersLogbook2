function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportvehicle-reportvehicle-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reportvehicle/reportvehicle.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reportvehicle/reportvehicle.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReportvehicleReportvehiclePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>Vehicle & Incident Details</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form class=\"form\" [formGroup]=\"addDriveForm\" (submit)=\"addDrive(addDriveForm.value)\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item text-wrap>\r\n            <ion-label position=\"floating\">driving area</ion-label>\r\n            <ion-select formControlName=\"incamp\" interface=\"popover\">\r\n              <ion-select-option text-wrap value=true>In Camp</ion-select-option>\r\n              <ion-select-option text-wrap value=false *ngIf=\"gettime()\">Out of Camp</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item >\r\n            <ion-label position=\"floating\">Vehicle Number</ion-label>\r\n            <ion-input onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"vehicleNumber\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.vehicleNumber\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"addDriveForm.get('vehicleNumber').hasError(validation.type) && (addDriveForm.get('vehicleNumber').dirty || addDriveForm.get('vehicleNumber').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Vehicle Type</ion-label>\r\n            <ion-select formControlName=\"vehicleType\" interface=\"popover\">\r\n              <ion-select-option text-wrap *ngFor=\"let vty of getapprovedvtypes()\" value={{vty}}>{{vty}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.vehicleType\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"addDriveForm.get('vehicleType').hasError(validation.type) && (addDriveForm.get('vehicleType').dirty || addDriveForm.get('vehicleType').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Vehicle Commander</ion-label>\r\n            <ion-select formControlName=\"vehicleCommander\" interface=\"popover\">\r\n              <ion-select-option *ngFor=\"let c of database.current.all_commanders_of_driver\" value={{c.email}}>{{c.name}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.vehicleCommander\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"addDriveForm.get('vehicleCommander').hasError(validation.type) && (addDriveForm.get('vehicleCommander').dirty || addDriveForm.get('vehicleCommander').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <ion-item lines=\"none\" no-padding>\r\n          <ion-icon name=\"pin\" size=\"large\" color=\"primary\"></ion-icon>\r\n          <ion-label> Drive Details </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Start Location</ion-label>\r\n          <ion-input type=\"text\" onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"startLocation\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.startLocation\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"addDriveForm.get('startLocation').hasError(validation.type) && (addDriveForm.get('startLocation').dirty || addDriveForm.get('startLocation').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Current Location</ion-label>\r\n          <ion-input type=\"text\" onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"endLocation\" placeholder=\"Current Location Address\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.endLocation\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"addDriveForm.get('endLocation').hasError(validation.type) && (addDriveForm.get('endLocation').dirty || addDriveForm.get('endLocation').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n        <ion-item>\r\n          <ion-label floating>Description</ion-label>\r\n          <ion-textarea formControlName=\"driveComments\" placeholder=\"Describe the incident (what happened? which part of vehicle is damaged?)\"></ion-textarea>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.driveComments\">\r\n            <div class=\"error-message\"\r\n                 *ngIf=\"addDriveForm.get('driveComments').hasError(validation.type) && (addDriveForm.get('driveComments').dirty || addDriveForm.get('driveComments').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div class=\"btn-wrapper\">\r\n      <div *ngIf = showSubmit()>\r\n        <ion-button *ngIf = this.database.current.user.is_commander routerLink=\"/tabs/commander\">Cancel</ion-button>\r\n        <ion-button *ngIf = !this.database.current.user.is_commander routerLink=\"/tabs/summary\">Cancel</ion-button>\r\n        <ion-button *ngIf = this.database.current.user.is_commander class=\"submit-btn\" type=\"submit\" [disabled]=\"!addDriveForm.valid\" style=\"padding-right:10px\">Submit\r\n        </ion-button>\r\n        <ion-button *ngIf = !this.database.current.user.is_commander class=\"submit-btn\" type=\"submit\" [disabled]=\"!addDriveForm.valid\" style=\"padding-right:10px\">Submit\r\n        </ion-button>\r\n      </div>\r\n      <div *ngIf = !showSubmit()>\r\n            <ion-button *ngIf = !this.database.current.user.is_commander expand=\"block\" routerLink=\"/tabs/summary\">OK</ion-button>\r\n            <ion-button *ngIf = this.database.current.user.is_commander expand=\"block\" routerLink=\"/tabs/commander\">OK</ion-button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/reportvehicle/reportvehicle.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/reportvehicle/reportvehicle.module.ts ***!
    \*******************************************************/

  /*! exports provided: ReportVehiclePageModule */

  /***/
  function srcAppReportvehicleReportvehicleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportVehiclePageModule", function () {
      return ReportVehiclePageModule;
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


    var _reportvehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reportvehicle.page */
    "./src/app/reportvehicle/reportvehicle.page.ts");

    var routes = [{
      path: '',
      component: _reportvehicle_page__WEBPACK_IMPORTED_MODULE_6__["ReportVehiclePage"]
    }];

    var ReportVehiclePageModule = function ReportVehiclePageModule() {
      _classCallCheck(this, ReportVehiclePageModule);
    };

    ReportVehiclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_reportvehicle_page__WEBPACK_IMPORTED_MODULE_6__["ReportVehiclePage"]]
    })], ReportVehiclePageModule);
    /***/
  },

  /***/
  "./src/app/reportvehicle/reportvehicle.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/reportvehicle/reportvehicle.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReportvehicleReportvehiclePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  text-transform: uppercase;\n  color: primary !important; }\n\nion-card-title {\n  --color:--ion-color-primary-contrast-rgb; }\n\n.btn-wrapper {\n  text-align: center; }\n\n.input[type=number] {\n  -moz-appearance: textfield; }\n\n.input[type=number]::-webkit-inner-spin-button {\n    display: none; }\n\nion-textarea {\n  min-height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0dmVoaWNsZS9DOlxcVXNlcnNcXFJ1aVxcQW5kcm9pZFN0dWRpb1Byb2plY3RzXFxFbmdpbmVlcnNMb2dib29rMi9zcmNcXGFwcFxccmVwb3J0dmVoaWNsZVxccmVwb3J0dmVoaWNsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0Usd0NBQVEsRUFBQTs7QUFHVjtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUVFLDBCQUF5QixFQUFBOztBQUYzQjtJQUNnQyxhQUFhLEVBQUE7O0FBSTdDO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnR2ZWhpY2xlL3JlcG9ydHZlaGljbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge1xyXG4vLyAgb3BhY2l0eTogMSAhaW1wb3J0YW50OyAgLy8gZGlzYWJsZWQgaXRlbXMgd2lsbCBub3QgYmUgZ3JleSBvdXQuXHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiBwcmltYXJ5IWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgLS1jb2xvcjotLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjtcclxufVxyXG5cclxuLmJ0bi13cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIGRvIG5vdCBzaG93IHNwaW5uZXIgZm9yIG51bWJlciBpbnB1dHNcclxuLmlucHV0W3R5cGU9bnVtYmVyXSB7ICBcclxuICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9ueyBkaXNwbGF5OiBub25lOyB9XHJcbiAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcclxufVxyXG5cclxuaW9uLXRleHRhcmVhe1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/reportvehicle/reportvehicle.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/reportvehicle/reportvehicle.page.ts ***!
    \*****************************************************/

  /*! exports provided: ReportVehiclePage */

  /***/
  function srcAppReportvehicleReportvehiclePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportVehiclePage", function () {
      return ReportVehiclePage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/database.service */
    "./src/app/services/database.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__); // DateTime utility, See http://zetcode.com/javascript/dayjs/


    var ReportVehiclePage =
    /*#__PURE__*/
    function () {
      function ReportVehiclePage(navCtrl, formBuilder, toastController, database, route) {
        _classCallCheck(this, ReportVehiclePage);

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
          date: [{
            type: 'required',
            message: 'Date is required.'
          }],
          vehicleNumber: [{
            type: 'required',
            message: 'Vehicle Number is required.'
          }, {
            type: 'minlength',
            message: 'Vehicle number must be at least 5 characters long.'
          }],
          vehicleType: [{
            type: 'required',
            message: 'Select a type of vehicle'
          }],
          vehicleCommander: [{
            type: 'required',
            message: 'Select the Vehicle Commanders Name'
          }],
          endLocation: [{
            type: 'required',
            message: 'Enter current location address'
          }],
          driveComments: [{
            type: 'required',
            message: 'Enter description of incident'
          }]
        };
      }

      _createClass(ReportVehiclePage, [{
        key: "gettime",
        value: function gettime() {
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
        }
      }, {
        key: "getapprovedvtypes",
        value: function getapprovedvtypes() {
          var vtypes = _services_database_service__WEBPACK_IMPORTED_MODULE_4__["VehicleTypes"];

          if (this.database.current.user.mss_certified != true) {
            vtypes = vtypes.filter(function (vtype) {
              return vtype != 'MSS';
            });
          }

          if (this.database.current.user.flb_certified != true) {
            vtypes = vtypes.filter(function (vtype) {
              return vtype != 'FLB';
            });
          }

          if (this.database.current.user.belrex_certified != true) {
            vtypes = vtypes.filter(function (vtype) {
              return vtype != 'BELREX';
            });
          }

          return vtypes;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // Create form group of controls
          this.addDriveForm = this.formBuilder.group({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicleNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicleType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicleCommander: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            startLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            endLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            endOdometer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            incamp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            driveComments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
          }); //  this.updateStatus = false;
          //  this.isDisabled = false;
          // get the drive the user selected

          this.drive = this.database.current.drive_to_edit;

          if (this.drive != null) {
            console.log('In add drive page: drive id:' + this.drive.id);
          } // Has gotten the info so reset drive_to_edit


          this.database.current.drive_to_edit = null;
          /* if user did not select any drive, ie user clicked on fab button,
              check if there is an incompleted drive
           */

          if (this.drive == null) {
            this.drive = this.database.current.drive_in_progress;
          }

          if (this.drive) {
            console.log('drive status: ' + this.drive.status);
            console.log('is commander: ' + this.database.current.user.is_commander);
          }

          if (this.drive == null) {
            // start a new drive
            this.startDriveControls();
            this.updateStatus = false;
            this.isDisabled = false;
            this.showStatus = false;
          } else {
            // retrieving an existing drive
            if (this.drive.status === 'pending' || this.drive.status === 'in-progress') {
              // view only
              console.log('viewing a drive');
              this.updateStatus = false;
              this.showStatus = true;
              this.viewDriveControls();
            } else if (this.drive.status === 'in-progress' && !this.database.current.user.is_commander) {
              // driver enter details to complete drive
              console.log('completing an in-progress drive - driver');
              this.updateStatus = false;
              this.isDisabled = false;
              this.showStatus = false;
              this.endDriveControls();
            }
          }
        }
      }, {
        key: "viewDriveControls",
        value: function viewDriveControls() {
          this.addDriveForm.disable(); //   this.isDisabled = this.addDriveForm.disabled;

          console.log('form is disabled? ' + this.isDisabled);
          console.log('update status? ' + this.updateStatus);
          this.setStartDriveDetails();
          this.endDriveControls();
        }
      }, {
        key: "startDriveControls",
        value: function startDriveControls() {
          this.addDriveForm.get('date').setValue(this.today);
          this.addDriveForm.get('startTime').setValue(this.today); // clear validators for end drive controls
        }
      }, {
        key: "endDriveControls",
        value: function endDriveControls() {
          console.log('incomplete drive exist');
          this.setStartDriveDetails(); // set end Time to current time

          var time2 = dayjs__WEBPACK_IMPORTED_MODULE_6__(new Date(this.today)).format('HH:mm');
          this.addDriveForm.get('endTime').setValue(time2);
          this.addDriveForm.get('driveComments').enable();
          this.addDriveForm.get('endLocation').enable();
        }
      }, {
        key: "setStartDriveDetails",
        value: function setStartDriveDetails() {
          // Stage-1 details
          // populate values of start drive fields
          this.addDriveForm.get('date').setValue(this.drive.date);
          this.addDriveForm.get('vehicleNumber').setValue(this.drive.vehicle.toUpperCase());
          this.addDriveForm.get('vehicleType').setValue(this.drive.vehicle_type);
          this.addDriveForm.get('vehicleCommander').setValue(this.drive.commander);
          this.addDriveForm.get('startLocation').setValue(this.drive.start_location.toUpperCase());
          this.addDriveForm.get('startTime').setValue(this.drive.start_time);
          this.addDriveForm.get('incamp').setValue(this.drive.incamp);
          console.log('start time: ' + this.addDriveForm.value.startTime);
        }
      }, {
        key: "addDrive",
        value: function addDrive(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var new_report;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    new_report = {
                      created: this.database.getTimeStamp(),
                      driver: this.database.current.user.email,
                      status: "in-progress",
                      vehicle_number: this.drive.vehicle,
                      vehicle_type: this.drive.vehicle_type,
                      commander: this.drive.commander,
                      date: this.addDriveForm.value.date.split('T')[0],
                      start_location: this.drive.start_location,
                      start_time: this.drive.start_time,
                      fleet: this.database.current.user.fleet,
                      company: this.database.current.user.company,
                      incamp: this.addDriveForm.value.incamp,
                      incident_location: this.addDriveForm.value.endLocation,
                      description: this.addDriveForm.value.driveComments,
                      incident_coordinates: this.database.current.user.location
                    };
                    _context.next = 3;
                    return this.database.write('vehiclebreakdown', this.drive.id, new_report);

                  case 3:
                    this.successMessage = 'Your report has been sent.';
                    this.showToast(this.successMessage);
                    this.navCtrl.pop();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showToast",
        value: function showToast(msg) {
          this.toastController.create({
            message: msg,
            duration: 2000,
            //  showCloseButton: true,
            //  closeButtonText: 'OK',
            position: 'middle'
          }).then(function (obj) {
            obj.present();
          });
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.navCtrl.pop();
        }
      }, {
        key: "showSubmit",
        value: function showSubmit() {
          if (!this.isDisabled) {
            return true;
          }

          return false;
        }
      }]);

      return ReportVehiclePage;
    }();

    ReportVehiclePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    ReportVehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reportvehicle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reportvehicle.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reportvehicle/reportvehicle.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reportvehicle.page.scss */
      "./src/app/reportvehicle/reportvehicle.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], ReportVehiclePage);
    /***/
  }
}]);
//# sourceMappingURL=reportvehicle-reportvehicle-module-es5.js.map