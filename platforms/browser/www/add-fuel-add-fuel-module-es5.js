function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-fuel-add-fuel-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-fuel/add-fuel.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-fuel/add-fuel.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddFuelAddFuelPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Fuel Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <form class=\"form\" [formGroup]=\"addFuelForm\" (submit)=\"addFuel(addFuelForm.value)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Date</ion-label>\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName=\"date\"></ion-datetime>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.date\">\n              <div class=\"error-message\"\n                *ngIf=\"addFuelForm.get('date').hasError(validation.type) && (addFuelForm.get('date').dirty || addFuelForm.get('date').touched)\">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item >\n            <ion-label position=\"floating\">Vehicle Number</ion-label>\n            <ion-input onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"vehicleNumber\"></ion-input>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.vehicleNumber\">\n              <div class=\"error-message\"\n                *ngIf=\"addFuelForm.get('vehicleNumber').hasError(validation.type) && (addFuelForm.get('vehicleNumber').dirty || addFuelForm.get('vehicleNumber').touched)\">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Vehicle Type</ion-label>\n            <ion-select formControlName=\"vehicleType\" interface=\"popover\">\n              <ion-select-option value=\"5TON\">5TON</ion-select-option>\n              <ion-select-option value=\"OUV\">OUV</ion-select-option>\n              <ion-select-option value=\"MSS\">MSS</ion-select-option>\n              <ion-select-option value=\"BELREX\">BELREX</ion-select-option>\n              <ion-select-option value=\"FLB\">FLB</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validationMessages.vehicleType\">\n              <div class=\"error-message\"\n                *ngIf=\"addFuelForm.get('vehicleType').hasError(validation.type) && (addFuelForm.get('vehicleType').dirty || addFuelForm.get('vehicleType').touched)\">\n                {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Location</ion-label>\n          <ion-input type=\"text\" onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"location\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessages.location\">\n            <div class=\"error-message\"\n              *ngIf=\"addFuelForm.get('location').hasError(validation.type) && (addFuelForm.get('location').dirty || addFuelForm.get('location').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">Time</ion-label>\n          <ion-datetime formControlName=\"time\" displayFormat=\"HH:mm\"></ion-datetime>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessages.time\">\n            <div class=\"error-message\"\n              *ngIf=\"addFuelForm.get('time').hasError(validation.type) && (addFuelForm.get('time').dirty || addFuelForm.get('time').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">FuelTopUp</ion-label>\n          <ion-input type=\"number\" inputmode=\"numeric\" formControlName=\"FuelTopUp\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <div class=\"btn-wrapper\">\n      <div *ngIf = showSubmit()>\n        <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!addFuelForm.valid\" style=\"padding-right:10px\">Submit\n        </ion-button>\n        <ion-button (click)='onCancel()'>Cancel</ion-button>\n      </div>\n      <div *ngIf = !showSubmit()>\n            <ion-button expand=\"block\" (click)='onCancel()'>OK</ion-button>\n      </div>\n    </div>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/add-fuel/add-fuel.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/add-fuel/add-fuel.module.ts ***!
    \*********************************************/

  /*! exports provided: AddFuelPageModule */

  /***/
  function srcAppAddFuelAddFuelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddFuelPageModule", function () {
      return AddFuelPageModule;
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


    var _add_fuel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-fuel.page */
    "./src/app/add-fuel/add-fuel.page.ts");

    var routes = [{
      path: '',
      component: _add_fuel_page__WEBPACK_IMPORTED_MODULE_6__["AddFuelPage"]
    }];

    var AddFuelPageModule = function AddFuelPageModule() {
      _classCallCheck(this, AddFuelPageModule);
    };

    AddFuelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_add_fuel_page__WEBPACK_IMPORTED_MODULE_6__["AddFuelPage"]]
    })], AddFuelPageModule);
    /***/
  },

  /***/
  "./src/app/add-fuel/add-fuel.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/add-fuel/add-fuel.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddFuelAddFuelPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  text-transform: uppercase;\n  color: primary !important;\n}\n\nion-card-title {\n  --color:--ion-color-primary-contrast-rgb;\n}\n\n.btn-wrapper {\n  text-align: center;\n}\n\n.input[type=number] {\n  -moz-appearance: textfield;\n}\n\n.input[type=number]::-webkit-inner-spin-button {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YXNoZGl4aXQvRGVza3RvcC9FbmdpbmVlcnNMb2dib29rMi9zcmMvYXBwL2FkZC1mdWVsL2FkZC1mdWVsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLWZ1ZWwvYWRkLWZ1ZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0Usd0NBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FET0E7RUFFRSwwQkFBQTtBQ0xGOztBRElFO0VBQThCLGFBQUE7QUNEaEMiLCJmaWxlIjoic3JjL2FwcC9hZGQtZnVlbC9hZGQtZnVlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbi8vICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7ICAvLyBkaXNhYmxlZCBpdGVtcyB3aWxsIG5vdCBiZSBncmV5IG91dC5cbn1cblxuaW9uLWlucHV0e1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogcHJpbWFyeSFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxle1xuICAtLWNvbG9yOi0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiO1xufVxuXG4uYnRuLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8vIGRvIG5vdCBzaG93IHNwaW5uZXIgZm9yIG51bWJlciBpbnB1dHNcbi5pbnB1dFt0eXBlPW51bWJlcl0geyAgXG4gICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b257IGRpc3BsYXk6IG5vbmU7IH1cbiAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcbn0iLCJpb24taW5wdXQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIC0tY29sb3I6LS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I7XG59XG5cbi5idG4td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/add-fuel/add-fuel.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/add-fuel/add-fuel.page.ts ***!
    \*******************************************/

  /*! exports provided: AddFuelPage */

  /***/
  function srcAppAddFuelAddFuelPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddFuelPage", function () {
      return AddFuelPage;
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
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__); // Datetime utility, See http://zetcode.com/javascript/dayjs/


    var AddFuelPage =
    /*#__PURE__*/
    function () {
      function AddFuelPage(navCtrl, formBuilder, toastController, database, route) {
        _classCallCheck(this, AddFuelPage);

        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.database = database;
        this.route = route;
        this.errorMessage = '';
        this.successMessage = '';
        this.today = new Date().toISOString();
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
          location: [{
            type: 'required',
            message: 'Enter starting location'
          }],
          time: [{
            type: 'required',
            message: 'Enter current time'
          }],
          FuelTopUp: [{
            type: 'required',
            message: 'Enter FuelTopUp value'
          }]
        };
      }

      _createClass(AddFuelPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Create form group of controls
          this.addFuelForm = this.formBuilder.group({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicleNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicleType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            FuelTopUp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
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
          return true;
        }
      }, {
        key: "showToast",
        value: function showToast(msg) {
          this.toastController.create({
            message: msg,
            duration: 2000,
            //  showCloseButton: true,
            //  closeButtonText: 'OK',
            position: 'bottom'
          }).then(function (obj) {
            obj.present();
          });
        }
      }, {
        key: "addFuel",
        value: function addFuel(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var time2, new_fuel, subAutoID;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.fuel == null)) {
                      _context.next = 21;
                      break;
                    }

                    _context.prev = 1;
                    time2 = dayjs__WEBPACK_IMPORTED_MODULE_6__(new Date(this.addFuelForm.value.time)).format('HH:mm');
                    new_fuel = {
                      created: this.database.getTimeStamp(),
                      driver: this.database.current.user.email,
                      // Stage-1 details
                      vehicle: this.addFuelForm.value.vehicleNumber,
                      vehicle_type: this.addFuelForm.value.vehicleType,
                      date: this.addFuelForm.value.date.split('T')[0],
                      location: this.addFuelForm.value.location,
                      time: time2,
                      fleet: this.database.current.user.fleet,
                      company: this.database.current.user.company,
                      FuelTopUp: this.addFuelForm.value.FuelTopUp
                    };
                    subAutoID = this.database.collection('fuel').doc().id;
                    new_fuel.id = subAutoID;
                    console.log('new_fuel=${JSON.stringify(new_fuel)}');
                    _context.next = 9;
                    return this.database.write('fuel', new_fuel.id, new_fuel);

                  case 9:
                    this.errorMessage = '';
                    this.successMessage = 'Your Fuel has been added.';
                    this.showToast(this.successMessage);
                    this.navCtrl.pop();
                    _context.next = 21;
                    break;

                  case 15:
                    _context.prev = 15;
                    _context.t0 = _context["catch"](1);
                    this.errorMessage = "Add Fuel error: ".concat(_context.t0);
                    this.successMessage = '';
                    this.showToast(this.errorMessage);
                    this.navCtrl.pop();

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 15]]);
          }));
        }
      }]);

      return AddFuelPage;
    }();

    AddFuelPage.ctorParameters = function () {
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

    AddFuelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-fuel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-fuel.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-fuel/add-fuel.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-fuel.page.scss */
      "./src/app/add-fuel/add-fuel.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], AddFuelPage);
    /***/
  }
}]);
//# sourceMappingURL=add-fuel-add-fuel-module-es5.js.map