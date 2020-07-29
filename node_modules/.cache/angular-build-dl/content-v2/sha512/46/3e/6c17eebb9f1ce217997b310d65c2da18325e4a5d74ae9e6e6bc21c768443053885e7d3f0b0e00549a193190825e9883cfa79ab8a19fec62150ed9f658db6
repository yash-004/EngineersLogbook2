function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button left routerLink=\"/\" routerDirection=\"root\" fill=\"clear\" slot=\"primary\">\n        Logout<ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"body\">\n\n  <ion-card class=\"card\">\n    <ion-card-content >\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n\n              <ion-item class=\"item\">\n                <ion-label position=\"stacked\">Operator <ion-icon name=\"contact\"></ion-icon></ion-label>\n                <ion-text>{{database.current.user.name}}</ion-text>\n              </ion-item>\n              <ion-item class=\"item\">\n                <ion-label position=\"stacked\">Licence Type <ion-icon name=\"car\"></ion-icon></ion-label>\n                <ion-text>{{database.current.user.licence_type}}</ion-text>\n              </ion-item>\n              <ion-item class=\"item\">\n                <ion-label position=\"stacked\">Licence Number <ion-icon name=\"create\"></ion-icon></ion-label>\n                <ion-text>{{database.current.user.licence_num}}</ion-text>  \n              </ion-item>\n \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-card>\n<ion-label text-center><h1>Certifications</h1></ion-label>\n<ion-grid>\n    <ion-row>\n        <ion-col offset-4 text-center>\n            <ion-label color=\"success\"><img src=\"assets/OUV.png\"> OUV </ion-label>\n        </ion-col>\n        <ion-col text-center>\n            <ion-label color=\"success\"><img src=\"assets/5TON.png\"> 5TON </ion-label>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col text-center>\n            <ion-label *ngIf=\"database.current.user.mss_certified == true\" color=\"success\"> MSS </ion-label>\n        </ion-col>\n        <ion-col offset-4 text-center>\n            <ion-label *ngIf=\"database.current.user.flb_certified == true\" color=\"success\"> FLB </ion-label>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col text-center>\n            <ion-label *ngIf=\"database.current.user.belrex_certified == true\" color=\"success\"> BELREX </ion-label>\n        </ion-col>\n        <ion-col offset-4 text-center>\n            <ion-label>  </ion-label>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n</ion-card>";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }];

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".body {\n  -webkit-box-align: center;\n          align-items: center;\n  vertical-align: center;\n}\n\n.card {\n  align-content: left;\n}\n\n.header {\n  font-size: 1.7rem;\n}\n\n.item {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YXNoZGl4aXQvRGVza3RvcC9FbmdpbmVlcnNMb2dib29rMi9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBRENBO0VBQ0ksaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJke1xuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XG59XG4uaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4uaXRlbXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn0iLCIuYm9keSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgYWxpZ24tY29udGVudDogbGVmdDtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4uaXRlbSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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

    var ProfilePage =
    /*#__PURE__*/
    function () {
      function ProfilePage(database) {
        _classCallCheck(this, ProfilePage);

        this.database = database;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
      }];
    };

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map