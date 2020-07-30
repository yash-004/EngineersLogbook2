(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-fuel-add-fuel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-fuel/add-fuel.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-fuel/add-fuel.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>Fuel Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <form class=\"form\" [formGroup]=\"addFuelForm\" (submit)=\"addFuel(addFuelForm.value)\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Date</ion-label>\r\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName=\"date\"></ion-datetime>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.date\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"addFuelForm.get('date').hasError(validation.type) && (addFuelForm.get('date').dirty || addFuelForm.get('date').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Vehicle Number</ion-label>\r\n            <ion-input onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"vehicleNumber\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.vehicleNumber\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"addFuelForm.get('vehicleNumber').hasError(validation.type) && (addFuelForm.get('vehicleNumber').dirty || addFuelForm.get('vehicleNumber').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Vehicle Type</ion-label>\r\n            <ion-select formControlName=\"vehicleType\" interface=\"popover\">\r\n              <ion-select-option text-wrap *ngFor=\"let vty of getapprovedvtypes()\" value={{vty}}>{{vty}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validationMessages.vehicleType\">\r\n              <div class=\"error-message\"\r\n                *ngIf=\"addFuelForm.get('vehicleType').hasError(validation.type) && (addFuelForm.get('vehicleType').dirty || addFuelForm.get('vehicleType').touched)\">\r\n                {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Location</ion-label>\r\n          <ion-input type=\"text\" onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"location\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.location\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"addFuelForm.get('location').hasError(validation.type) && (addFuelForm.get('location').dirty || addFuelForm.get('location').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Time</ion-label>\r\n          <ion-datetime formControlName=\"time\" displayFormat=\"HH:mm\"></ion-datetime>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validationMessages.time\">\r\n            <div class=\"error-message\"\r\n              *ngIf=\"addFuelForm.get('time').hasError(validation.type) && (addFuelForm.get('time').dirty || addFuelForm.get('time').touched)\">\r\n              {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Fuel Type</ion-label>\r\n          <ion-select text-wrap formControlName=\"FuelType\" interface=\"popover\" value=\"getfueltype()\">\r\n            <ion-select-option text-wrap value=\"getfueltype()\">{{getfueltype()}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">FuelTopUp</ion-label>\r\n          <ion-input type=\"number\" inputmode=\"numeric\" formControlName=\"FuelTopUp\"></ion-input>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <div class=\"btn-wrapper\">\r\n      <div *ngIf = showSubmit()>\r\n        <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!addFuelForm.valid\" style=\"padding-right:10px\">Submit\r\n        </ion-button>\r\n        <ion-button (click)='onCancel()'>Cancel</ion-button>\r\n      </div>\r\n      <div *ngIf = !showSubmit()>\r\n            <ion-button expand=\"block\" (click)='onCancel()'>OK</ion-button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/add-fuel/add-fuel.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-fuel/add-fuel.module.ts ***!
  \*********************************************/
/*! exports provided: AddFuelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFuelPageModule", function() { return AddFuelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_fuel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-fuel.page */ "./src/app/add-fuel/add-fuel.page.ts");







const routes = [
    {
        path: '',
        component: _add_fuel_page__WEBPACK_IMPORTED_MODULE_6__["AddFuelPage"]
    }
];
let AddFuelPageModule = class AddFuelPageModule {
};
AddFuelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_fuel_page__WEBPACK_IMPORTED_MODULE_6__["AddFuelPage"]]
    })
], AddFuelPageModule);



/***/ }),

/***/ "./src/app/add-fuel/add-fuel.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-fuel/add-fuel.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  text-transform: uppercase;\n  color: primary !important; }\n\nion-card-title {\n  --color:--ion-color-primary-contrast-rgb; }\n\n.btn-wrapper {\n  text-align: center; }\n\n.input[type=number] {\n  -moz-appearance: textfield; }\n\n.input[type=number]::-webkit-inner-spin-button {\n    display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWZ1ZWwvQzpcXFVzZXJzXFxSdWlcXEFuZHJvaWRTdHVkaW9Qcm9qZWN0c1xcRW5naW5lZXJzTG9nYm9vazIvc3JjXFxhcHBcXGFkZC1mdWVsXFxhZGQtZnVlbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0Usd0NBQVEsRUFBQTs7QUFHVjtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUVFLDBCQUF5QixFQUFBOztBQUYzQjtJQUNnQyxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZGQtZnVlbC9hZGQtZnVlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuLy8gIG9wYWNpdHk6IDEgIWltcG9ydGFudDsgIC8vIGRpc2FibGVkIGl0ZW1zIHdpbGwgbm90IGJlIGdyZXkgb3V0LlxyXG59XHJcblxyXG5pb24taW5wdXR7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogcHJpbWFyeSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXRpdGxle1xyXG4gIC0tY29sb3I6LS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I7XHJcbn1cclxuXHJcbi5idG4td3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBkbyBub3Qgc2hvdyBzcGlubmVyIGZvciBudW1iZXIgaW5wdXRzXHJcbi5pbnB1dFt0eXBlPW51bWJlcl0geyAgXHJcbiAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbnsgZGlzcGxheTogbm9uZTsgfVxyXG4gIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/add-fuel/add-fuel.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-fuel/add-fuel.page.ts ***!
  \*******************************************/
