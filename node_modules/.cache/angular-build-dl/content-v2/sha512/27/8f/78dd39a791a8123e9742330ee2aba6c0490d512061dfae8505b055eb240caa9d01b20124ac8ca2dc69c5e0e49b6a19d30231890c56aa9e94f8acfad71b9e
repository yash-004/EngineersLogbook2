(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["boc-boc-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/boc/boc.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boc/boc.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <h1 style=\"margin-left: 10px;\">BEFORE OPERATIONS CHECK (BOC) CHECKLIST</h1>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h6 style=\"margin-left: 10px;\"> NOTE: Any defects including the items in the Check List found are to be reported to Transport Leader/3SG and above immediately and recorded in the ODD book</h6>\n  <ol>\n    <li>Check Engine Oil in between minimum and maximum level.</li>\n    <li>Check Brake Fluid is between minimum minimum and maximum level. (if applicable)</li>\n    <li>Check Clutch Fluid is between minimum minimum and maximum level. (if applicable)</li>\n    <li>Check Power Steering Oil is between minimum minimum and maximum level.</li>\n    <li>Check Radiator Coolant is filled to the required level.</li>\n    <li>Check all wheel nuts are intact & tyre side wall for physical damage.</li>\n    <li>Check Canopy Ropes are tightened. (if applicable)</li>\n    <li>Check Battery terminal / mounting bracket secured & terminal insulators are intact.</li>\n    <li>Check Front & Rear Seat Belts are able to buckle & lock.</li>\n    <li>Check Headlight / Signal Height / Tail Height / Brake Light / Horn / Wipers are working.</li>\n    <li>Check instrument panel warning lights and buzzer are working.</li>\n    <li>Check SWD / IVD are working.</li>\n    <li>Check Fuel Tank level. (not less than 1/2 tank)</li>\n    <li>Check for abnormal noise, vibration and burning smell.</li>\n    <li>Check that reverse sensor is switched on. (for OUV)</li>\n    <li>Check that reverse camera is working. (if applicable)</li>\n  </ol>\n  <ion-item>\n    <ion-label text-wrap>I acknowledge that I have read through, understood, and checked through the Before Operations Check (BOC) Checklist and have not found any defects.</ion-label>\n    <ion-checkbox slot=\"start\" name=\"boc\" (ionChange)=\"setcheckboxstatus()\"></ion-checkbox>\n  </ion-item>\n  <div class=\"btn-wrapper\">\n    <div *ngIf=getcheckboxstatus()>\n      <ion-button class=\"submit-btn\" style=\"padding-right:10px\" routerLink=\"/mtrac\" >Continue</ion-button>\n      <ion-button (click)='onCancel()'>Cancel</ion-button>\n    </div>\n    <div *ngIf = !getcheckboxstatus()>\n      <ion-button expand=\"block\" (click)='onCancel()'>Cancel</ion-button>\n    </div>\n  </div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  text-transform: uppercase;\n  color: primary !important;\n}\n\nion-card-title {\n  --color:--ion-color-primary-contrast-rgb;\n}\n\n.btn-wrapper {\n  text-align: center;\n}\n\n.input[type=number] {\n  -moz-appearance: textfield;\n}\n\n.input[type=number]::-webkit-inner-spin-button {\n  display: none;\n}\n\n.toolbar-title {\n  text-overflow: inherit;\n  white-space: normal;\n  text-align: left;\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2phdmUvRGVza3RvcC9FbmdpbmVlcnNMb2dib29rMi9zcmMvYXBwL2JvYy9ib2MucGFnZS5zY3NzIiwic3JjL2FwcC9ib2MvYm9jLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUNIRjs7QURNQTtFQUNFLHdDQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE9BO0VBRUUsMEJBQUE7QUNMRjs7QURJRTtFQUE4QixhQUFBO0FDRGhDOztBREtBO0VBQ0csc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSCIsImZpbGUiOiJzcmMvYXBwL2JvYy9ib2MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4vLyAgb3BhY2l0eTogMSAhaW1wb3J0YW50OyAgLy8gZGlzYWJsZWQgaXRlbXMgd2lsbCBub3QgYmUgZ3JleSBvdXQuXG59XG5cbmlvbi1pbnB1dHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHByaW1hcnkhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC10aXRsZXtcbiAgLS1jb2xvcjotLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjtcbn1cblxuLmJ0bi13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vLyBkbyBub3Qgc2hvdyBzcGlubmVyIGZvciBudW1iZXIgaW5wdXRzXG4uaW5wdXRbdHlwZT1udW1iZXJdIHsgIFxuICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9ueyBkaXNwbGF5OiBub25lOyB9XG4gIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIGZvbnQtc2l6ZToxLjNlbTtcbn0iLCJpb24taW5wdXQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogcHJpbWFyeSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIC0tY29sb3I6LS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I7XG59XG5cbi5idG4td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn0iXX0= */");

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
                { type: 'required', message: 'Date is required.' }
            ],
            time: [
                { type: 'required', message: 'Enter current time' },
            ],
        };
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