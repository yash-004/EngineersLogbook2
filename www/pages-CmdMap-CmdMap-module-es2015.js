(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-CmdMap-CmdMap-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdMap/CmdMap.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdMap/CmdMap.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\r\n    <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ71jPdOF6e02nQmca2WrbJw_QeXZBh5Q\"></script>\r\n    <div #map id=\"map\" style=\"height: 100%;width: 100%;overflow: auto;background-color: transparent;\"></div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/CmdMap/CmdMap.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/CmdMap/CmdMap.module.ts ***!
  \***********************************************/
/*! exports provided: CmdMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmdMapPageModule", function() { return CmdMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _CmdMap_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CmdMap.page */ "./src/app/pages/CmdMap/CmdMap.page.ts");







let CmdMapPageModule = class CmdMapPageModule {
};
CmdMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _CmdMap_page__WEBPACK_IMPORTED_MODULE_6__["CmdMapPage"]
                }
            ])
        ],
        declarations: [_CmdMap_page__WEBPACK_IMPORTED_MODULE_6__["CmdMapPage"]]
    })
], CmdMapPageModule);



/***/ }),

/***/ "./src/app/pages/CmdMap/CmdMap.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/CmdMap/CmdMap.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popup-bubble {\n  /* Position the bubble centred-above its parent. */\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transform: translate(-50%, -100%);\n          transform: translate(-50%, -100%);\n  /* Style the bubble. */\n  background-color: white;\n  padding: 5px;\n  border-radius: 5px;\n  font-family: sans-serif;\n  overflow-y: auto;\n  max-height: 60px;\n  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.5); }\n\n/* The parent of the bubble. A zero-height div at the top of the tip. */\n\n.popup-bubble-anchor {\n  /* Position the div a fixed distance above the tip. */\n  position: absolute;\n  width: 100%;\n  bottom: 8px;\n  left: 0; }\n\n/* This element draws the tip. */\n\n.popup-bubble-anchor::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  /* Center the tip horizontally. */\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  /* The tip is a https://css-tricks.com/snippets/css/css-triangle/ */\n  width: 0;\n  height: 0;\n  /* The tip is 8px high, and 12px wide. */\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 8px solid white; }\n\n/* JavaScript will position this div at the bottom of the popup tip. */\n\n.popup-container {\n  cursor: auto;\n  height: 0;\n  position: absolute;\n  /* The max width of the info window. */\n  width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQ21kTWFwL0M6XFxVc2Vyc1xcUnVpXFxBbmRyb2lkU3R1ZGlvUHJvamVjdHNcXEVuZ2luZWVyc0xvZ2Jvb2syL3NyY1xcYXBwXFxwYWdlc1xcQ21kTWFwXFxDbWRNYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esa0RBQUE7RUFDQSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCx5Q0FBaUM7VUFBakMsaUNBQWlDO0VBQ2pDLHNCQUFBO0VBQ0EsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsK0NBQTRDLEVBQUE7O0FBRTlDLHVFQUFBOztBQUNOO0VBQ1EscURBQUE7RUFDQSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQTZCO0VBQzdCLE9BQU8sRUFBQTs7QUFFVCxnQ0FBQTs7QUFDTjtFQUNRLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxpQ0FBQTtFQUNBLHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsbUVBQUE7RUFDQSxRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFBO0VBQ0Esa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQywyQkFBNkMsRUFBQTs7QUFFL0Msc0VBQUE7O0FBQ047RUFDUSxZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQixzQ0FBQTtFQUNBLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0NtZE1hcC9DbWRNYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwLWJ1YmJsZSB7XHJcbiAgICAgICAgLyogUG9zaXRpb24gdGhlIGJ1YmJsZSBjZW50cmVkLWFib3ZlIGl0cyBwYXJlbnQuICovXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcclxuICAgICAgICAvKiBTdHlsZSB0aGUgYnViYmxlLiAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjUpO1xyXG59XHJcbiAgICAgIC8qIFRoZSBwYXJlbnQgb2YgdGhlIGJ1YmJsZS4gQSB6ZXJvLWhlaWdodCBkaXYgYXQgdGhlIHRvcCBvZiB0aGUgdGlwLiAqL1xyXG4ucG9wdXAtYnViYmxlLWFuY2hvciB7XHJcbiAgICAgICAgLyogUG9zaXRpb24gdGhlIGRpdiBhIGZpeGVkIGRpc3RhbmNlIGFib3ZlIHRoZSB0aXAuICovXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvdHRvbTogLyogVElQX0hFSUdIVD0gKi8gOHB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbn1cclxuICAgICAgLyogVGhpcyBlbGVtZW50IGRyYXdzIHRoZSB0aXAuICovXHJcbi5wb3B1cC1idWJibGUtYW5jaG9yOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgLyogQ2VudGVyIHRoZSB0aXAgaG9yaXpvbnRhbGx5LiAqL1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgICAgIC8qIFRoZSB0aXAgaXMgYSBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2Nzcy9jc3MtdHJpYW5nbGUvICovXHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIC8qIFRoZSB0aXAgaXMgOHB4IGhpZ2gsIGFuZCAxMnB4IHdpZGUuICovXHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItdG9wOiAvKiBUSVBfSEVJR0hUPSAqLyA4cHggc29saWQgd2hpdGU7XHJcbn1cclxuICAgICAgLyogSmF2YVNjcmlwdCB3aWxsIHBvc2l0aW9uIHRoaXMgZGl2IGF0IHRoZSBib3R0b20gb2YgdGhlIHBvcHVwIHRpcC4gKi9cclxuLnBvcHVwLWNvbnRhaW5lciB7XHJcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLyogVGhlIG1heCB3aWR0aCBvZiB0aGUgaW5mbyB3aW5kb3cuICovXHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/CmdMap/CmdMap.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/CmdMap/CmdMap.page.ts ***!
  \*********************************************/