/*! exports provided: AddFuelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFuelPage", function() { return AddFuelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);







 // Datetime utility, See http://zetcode.com/javascript/dayjs/
let AddFuelPage = class AddFuelPage {
    constructor(navCtrl, formBuilder, toastController, database, route) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.database = database;
        this.route = route;
        this.errorMessage = '';
        this.successMessage = '';
        this.today = new Date().toISOString();
        this.validationMessages = {
            date: [
                { type: 'required', message: 'Date is required.' }
            ],
            vehicleNumber: [
                { type: 'required', message: 'Vehicle Number is required.' },
                { type: 'minlength', message: 'Vehicle number must be at least 5 characters long.' }
            ],
            vehicleType: [
                { type: 'required', message: 'Select a type of vehicle' },
            ],
            location: [
                { type: 'required', message: 'Enter starting location' },
            ],
            time: [
                { type: 'required', message: 'Enter current time' },
            ],
            FuelTopUp: [
                { type: 'required', message: 'Enter FuelTopUp value' },
            ],
        };
    }
    getapprovedvtypes() {
        var vtypes = _services_database_service__WEBPACK_IMPORTED_MODULE_4__["VehicleTypes"];
        if (this.database.current.user.mss_certified != true) {
            vtypes = vtypes.filter(vtype => vtype != 'MSS');
        }
        if (this.database.current.user.flb_certified != true) {
            vtypes = vtypes.filter(vtype => vtype != 'FLB');
        }
        if (this.database.current.user.belrex_certified != true) {
            vtypes = vtypes.filter(vtype => vtype != 'BELREX');
            return vtypes;
        }
    }
    ngOnInit() {
        // Create form group of controls
        this.addFuelForm = this.formBuilder.group({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicleNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicleType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.today, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            FuelType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            FuelTopUp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
        });
    }
    onCancel() {
        this.navCtrl.pop();
    }
    showSubmit() {
        return true;
    }
    showToast(msg) {
        this.toastController.create({
            message: msg,
            duration: 2000,
            //  showCloseButton: true,
            //  closeButtonText: 'OK',
            position: 'bottom'
        }).then((obj) => {
            obj.present();
        });
    }
    getfueltype() {
        if (this.addFuelForm.value.vehicleType == "OUV" || this.addFuelForm.value.vehicleType == "5TON") {
            return "diesel";
        }
        else if (this.addFuelForm.value.vehicleType != "") {
            return "petrol";
        }
    }
    addFuel(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.fuel == null) {
                try {
                    const time2 = dayjs__WEBPACK_IMPORTED_MODULE_6__(new Date(this.addFuelForm.value.time)).format('HH:mm');
                    var new_fuel = {
                        created: this.database.getTimeStamp(),
                        driver: this.database.current.user.email,
                        // Stage-1 details
                        vehicle: this.addFuelForm.value.vehicleNumber,
                        vehicle_type: this.addFuelForm.value.vehicleType,
                        date: (this.addFuelForm.value.date).split('T')[0],
                        location: this.addFuelForm.value.location,
                        time: time2,
                        fleet: this.database.current.user.fleet,
                        company: this.database.current.user.company,
                        FuelTopUp: this.addFuelForm.value.FuelTopUp,
                    };
                    let subAutoID = this.database.collection('fuel').doc().id;
                    new_fuel.id = subAutoID;
                    console.log('new_fuel=${JSON.stringify(new_fuel)}');
                    yield this.database.write('fuel', new_fuel.id, new_fuel);
                    this.errorMessage = '';
                    this.successMessage = 'Your Fuel has been added.';
                    this.showToast(this.successMessage);
                    this.navCtrl.pop();
                }
                catch (err) {
                    this.errorMessage = `Add Fuel error: ${err}`;
                    this.successMessage = '';
                    this.showToast(this.errorMessage);
                    this.navCtrl.pop();
                }
            }
        });
    }
};
AddFuelPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
AddFuelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-fuel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-fuel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-fuel/add-fuel.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-fuel.page.scss */ "./src/app/add-fuel/add-fuel.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], AddFuelPage);



/***/ })

}]);
//# sourceMappingURL=add-fuel-add-fuel-module-es2015.js.map