(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-summary-summary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Home</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button left routerLink=\"/\" routerDirection=\"root\" fill=\"clear\" slot=\"primary\">\r\n        Logout<ion-icon name=\"log-out\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid class=\"table\" no-padding>\r\n\r\n    <!-- Top section (Total Distance, Time and Drives) ------------------------------------------->\r\n\r\n    <ion-row *ngIf=\"!getnmtimemorning()\">\r\n      <ion-col no-padding>\r\n        <ion-item text-center color=\"danger\">\r\n          <ion-label><h1><strong>NO MOVE TIMING TILL 0930</strong></h1></ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"!getnmtimenight()\">\r\n      <ion-col no-padding>\r\n        <ion-item text-center color=\"danger\">\r\n          <ion-label><h1><strong>NO MOVE TIMING TILL 1930</strong></h1></ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col no-padding>\r\n        <ion-item text-center>\r\n        <ion-label style=\"margin-bottom: 0;\"><h1>Fleet:<strong>{{database.current.user.fleet}}/{{database.current.user.company}}</strong></h1></ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"bubble-text\" no-padding> \r\n\r\n        <ion-card (click)=\"showmileage()\">\r\n          <div class=\"ion-text-center\" style=\"width: 100%;\">\r\n            <ion-icon name=\"speedometer\" size=\"large\"></ion-icon><br>\r\n            <div class=\"shift_up\">Mileage</div>\r\n            <div class=\"slide_num\">{{database.current.stats.mileage_km}}</div>\r\n            <div class=\"slide_label shift_up\">km</div>\r\n            <ion-label *ngIf=\"checkMileageStatus()\">\r\n              <h6 *ngFor=\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\">\r\n                {{vehicle.key}} : {{getMileagebyVehicleType(database.current.stats.mileage_by_vehicle_type, vehicle.key)}}\r\n              </h6>\r\n            </ion-label>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"4\" class=\"bubble-text\">          \r\n        <ion-card (click)=\"showdrives()\">\r\n          <div class=\"ion-text-center\" style=\"width: 100%;\">\r\n            <ion-icon name=\"car\" size=\"large\">\r\n            </ion-icon><br>\r\n              <ion-label>\r\n                <div class=\"shift_up\">Drives</div>\r\n              </ion-label>\r\n              <ion-label>\r\n                <div class=\"slide_num\">{{database.current.stats.drive_count}}</div>\r\n              </ion-label>\r\n              <ion-label>\r\n                <div class=\"slide_label shift_up\">Trips</div>\r\n              </ion-label>\r\n            <ion-label *ngIf=\"checkDriveStatus()\">\r\n              <h6 *ngFor=\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\">\r\n                {{vehicle.key}} : {{getDrivesbyVehicleType(vehicle.key)}}\r\n              </h6>\r\n            </ion-label>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"4\" class=\"bubble-text\">\r\n        <ion-card>\r\n          <div class=\"ion-text-center\" style=\"width: 100%;\">\r\n            <ion-icon name=\"clock\" size=\"large\"></ion-icon><br>\r\n            <div class=\"shift_up\">Time</div>\r\n            <div class=\"slide_num\">{{database.current.stats.duration_minutes / 60 | number : '1.0-1' }}</div>\r\n            <div class=\"slide_label shift_up\">Hours</div>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- Third section (Chart slides) ------------------------------------------->\r\n  <ion-slides pager='true' no-padding>\r\n    <!--<ion-slide><canvas #chartCanvas1></canvas></ion-slide>-->\r\n    <ion-slide style=\"padding: 0 5px\"><ion-col>\r\n      <canvas #chartCanvas2 responsive=\"true\"></canvas>\r\n    </ion-col></ion-slide>\r\n    <ion-slide  style=\"padding: 0 5px\" responsive=\"true\"><canvas #chartCanvas5></canvas></ion-slide>\r\n    <ion-slide > <ion-grid>\r\n      <ion-label><h1 class=\"underline\">Platform Currency</h1></ion-label>\r\n      <ion-item *ngFor=\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\">\r\n\r\n\r\n     <ion-col>\r\n       <ion-label>\r\n         <h2 *ngIf=\"checkOperatorCurrencyValid(database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key])\">{{vehicle.key}} :</h2>\r\n       </ion-label>\r\n       <ion-label  color='danger'>\r\n          <h2 *ngIf=\"checkOperatorCurrencyInvalid(database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key])\">{{vehicle.key}} :</h2>\r\n       </ion-label>\r\n\r\n      Last Drive: {{database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key] | date: \"dd/MM/yyyy\"}}\r\n      ({{database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key] | daysAgo}} days ago)</ion-col>\r\n\r\n    </ion-item> </ion-grid> </ion-slide>\r\n  </ion-slides>\r\n\r\n\r\n<!--\r\n      <ion-slide> <ion-grid>\r\n\r\n         <ion-label><h1>Platform Currency</h1></ion-label>\r\n         <ion-item *ngFor=\"let vehicle of database.current.stats.most_recent_drive_by_vehicle_type | keyvalue\">\r\n\r\n        <ion-col>\r\n          <ion-label color='danger'>\r\n            <h2 *ngIf=\"checkOperatorCurrencyInvalid(database.current.stats.most_recent_drive[vehicle.key])\">{{vehicle.key}} : {{checkOperatordaysCurrencyValid(database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key])}}</h2>\r\n          </ion-label>\r\n\r\n          <ion-label>\r\n            <h2 *ngIf=\"checkOperatorCurrencyValid(database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key])\">{{vehicle.key}} : {{checkOperatordaysCurrencyValid(database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key])}}</h2>\r\n          </ion-label>\r\n\r\n         Last Drive: {{database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key] | date: \"dd/MM/yyyy\"}}\r\n         ({{database.current.stats.most_recent_drive_by_vehicle_type[vehicle.key] | daysAgo}} days ago)</ion-col>\r\n     </ion-item></ion-grid></ion-slide>\r\n     -->\r\n\r\n\r\n  <!-- Second section (Last Drive, Operator Currency) ------------------------------------------->\r\n  <ion-card padding text-center>\r\n    <ion-grid>\r\n    <ion-row><ion-col><ion-card-title text-center>\r\n      <strong>JIT Countdown</strong>\r\n    </ion-card-title></ion-col></ion-row>\r\n\r\n    <ion-row><ion-col><ion-card-subtitle>\r\n\r\n      <ion-label *ngIf=\"checkTimelefttoJIT(database.current.stats.most_recent_drive) == false\" color='danger' text-center>\r\n        <strong><h2>\r\n          DO JIT NOW!\r\n        </h2></strong>\r\n      </ion-label>\r\n\r\n      <ion-item *ngIf=\"checkTimelefttoJIT(database.current.stats.most_recent_drive) == true\" text-center>\r\n        <ion-grid><ion-row><ion-col><countdown [config]=\"{leftTime: getTimelefttoJIT(database.current.stats.most_recent_drive), format: 'dd'}\"></countdown>\r\n          <h6 style=\"padding-bottom: 5px\">days</h6></ion-col>\r\n        <ion-col><countdown [config]=\"{leftTime: getTimelefttoJIT(database.current.stats.most_recent_drive), format: 'HH'}\"></countdown>\r\n          <h6 style=\"padding-bottom: 5px\">hrs</h6></ion-col>\r\n        <ion-col><countdown [config]=\"{leftTime: getTimelefttoJIT(database.current.stats.most_recent_drive), format: 'mm'}\"></countdown>\r\n          <h6 style=\"padding-bottom: 5px\">mins</h6></ion-col>\r\n        <ion-col><countdown [config]=\"{leftTime: getTimelefttoJIT(database.current.stats.most_recent_drive), format: 'ss'}\"></countdown>\r\n          <h6 style=\"padding-bottom: 5px\">sec</h6></ion-col></ion-row></ion-grid>\r\n      </ion-item>\r\n\r\n    </ion-card-subtitle></ion-col></ion-row></ion-grid>\r\n  </ion-card>\r\n\r\n  <!--\r\n  <ion-card padding>\r\n  <ion-card-subtitle><strong>Operator Currency</strong></ion-card-subtitle>\r\n  <ion-card-title>Most Recent Drive:</ion-card-title>\r\n  <ion-card-content class=\"ion-no-padding\">\r\n    {{database.current.stats.most_recent_drive | date: \"dd/MM/yyyy hh:mm\"}} ({{database.current.stats.most_recent_drive | daysAgo}} days ago)\r\n  </ion-card-content>\r\n</ion-card>\r\n-->\r\n\r\n\r\n  <!-- Bottom section (Notifications) ------------------------------------------->\r\n\r\n  <ion-item text-center>\r\n    <ion-label><h1><strong>Notifications</strong></h1></ion-label>\r\n  </ion-item>\r\n\r\n  <!--ion-card *ngFor=\"let trip of database.current.drive_history\">\r\n    <app-drive-view expandHeight='150px' [drive]=\"trip\"></app-drive-view>\r\n  </ion-card-->\r\n\r\n  <ion-card *ngFor=\"let message of getNotifications()\" padding>\r\n\r\n    <ion-fab vertical=\"top\" horizontal=\"end\">\r\n      <ion-fab-button size=\"small\" (click)=\"click(message.trip)\" color=\"danger\"><ion-icon name='end-drive'></ion-icon></ion-fab-button>\r\n    </ion-fab>\r\n\r\n    <ion-card-subtitle color='danger'><strong>{{message.subtitle}}</strong></ion-card-subtitle>\r\n    <ion-card-title>{{message.title}}</ion-card-title>\r\n\r\n    <ion-card-content class=\"ion-no-padding\">{{message.text}}</ion-card-content>\r\n\r\n  </ion-card>\r\n  <ion-card *ngFor=\"let form of getVerifiedMTRAC()\" padding>\r\n    <ion-fab vertical=\"top\" horizontal=\"end\">\r\n      <!--ion-fab-button size=\"small\" (click)=\"click(drive)\">View</ion-fab-button-->\r\n      <ion-fab-button size=\"small\" (click)=\"clickmtrac(form)\"><ion-icon name='share-alt'></ion-icon></ion-fab-button>\r\n      <!--ion-button fill=\"outline\" size=\"small\" (click)=\"click(drive)\">View</ion-button-->\r\n    </ion-fab>\r\n    <ion-card-title>Continue to add drive</ion-card-title>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/summary/summary.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/summary/summary.module.ts ***!
  \*************************************************/
/*! exports provided: SummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary.page */ "./src/app/pages/summary/summary.page.ts");
/* harmony import */ var _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../drive-view/drive-view.module */ "./src/app/drive-view/drive-view.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");










