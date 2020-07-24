(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["boc-boc-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/boc/boc.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boc/boc.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <h1 style=\"margin-left: 10px;\">BEFORE OPERATIONS CHECK (BOC) CHECKLIST</h1>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h6 style=\"margin-left: 10px;\"> NOTE: Any defects including the items in the Check List found are to be reported to Transport Leader/3SG and above immediately and recorded in the ODD book</h6>\n  <ion-list>\n    <ion-item *ngFor=\"let list of checklist\">\n      <ion-label>{{list.listID}}.{{list.name}}</ion-label>\n      <ion-checkbox slot=\"end\" [(ngModel)]=\"list.isChecked\" (click)=\"onChange(list)\"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ion-item>\n    <ion-label text-wrap>I acknowledge that I have read through, understood, and checked through the Before Operations Check (BOC) Checklist and have not found any defects.</ion-label>\n    <ion-checkbox slot=\"start\" name=\"boc\" [disabled]=\"selectedArray.length <= 15\" (ionChange)=\"setcheckboxstatus()\"></ion-checkbox>\n  </ion-item>\n  <div class=\"btn-wrapper\">\n    <div *ngIf=getcheckboxstatus()>\n      <ion-button (click)=onCancel()>Cancel</ion-button>\n      <ion-button routerLink=\"/mtrac\" >Continue</ion-button>\n    </div>\n    <div *ngIf = !getcheckboxstatus()>\n      <ion-button expand=\"block\" (click)=onCancel()>Cancel</ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/boc/boc.module.ts":
/*!***********************************!*\
  !*** ./src/app/boc/boc.module.ts ***!
  \***********************************/
/*! exports provided: bocPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bocPageModule", function() { return bocPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _boc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boc.page */ "./src/app/boc/boc.page.ts");







const routes = [
    {
        path: '',
        component: _boc_page__WEBPACK_IMPORTED_MODULE_6__["bocPage"]
    }
];
let bocPageModule = class bocPageModule {
};
bocPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_boc_page__WEBPACK_IMPORTED_MODULE_6__["bocPage"]]
    })
], bocPageModule);



/***/ }),

/***/ "./src/app/boc/boc.page.scss":
/*!***********************************!*\
  !*** ./src/app/boc/boc.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  text-transform: uppercase;\n  color: primary !important;\n}\n\nion-card-title {\n  --color:--ion-color-primary-contrast-rgb;\n}\n\n.btn-wrapper {\n  text-align: center;\n}\n\n.input[type=number] {\n  -moz-appearance: textfield;\n}\n\n.input[type=number]::-webkit-inner-spin-button {\n  display: none;\n}\n\n.toolbar-title {\n  text-overflow: inherit;\n  white-space: normal;\n  text-align: left;\n  font-size: 1.3em;\n}\n\n.scroll-content {\n  overflow-y: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXdpc3RoYW0vR2l0SHViL0VuZ2luZWVyc0xvZ2Jvb2syL3NyYy9hcHAvYm9jL2JvYy5wYWdlLnNjc3MiLCJzcmMvYXBwL2JvYy9ib2MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0Usd0NBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FET0E7RUFFRSwwQkFBQTtBQ0xGOztBRElFO0VBQThCLGFBQUE7QUNEaEM7O0FES0E7RUFDRyxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZIOztBREtBO0VBQ0ksa0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2JvYy9ib2MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4vLyAgb3BhY2l0eTogMSAhaW1wb3J0YW50OyAgLy8gZGlzYWJsZWQgaXRlbXMgd2lsbCBub3QgYmUgZ3JleSBvdXQuXG59XG5cbmlvbi1pbnB1dHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHByaW1hcnkhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC10aXRsZXtcbiAgLS1jb2xvcjotLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjtcbn1cblxuLmJ0bi13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vLyBkbyBub3Qgc2hvdyBzcGlubmVyIGZvciBudW1iZXIgaW5wdXRzXG4uaW5wdXRbdHlwZT1udW1iZXJdIHsgIFxuICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9ueyBkaXNwbGF5OiBub25lOyB9XG4gIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIGZvbnQtc2l6ZToxLjNlbTtcbn1cblxuLnNjcm9sbC1jb250ZW50e1xuICAgIG92ZXJmbG93LXk6aGlkZGVuO1xufSIsImlvbi1pbnB1dCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBwcmltYXJ5ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgLS1jb2xvcjotLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjtcbn1cblxuLmJ0bi13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG4uaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvb2xiYXItdGl0bGUge1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/boc/boc.page.ts":
/*!*********************************!*\
  !*** ./src/app/boc/boc.page.ts ***!
  \*********************************/
/*! exports provided: bocPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bocPage", function() { return bocPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let bocPage = class bocPage {
    constructor(navCtrl, formBuilder, toastController, database, route) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.database = database;
        this.route = route;
        this.errorMessage = '';
        this.successMessage = '';
        this.today = new Date().toISOString();
        this.checkboxstatus = false;
        this.validationMessages = {
            date: [
                { type: 'required', message: 'Date is required.'
                }
            ],
            time: [
                { type: 'required', message: 'Enter current time'
                },
            ],
        };
        this.checklist = [
            { listID: 1, name: "Check Engine Oil in between minimum and maximum level.", ischecked: false },
            { listID: 2, name: "Check Brake Fluid is between minimum minimum and maximum level. (if applicable)", ischecked: false },
            { listID: 3, name: "Check Clutch Fluid is between minimum minimum and maximum level. (if applicable)", ischecked: false },
            { listID: 4, name: "Check Power Steering Oil is between minimum minimum and maximum level.", ischecked: false },
            { listID: 5, name: "Check Radiator Coolant is filled to the required level.", ischecked: false },
            { listID: 6, name: "Check all wheel nuts are intact & tyre side wall for physical damage.", ischecked: false },
            { listID: 7, name: "Check Canopy Ropes are tightened. (if applicable)", ischecked: false },
            { listID: 8, name: "Check Battery terminal / mounting bracket secured & terminal insulators are intact.", ischecked: false },
            { listID: 9, name: "Check Front & Rear Seat Belts are able to buckle & lock.", ischecked: false },
            { listID: 10, name: "Check Headlight / Signal Height / Tail Height / Brake Light / Horn / Wipers are working.", ischecked: false },
            { listID: 11, name: "Check instrument panel warning lights and buzzer are working.", ischecked: false },
            { listID: 12, name: "Check SWD / IVD are working.", ischecked: false },
            { listID: 13, name: "Check Fuel Tank level. (not less than 1/2 tank)", ischecked: false },
            { listID: 14, name: "Check for abnormal noise, vibration and burning smell.", ischecked: false },
            { listID: 15, name: "Check that reverse sensor is switched on. (for OUV)", ischecked: false },
            { listID: 16, name: "Check that reverse camera is working. (if applicable)", ischecked: false }
        ];
        this.selectedArray = [];
    }
    onChange(name) {
        if (this.selectedArray.includes(name)) {
            this.selectedArray = this.selectedArray.filter((value) => value != name);
        }
        else {
            this.selectedArray.push(name);
        }
    }
    setcheckboxstatus() {
        this.checkboxstatus = !this.checkboxstatus;
    }
    getcheckboxstatus() {
        return this.checkboxstatus;
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
};
bocPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
bocPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-boc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./boc.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/boc/boc.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./boc.page.scss */ "./src/app/boc/boc.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], bocPage);



/***/ })

}]);
//# sourceMappingURL=boc-boc-module-es2015.js.map