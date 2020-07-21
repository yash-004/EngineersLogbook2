(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Signup</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n\n  <form class=\"form\" [formGroup]=\"validationsForm\"  (ngSubmit)=\"tryRegister(validationsForm.value)\">\n    \n    <!-- Name ------------------->\n\n    <ion-item no-padding>\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validationMessages.name\">\n        <div class=\"error-message\" *ngIf=\"validationsForm.get('name').hasError(validation.type) && (validationsForm.get('name').dirty || validationsForm.get('name').touched)\">\n        {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <!-- Email ------------------->\n\n    <ion-item no-padding>\n      <ion-label  position=\"floating\">Email</ion-label>\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validationMessages.email\">\n        <div class=\"error-message\" *ngIf=\"validationsForm.get('email').hasError(validation.type) && (validationsForm.get('email').dirty || validationsForm.get('email').touched)\">\n        {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <!-- Unit ------------------->\n\n    <ion-item no-padding>\n      <ion-label position=\"floating\">Unit</ion-label>\n      <ion-input type=\"text\" formControlName=\"unit\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validationMessages.unit\">\n        <div class=\"error-message\" *ngIf=\"validationsForm.get('unit').hasError(validation.type) && (validationsForm.get('unit').dirty || validationsForm.get('unit').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <!-- Company/Platoon ------------------->\n\n    <ion-item no-padding>\n      <ion-label position=\"floating\">Company</ion-label>\n      <ion-input type=\"text\" formControlName=\"company\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validationMessages.company\">\n        <div class=\"error-message\" *ngIf=\"validationsForm.get('company').hasError(validation.type) && (validationsForm.get('company').dirty || validationsForm.get('company').touched)\">\n        {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    \n    <!-- Password ------------------->\n\n    <ion-item no-padding>\n      <ion-label  position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validationMessages.password\">\n        <div class=\"error-message\" *ngIf=\"validationsForm.get('password').hasError(validation.type) && (validationsForm.get('password').dirty || validationsForm.get('password').touched)\">\n        {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n       \n    <ion-item no-padding>\n      <ion-label position=\"floating\">Confirm Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"confirmPassword\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validationMessages.confirmPassword\">\n        <div class=\"error-message\" *ngIf=\"validationsForm.get('confirmPassword').hasError(validation.type) && (validationsForm.get('confirmPassword').dirty || validationsForm.get('confirmPassword').touched)\">\n        {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <!-- Licence ------------------->\n    \n    <ion-item no-padding>\n      <ion-label position=\"floating\">License Number</ion-label>\n      <ion-input type=\"text\" formControlName=\"licenseNum\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validationMessages.licenseNum\">\n        <div class=\"error-message\" *ngIf=\"validationsForm.get('licenseNum').hasError(validation.type) && (validationsForm.get('licenseNum').dirty || validationsForm.get('licenseNum').touched)\">\n        {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    \n    <ion-item no-padding>\n      <ion-label floating >License Type</ion-label>\n      <ion-select formControlName=\"licenseType\">\n        <ion-select-option value=\"A\">A</ion-select-option>\n        <ion-select-option value=\"B\">B</ion-select-option>\n        <ion-select-option value=\"C\">C</ion-select-option>\n        <ion-select-option value=\"D\">D</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- Commander or Driver ------------------->\n\n    <ion-item no-padding>\n      <ion-label floating >Commander or Driver?</ion-label>\n      <ion-select formControlName=\"isCommander\">\n        <ion-select-option value=\"true\">Commander</ion-select-option>\n        <ion-select-option value=\"false\">Driver</ion-select-option>\n      </ion-select>\n    </ion-item>\n        \n    <!-- Submit Button ------------------->  \n    <BR><BR>\n    <ion-button expand=\"block\" class=\"submit-btn\" type=\"submit\"  [disabled]=\"!validationsForm.valid\">Sign up</ion-button>\n    <label class=\"error-message\">{{errorMessage}}</label>\n    <label class=\"success-message\">{{successMessage}}</label>\n\n    <!-- <ion-button expand=\"block\" routerLink=\"/tabs\" fill=\"outline\">Sign up</ion-button>  --> \n\n    <!-- Cancel Button ------------------->\n    <ion-button expand=\"block\" routerLink=\"/\" fill=\"outline\">Cancel</ion-button>\n\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 10%;\n  --padding-end: 10%;\n  --padding-top: 5px;\n}\nion-content .error-message {\n  color: red;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2phdmUvRGVza3RvcC9FbmdpbmVlcnNMb2dib29rMi9zcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuXG4gIC0tcGFkZGluZy1zdGFydDogMTAlO1xuICAtLXBhZGRpbmctZW5kOiAxMCU7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcblxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTAlO1xuICAtLXBhZGRpbmctZW5kOiAxMCU7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbn1cbmlvbi1jb250ZW50IC5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");







let SignupPage = class SignupPage {
    constructor(navCtrl, authService, database, formBuilder, toastController) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.database = database;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.errorMessage = '';
        this.successMessage = '';
        this.validationMessages = {
            name: [
                { type: 'required', message: 'Name is required.' }
            ],
            email: [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            unit: [
                { type: 'required', message: 'Unit is required 30SCE or TPT.' },
                { type: 'minlength', message: 'Unit must be at least 3 characters long.' }
            ],
            company: [
                { type: 'required', message: 'Company is required A/B/C/ME or West.' },
                { type: 'maxlength', message: 'Company must be less than 5 characters long. Alpha-A Bravo-B Charlie-C' }
            ],
            password: [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 6 characters long.' }
            ],
            confirmPassword: [
                { type: 'required', message: 'You need to confirm your password.' },
            ],
            licenseNum: [
                { type: 'required', message: 'License Number is required.' },
                { type: 'minlength', message: 'License Number must be at least 5 characters long.' }
            ]
        };
    }
    ngOnInit() {
        this.validationsForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            licenseNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            licenseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            isCommander: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
    }
    tryRegister(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //console.log(`tryRegister: ${JSON.stringify(value)}`);
            if (this.validationsForm.get('password').value !== this.validationsForm.get('confirmPassword').value) {
                this.errorMessage = 'Password do not match';
            }
            else {
                try {
                    const res = yield this.authService.registerUser(value);
                    //console.log(`success: ${JSON.stringify(res)}`);
                    var new_user = {
                        name: value.name.toUpperCase(),
                        email: value.email,
                        fleet: value.unit.toUpperCase(),
                        company: value.company.toUpperCase(),
                        licence_num: value.licenseNum,
                        licence_type: value.licenseType,
                        created: this.database.getTimeStamp(),
                        mss_certified: false,
                        flb_certified: false,
                        belrex_certified: false,
                        is_driver: value.isCommander.toLowerCase() === 'false',
                        is_commander: value.isCommander.toLowerCase() === 'true',
                        location: { lat: navigator.geolocation.getCurrentPosition((position) => { position.coords.latitude; }), lng: navigator.geolocation.getCurrentPosition((position) => { position.coords.longitude; }) }
                    };
                    yield this.database.write('user', res.user.email, new_user);
                    this.errorMessage = '';
                    this.successMessage = 'Your account has been created. Please log in.';
                    this.showToast(this.successMessage);
                }
                catch (err) {
                    console.log(err);
                    this.errorMessage = err.message;
                    this.successMessage = '';
                }
            }
        });
    }
    goLoginPage() {
        this.navCtrl.navigateBack('');
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
            this.navCtrl.navigateBack('');
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map