const routes = [
    {
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]
    }
];
let SummaryPageModule = class SummaryPageModule {
};
SummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ngx_countdown__WEBPACK_IMPORTED_MODULE_9__["CountdownModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_7__["DriveViewModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]
        ]
    })
], SummaryPageModule);



/***/ }),

/***/ "./src/app/pages/summary/summary.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/summary/summary.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --border-style: none; }\n\n.underline {\n  text-decoration: underline; }\n\n.shift_up {\n  position: relative;\n  top: -5px; }\n\n.slide_num {\n  font-size: 200%;\n  font-weight: 900;\n  text-align: center;\n  letter-spacing: 2px; }\n\n.slide_label {\n  font-size: small;\n  letter-spacing: 2px;\n  font-weight: bolder; }\n\n.slide_time {\n  font-size: 180%;\n  font-weight: 900;\n  text-align: center;\n  letter-spacing: 3px; }\n\n.gauge_value {\n  font-weight: 900; }\n\n.top_stats {\n  font-size: 150%;\n  font-weight: 900;\n  text-align: center; }\n\n.top_inputs {\n  font-size: 20px; }\n\n.top_labels {\n  font-size: 25px;\n  padding-bottom: 5px; }\n\n.scrollable {\n  height: auto;\n  overflow-y: auto; }\n\n.table {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  padding-bottom: 0px;\n  margin-bottom: 0px; }\n\n.bubble-text {\n  padding: 0px; }\n\n.vertical-align-content > * {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VtbWFyeS9DOlxcVXNlcnNcXFJ1aVxcQW5kcm9pZFN0dWRpb1Byb2plY3RzXFxFbmdpbmVlcnNMb2dib29rMi9zcmNcXGFwcFxccGFnZXNcXHN1bW1hcnlcXHN1bW1hcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0ksb0JBQWUsRUFBQTs7QUFHbkI7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUyxFQUFBOztBQUdYO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBRUksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBRVEsV0FBVztFQUdYLG9CQUFhO0VBQWIsYUFBYTtFQUFFLDRCQUFpQjtFQUFqQiw2QkFBaUI7VUFBakIsaUJBQWlCO0VBQ3BDLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFFRSxZQUFZLEVBQUE7O0FBTWQ7RUFFSywrQkFBdUI7RUFBdkIsd0JBQXVCO0VBQ3ZCLGdDQUErQjtFQUMvQixvQ0FBNkI7VUFBN0IsOEJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdW1tYXJ5L3N1bW1hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXJvdyB7XHJcbiAgLy9jb2xvcjogYmxhY2s7IC0tYmFja2dyb3VuZDogd2hpdGU7IGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIC8vY29sb3I6IHdoaXRlOyAtLWJhY2tncm91bmQ6IGJsYWNrOyBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAvL2NvbG9yOiB3aGl0ZTsgLS1iYWNrZ3JvdW5kOiBub25lOyBiYWNrZ3JvdW5kOiBub25lO1xyXG4vLyAgLS1taW4taGVpZ2h0OiAxZW07ICAvLyBPdGhlcndpc2UsIGlvbi1pdGVtcyBoYXMgaW1wbGljaXQgb3V0ZXIgcGFkZGluZ3MhXHJcbi8vICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnNoaWZ0X3VwIHsgIC8vIFNoaWZ0IHRleHQgdXB3YXJkcywgc3RpY2tpbmcgdGhlIGxhYmVsIGNsb3NlciB0byBpY29uXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICB0b3A6IC01cHg7XHJcbn1cclxuXHJcbi5zbGlkZV9udW17XHJcbiAgICBmb250LXNpemU6IDIwMCU7XHJcbiAgICBmb250LXdlaWdodDogOTAwOyAvL0JsYWNrIChIZWF2eSkgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgLy9jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zbGlkZV9sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgXHJcbn1cclxuXHJcbi5zbGlkZV90aW1le1xyXG4gICAgZm9udC1zaXplOiAxODAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDsgLy9CbGFjayAoSGVhdnkpIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxufVxyXG5cclxuLmdhdWdlX3ZhbHVle1xyXG4gICAgZm9udC13ZWlnaHQ6OTAwO1xyXG59XHJcbi50b3Bfc3RhdHN7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBmb250LXdlaWdodDogOTAwOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcF9pbnB1dHN7XHJcbi8vICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzAwNTc1MDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDsgIFxyXG59XHJcbi50b3BfbGFiZWxze1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbn1cclxuLnNjcm9sbGFibGV7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZXtcclxuLy8gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7ICBcclxuLy8gICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4vLyAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmJ1YmJsZS10ZXh0IHtcclxuICAvL2JhY2tncm91bmQ6IHJlZDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbi8vICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4vLyAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG4udmVydGljYWwtYWxpZ24tY29udGVudCA+ICpcclxue1xyXG4gICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG4gICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/summary/summary.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/summary/summary.page.ts ***!
  \***********************************************/
