function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-summary-summary-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSummarySummaryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button left routerLink=\"/\" routerDirection=\"root\" fill=\"clear\" slot=\"primary\">\n        Logout<ion-icon name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"table\" no-padding>\n\n    <!-- Top section (Total Distance, Time and Drives) ------------------------------------------->\n\n    <ion-row *ngIf=\"!getnmtimemorning()\">\n      <ion-col no-padding>\n        <ion-item text-center color=\"danger\">\n          <ion-label><h1><strong>NO MOVE TIMING TILL 0930</strong></h1></ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!getnmtimenight()\">\n      <ion-col no-padding>\n        <ion-item text-center color=\"danger\">\n          <ion-label><h1><strong>NO MOVE TIMING TILL 1930</strong></h1></ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col no-padding>\n        <ion-item text-center>\n        <ion-label style=\"margin-bottom: 0;\"><h1>Fleet:<strong>{{database.current.user.fleet}}/{{database.current.user.company}}</strong></h1></ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" class=\"bubble-text\" no-padding> \n\n        <ion-card (click)=\"showmileage()\">\n          <div class=\"ion-text-center\" style=\"width: 100%;\">\n            <ion-icon name=\"speedometer\" size=\"large\"></ion-icon><br>\n            <div class=\"shift_up\">Distance</div>\n            <div class=\"slide_num\">{{database.current.stats.mileage_km}}</div>\n            <div class=\"slide_label shift_up\">km</div>\n            <ion-label *ngIf=\"checkMileageStatus()\">\n              <h6 *ngFor=\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\">\n                {{vehicle.key}} : {{getMileagebyVehicleType(database.current.stats.mileage_by_vehicle_type, vehicle.key)}}\n              </h6>\n            </ion-label>\n          </div>  \n        </ion-card>\n      </ion-col>\n      \n      <ion-col size=\"4\" class=\"bubble-text\">          \n        <ion-card (click)=\"showdrives()\">\n          <div class=\"ion-text-center\" style=\"width: 100%;\">\n            <ion-icon name=\"car\" size=\"large\">\n            </ion-icon><br>\n              <ion-label>\n                <div class=\"shift_up\">Drives</div>\n              </ion-label>\n              <ion-label>\n                <div class=\"slide_num\">{{database.current.stats.drive_count}}</div>\n              </ion-label>\n              <ion-label>\n                <div class=\"slide_label shift_up\">Trips</div>\n              </ion-label>\n            <ion-label *ngIf=\"checkDriveStatus()\">\n              <h6 *ngFor=\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\">\n                {{vehicle.key}} : {{getDrivesbyVehicleType(vehicle.key)}}\n              </h6>\n            </ion-label>\n          </div>\n        </ion-card>\n      </ion-col>\n\n      <ion-col size=\"4\" class=\"bubble-text\">\n        <ion-card>\n          <div class=\"ion-text-center\" style=\"width: 100%;\">\n            <ion-icon name=\"clock\" size=\"large\"></ion-icon><br>\n            <div class=\"shift_up\">Time</div>\n            <div class=\"slide_num\">{{database.current.stats.duration_minutes / 60 | number : '1.0-1' }}</div>\n            <div class=\"slide_label shift_up\">Hours</div>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Third section (Chart slides) ------------------------------------------->\n  <ion-slides pager='true' no-padding>\n    <!--<ion-slide><canvas #chartCanvas1></canvas></ion-slide>-->\n    <ion-slide style=\"padding: 0 5px\"><ion-col>\n      <canvas #chartCanvas4></canvas>\n      <ion-label position=\"stacked\" style=\"padding-left: 125px\" text-right>{{database.current.stats.mileage_km}} km</ion-label>\n    </ion-col></ion-slide>\n    <ion-slide  style=\"padding: 0 5px\"><canvas #chartCanvas3></canvas></ion-slide>\n    <ion-slide > <ion-grid>\n      <ion-label><h1 class=\"underline\">Platform Currency</h1></ion-label>\n      <ion-item *ngFor=\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\">\n\n\n     <ion-col>\n       <ion-label>\n         <h2 *ngIf=\"checkOperatorCurrencyValid(database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key])\">{{vehicle.key}} :</h2>\n       </ion-label>\n       <ion-label  color='danger'>\n          <h2 *ngIf=\"checkOperatorCurrencyInvalid(database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key])\">{{vehicle.key}} :</h2>\n       </ion-label>\n\n      Last Drive: {{database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key] | date: \"dd/MM/yyyy\"}}\n      ({{database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key] | daysAgo}} days ago)</ion-col>\n\n    </ion-item> </ion-grid> </ion-slide>\n  </ion-slides>\n\n\n<!--\n      <ion-slide> <ion-grid>\n\n         <ion-label><h1>Platform Currency</h1></ion-label>\n         <ion-item *ngFor=\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\">\n\n        <ion-col>\n          <ion-label color='danger'>\n            <h2 *ngIf=\"checkOperatorCurrencyInvalid(database.current.stats.most_recent_drive[vehicle.key])\">{{vehicle.key}} : {{checkOperatordaysCurrencyValid(database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key])}}</h2>\n          </ion-label>\n\n          <ion-label>\n            <h2 *ngIf=\"checkOperatorCurrencyValid(database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key])\">{{vehicle.key}} : {{checkOperatordaysCurrencyValid(database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key])}}</h2>\n          </ion-label>\n\n         Last Drive: {{database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key] | date: \"dd/MM/yyyy\"}}\n         ({{database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key] | daysAgo}} days ago)</ion-col>\n     </ion-item></ion-grid></ion-slide>\n     -->\n\n\n  <!-- Second section (Last Drive, Operator Currency) ------------------------------------------->\n  <ion-card padding text-center>\n    <ion-card-title text-center>\n      <strong>JIT Countdown</strong>\n    </ion-card-title>\n\n    <ion-card-subtitle><strong>\n\n      <ion-label color='danger' text-center>\n        <h2 *ngIf=\"checkTimelefttoJIT(database.current.stats.most_recent_drive) == false\">\n          DO JIT NOW!\n        </h2>\n      </ion-label>\n\n      <ion-label>\n        <ion-item *ngIf=\"checkTimelefttoJIT(database.current.stats.most_recent_drive) == true\" style=\"padding: 0 55px\" text-center>\n          <countdown [config]=\"{leftTime: getTimelefttoJIT(database.current.stats.most_recent_drive), format: 'dd'}\"></countdown>\n          <h6 style=\"padding-bottom: 5px\">days&ensp;</h6>\n          <countdown [config]=\"{leftTime: getTimelefttoJIT(database.current.stats.most_recent_drive), format: 'HH'}\"></countdown>\n          <h6 style=\"padding-bottom: 5px\">hrs&ensp;</h6>\n          <countdown [config]=\"{leftTime: getTimelefttoJIT(database.current.stats.most_recent_drive), format: 'mm'}\"></countdown>\n          <h6 style=\"padding-bottom: 5px\">mins&ensp;</h6>\n          <countdown [config]=\"{leftTime: getTimelefttoJIT(database.current.stats.most_recent_drive), format: 'ss'}\"></countdown>\n          <h6 style=\"padding-bottom: 5px\">sec&ensp;</h6>\n        </ion-item>\n      </ion-label>\n\n    </strong></ion-card-subtitle>\n  </ion-card>\n\n  <!--\n  <ion-card padding>\n  <ion-card-subtitle><strong>Operator Currency</strong></ion-card-subtitle>\n  <ion-card-title>Most Recent Drive:</ion-card-title>\n  <ion-card-content class=\"ion-no-padding\">\n    {{database.current.stats.most_recent_drive | date: \"dd/MM/yyyy hh:mm\"}} ({{database.current.stats.most_recent_drive | daysAgo}} days ago)\n  </ion-card-content>\n</ion-card>\n-->\n\n\n  <!-- Bottom section (Notifications) ------------------------------------------->\n\n  <ion-item text-center>\n    <ion-label><h1><strong>Notifications</strong></h1></ion-label>\n  </ion-item>\n\n  <!--ion-card *ngFor=\"let trip of database.current.drive_history\">\n    <app-drive-view expandHeight='150px' [drive]=\"trip\"></app-drive-view>\n  </ion-card-->\n\n  <ion-card *ngFor=\"let message of getNotifications()\" padding>\n\n    <ion-fab vertical=\"top\" horizontal=\"end\">\n      <ion-fab-button size=\"small\" (click)=\"click(message.trip)\"><ion-icon name='share-alt'></ion-icon></ion-fab-button>\n    </ion-fab>\n\n    <ion-card-subtitle color='danger'><strong>{{message.subtitle}}</strong></ion-card-subtitle>\n    <ion-card-title>{{message.title}}</ion-card-title>\n\n    <ion-card-content class=\"ion-no-padding\">{{message.text}}</ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/summary/summary.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/summary/summary.module.ts ***!
    \*************************************************/

  /*! exports provided: SummaryPageModule */

  /***/
  function srcAppPagesSummarySummaryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function () {
      return SummaryPageModule;
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


    var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./summary.page */
    "./src/app/pages/summary/summary.page.ts");
    /* harmony import */


    var _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../drive-view/drive-view.module */
    "./src/app/drive-view/drive-view.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var ngx_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-countdown */
    "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");

    var routes = [{
      path: '',
      component: _summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]
    }];

    var SummaryPageModule = function SummaryPageModule() {
      _classCallCheck(this, SummaryPageModule);
    };

    SummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__["DriveViewModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
      declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]]
    })], SummaryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/summary/summary.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/summary/summary.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSummarySummaryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --border-style: none;\n}\n\n.underline {\n  text-decoration: underline;\n}\n\n.shift_up {\n  position: relative;\n  top: -5px;\n}\n\n.slide_num {\n  font-size: 200%;\n  font-weight: 900;\n  text-align: center;\n  letter-spacing: 2px;\n}\n\n.slide_label {\n  font-size: small;\n  letter-spacing: 2px;\n  font-weight: bolder;\n}\n\n.slide_time {\n  font-size: 180%;\n  font-weight: 900;\n  text-align: center;\n  letter-spacing: 3px;\n}\n\n.gauge_value {\n  font-weight: 900;\n}\n\n.top_stats {\n  font-size: 150%;\n  font-weight: 900;\n  text-align: center;\n}\n\n.top_inputs {\n  font-size: 20px;\n}\n\n.top_labels {\n  font-size: 25px;\n  padding-bottom: 5px;\n}\n\n.scrollable {\n  height: auto;\n  overflow-y: auto;\n}\n\n.table {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n}\n\n.bubble-text {\n  padding: 0px;\n}\n\n.vertical-align-content > * {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2phdmUvRGVza3RvcC9FbmdpbmVlcnNMb2dib29rMi9zcmMvYXBwL3BhZ2VzL3N1bW1hcnkvc3VtbWFyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1bW1hcnkvc3VtbWFyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDSSxvQkFBQTtBQ1BKOztBRFVBO0VBQ0ksMEJBQUE7QUNQSjs7QURVQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQ1BGOztBRFVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFdBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDUko7O0FEV0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUko7O0FEV0E7RUFDSSxnQkFBQTtBQ1JKOztBRFVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNQSjs7QURVQTtFQUVJLGVBQUE7QUNSSjs7QURVQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDUEo7O0FEVUE7RUFFUSxXQUFBO0VBR0Esb0JBQUE7RUFBQSxhQUFBO0VBQWUsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLGlCQUFBO0VBQ25CLG1CQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURZQTtFQUVFLFlBQUE7QUNWRjs7QURnQkE7RUFFSywrQkFBQTtFQUFBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtVQUFBLDhCQUFBO0FDZEwiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdW1tYXJ5L3N1bW1hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvdyB7XG4gIC8vY29sb3I6IGJsYWNrOyAtLWJhY2tncm91bmQ6IHdoaXRlOyBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLy9jb2xvcjogd2hpdGU7IC0tYmFja2dyb3VuZDogYmxhY2s7IGJhY2tncm91bmQ6IGJsYWNrO1xuICAvL2NvbG9yOiB3aGl0ZTsgLS1iYWNrZ3JvdW5kOiBub25lOyBiYWNrZ3JvdW5kOiBub25lO1xuLy8gIC0tbWluLWhlaWdodDogMWVtOyAgLy8gT3RoZXJ3aXNlLCBpb24taXRlbXMgaGFzIGltcGxpY2l0IG91dGVyIHBhZGRpbmdzIVxuLy8gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuaW9uLWl0ZW17XG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi51bmRlcmxpbmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5zaGlmdF91cCB7ICAvLyBTaGlmdCB0ZXh0IHVwd2FyZHMsIHN0aWNraW5nIHRoZSBsYWJlbCBjbG9zZXIgdG8gaWNvblxuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICB0b3A6IC01cHg7XG59XG5cbi5zbGlkZV9udW17XG4gICAgZm9udC1zaXplOiAyMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7IC8vQmxhY2sgKEhlYXZ5KSBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAvL2NvbG9yOiBibGFjaztcbn1cblxuLnNsaWRlX2xhYmVse1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyOyBcbn1cblxuLnNsaWRlX3RpbWV7XG4gICAgZm9udC1zaXplOiAxODAlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7IC8vQmxhY2sgKEhlYXZ5KSBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cblxuLmdhdWdlX3ZhbHVle1xuICAgIGZvbnQtd2VpZ2h0OjkwMDtcbn1cbi50b3Bfc3RhdHN7XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvcF9pbnB1dHN7XG4vLyAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMwMDU3NTA7XG4gICAgZm9udC1zaXplOiAyMHB4OyAgXG59XG4udG9wX2xhYmVsc3tcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcblxufVxuLnNjcm9sbGFibGV7XG4gICAgaGVpZ2h0OmF1dG87XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnRhYmxle1xuLy8gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gICAgICAgIHdpZHRoOiAxMDAlOyAgXG4vLyAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4vLyAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmJ1YmJsZS10ZXh0IHtcbiAgLy9iYWNrZ3JvdW5kOiByZWQ7XG4gIHBhZGRpbmc6IDBweDtcbi8vICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gIG1hcmdpbi1ib3R0b206IDRweDtcbi8vICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi52ZXJ0aWNhbC1hbGlnbi1jb250ZW50ID4gKlxue1xuICAgICBkaXNwbGF5OiBmbGV4IWltcG9ydGFudDtcbiAgICAgYWxpZ24tY29udGVudDogY2VudGVyIWltcG9ydGFudDtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XG59IiwiaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uc2hpZnRfdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbn1cblxuLnNsaWRlX251bSB7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uc2xpZGVfbGFiZWwge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uc2xpZGVfdGltZSB7XG4gIGZvbnQtc2l6ZTogMTgwJTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuXG4uZ2F1Z2VfdmFsdWUge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4udG9wX3N0YXRzIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b3BfaW5wdXRzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udG9wX2xhYmVscyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLnNjcm9sbGFibGUge1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uYnViYmxlLXRleHQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi52ZXJ0aWNhbC1hbGlnbi1jb250ZW50ID4gKiB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/summary/summary.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/summary/summary.page.ts ***!
    \***********************************************/

  /*! exports provided: SummaryPage */

  /***/
  function srcAppPagesSummarySummaryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryPage", function () {
      return SummaryPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/database.service */
    "./src/app/services/database.service.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! chartjs-plugin-labels */
    "./node_modules/chartjs-plugin-labels/src/chartjs-plugin-labels.js");
    /* harmony import */


    var chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! chartjs-chart-radial-gauge */
    "./node_modules/chartjs-chart-radial-gauge/build/Chart.RadialGauge.cjs.js");
    /* harmony import */


    var chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! chartjs-tsgauge */
    "./node_modules/chartjs-tsgauge/Gauge.js");
    /* harmony import */


    var chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");

    chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].defaults.global.defaultFontSize = 10;
    chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].defaults.global.maintainAspectRatio = true;

    var SummaryPage =
    /*#__PURE__*/
    function () {
      function SummaryPage(database, navCtrl, geolocation) {
        _classCallCheck(this, SummaryPage);

        this.database = database;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.drivestatus = 9 > 10;
        this.mileagestatus = 9 > 10;
        this.otherstatus = 9 > 10;
      }

      _createClass(SummaryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.initCharts();
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
        key: "checkOperatorCurrencyValid",
        value: function checkOperatorCurrencyValid(date) {
          var today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
          var period = 8;
          return today.diff(date, "day") < period;
        }
      }, {
        key: "getnmtimemorning",
        value: function getnmtimemorning() {
          var cd = new Date(); // for now

          var nmtmoringstart = new Date();
          nmtmoringstart.setHours(7, 30, 0);
          var nmtmoringend = new Date();
          nmtmoringend.setHours(9, 30, 0);

          if (cd >= nmtmoringstart && cd < nmtmoringend) {
            return false;
          }

          return true;
        }
      }, {
        key: "getnmtimenight",
        value: function getnmtimenight() {
          var cd = new Date(); // for now

          var nmtnightstart = new Date();
          nmtnightstart.setHours(17, 30, 0);
          var nmtnightend = new Date();
          nmtnightend.setHours(19, 30, 0);

          if (cd >= nmtnightstart && cd < nmtnightend) {
            return false;
          }

          return true;
        }
      }, {
        key: "checkOperatordaysCurrencyValid",
        value: function checkOperatordaysCurrencyValid(date, vehicletype) {
          var today = dayjs__WEBPACK_IMPORTED_MODULE_4__(); //var period = vehicletype==="BELREX" ? 30 : 7;

          var period = 8;
          var left = period - today.diff(date, "day");

          if (left < 0) {
            return "JIT OVERDUE by " + Math.abs(left).toString() + " days";
          } else {
            return left.toString() + " days left";
          }
        }
      }, {
        key: "checkOperatorCurrencyInvalid",
        value: function checkOperatorCurrencyInvalid(date) {
          var today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
          var period = 8;
          return today.diff(date, "day") > period;
        }
      }, {
        key: "showdrives",
        value: function showdrives() {
          this.drivestatus = !this.drivestatus;
        }
      }, {
        key: "checkDriveStatus",
        value: function checkDriveStatus() {
          return this.drivestatus;
        }
      }, {
        key: "showmileage",
        value: function showmileage() {
          this.mileagestatus = !this.mileagestatus;
        }
      }, {
        key: "checkMileageStatus",
        value: function checkMileageStatus() {
          return this.mileagestatus;
        }
      }, {
        key: "checkTimelefttoJIT",
        value: function checkTimelefttoJIT(date) {
          var today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
          var period = 8;
          var left = period - today.diff(date, "day");

          if (left < 0) {
            return false;
          }

          return true;
        }
      }, {
        key: "getTimelefttoJIT",
        value: function getTimelefttoJIT(date) {
          var today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
          var period = 7 * 24 * 60 * 60;
          var left = period - today.diff(date, "s");
          return left;
        }
      }, {
        key: "getMileagebyVehicleType",
        value: function getMileagebyVehicleType(data, vehicle) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _services_database_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypes"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var type = _step.value;

              if (type == vehicle) {
                if (data[type] != null) {
                  return data[type] + " km";
                }
              }
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
        }
      }, {
        key: "getDrivesbyVehicleType",
        value: function getDrivesbyVehicleType(vehicle) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = _services_database_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypes"][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var type = _step2.value;
              var drv = 0;

              if (type == vehicle) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = this.database.current.drive_history[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var trip = _step3.value;

                    if (trip.vehicle_type == vehicle) {
                      drv += 1;
                    }
                  }
                } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                      _iterator3["return"]();
                    }
                  } finally {
                    if (_didIteratorError3) {
                      throw _iteratorError3;
                    }
                  }
                }

                return drv;
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
        }
      }, {
        key: "getNotifications",
        value: function getNotifications() {
          var result = [];
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = this.database.current.drive_history[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var trip = _step4.value;
              var date_str = dayjs__WEBPACK_IMPORTED_MODULE_4__("".concat(trip.date, " ").concat(trip.start_time), 'YYYY-MM-DD HH:mm').format('dddd, MMM DD, YYYY');
              var distance = this.database.distance(trip);
              var drive_msg = "Completed ".concat(distance, " km drive, from ").concat(trip.start_location, " (").concat(trip.start_time, ") to ").concat(trip.end_location, " (").concat(trip.end_time, ").");

              if (trip.status === 'in-progress') {
                result.push({
                  subtitle: "Drive-In-Progress",
                  title: date_str,
                  text: "Journey started from location ".concat(trip.start_location, " at ").concat(trip.start_time, "."),
                  trip: trip
                });
              } else if (trip.status === 'pending') {
                result.push({
                  subtitle: "Awaiting Review",
                  title: date_str,
                  text: drive_msg,
                  trip: trip
                });
              } else if (trip.status === 'rejected') {
                result.push({
                  subtitle: "Drive Rejected (Action Required)",
                  title: date_str,
                  text: drive_msg,
                  trip: trip
                });
              }
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                _iterator4["return"]();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          return result;
        }
      }, {
        key: "click",
        value: function click(drive) {
          this.database.current.drive_to_edit = drive;
          console.log("> Navigating to AddDrivePage for drive id=".concat(drive.id));
          this.navCtrl.navigateForward(['/add-drive']);
        }
      }, {
        key: "initCharts",
        value: function initCharts() {
          /*
             this.makeChart1(this.chartCanvas1);
          */
          //this.makeChart2(this.chartCanvas2, this.database.current.stats.mileage_by_vehicle_type);
          this.getStatus();
          this.makeChart4(this.chartCanvas4, this.database.current.stats.mileage_by_vehicle_type, this.database.current.stats.mileage_km);

          if (this.database.current.stats.mileage_km > 1000 && this.database.current.stats.mileage_km < 4000) {
            var maxVal = 4000 - this.database.current.stats.mileage_km;
            this.makeChart3(this.chartCanvas3, this.database.current.stats.mileage_km, maxVal, 0);
          } else if (this.database.current.stats.mileage_km < 1000 && this.database.current.stats.mileage_km < 4000) {
            var overseas = 1000 - this.database.current.stats.mileage_km;
            var maxVal = 4000 - this.database.current.stats.mileage_km;
            this.makeChart3(this.chartCanvas3, this.database.current.stats.mileage_km, maxVal, overseas);
          }
        }
        /*private makeChart1(canvas: ElementRef): Chart {
          return new Chart(canvas.nativeElement, {
            type: "line",
            data: {
              labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
              datasets: [
                {
                  label: "Your Mileage",
                  data: [4, 13, 27, 36, 44, 18, 12, 19, 28, 61, 47, 59],
                  borderWidth: 2,
                  borderColor: "rgba(255,99,132,1)",
                  backgroundColor: "rgba(255,99,132,.2)"
                },
                {
                  label: "Peer Average",
                  data: [32, 23, 17, 26, 29, 32, 27, 29, 40, 31, 37, 29],
                  borderWidth: 1,
                  borderColor: "rgba(54, 162, 235, 1)",
                  backgroundColor: "rgba(54, 162, 235, .2)"
                }
              ]
            },
            options: {
              title: {
                  display: true,
                  text: 'Your Mileage by Month'
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    }
                  }
                ]
              }
            }
          });
        }*/

      }, {
        key: "getStatus",
        value: function getStatus() {
          return false;
        }
      }, {
        key: "makeChart2",
        value: function makeChart2(canvas, data) {
          var mileage = [];
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = _services_database_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypes"][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var type = _step5.value;
              mileage.push(data[type]);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                _iterator5["return"]();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](canvas.nativeElement, {
            type: "bar",
            data: {
              labels: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypes"],
              datasets: [{
                label: "Your Mileage by Vehicle Types",
                //          data: [54, 13, 227, 136],
                data: mileage,
                borderWidth: 2,
                backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
                borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"]
              }]
            },
            options: {
              title: {
                display: true,
                text: 'Your Mileage by Vehicle Types'
              },
              legend: {
                display: false
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      }, {
        key: "makeChart3",
        value: function makeChart3(canvas, value, max_value, overseas) {
          return new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](canvas.nativeElement, {
            type: "doughnut",
            data: {
              labels: ["Mileage", "Overseas", "Conversion"],
              datasets: [{
                label: "Licence Conversion",
                borderWidth: 1,
                data: [value, null, max_value],
                backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
                weight: 1.05
              }, {
                label: "Overseas",
                borderWidth: 1,
                data: [value, overseas, null],
                backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
              }]
            },
            options: {
              title: {
                display: true,
                text: 'Licence Conversion',
                fontSize: 14
              },
              legend: {
                display: true,
                position: "left"
              },
              plugins: {
                labels: {
                  render: function render(args) {
                    if (args.value > 0.12 * overseas) {
                      return args.value + ' km';
                    }

                    ;
                  },
                  arc: true,
                  textShadow: true,
                  shadowBlur: 10,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  fontColor: 'rgba(0,0,0,1)'
                }
              },
              circumference: Math.PI,
              rotation: Math.PI,
              cutoutPercentage: 80
            }
          });
        }
      }, {
        key: "makeChart4",
        value: function makeChart4(canvas, data, total_mileage) {
          var mileage = [];
          var i = -1;
          var drives = [];
          var values = [];
          var data_array = [0, 0, 0, 0, 0, total_mileage];
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = _services_database_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypes"][Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var type = _step6.value;
              var data_array = [0, 0, 0, 0, 0, total_mileage];

              if (data[type] != null) {
                i += 1;
                data_array[i] = data[type];
                values.push(data[type]);
                data_array.pop();
                data_array.push(total_mileage - data[type]);
                drives.push(type);
                var newDataset = {
                  backgroundColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
                  borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
                  data: data_array,
                  label: type,
                  borderWidth: 1,
                  responsive: true
                };
                mileage.push(newDataset);
              }

              ;
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                _iterator6["return"]();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }

          ;
          return new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](canvas.nativeElement, {
            type: "doughnut",
            data: {
              datasets: mileage,
              labels: drives
            },
            options: {
              //showMarkers: true,
              legend: {
                display: true,
                position: "right"
              },
              title: {
                display: true,
                text: 'Your Mileage by Vehicle Types',
                fontSize: 14
              },
              plugins: {
                labels: {
                  render: function render(args) {
                    if (values.findIndex(function (x) {
                      return x === args.value;
                    }) != -1) {
                      return args.value + ' km';
                    }

                    ;
                  },
                  arc: true,
                  textShadow: true,
                  shadowBlur: 10,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  fontColor: 'rgba(0,0,0,1)'
                }
              },
              circumference: Math.PI,
              rotation: Math.PI,
              cutoutPercentage: 45,
              maintainAspectRatio: true,
              responsive: true
            }
          });
        }
      }]);

      return SummaryPage;
    }();

    SummaryPage.ctorParameters = function () {
      return [{
        type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chartCanvas1", {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SummaryPage.prototype, "chartCanvas1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chartCanvas4", {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SummaryPage.prototype, "chartCanvas4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chartCanvas3", {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], SummaryPage.prototype, "chartCanvas3", void 0);
    SummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./summary.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./summary.page.scss */
      "./src/app/pages/summary/summary.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]])], SummaryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-summary-summary-module-es5.js.map