/*! exports provided: CmdMapPage, snapshotToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmdMapPage", function() { return CmdMapPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);








let CmdMapPage = class CmdMapPage {
    constructor(navCtrl, platform, geolocation, database, device) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.database = database;
        this.device = device;
        this.markers = [];
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('geolocations/');
        platform.ready().then(() => {
            this.initMap();
        });
        this.ref.on('value', resp => {
            this.deleteMarkers();
            snapshotToArray(resp).forEach(data => {
                let image = 'assets/car.png';
                let updatelocation = new google.maps.LatLng(this.database.current.user.location.lat, this.database.current.user.location.lng);
                console.log(data.latitude, data.longitude);
                console.log(this.database.current.user.location.lat, this.database.current.user.location.lng);
                this.addMarker(updatelocation, image, this.database.current.user.name);
                this.setMapOnAll(this.map);
            });
        });
    }
    initMap() {
        console.log(this.database.current.user);
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
            let mylocation = new google.maps.LatLng(parseFloat(resp.coords.latitude.toFixed(9)), parseFloat(resp.coords.longitude.toFixed(9)));
            if ((parseFloat(resp.coords.latitude.toFixed(9)), parseFloat(resp.coords.longitude.toFixed(9))) != (this.database.current.user.location.lat, this.database.current.user.location.lng)) {
                this.database.current.user.location = { lat: parseFloat(resp.coords.latitude.toFixed(9)), lng: parseFloat(resp.coords.longitude.toFixed(9)) };
                this.database.write('user', this.database.current.user.email, this.database.current.user);
            }
            this.map = new google.maps.Map(this.mapElement.nativeElement, {
                zoom: 15,
                center: mylocation
            });
        });
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            let updatelocation = new google.maps.LatLng(parseFloat(data.coords.latitude.toFixed(9)), parseFloat(data.coords.longitude.toFixed(9)));
            if ((parseFloat(data.coords.latitude.toFixed(9)), parseFloat(data.coords.longitude.toFixed(9))) != (this.database.current.user.location.lat, this.database.current.user.location.lng)) {
                this.deleteMarkers();
                let image = 'assets/car.png';
                this.addMarker(updatelocation, image, this.database.current.user.name);
                this.setMapOnAll(this.map);
                this.map.panTo(updatelocation);
                this.database.current.user.location = { lat: parseFloat(data.coords.latitude.toFixed(9)), lng: parseFloat(data.coords.longitude.toFixed(9)) };
                console.log(this.database.current.user.location);
                console.log("write");
                this.database.write('user', this.database.current.user.email, this.database.current.user);
            }
            console.log("notmoved");
            this.deleteMarkers();
            for (const driver of this.database.current.all_drivers_of_commander) {
                this.updatedriverloc(driver.email).then(result => { var drvrloc = new google.maps.LatLng(result.lat, result.lng); let image = 'assets/car.png'; this.addMarker(drvrloc, image, driver.name); console.log(driver.email); console.log(result); });
            }
            let image = 'assets/car.png';
            this.addMarker(updatelocation, image, this.database.current.user.name);
            this.setMapOnAll(this.map);
        });
    }
    updatedriverloc(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var result = yield this.database.read('user', email);
            this.drvr = {
                driver: result.data(),
            };
            return this.drvr.driver.location;
        });
    }
    addMarker(location, image, name) {
        let marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: image,
            label: name
        });
        this.markers.push(marker);
    }
    setMapOnAll(map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    }
    clearMarkers() {
        this.setMapOnAll(null);
    }
    deleteMarkers() {
        this.clearMarkers();
        this.markers = [];
    }
};
CmdMapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CmdMapPage.prototype, "mapElement", void 0);
CmdMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-CmdMap',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./CmdMap.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdMap/CmdMap.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./CmdMap.page.scss */ "./src/app/pages/CmdMap/CmdMap.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]])
], CmdMapPage);

const snapshotToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
/*

for (var driver of this.database.current.all_drivers_of_commander){
      var drvrloc = new google.maps.LatLng(driver.location.lat,driver.location.lng);
      let image = 'assets/car.png';
      this.addMarker(drvrloc,image,driver.name);
      this.setMapOnAll(this.map);
parseFloat(.toFixed(9))
    }*/


/***/ })

}]);
//# sourceMappingURL=pages-CmdMap-CmdMap-module-es2015.js.map