/*! exports provided: SummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return SummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chartjs-plugin-labels */ "./node_modules/chartjs-plugin-labels/src/chartjs-plugin-labels.js");
/* harmony import */ var chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_labels__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chartjs-chart-radial-gauge */ "./node_modules/chartjs-chart-radial-gauge/build/Chart.RadialGauge.cjs.js");
/* harmony import */ var chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chartjs_chart_radial_gauge__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chartjs-tsgauge */ "./node_modules/chartjs-tsgauge/Gauge.js");
/* harmony import */ var chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(chartjs_tsgauge__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");










//Chart.defaults.global.defaultFontSize = 10;
//Chart.defaults.global.maintainAspectRatio = true;
let SummaryPage = class SummaryPage {
    constructor(database, navCtrl, geolocation) {
        this.database = database;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.drivestatus = 9 > 10;
        this.mileagestatus = 9 > 10;
        this.otherstatus = 9 > 10;
    }
    ngOnInit() {
        this.initCharts();
    }
    checkOperatorCurrencyValid(date) {
        const today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        var period = 8;
        return today.diff(date, "day") < period;
    }
    getnmtimemorning() {
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
    getnmtimenight() {
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
    checkOperatordaysCurrencyValid(date, vehicletype) {
        const today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        //var period = vehicletype==="BELREX" ? 30 : 7;
        var period = 10;
        var left = period - today.diff(date, "day");
        if (left < 0) {
            return "JIT OVERDUE by " + Math.abs(left).toString() + " days";
        }
        else {
            return left.toString() + " days left";
        }
    }
    checkOperatorCurrencyInvalid(date) {
        const today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        var period = 10;
        return today.diff(date, "day") > period;
    }
    showdrives() {
        this.drivestatus = !this.drivestatus;
    }
    checkDriveStatus() {
        return this.drivestatus;
    }
    showmileage() {
        this.mileagestatus = !this.mileagestatus;
    }
    checkMileageStatus() {
        return this.mileagestatus;
    }
    checkTimelefttoJIT(date) {
        const today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        var period = 8;
        var left = period - today.diff(date, "day");
        if (left < 0) {
            return false;
        }
        return true;
    }
    getTimelefttoJIT(date) {
        var today = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        var period = 7 * 24 * 60 * 60;
        var left = period - today.diff(date, "s");
        return left;
    }
    getMileagebyVehicleType(data, vehicle) {
        for (var type of _services_database_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypes"]) {
            if (type == vehicle) {
                if (data[type] != null) {
                    return data[type] + " km";
                }
            }
        }
    }
    getDrivesbyVehicleType(vehicle) {
        for (var type of _services_database_service__WEBPACK_IMPORTED_MODULE_3__["VehicleTypes"]) {
            var drv = 0;
            if (type == vehicle) {
                for (let trip of this.database.current.drive_history) {
                    if (trip.vehicle_type == vehicle) {
                        drv += 1;
                    }
                }
                return drv;
            }
        }
    }
    getVerifiedMTRAC() {
        return this.database.current.mtrac_history.filter((form) => {
            if (this.database.current.user.email === form.driver) {
                return form.status === 'verified';
            }
        });
    }
    getNotifications() {
        var result = [];
        for (let trip of this.database.current.drive_history) {
            let date_str = dayjs__WEBPACK_IMPORTED_MODULE_4__(`${trip.date} ${trip.start_time}`, 'YYYY-MM-DD HH:mm').format('dddd, MMM DD, YYYY');
            let distance = this.database.distance(trip);
            let drive_msg = `Completed ${distance} km drive, from ${trip.start_location} (${trip.start_time}) to ${trip.end_location} (${trip.end_time}).`;
            if (trip.status === 'in-progress') {
                result.push({
                    subtitle: "Drive-In-Progress",
                    title: date_str,
                    text: `Journey started from location ${trip.start_location} at ${trip.start_time}.`,
                    trip: trip
                });
            }
            else if (trip.status === 'pending') {
                result.push({
                    subtitle: "Awaiting Review",
                    title: date_str,
                    text: drive_msg,
                    trip: trip
                });
            }
            else if (trip.status === 'rejected') {
                result.push({
                    subtitle: "Drive Rejected (Action Required)",
                    title: date_str,
                    text: drive_msg,
                    trip: trip
                });
            }
        }
        return result;
    }
    click(drive) {
        this.database.current.drive_to_edit = drive;
        console.log(`> Navigating to AddDrivePage for drive id=${drive.id}`);
        this.navCtrl.navigateForward(['/add-drive']);
    }
    clickmtrac(form) {
        this.database.current.mtrac_to_edit = form;
        console.log(`> Navigating to mtracPage for mtrac id=${form.id}`);
        this.navCtrl.navigateForward(['/mtrac']);
    }
    initCharts() {
        /*
           this.makeChart1(this.chartCanvas1);
        */
        this.makeChart2(this.chartCanvas2, this.database.current.stats.mileage_by_vehicle_type);
        this.getStatus();
        //this.makeChart4(this.chartCanvas4, this.database.current.stats.mileage_by_vehicle_type, this.database.current.stats.mileage_km);
        if (this.database.current.stats.mileage_km > 1000 && this.database.current.stats.mileage_km < 4000) {
            var maxVal = 4000 - this.database.current.stats.mileage_km;
            this.makeChart5(this.chartCanvas5, this.database.current.stats.mileage_km, maxVal, 0);
        }
        else if (this.database.current.stats.mileage_km < 1000 && this.database.current.stats.mileage_km < 4000) {
            var overseas = 1000 - this.database.current.stats.mileage_km;
            var maxVal = 4000 - this.database.current.stats.mileage_km;
            this.makeChart5(this.chartCanvas5, this.database.current.stats.mileage_km, maxVal, overseas);
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
    getStatus() {
        return false;
    }
    makeChart2(canvas, data) {
        var mileage = [];
        var vtypes = this.database.current.stats.most_recent_drive_by_vehicle_type;
        vtypes = Object.keys(vtypes);
        console.log(vtypes);
        for (var vehicle of vtypes) {
            mileage.push(this.getMileagebyVehicleType(this.database.current.stats.mileage_by_vehicle_type, vehicle).replace(" km", ""));
        }
        console.log(mileage);
        return new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](canvas.nativeElement, {
            type: "bar",
            data: {
                labels: vtypes,
                datasets: [
                    {
                        label: "Mileage (km)",
                        //          data: [54, 13, 227, 136],
                        data: mileage,
                        borderWidth: 2,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
                        ],
                    },
                ]
            },
            options: {
                responsive: true,
                tooltips: {
                    enabled: true
                },
                plugins: {
                    labels: {
                        render: function (args) { return args.value + ' km'; },
                    },
                    datalabels: {
                        anchor: 'end',
                        align: 'bottom',
                        font: {
                            weight: 'bold'
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Your Mileage by Vehicle Types'
                },
                legend: {
                    display: false
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
    }
    makeChart5(canvas, value, max_value, overseas) {
        return new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](canvas.nativeElement, {
            type: "horizontalBar",
            data: {
                labels: ["Overseas", "Conversion"],
                datasets: [
                    {
                        label: "Mileage",
                        borderWidth: 1,
                        data: [value, value],
                        backgroundColor: [
                            "rgb(255, 99, 132, 0.2)",
                            "rgb(255, 99, 132, 0.2)",
                        ],
                        borderColor: [
                            "rgb(255, 99, 132, 1)",
                            "rgb(255, 99, 132, 1)",
                        ]
                    }, {
                        label: "Overseas",
                        borderWidth: 1,
                        data: [overseas, 0],
                        backgroundColor: [
                            "rgb(255, 205, 86, 0.2)",
                        ],
                        borderColor: [
                            "rgb(255, 205, 86, 1)",
                        ]
                    },
                    {
                        label: "Conversion",
                        borderWidth: 1,
                        data: [0, max_value],
                        backgroundColor: [
                            "rgb(54, 162, 235, 0.2)",
                            "rgb(54, 162, 235, 0.2)",
                        ],
                        borderColor: [
                            "rgb(54, 162, 235, 1)",
                            "rgb(54, 162, 235, 1)",
                        ]
                    }
                ]
            },
            options: {
                plugins: {
                    labels: {
                        render: 'value'
                    },
                    datalabels: {
                        anchor: 'end',
                        align: 'left',
                        font: {
                            weight: 'bold'
                        },
                    },
                },
                title: {
                    display: true,
                    text: 'Licence Conversion'
                },
                legend: {
                    display: true
                },
                scales: {
                    xAxes: [{
                            stacked: true,
                            ticks: { mirror: true }
                        }],
                    yAxes: [{
                            stacked: true,
                        }],
                }
            }
        });
    }
    makeChart3(canvas, value, max_value, overseas) {
        return new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](canvas.nativeElement, {
            type: "doughnut",
            data: {
                labels: ["Mileage", "Overseas", "Conversion"],
                datasets: [
                    {
                        label: "Licence Conversion",
                        borderWidth: 1,
                        data: [value, null, max_value],
                        backgroundColor: [
                            "rgb(255, 99, 132)",
                            "rgb(54, 162, 235)",
                            "rgb(255, 205, 86)"
                        ],
                        weight: 1.05,
                    },
                    {
                        label: "Overseas",
                        borderWidth: 1,
                        data: [value, overseas, null],
                        backgroundColor: [
                            "rgb(255, 99, 132)",
                            "rgb(54, 162, 235)",
                            "rgb(255, 205, 86)"
                        ]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Licence Conversion',
                    fontSize: 14,
                },
                legend: {
                    display: true,
                    position: "left",
                },
                plugins: {
                    labels: {
                        render: function (args) {
                            if (args.value > 0.12 * overseas) {
                                return args.value + ' km';
                            }
                            ;
                        },
                        arc: true,
                        textShadow: true,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        fontColor: 'rgba(0,0,0,1)',
                    },
                },
                circumference: Math.PI,
                rotation: Math.PI,
                cutoutPercentage: 80,
            }
        });
    }
};
SummaryPage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chartCanvas1", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SummaryPage.prototype, "chartCanvas1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chartCanvas4", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SummaryPage.prototype, "chartCanvas4", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chartCanvas3", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SummaryPage.prototype, "chartCanvas3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chartCanvas2", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SummaryPage.prototype, "chartCanvas2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chartCanvas5", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], SummaryPage.prototype, "chartCanvas5", void 0);
SummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./summary.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./summary.page.scss */ "./src/app/pages/summary/summary.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]])
], SummaryPage);



/***/ })

}]);
//# sourceMappingURL=pages-summary-summary-module-es2015.js.map