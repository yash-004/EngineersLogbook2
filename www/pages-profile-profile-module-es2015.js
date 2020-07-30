(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Profile</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button left routerLink=\"/\" routerDirection=\"root\" fill=\"clear\" slot=\"primary\">\r\n        Logout<ion-icon name=\"log-out\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"body\">\r\n\r\n  <ion-card class=\"card\">\r\n    <ion-card-content >\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n\r\n              <ion-item class=\"item\">\r\n                <ion-label position=\"stacked\">Operator <ion-icon name=\"contact\"></ion-icon></ion-label>\r\n                <ion-text>{{database.current.user.name}}</ion-text>\r\n              </ion-item>\r\n              <ion-item class=\"item\">\r\n                <ion-label position=\"stacked\">Licence Type <ion-icon name=\"car\"></ion-icon></ion-label>\r\n                <ion-text>{{database.current.user.licence_type}}</ion-text>\r\n              </ion-item>\r\n              <ion-item class=\"item\">\r\n                <ion-label position=\"stacked\">Licence Number <ion-icon name=\"create\"></ion-icon></ion-label>\r\n                <ion-text>{{database.current.user.licence_num}}</ion-text>  \r\n              </ion-item>\r\n \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n\r\n<ion-card>\r\n<ion-label text-center><h1>Certifications</h1></ion-label>\r\n<ion-grid>\r\n    <ion-row>\r\n        <ion-col offset-4 text-center>\r\n            <ion-label color=\"success\"><img src=\"assets/OUV.png\"> OUV </ion-label>\r\n        </ion-col>\r\n        <ion-col text-center>\r\n            <ion-label color=\"success\"><img src=\"assets/5TON.png\"> 5TON </ion-label>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col text-center>\r\n            <ion-label *ngIf=\"database.current.user.mss_certified == true\" color=\"success\"> MSS </ion-label>\r\n        </ion-col>\r\n        <ion-col offset-4 text-center>\r\n            <ion-label *ngIf=\"database.current.user.flb_certified == true\" color=\"success\"> FLB </ion-label>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col text-center>\r\n            <ion-label *ngIf=\"database.current.user.belrex_certified == true\" color=\"success\"> BELREX </ion-label>\r\n        </ion-col>\r\n        <ion-col offset-4 text-center>\r\n            <ion-label>  </ion-label>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-grid>\r\n</ion-card>");

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  -webkit-box-align: center;\n          align-items: center;\n  vertical-align: center; }\n\n.card {\n  align-content: left; }\n\n.header {\n  font-size: 1.7rem; }\n\n.item {\n  font-size: 1.5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXFJ1aVxcQW5kcm9pZFN0dWRpb1Byb2plY3RzXFxFbmdpbmVlcnNMb2dib29rMi9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG59XHJcblxyXG4uaXRlbXtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");



let ProfilePage = class ProfilePage {
    constructor(database) {
        this.database = database;
    }
    ngOnInit() {
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map