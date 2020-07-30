function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-drive-add-drive-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-drive/add-drive.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-drive/add-drive.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddDriveAddDrivePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>Drive Details</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item *ngIf=\"!gettime()\" color=\"danger\" text-wrap>\r\n    <ion-label>ONLY IN CAMP DRIVES ALLOWED</ion-label>\r\n  </ion-item>\r\n  <form class=\"form\" [formGroup]=\"addDriveForm\" (submit)=\"addDrive(addDriveForm.value)\">\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item text-wrap>\r\n            <ion-label position=\"floating\">driving area</ion-label>\r\n            <ion-select formControlName=\"incamp\" interface=\"popover\">\r\n              <ion-select-option text-wrap value=true>In Camp</ion-select-option>\r\n              <ion-select-option text-wrap value=false *ngIf=\"gettime()\">Out of Camp</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Date</ion-label>\r\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName=\"date\"></ion-datetime>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.date\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"addDriveForm.get('date').hasError(validation.type) && (addDriveForm.get('date').dirty || addDriveForm.get('date').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item >\r\n            <ion-label position=\"floating\">Vehicle Number</ion-label>\r\n            <ion-input onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"vehicleNumber\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.vehicleNumber\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"addDriveForm.get('vehicleNumber').hasError(validation.type) && (addDriveForm.get('vehicleNumber').dirty || addDriveForm.get('vehicleNumber').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Vehicle Type</ion-label>\r\n            <ion-select formControlName=\"vehicleType\" interface=\"popover\">\r\n              <ion-select-option text-wrap *ngFor=\"let vty of getapprovedvtypes()\" value={{vty}}>{{vty}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.vehicleType\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"addDriveForm.get('vehicleType').hasError(validation.type) && (addDriveForm.get('vehicleType').dirty || addDriveForm.get('vehicleType').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Vehicle Commander</ion-label>\r\n            <ion-select formControlName=\"vehicleCommander\" interface=\"popover\">\r\n              <ion-select-option *ngFor=\"let c of database.current.all_commanders_of_driver\" value={{c.email}}>{{c.name}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.vehicleCommander\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"addDriveForm.get('vehicleCommander').hasError(validation.type) && (addDriveForm.get('vehicleCommander').dirty || addDriveForm.get('vehicleCommander').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <ion-item lines=\"none\" no-padding>\r\n          <ion-icon name=\"pin\" size=\"large\" color=\"primary\"></ion-icon>\r\n          <ion-label> Start Drive Details </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Location</ion-label>\r\n          <ion-input type=\"text\" onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"startLocation\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.startLocation\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"addDriveForm.get('startLocation').hasError(validation.type) && (addDriveForm.get('startLocation').dirty || addDriveForm.get('startLocation').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Odometer</ion-label>\r\n          <ion-input type=\"number\" inputmode=\"numeric\" formControlName=\"startOdometer\" placeholder=\"Input Current Odometer Reading\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.startOdometer\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"addDriveForm.get('startOdometer').hasError(validation.type) && (addDriveForm.get('startOdometer').dirty || addDriveForm.get('startOdometer').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Time</ion-label>\r\n          <ion-datetime formControlName=\"startTime\" displayFormat=\"HH:mm\"></ion-datetime>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.startTime\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"addDriveForm.get('startTime').hasError(validation.type) && (addDriveForm.get('startTime').dirty || addDriveForm.get('startTime').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card *ngIf=(drive)>\r\n      <ion-card-content>\r\n        <ion-item lines=\"none\" no-padding>\r\n          <ion-icon name=\"pin\" size=\"large\" color=\"success\"></ion-icon>\r\n          <ion-label> End Drive Details </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Location</ion-label>\r\n          <ion-input type=\"text\" onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"endLocation\" placeholder=\"End Location\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.endLocation\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"addDriveForm.get('endLocation').hasError(validation.type) && (addDriveForm.get('endLocation').dirty || addDriveForm.get('endLocation').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Odometer</ion-label>\r\n          <ion-input type=\"number\" inputmode=\"numeric\" formControlName=\"endOdometer\" placeholder=\"Input Current Odometer Reading\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.endOdometer\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"addDriveForm.get('endOdometer').hasError(validation.type) && (addDriveForm.get('endOdometer').dirty || addDriveForm.get('endOdometer').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Time</ion-label>\r\n          <ion-datetime formControlName=\"endTime\" displayFormat=\"HH:mm\"></ion-datetime>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.endTime\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"addDriveForm.get('endTime').hasError(validation.type) && (addDriveForm.get('endTime').dirty || addDriveForm.get('endTime').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item>\r\n          <ion-label>Fuel Level</ion-label>\r\n          <ion-label>{{addDriveForm.get('fuelLevel').value}}%</ion-label>\r\n          <ion-range min='0' max='100' color=\"secondary\" step='25' snaps=\"true\" ticks=\"true\" formControlName=\"fuelLevel\">\r\n            <ion-label slot=\"start\">empty</ion-label>\r\n            <ion-label slot=\"end\">full</ion-label>\r\n          </ion-range>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.fuelLevel\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"addDriveForm.get('fuelLevel').hasError(validation.type) && (addDriveForm.get('fuelLevel').dirty || addDriveForm.get('fuelLevel').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item>\r\n          <ion-label>Maintenance Drive</ion-label>\r\n          <ion-toggle slot=\"start\" formControlName=\"maintenance\" (ionChange)=\"onToggle()\" [checked]=\"isToggled\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label floating>Comments</ion-label>\r\n          <ion-textarea onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"driveComments\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n   <ion-card *ngIf=(showStatus)>\r\n      <ion-list>\r\n      <ion-radio-group formControlName=\"driveStatus\">\r\n        <ion-item>\r\n          <ion-label>Verified Drive</ion-label>\r\n          <ion-radio value='verified' formControlName='radioVerify'>Verify drive</ion-radio>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>Reject Drive</ion-label>\r\n          <ion-radio value='rejected' formControlName='radioReject'>Reject Drive</ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n      </ion-list>\r\n    </ion-card>\r\n\r\n    <div class=\"btn-wrapper\">\r\n      <div *ngIf = showSubmit()>\r\n        <ion-button *ngIf = this.database.current.user.is_commander routerLink=\"/tabs/commander\">Cancel</ion-button>\r\n        <ion-button *ngIf = !this.database.current.user.is_commander routerLink=\"/tabs/summary\">Cancel</ion-button>\r\n        <ion-button *ngIf = this.database.current.user.is_commander class=\"submit-btn\" type=\"submit\" routerLink=\"/tabs/commander\" [disabled]=\"!addDriveForm.valid || addDriveForm.get('driveStatus').value == null \" style=\"padding-right:10px\">Submit\r\n        </ion-button>\r\n        <ion-button *ngIf = !this.database.current.user.is_commander class=\"submit-btn\" type=\"submit\" routerLink=\"/tabs/summary\" [disabled]=\"!addDriveForm.valid\" style=\"padding-right:10px\">\r\n          Submit\r\n        </ion-button>\r\n      </div>\r\n      <div *ngIf = !showSubmit()>\r\n            <ion-button *ngIf = !this.database.current.user.is_commander expand=\"block\" routerLink=\"/tabs/summary\">OK</ion-button>\r\n            <ion-button *ngIf = this.database.current.user.is_commander expand=\"block\" routerLink=\"/tabs/commander\">OK</ion-button>\r\n\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/add-drive/add-drive.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/add-drive/add-drive.module.ts ***!
    \***********************************************/

  /*! exports provided: AddDrivePageModule */

  /***/
  function srcAppAddDriveAddDriveModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDrivePageModule", function () {
      return AddDrivePageModule;
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


    var _add_drive_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-drive.page */
    "./src/app/add-drive/add-drive.page.ts");

    var routes = [{
      path: '',
      component: _add_drive_page__WEBPACK_IMPORTED_MODULE_6__["AddDrivePage"]
    }];

    var AddDrivePageModule = function AddDrivePageModule() {
      _classCallCheck(this, AddDrivePageModule);
    };

    AddDrivePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_add_drive_page__WEBPACK_IMPORTED_MODULE_6__["AddDrivePage"]]
    })], AddDrivePageModule);
    /***/
  },

  /***/
  "./src/app/add-drive/add-drive.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/add-drive/add-drive.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddDriveAddDrivePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  text-transform: uppercase;\n  color: primary !important; }\n\nion-card-title {\n  --color:--ion-color-primary-contrast-rgb; }\n\n.btn-wrapper {\n  text-align: center; }\n\n.input[type=number] {\n  -moz-appearance: textfield; }\n\n.input[type=number]::-webkit-inner-spin-button {\n    display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWRyaXZlL0M6XFxVc2Vyc1xcUnVpXFxBbmRyb2lkU3R1ZGlvUHJvamVjdHNcXEVuZ2luZWVyc0xvZ2Jvb2syL3NyY1xcYXBwXFxhZGQtZHJpdmVcXGFkZC1kcml2ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0Usd0NBQVEsRUFBQTs7QUFHVjtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUVFLDBCQUF5QixFQUFBOztBQUYzQjtJQUNnQyxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGQtZHJpdmUvYWRkLWRyaXZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qIHtcclxuLy8gIG9wYWNpdHk6IDEgIWltcG9ydGFudDsgIC8vIGRpc2FibGVkIGl0ZW1zIHdpbGwgbm90IGJlIGdyZXkgb3V0LlxyXG59XHJcblxyXG5pb24taW5wdXR7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogcHJpbWFyeSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxle1xyXG4gIC0tY29sb3I6LS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I7XHJcbn1cclxuXHJcbi5idG4td3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBkbyBub3Qgc2hvdyBzcGlubmVyIGZvciBudW1iZXIgaW5wdXRzXHJcbi5pbnB1dFt0eXBlPW51bWJlcl0geyAgXHJcbiAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbnsgZGlzcGxheTogbm9uZTsgfVxyXG4gIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/add-drive/add-drive.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/add-drive/add-drive.page.ts ***!
    \*********************************************/

  /*! exports provided: AddDrivePage */

  /***/
  function srcAppAddDriveAddDrivePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDrivePage", function () {
      return AddDrivePage;
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


    var AddDrivePage =
    /*#__PURE__*/
    function () {
      function AddDrivePage(navCtrl, formBuilder, toastController, database, route) {
        _classCallCheck(this, AddDrivePage);

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
          startLocation: [{
            type: 'required',
            message: 'Enter starting location'
          }],
          startOdometer: [{
            type: 'required',
            message: 'Enter current Odometer value'
          }],
          startTime: [{
            type: 'required',
            message: 'Enter current Time'
          }],
          endLocation: [{
            type: 'required',
            message: 'Enter final location'
          }],
          endOdometer: [{
            type: 'required',
            message: 'Enter final Odometer value'
          }],
          endTime: [{
            type: 'required',
            message: 'Enter final Time'
          }],
          fuelLevel: [{
            type: 'required',
            message: 'Indicate final fuel level'
          }]
        };
      }

      _createClass(AddDrivePage, [{
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
            startOdometer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            endLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            endOdometer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            maintenance: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fuelLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            driveComments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            driveStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            radioVerify: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
              value: '',
              disabled: true
            }),
            radioReject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
              value: '',
              disabled: true
            }),
            incamp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
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

          if (this.drive != null) {
            console.log('drive status: ' + this.drive.status);
            console.log('is commander: ' + this.database.current.user.is_commander);
          }

          if (this.drive == null) {
            // start a new drive
            this.mtrac = this.database.current.mtrac_to_edit;
            this.startDriveControls();
            this.updateStatus = false;
            this.isDisabled = false;
            this.showStatus = false;
          } else {
            // retrieving an existing drive
            if (this.drive.driver != this.database.current.user.email && this.database.current.user.is_admin) {
              console.log('editing drive info - admin user');
              this.editDriveControls();
              this.updateStatus = true;
              this.showStatus = true;
              this.isDisabled = false;
            } else if (this.drive.status === 'pending' || this.drive.status === 'verified' || (this.drive.status === 'in-progress' || this.drive.status === 'rejected') && this.drive.commander == this.database.current.user.email) {
              // view only
              console.log('viewing a drive');
              this.updateStatus = false;
              this.showStatus = true;
              this.isDisabled = true;
              this.viewDriveControls();
            } else if (this.drive.status === 'in-progress' && this.drive.driver == this.database.current.user.email) {
              // driver enter details to complete drive
              console.log('completing an in-progress drive - driver');
              this.updateStatus = false;
              this.isDisabled = false;
              this.showStatus = false;
              this.endDriveControls();
            } else if (this.drive.status === 'rejected' && this.drive.driver == this.database.current.user.email) {
              console.log('editing rejected drive info - driver'); // driver edit details for rejected drive

              this.updateStatus = false;
              this.showStatus = true;
              this.isDisabled = false;
              this.editDriveControls();
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
          this.setEndDriveDetails();
          this.setDriveStatusControls(); // if commander and drive status is pending, add verified and reject controls
          // else display ok button

          if (this.drive.commander == this.database.current.user.email && this.drive.status === 'pending') {
            console.log('commander need to approve/reject drive');
            this.updateStatus = true;
            this.addDriveForm.get('driveStatus').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.addDriveForm.get('radioVerify').enable();
            this.addDriveForm.get('radioReject').enable();
          }
        }
      }, {
        key: "startDriveControls",
        value: function startDriveControls() {
          this.addDriveForm.get('date').setValue(this.today);
          this.addDriveForm.get('startTime').setValue(this.today);
          this.addDriveForm.get('incamp').setValue(this.mtrac.incamp);
          this.addDriveForm.get('vehicleNumber').setValue(this.mtrac.vehicleNumber);
          this.addDriveForm.get('vehicleCommander').setValue(this.mtrac.commander);
          this.addDriveForm.get('startLocation').setValue(this.mtrac.startLocation); // clear validators for end drive controls

          this.addDriveForm.get('endLocation').clearValidators();
          this.addDriveForm.get('endOdometer').clearValidators();
          this.addDriveForm.get('endTime').clearValidators();
          this.addDriveForm.get('fuelLevel').clearValidators();
        }
      }, {
        key: "endDriveControls",
        value: function endDriveControls() {
          console.log('incomplete drive exist');
          this.setStartDriveDetails(); // set end Time to current time

          var time2 = dayjs__WEBPACK_IMPORTED_MODULE_6__(new Date(this.today)).format('HH:mm');
          this.addDriveForm.get('endTime').setValue(time2);
        }
      }, {
        key: "editDriveControls",
        value: function editDriveControls() {
          this.addDriveForm.reset();
          this.setStartDriveDetails();
          this.setEndDriveDetails();
          this.setDriveStatusControls();
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
          this.addDriveForm.get('startOdometer').setValue(this.drive.start_odometer);
          this.addDriveForm.get('startTime').setValue(this.drive.start_time);
          this.addDriveForm.get('incamp').setValue(this.drive.incamp);
          console.log('start time: ' + this.addDriveForm.value.startTime);
        }
      }, {
        key: "setEndDriveDetails",
        value: function setEndDriveDetails() {
          // Stage-2 details
          // populate values of end drive fields
          this.addDriveForm.get('endLocation').setValue(this.drive.end_location.toUpperCase());
          this.addDriveForm.get('endOdometer').setValue(this.drive.end_odometer);
          this.addDriveForm.get('endTime').setValue(this.drive.end_time);
          console.log('end time: ' + this.addDriveForm.value.endTime);
          this.addDriveForm.get('fuelLevel').setValue(this.drive.fuel_level);
          this.addDriveForm.get('driveComments').setValue(this.drive.comments.toUpperCase()); // set the maintenance toggle to check

          this.isToggled = this.drive.is_maintenance;
        }
      }, {
        key: "setDriveStatusControls",
        value: function setDriveStatusControls() {
          if (this.showStatus) {
            this.addDriveForm.get('driveStatus').setValue(this.drive.status);
            console.log(this.addDriveForm.get('driveStatus').value);
          }
        }
      }, {
        key: "endDrive",
        value: function endDrive(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var currentDrive;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.addDriveForm.valid) {
                      _context.next = 5;
                      break;
                    }

                    this.errorMessage = 'Drive cannot be updated... missing end drive information.';
                    this.showToast(this.errorMessage);
                    console.log(this.errorMessage);
                    return _context.abrupt("return");

                  case 5:
                    if (!(this.drive.commander != this.database.current.user.email)) {
                      _context.next = 39;
                      break;
                    }

                    _context.prev = 6;
                    currentDrive = this.database.current.drive_history[0]; // Stage 1 details : the user may made some changes to these info

                    currentDrive.vehicle = this.addDriveForm.value.vehicleNumber.toUpperCase();
                    currentDrive.vehicle_type = this.addDriveForm.value.vehicleType;
                    currentDrive.commander = this.addDriveForm.value.vehicleCommander;
                    currentDrive.date = this.addDriveForm.value.date.split('T')[0];
                    currentDrive.start_location = this.addDriveForm.value.startLocation.toUpperCase();
                    currentDrive.start_odometer = parseInt(this.addDriveForm.value.startOdometer);
                    currentDrive.start_time = this.addDriveForm.value.startTime;
                    currentDrive.fleet = this.database.current.user.fleet;
                    currentDrive.company = this.database.current.user.company;
                    currentDrive.incamp = this.addDriveForm.value.incamp; // Stage 2 details

                    currentDrive.end_location = this.addDriveForm.value.endLocation;
                    currentDrive.end_odometer = parseInt(this.addDriveForm.value.endOdometer); // const time2 = dayjs(new Date(this.addDriveForm.value.endTime)).format('HH:mm');

                    currentDrive.end_time = this.addDriveForm.value.endTime; // store the maintenance toggle checked value in the drive document

                    currentDrive.is_maintenance = this.isToggled;
                    currentDrive.fuel_level = parseInt(this.addDriveForm.value.fuelLevel);
                    console.log('Fuel level (UI): ' + currentDrive.fuel_level);
                    currentDrive.comments = this.addDriveForm.value.driveComments;
                    currentDrive.status = 'pending';
                    _context.next = 28;
                    return this.database.write('drive', currentDrive.id, currentDrive);

                  case 28:
                    this.errorMessage = '';
                    this.successMessage = 'Your drive has been updated.';
                    this.showToast(this.successMessage);
                    _context.next = 39;
                    break;

                  case 33:
                    _context.prev = 33;
                    _context.t0 = _context["catch"](6);
                    console.log(_context.t0);
                    this.errorMessage = 'Update drive error: ${err}';
                    this.successMessage = '';
                    this.showToast(this.errorMessage);

                  case 39:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[6, 33]]);
          }));
        }
      }, {
        key: "addDrive",
        value: function addDrive(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var time, new_drive;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('is Commander: ' + this.database.current.user.is_commander);

                    if (!(this.drive.commander == this.database.current.user.email)) {
                      _context2.next = 11;
                      break;
                    }

                    // commander has verified/rejected drive, update drive status.
                    this.drive.status = this.addDriveForm.get('driveStatus').value;
                    console.log('Drive status: ' + this.drive.status); // update status in database

                    _context2.next = 6;
                    return this.database.write('drive', this.drive.id, this.drive);

                  case 6:
                    this.errorMessage = '';
                    this.successMessage = 'The drive status has been updated successfully.';
                    this.showToast(this.successMessage);
                    _context2.next = 38;
                    break;

                  case 11:
                    if (!(this.database.current.drive_in_progress != null || this.drive != null)) {
                      _context2.next = 16;
                      break;
                    }

                    // the submit is to complete the drive information
                    console.log('Updating start and end drive details...');
                    this.endDrive(value);
                    _context2.next = 38;
                    break;

                  case 16:
                    _context2.prev = 16;
                    this.mtrac = this.database.current.mtrac_to_edit;
                    time = dayjs__WEBPACK_IMPORTED_MODULE_6__(new Date(this.addDriveForm.value.startTime)).format('HH:mm');
                    new_drive = {
                      created: this.database.getTimeStamp(),
                      driver: this.database.current.user.email,
                      status: "in-progress",
                      // Stage-1 details
                      vehicle: this.addDriveForm.value.vehicleNumber.toUpperCase(),
                      vehicle_type: this.addDriveForm.value.vehicleType,
                      commander: this.addDriveForm.value.vehicleCommander,
                      date: this.addDriveForm.value.date.split('T')[0],
                      start_location: this.addDriveForm.value.startLocation.toUpperCase(),
                      start_odometer: parseInt(this.addDriveForm.value.startOdometer),
                      start_time: time,
                      fleet: this.database.current.user.fleet,
                      company: this.database.current.user.company,
                      incamp: this.addDriveForm.value.incamp
                    };
                    console.log('new_drive=${JSON.stringify(new_drive)}');
                    _context2.next = 23;
                    return this.database.write('drive', this.mtrac.id, new_drive);

                  case 23:
                    this.mtrac.status = "completed";
                    _context2.next = 26;
                    return this.database.write('mtrac', this.mtrac.id, this.mtrac);

                  case 26:
                    this.errorMessage = '';
                    this.successMessage = 'Your drive has been added.';
                    this.showToast(this.successMessage);
                    _context2.next = 38;
                    break;

                  case 31:
                    _context2.prev = 31;
                    _context2.t0 = _context2["catch"](16);
                    this.errorMessage = "Add drive error: ".concat(_context2.t0);
                    this.successMessage = '';
                    console.log(this.errorMessage);
                    console.log(this.addDriveForm.value.startLocation);
                    this.showToast(this.errorMessage); //this.navCtrl.pop();

                  case 38:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[16, 31]]);
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
        key: "onToggle",
        value: function onToggle() {
          //console.log("initial state - toggled: " + this.isToggled);
          if (this.isToggled) {
            this.isToggled = false;
          } else {
            this.isToggled = true;
          } //console.log("final state - toggled: " + this.isToggled);

        }
      }, {
        key: "showSubmit",
        value: function showSubmit() {
          if (this.updateStatus || !this.isDisabled) {
            return true;
          }

          return false;
        }
      }]);

      return AddDrivePage;
    }();

    AddDrivePage.ctorParameters = function () {
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

    AddDrivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-drive',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-drive.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-drive/add-drive.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-drive.page.scss */
      "./src/app/add-drive/add-drive.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], AddDrivePage);
    /***/
  }
}]);
//# sourceMappingURL=add-drive-add-drive-module-es5.js.map