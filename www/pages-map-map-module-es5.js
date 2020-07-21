function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-map-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapMapPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n    <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ71jPdOF6e02nQmca2WrbJw_QeXZBh5Q\"></script>\n    <div #map id=\"map\" style=\"height: 100%;width: 100%;overflow: auto;background-color: transparent;\"></div>\n        <!-- fab placed to the top end -->\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button size=\"small\" color=\"danger\" (click)=\"click()\">\n            <ion-icon name=\"alert\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/map/map.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/map/map.module.ts ***!
    \*****************************************/

  /*! exports provided: MapPageModule */

  /***/
  function srcAppPagesMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageModule", function () {
      return MapPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./map.page */
    "./src/app/pages/map/map.page.ts");

    var MapPageModule = function MapPageModule() {
      _classCallCheck(this, MapPageModule);
    };

    MapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]
      }])],
      declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
    })], MapPageModule);
    /***/
  },

  /***/
  "./src/app/pages/map/map.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/pages/map/map.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapMapPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/map/map.page.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/map/map.page.ts ***!
    \***************************************/

  /*! exports provided: MapPage, snapshotToArray */

  /***/
  function srcAppPagesMapMapPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPage", function () {
      return MapPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "snapshotToArray", function () {
      return snapshotToArray;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);

    var MapPage =
    /*#__PURE__*/
    function () {
      function MapPage(navCtrl, platform, geolocation, database, device) {
        var _this = this;

        _classCallCheck(this, MapPage);

        this.navCtrl = navCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.database = database;
        this.device = device;
        this.markers = [];
        this.ref = firebase__WEBPACK_IMPORTED_MODULE_6__["database"]().ref('geolocations/');
        platform.ready().then(function () {
          _this.initMap();
        });
        this.ref.on('value', function (resp) {
          _this.deleteMarkers();

          snapshotToArray(resp).forEach(function (data) {
            var image = 'assets/car.png';
            var updatelocation = new google.maps.LatLng(data.latitude, data.longitude);

            _this.addMarker(updatelocation, image);

            _this.setMapOnAll(_this.map);
          });
        });
      }

      _createClass(MapPage, [{
        key: "initMap",
        value: function initMap() {
          var _this2 = this;

          this.geolocation.getCurrentPosition({
            maximumAge: 3000,
            timeout: 2500,
            enableHighAccuracy: true
          }).then(function (resp) {
            var mylocation = new google.maps.LatLng(parseFloat(resp.coords.latitude.toFixed(9)), parseFloat(resp.coords.longitude.toFixed(9)));

            if ((parseFloat(resp.coords.latitude.toFixed(9)), parseFloat(resp.coords.longitude.toFixed(9))) != (_this2.database.current.user.location.lat, _this2.database.current.user.location.lng)) {
              _this2.database.current.user.location = {
                lat: parseFloat(resp.coords.latitude.toFixed(9)),
                lng: parseFloat(resp.coords.longitude.toFixed(9))
              };

              _this2.database.write('user', _this2.database.current.user.email, _this2.database.current.user);
            }

            _this2.map = new google.maps.Map(_this2.mapElement.nativeElement, {
              zoom: 15,
              center: mylocation
            });
          });
          var watch = this.geolocation.watchPosition();
          watch.subscribe(function (data) {
            var updatelocation = new google.maps.LatLng(parseFloat(data.coords.latitude.toFixed(9)), parseFloat(data.coords.longitude.toFixed(9)));

            if ((parseFloat(data.coords.latitude.toFixed(9)), parseFloat(data.coords.longitude.toFixed(9))) != (_this2.database.current.user.location.lat, _this2.database.current.user.location.lng)) {
              _this2.database.current.user.location = {
                lat: parseFloat(data.coords.latitude.toFixed(9)),
                lng: parseFloat(data.coords.longitude.toFixed(9))
              };
              console.log(_this2.database.current.user.location);

              _this2.database.write('user', _this2.database.current.user.email, _this2.database.current.user);
            }

            _this2.deleteMarkers();

            if (_this2.map) {
              _this2.updatemap();
            }
          });

          if (this.map) {
            this.updatemap();
          }
        }
      }, {
        key: "addMarker",
        value: function addMarker(location, image) {
          var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: image
          });
          this.markers.push(marker);
        }
      }, {
        key: "updatemap",
        value: function updatemap() {
          var image = 'assets/car.png';
          var updatelocation = new google.maps.LatLng(this.database.current.user.location.lat, this.database.current.user.location.lng);
          this.addMarker(updatelocation, image);
          this.setMapOnAll(this.map);
          this.map.panTo(updatelocation);
        }
      }, {
        key: "setMapOnAll",
        value: function setMapOnAll(map) {
          for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
          }
        }
      }, {
        key: "clearMarkers",
        value: function clearMarkers() {
          this.setMapOnAll(null);
        }
      }, {
        key: "deleteMarkers",
        value: function deleteMarkers() {
          this.clearMarkers();
          this.markers = [];
        }
      }, {
        key: "click",
        value: function click() {
          this.drive = this.getPendingDrives();
          console.log(this.drive);
          this.database.current.drive_to_edit = this.drive[0];
          console.log("> Navigating to AddDrivePage for drive id=".concat(this.drive.id));
          this.navCtrl.navigateForward(['/reportvehicle']);
        }
      }, {
        key: "getPendingDrives",
        value: function getPendingDrives() {
          var _this3 = this;

          return this.database.current.drive_history.filter(function (drive) {
            if (_this3.database.current.user.email === drive.driver) {
              return drive.status === 'in-progress';
            }
          });
        }
      }]);

      return MapPage;
    }();

    MapPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }, {
        type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapPage.prototype, "mapElement", void 0);
    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.page.scss */
      "./src/app/pages/map/map.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]])], MapPage);

    var snapshotToArray = function snapshotToArray(snapshot) {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });
      return returnArr;
    };
    /***/

  }
}]);
//# sourceMappingURL=pages-map-map-module-es5.js.map