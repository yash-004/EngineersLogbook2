function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-CmdMap-CmdMap-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdMap/CmdMap.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdMap/CmdMap.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCmdMapCmdMapPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding>\n    <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ71jPdOF6e02nQmca2WrbJw_QeXZBh5Q\"></script>\n    <div #map id=\"map\" style=\"height: 100%;width: 100%;overflow: auto;background-color: transparent;\"></div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/CmdMap/CmdMap.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/CmdMap/CmdMap.module.ts ***!
    \***********************************************/

  /*! exports provided: CmdMapPageModule */

  /***/
  function srcAppPagesCmdMapCmdMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CmdMapPageModule", function () {
      return CmdMapPageModule;
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


    var _CmdMap_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./CmdMap.page */
    "./src/app/pages/CmdMap/CmdMap.page.ts");

    var CmdMapPageModule = function CmdMapPageModule() {
      _classCallCheck(this, CmdMapPageModule);
    };

    CmdMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _CmdMap_page__WEBPACK_IMPORTED_MODULE_6__["CmdMapPage"]
      }])],
      declarations: [_CmdMap_page__WEBPACK_IMPORTED_MODULE_6__["CmdMapPage"]]
    })], CmdMapPageModule);
    /***/
  },

  /***/
  "./src/app/pages/CmdMap/CmdMap.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/CmdMap/CmdMap.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCmdMapCmdMapPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".popup-bubble {\n  /* Position the bubble centred-above its parent. */\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transform: translate(-50%, -100%);\n          transform: translate(-50%, -100%);\n  /* Style the bubble. */\n  background-color: white;\n  padding: 5px;\n  border-radius: 5px;\n  font-family: sans-serif;\n  overflow-y: auto;\n  max-height: 60px;\n  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.5);\n}\n\n/* The parent of the bubble. A zero-height div at the top of the tip. */\n\n.popup-bubble-anchor {\n  /* Position the div a fixed distance above the tip. */\n  position: absolute;\n  width: 100%;\n  bottom: 8px;\n  left: 0;\n}\n\n/* This element draws the tip. */\n\n.popup-bubble-anchor::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  /* Center the tip horizontally. */\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  /* The tip is a https://css-tricks.com/snippets/css/css-triangle/ */\n  width: 0;\n  height: 0;\n  /* The tip is 8px high, and 12px wide. */\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 8px solid white;\n}\n\n/* JavaScript will position this div at the bottom of the popup tip. */\n\n.popup-container {\n  cursor: auto;\n  height: 0;\n  position: absolute;\n  /* The max width of the info window. */\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YXNoZGl4aXQvRG93bmxvYWRzL0VuZ2luZWVyc0xvZ2Jvb2syL3NyYy9hcHAvcGFnZXMvQ21kTWFwL0NtZE1hcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0NtZE1hcC9DbWRNYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ1Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtBQ0NSOztBRENNLHVFQUFBOztBQUNOO0VBQ1EscURBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQ0VSOztBREFNLGdDQUFBOztBQUNOO0VBQ1EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxtRUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUNHUjs7QURETSxzRUFBQTs7QUFDTjtFQUNRLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0NtZE1hcC9DbWRNYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcHVwLWJ1YmJsZSB7XG4gICAgICAgIC8qIFBvc2l0aW9uIHRoZSBidWJibGUgY2VudHJlZC1hYm92ZSBpdHMgcGFyZW50LiAqL1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICAgICAgICAvKiBTdHlsZSB0aGUgYnViYmxlLiAqL1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC41KTtcbn1cbiAgICAgIC8qIFRoZSBwYXJlbnQgb2YgdGhlIGJ1YmJsZS4gQSB6ZXJvLWhlaWdodCBkaXYgYXQgdGhlIHRvcCBvZiB0aGUgdGlwLiAqL1xuLnBvcHVwLWJ1YmJsZS1hbmNob3Ige1xuICAgICAgICAvKiBQb3NpdGlvbiB0aGUgZGl2IGEgZml4ZWQgZGlzdGFuY2UgYWJvdmUgdGhlIHRpcC4gKi9cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm90dG9tOiAvKiBUSVBfSEVJR0hUPSAqLyA4cHg7XG4gICAgICAgIGxlZnQ6IDA7XG59XG4gICAgICAvKiBUaGlzIGVsZW1lbnQgZHJhd3MgdGhlIHRpcC4gKi9cbi5wb3B1cC1idWJibGUtYW5jaG9yOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAvKiBDZW50ZXIgdGhlIHRpcCBob3Jpem9udGFsbHkuICovXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICAgICAgICAvKiBUaGUgdGlwIGlzIGEgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvY3NzLXRyaWFuZ2xlLyAqL1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAvKiBUaGUgdGlwIGlzIDhweCBoaWdoLCBhbmQgMTJweCB3aWRlLiAqL1xuICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXRvcDogLyogVElQX0hFSUdIVD0gKi8gOHB4IHNvbGlkIHdoaXRlO1xufVxuICAgICAgLyogSmF2YVNjcmlwdCB3aWxsIHBvc2l0aW9uIHRoaXMgZGl2IGF0IHRoZSBib3R0b20gb2YgdGhlIHBvcHVwIHRpcC4gKi9cbi5wb3B1cC1jb250YWluZXIge1xuICAgICAgICBjdXJzb3I6IGF1dG87XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvKiBUaGUgbWF4IHdpZHRoIG9mIHRoZSBpbmZvIHdpbmRvdy4gKi9cbiAgICAgICAgd2lkdGg6IDIwMHB4O1xufVxuIiwiLnBvcHVwLWJ1YmJsZSB7XG4gIC8qIFBvc2l0aW9uIHRoZSBidWJibGUgY2VudHJlZC1hYm92ZSBpdHMgcGFyZW50LiAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICAvKiBTdHlsZSB0aGUgYnViYmxlLiAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA2MHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLyogVGhlIHBhcmVudCBvZiB0aGUgYnViYmxlLiBBIHplcm8taGVpZ2h0IGRpdiBhdCB0aGUgdG9wIG9mIHRoZSB0aXAuICovXG4ucG9wdXAtYnViYmxlLWFuY2hvciB7XG4gIC8qIFBvc2l0aW9uIHRoZSBkaXYgYSBmaXhlZCBkaXN0YW5jZSBhYm92ZSB0aGUgdGlwLiAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDhweDtcbiAgbGVmdDogMDtcbn1cblxuLyogVGhpcyBlbGVtZW50IGRyYXdzIHRoZSB0aXAuICovXG4ucG9wdXAtYnViYmxlLWFuY2hvcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLyogQ2VudGVyIHRoZSB0aXAgaG9yaXpvbnRhbGx5LiAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgLyogVGhlIHRpcCBpcyBhIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL2Nzcy10cmlhbmdsZS8gKi9cbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgLyogVGhlIHRpcCBpcyA4cHggaGlnaCwgYW5kIDEycHggd2lkZS4gKi9cbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDhweCBzb2xpZCB3aGl0ZTtcbn1cblxuLyogSmF2YVNjcmlwdCB3aWxsIHBvc2l0aW9uIHRoaXMgZGl2IGF0IHRoZSBib3R0b20gb2YgdGhlIHBvcHVwIHRpcC4gKi9cbi5wb3B1cC1jb250YWluZXIge1xuICBjdXJzb3I6IGF1dG87XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBUaGUgbWF4IHdpZHRoIG9mIHRoZSBpbmZvIHdpbmRvdy4gKi9cbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/CmdMap/CmdMap.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/CmdMap/CmdMap.page.ts ***!
    \*********************************************/

  /*! exports provided: CmdMapPage, snapshotToArray */

  /***/
  function srcAppPagesCmdMapCmdMapPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CmdMapPage", function () {
      return CmdMapPage;
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

    var CmdMapPage =
    /*#__PURE__*/
    function () {
      function CmdMapPage(navCtrl, platform, geolocation, database, device) {
        var _this = this;

        _classCallCheck(this, CmdMapPage);

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
            var updatelocation = new google.maps.LatLng(_this.database.current.user.location.lat, _this.database.current.user.location.lng);
            console.log(data.latitude, data.longitude);
            console.log(_this.database.current.user.location.lat, _this.database.current.user.location.lng);

            _this.addMarker(updatelocation, image, _this.database.current.user.name);

            _this.setMapOnAll(_this.map);
          });
        });
      }

      _createClass(CmdMapPage, [{
        key: "initMap",
        value: function initMap() {
          var _this2 = this;

          console.log(this.database.current.user);
          this.geolocation.getCurrentPosition({
            maximumAge: 3000,
            timeout: 5000,
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
              _this2.deleteMarkers();

              var _image = 'assets/car.png';

              _this2.addMarker(updatelocation, _image, _this2.database.current.user.name);

              _this2.setMapOnAll(_this2.map);

              _this2.map.panTo(updatelocation);

              _this2.database.current.user.location = {
                lat: parseFloat(data.coords.latitude.toFixed(9)),
                lng: parseFloat(data.coords.longitude.toFixed(9))
              };
              console.log(_this2.database.current.user.location);
              console.log("write");

              _this2.database.write('user', _this2.database.current.user.email, _this2.database.current.user);
            }

            console.log("notmoved");

            _this2.deleteMarkers();

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              var _loop = function _loop() {
                var driver = _step.value;

                _this2.updatedriverloc(driver.email).then(function (result) {
                  var drvrloc = new google.maps.LatLng(result.lat, result.lng);
                  var image = 'assets/car.png';

                  _this2.addMarker(drvrloc, image, driver.name);

                  console.log(driver.email);
                  console.log(result);
                });
              };

              for (var _iterator = _this2.database.current.all_drivers_of_commander[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                _loop();
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

            var image = 'assets/car.png';

            _this2.addMarker(updatelocation, image, _this2.database.current.user.name);

            _this2.setMapOnAll(_this2.map);
          });
        }
      }, {
        key: "updatedriverloc",
        value: function updatedriverloc(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.database.read('user', email);

                  case 2:
                    result = _context.sent;
                    this.drvr = {
                      driver: result.data()
                    };
                    return _context.abrupt("return", this.drvr.driver.location);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addMarker",
        value: function addMarker(location, image, name) {
          var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: image,
            label: name
          });
          this.markers.push(marker);
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
      }]);

      return CmdMapPage;
    }();

    CmdMapPage.ctorParameters = function () {
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], CmdMapPage.prototype, "mapElement", void 0);
    CmdMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-CmdMap',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./CmdMap.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/CmdMap/CmdMap.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./CmdMap.page.scss */
      "./src/app/pages/CmdMap/CmdMap.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"]])], CmdMapPage);

    var snapshotToArray = function snapshotToArray(snapshot) {
      var returnArr = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
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

    /***/

  }
}]);
//# sourceMappingURL=pages-CmdMap-CmdMap-module-es5.js.map