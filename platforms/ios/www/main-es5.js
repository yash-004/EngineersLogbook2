function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "../pages/CmdHistory/CmdHistory.module": ["./src/app/pages/CmdHistory/CmdHistory.module.ts", "pages-CmdHistory-CmdHistory-module"],
      "../pages/CmdMap/CmdMap.module": ["./src/app/pages/CmdMap/CmdMap.module.ts", "default~pages-CmdMap-CmdMap-module~pages-map-map-module", "pages-CmdMap-CmdMap-module"],
      "../pages/about/about.module": ["./src/app/pages/about/about.module.ts", "pages-about-about-module"],
      "../pages/commander/commander.module": ["./src/app/pages/commander/commander.module.ts", "common", "pages-commander-commander-module"],
      "../pages/history/history.module": ["./src/app/pages/history/history.module.ts", "default~pages-history-history-module~pages-summary-summary-module", "pages-history-history-module"],
      "../pages/map/map.module": ["./src/app/pages/map/map.module.ts", "default~pages-CmdMap-CmdMap-module~pages-map-map-module", "pages-map-map-module"],
      "../pages/profile/profile.module": ["./src/app/pages/profile/profile.module.ts", "pages-profile-profile-module"],
      "../pages/summary/summary.module": ["./src/app/pages/summary/summary.module.ts", "default~pages-history-history-module~pages-summary-summary-module", "common", "pages-summary-summary-module"],
      "./add-drive/add-drive.module": ["./src/app/add-drive/add-drive.module.ts", "add-drive-add-drive-module"],
      "./add-fuel/add-fuel.module": ["./src/app/add-fuel/add-fuel.module.ts", "add-fuel-add-fuel-module"],
      "./boc/boc.module": ["./src/app/boc/boc.module.ts", "boc-boc-module"],
      "./home/home.module": ["./src/app/home/home.module.ts", "home-home-module"],
      "./mtrac/mtrac.module": ["./src/app/mtrac/mtrac.module.ts", "mtrac-mtrac-module"],
      "./pages/summary/summary.module": ["./src/app/pages/summary/summary.module.ts", "default~pages-history-history-module~pages-summary-summary-module", "common", "pages-summary-summary-module"],
      "./signup/signup.module": ["./src/app/signup/signup.module.ts", "signup-signup-module"],
      "./tabs/tabs.module": ["./src/app/tabs/tabs.module.ts"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCZ71jPdOF6e02nQmca2WrbJw_QeXZBh5Q\"></script>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/drive-view/drive-view.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drive-view/drive-view.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDriveViewDriveViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-item detail (click)=\"click()\">\n  <ion-text style=\"padding-top:8px;padding-bottom:8px;\"><strong>{{formatDate(drive.date)}}</strong></ion-text>\n  <ion-icon slot=\"end\" color='danger' size=\"small\" name=\"alert\" *ngIf=\"drive.status!='verified'\"></ion-icon>\n  <!--ion-button size=\"small\" fill=\"solid\" slot=\"end\"><ion-icon slot=\"icon-only\" name=\"create\"></ion-icon></ion-button-->\n</ion-item>\n\n<ion-row class='row'>\n\n  <!-- Left column: Mileage/Time --------------------->\n  \n  <ion-col size='4' class='left'>\n    <ion-item text-center lines=\"none\" *ngIf=\"drive.status!='in-progress'\">\n      <ion-label position=\"stacked\">Distance</ion-label>\n      <ion-text style=\"margin-bottom:8px; font-size: 120%; font-weight:bold;\">{{database.distance(drive)}}km</ion-text>\n      <ion-text><ion-icon name=\"clock\"></ion-icon>{{database.formatMinutesToString(database.duration(drive))}}</ion-text>\n    </ion-item>\n\n    <ion-item text-center lines=\"none\" *ngIf=\"drive.status=='in-progress'\">\n      <ion-text color=\"danger\" style=\"margin-bottom:8px; font-size: 110%; font-weight:bold;\">Drive In Progress</ion-text>\n    </ion-item>\n  </ion-col>\n\n  <!-- Main column ------------------------->\n  \n  <ion-col class=\"main1\">\n    <br>\n    <ion-item lines=\"none\" no-padding>\n      <ion-icon name=\"pin\" size=\"small\"></ion-icon>\n      <small>Start Location</small>\n    </ion-item>\n    \n    <ion-item style=\"--padding-start:18px\" lines=\"none\">\n      {{drive.start_location}}\n      <ion-text text-right slot=\"end\">{{drive.start_time}}</ion-text>\n    </ion-item>\n\n    <ion-item lines=\"none\" no-padding>\n      <ion-icon name=\"pin\" size=\"small\"></ion-icon>\n      <small>End Location</small>\n    </ion-item>\n\n    <ion-item style=\"--padding-start:18px;\" lines=\"none\">  <!-- extra padding is to align text with location label -->\n      {{drive.end_location}}\n      <ion-text text-right slot=\"end\">{{drive.end_time}}</ion-text> <br>\n    </ion-item>\n\n  </ion-col>\n</ion-row>\n\n<!--- TODO? Collapse/Expand these details -->\n<ion-grid class=\"table\">\n  <ion-row style=\"font-size: 0.8em;\" style=\"height: 20%;\">\n    <ion-col size=\"4\" class=\"bubble-text\" >\n      <div class=\"ion-text-center\" style=\"width: 100%;\">\n        <ion-icon name=\"person\"></ion-icon><br>{{drive.driver.split('@')[0]}}\n      </div>\n    </ion-col>\n    <ion-col size=\"2\" class=\"bubble-text\" >\n      <div class=\"ion-text-center\" style=\"width: 100%;\">\n        <ion-icon name=\"car\"></ion-icon><br>{{drive.vehicle_type}}\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" class=\"bubble-text\" >\n      <div class=\"ion-text-center\" style=\"width: 100%;\">\n        <ion-icon name=\"create\"></ion-icon><br>{{drive.comments}}\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" class=\"bubble-text\" >\n      <div class=\"ion-text-center\" style=\"width: 100%;\">\n        <ion-icon name=\"contact\"></ion-icon><br>{{drive.commander.split('@')[0]}}\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"commander\" *ngIf=\"this.database.current.user.is_commander\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n  \n    <ion-tab-button tab=\"summary\" *ngIf=\"!this.database.current.user.is_commander\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"CmdHistory\" *ngIf=\"this.database.current.user.is_commander\">\n      <ion-icon name=\"car\"></ion-icon>\n      <ion-label>History</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"history\" *ngIf=\"!this.database.current.user.is_commander\">\n      <ion-icon name=\"car\"></ion-icon>\n      <ion-label>History</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label >Profile</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"CmdMap\" *ngIf=\"this.database.current.user.is_commander\">\n      <ion-icon name=\"locate\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\" *ngIf=\"!this.database.current.user.is_commander\">\n      <ion-icon name=\"locate\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n\n<ion-fab vertical=\"bottom\" horizontal=\"center\" *ngIf=\"!this.database.current.user.is_commander\">\n  <ion-fab-button size=\"small\" color=\"primary\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"end\">\n      <ion-fab-button color=\"primary\" *ngIf=\"this.database.current.drive_in_progress==null\" routerLink = \"/boc\"><ion-icon name=\"speedometer\"></ion-icon></ion-fab-button>\n  </ion-fab-list>\n  <ion-fab-list side=\"start\">\n    <ion-fab-button color=\"primary\" routerLink = \"/add-fuel\"><ion-icon name=\"color-fill\"></ion-icon></ion-fab-button>\n  </ion-fab-list>\n</ion-fab>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: './home/home.module#HomePageModule'
    }, {
      path: 'tabs',
      loadChildren: './tabs/tabs.module#TabsPageModule'
    }, {
      path: 'signup',
      loadChildren: './signup/signup.module#SignupPageModule'
    }, {
      path: 'add-fuel',
      loadChildren: './add-fuel/add-fuel.module#AddFuelPageModule'
    }, {
      path: 'add-drive',
      loadChildren: './add-drive/add-drive.module#AddDrivePageModule'
    }, {
      path: 'boc',
      loadChildren: './boc/boc.module#bocPageModule'
    }, {
      path: 'mtrac',
      loadChildren: './mtrac/mtrac.module#mtracPageModule'
    }, {
      path: 'summary',
      loadChildren: './pages/summary/summary.module#SummaryPageModule'
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-about-about-module */
        "pages-about-about-module").then(__webpack_require__.bind(null,
        /*! ./pages/about/about.module */
        "./src/app/pages/about/about.module.ts")).then(function (m) {
          return m.AboutPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-select-option {\n  --width:100%;\n}\n\nion-label {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2phdmUvRGVza3RvcC9FbmdpbmVlcnNMb2dib29rMi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0ksWUFBQTtBQ1RKOztBRFdBO0VBQ0ksOEJBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgdG8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gVGhlc2UgXG4vLyBzdHlsZXMgYXJlIGZvciB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIFxuLy8gZmlsZSBjYW4gaG9sZCBTYXNzIG1peGlucywgZnVuY3Rpb25zLCBhbmQgcGxhY2Vob2xkZXIgY2xhc3NlcyB0byBiZSBpbXBvcnRlZCBcbi8vIGFuZCB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuXG5pb24tY29udGVudHtcbn1cblxuaW9uLXNlbGVjdC1vcHRpb24ge1xuICAgIC0td2lkdGg6MTAwJTtcbn1cbmlvbi1sYWJlbHtcbiAgICB3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudDtcbn0iLCJpb24tc2VsZWN0LW9wdGlvbiB7XG4gIC0td2lkdGg6MTAwJTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent = function AppComponent(platform, splashScreen, statusBar) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.platform = platform;
      this.splashScreen = splashScreen;
      this.statusBar = statusBar;
      this.platform.ready().then(function () {
        if (_this.platform.is('cordova')) {
          _this.statusBar.styleDefault();

          _this.splashScreen.hide(); //cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);

        }
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_database_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/database.service */
    "./src/app/services/database.service.ts");
    /* harmony import */


    var _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./drive-view/drive-view.module */
    "./src/app/drive-view/drive-view.module.ts");
    /* harmony import */


    var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./tabs/tabs.module */
    "./src/app/tabs/tabs.module.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/fcm/ngx */
    "./node_modules/@ionic-native/fcm/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var ngx_countdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-countdown */
    "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_24___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_24__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");

    firebase_app__WEBPACK_IMPORTED_MODULE_24__["initializeApp"](src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [ngx_countdown__WEBPACK_IMPORTED_MODULE_21__["CountdownModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _drive_view_drive_view_module__WEBPACK_IMPORTED_MODULE_16__["DriveViewModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_18__["ChartsModule"], _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_17__["TabsPageModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_20__["IonicStorageModule"].forRoot()],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_22__["Geolocation"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_23__["Device"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"], _services_database_service__WEBPACK_IMPORTED_MODULE_15__["DatabaseService"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_19__["FCM"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/drive-view/drive-view.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/drive-view/drive-view.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDriveViewDriveViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item, .row {\n  --min-height: 1em;\n}\n\nion-col {\n  padding: 0;\n}\n\n.left {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.left ion-item {\n  --inner-padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2phdmUvRGVza3RvcC9FbmdpbmVlcnNMb2dib29rMi9zcmMvYXBwL2RyaXZlLXZpZXcvZHJpdmUtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZHJpdmUtdmlldy9kcml2ZS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUUsaUJBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRjs7QURNQTtFQUVFLCtCQUFBO0VBQUEsd0JBQUE7RUFRRSxvQ0FBQTtVQUFBLDhCQUFBO0VBQ0YsbUNBQUE7VUFBQSxrQ0FBQTtBQ1hGOztBREdFO0VBQ0Usd0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2RyaXZlLXZpZXcvZHJpdmUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLCAucm93IHtcbiAgLy9jb2xvcjogYmxhY2s7IC0tYmFja2dyb3VuZDogd2hpdGU7IGJhY2tncm91bmQ6IHdoaXRlO1xuICAvL2NvbG9yOiB3aGl0ZTsgLS1iYWNrZ3JvdW5kOiBibGFjazsgYmFja2dyb3VuZDogYmxhY2s7XG4gIC8vY29sb3I6IHdoaXRlOyAtLWJhY2tncm91bmQ6IG5vbmU7IGJhY2tncm91bmQ6IG5vbmU7XG4gIC0tbWluLWhlaWdodDogMWVtOyAgLy8gT3RoZXJ3aXNlLCBpb24taXRlbXMgaGFzIGltcGxpY2l0IG91dGVyIHBhZGRpbmdzIVxufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMDsgIC8vIE5vIGF1dG9tYXRpYyBzcGFjaW5nIGJldHdlZW4gbGFiZWxzXG4gIC8vYmFja2dyb3VuZDogd2hpdGU7ICAgLy8gRml4IHVnbHkgYmFja2dyb3VuZCBnYXAgYXQgYm90dG9tIG9mIGxlZnQgY29sdW1uXG59XG5cbi5sZWZ0IHtcbiAgLy9iYWNrZ3JvdW5kOnJlZDtcbiAgZGlzcGxheTogZmxleCFpbXBvcnRhbnQ7XG4gIGlvbi1pdGVte1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgfVxuICAvL2FsaWduLWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG4gIC8vd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgLy9oZWlnaHQ6IDEwMCU7XG4gIC8vaW9uLWl0ZW0ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIhaW1wb3J0YW50OyAgLy8gdmVydGljYWwgYWxpZ25tZW50XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyIWltcG9ydGFudDsgIC8vIGhvcml6b250YWwgYWxpZ25tZW50XG4gIC8vfVxufVxuIiwiaW9uLWl0ZW0sIC5yb3cge1xuICAtLW1pbi1oZWlnaHQ6IDFlbTtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5sZWZ0IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4ubGVmdCBpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/drive-view/drive-view.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/drive-view/drive-view.component.ts ***!
    \****************************************************/

  /*! exports provided: DriveViewComponent */

  /***/
  function srcAppDriveViewDriveViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriveViewComponent", function () {
      return DriveViewComponent;
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
    /*! ../services/database.service */
    "./src/app/services/database.service.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);

    var DriveViewComponent =
    /*#__PURE__*/
    function () {
      function DriveViewComponent(navCtrl, database) {
        _classCallCheck(this, DriveViewComponent);

        this.navCtrl = navCtrl;
        this.database = database;
      }

      _createClass(DriveViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "click",
        value: function click() {
          this.database.current.drive_to_edit = this.drive;
          console.log("> Navigating to AddDrivePage for drive id=".concat(this.drive.id));
          this.navCtrl.navigateForward(['/add-drive']);
        }
      }, {
        key: "formatDate",
        value: function formatDate(date) {
          return dayjs__WEBPACK_IMPORTED_MODULE_4__(date, 'YYYY-MM-DD').format('dddd, MMM DD, YYYY');
        }
      }]);

      return DriveViewComponent;
    }();

    DriveViewComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DriveViewComponent.prototype, "drive", void 0);
    DriveViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-drive-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./drive-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/drive-view/drive-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./drive-view.component.scss */
      "./src/app/drive-view/drive-view.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])], DriveViewComponent);
    /***/
  },

  /***/
  "./src/app/drive-view/drive-view.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/drive-view/drive-view.module.ts ***!
    \*************************************************/

  /*! exports provided: DriveViewModule */

  /***/
  function srcAppDriveViewDriveViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DriveViewModule", function () {
      return DriveViewModule;
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


    var _drive_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./drive-view.component */
    "./src/app/drive-view/drive-view.component.ts");

    var DriveViewModule = function DriveViewModule() {
      _classCallCheck(this, DriveViewModule);
    };

    DriveViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      declarations: [_drive_view_component__WEBPACK_IMPORTED_MODULE_4__["DriveViewComponent"]],
      exports: [_drive_view_component__WEBPACK_IMPORTED_MODULE_4__["DriveViewComponent"]]
    })], DriveViewModule);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService() {
        /*
        firebase.auth().onAuthStateChanged( (authData) => {
          console.log(`> AuthStateChanged: ${JSON.stringify(authData)}`);
        });
        */

        _classCallCheck(this, AuthenticationService);
      }

      _createClass(AuthenticationService, [{
        key: "registerUser",
        value: function registerUser(value) {
          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.email, value.password).then(function (res) {
              return resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "loginUser",
        value: function loginUser(value) {
          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(value.email, value.password).then(function (res) {
              return resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          console.log("> logout");
          return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser) {
              firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signOut().then(function () {
                console.log('LOG Out');
                resolve();
              })["catch"](function (error) {
                reject();
              });
            }
          });
        }
      }, {
        key: "userDetails",
        value: function userDetails() {
          return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/database.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/database.service.ts ***!
    \**********************************************/

  /*! exports provided: VehicleTypes, DatabaseService */

  /***/
  function srcAppServicesDatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VehicleTypes", function () {
      return VehicleTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
      return DatabaseService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var sprintf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sprintf-js */
    "./node_modules/sprintf-js/src/sprintf.js");
    /* harmony import */


    var sprintf_js__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_5__); // DateTime utility, See http://zetcode.com/javascript/dayjs/


    var VehicleTypes = ['BELREX', 'MSS', '5TON', 'OUV', 'FLB'];

    var DatabaseService =
    /*#__PURE__*/
    function () {
      function DatabaseService(firestore) {
        _classCallCheck(this, DatabaseService);

        this.firestore = firestore;
        this.current = null; // Currently logged in user
        // Create dummy login for debugging without Firebase authentication

        this.current = this.createDebugLogin();
      } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Retrieves and populates profile/drive fields for the currently logged in user.
      // This is called right after Firebase authentication is successful.


      _createClass(DatabaseService, [{
        key: "init",
        value: function init(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.current) this.logout();
                    _context2.next = 3;
                    return this.read('user', email);

                  case 3:
                    result = _context2.sent;
                    this.current = {
                      user: result.data(),
                      snapshot_wait: 0
                    };
                    _context2.next = 7;
                    return this.log("Logged-in: ".concat(email));

                  case 7:
                    if (this.current.user.fleet) {
                      _context2.next = 11;
                      break;
                    }

                    // No fleet string? Set it to the default and update the database
                    this.current.user.fleet = "30SCE";
                    _context2.next = 11;
                    return this.write('user', email, this.current.user);

                  case 11:
                    // Bind local data to database
                    this.bind(this.current); // Wait for data binding to finish

                  case 12:
                    if (!(this.current.snapshot_wait == 0)) {
                      _context2.next = 18;
                      break;
                    }

                    console.log("> Still retrieving userdata...");
                    _context2.next = 16;
                    return this.sleep(500);

                  case 16:
                    _context2.next = 12;
                    break;

                  case 18:
                    console.log(this.current.user);
                    console.log("> Current database user: ".concat(email, " => ").concat(JSON.stringify(this.current.user))); // Get all users who are in the same company as logged in user

                    _context2.next = 22;
                    return this.list('user', ['company', '==', this.current.user.company]);

                  case 22:
                    this.current.all_users = _context2.sent;

                    //console.log(`> All Users: ${JSON.stringify(this.current.all_users)}`);
                    // If user is_driver, get list of commanders from the same company (for drop-down list in add-drive)
                    if (this.current.user.is_driver) {
                      this.current.all_commanders_of_driver = this.current.all_users.filter(function (user) {
                        return user.is_commander && !user.is_admin;
                      }); // Don't include superuser in commanders list

                      console.log("> List of commanders[".concat(this.current.all_commanders_of_driver.length, "] = ").concat(JSON.stringify(this.current.all_commanders_of_driver)));
                    } // If user is_commander, get list of drivers from the same company


                    if (!this.current.user.is_commander) {
                      _context2.next = 52;
                      break;
                    }

                    this.current.all_drivers_of_commander = this.current.all_users.filter(function (user) {
                      return user.is_driver;
                    });
                    console.log("> List of drivers[".concat(this.current.all_drivers_of_commander.length, "] = ").concat(JSON.stringify(this.current.all_drivers_of_commander))); // Also retrieve summaries of drivers

                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context2.prev = 30;
                    _loop =
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _loop() {
                      var driver, result;
                      return regeneratorRuntime.wrap(function _loop$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              driver = _step.value;
                              _context.next = 3;
                              return _this2.read('summary', driver.email);

                            case 3:
                              result = _context.sent;

                              if (result.data()) {
                                // Found summary, great.
                                driver.summary = result.data();
                              } else {
                                // No summary? Calculate it...
                                driver.summary = _this2.summarize(_this2.current.drive_history.filter(function (drive) {
                                  return drive.driver === driver.email;
                                }));
                              } //console.log(`${driver.email} ${JSON.stringify(driver.summary)}`);


                            case 5:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _loop);
                    });
                    _iterator = this.current.all_drivers_of_commander[Symbol.iterator]();

                  case 33:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                      _context2.next = 38;
                      break;
                    }

                    return _context2.delegateYield(_loop(), "t0", 35);

                  case 35:
                    _iteratorNormalCompletion = true;
                    _context2.next = 33;
                    break;

                  case 38:
                    _context2.next = 44;
                    break;

                  case 40:
                    _context2.prev = 40;
                    _context2.t1 = _context2["catch"](30);
                    _didIteratorError = true;
                    _iteratorError = _context2.t1;

                  case 44:
                    _context2.prev = 44;
                    _context2.prev = 45;

                    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                      _iterator["return"]();
                    }

                  case 47:
                    _context2.prev = 47;

                    if (!_didIteratorError) {
                      _context2.next = 50;
                      break;
                    }

                    throw _iteratorError;

                  case 50:
                    return _context2.finish(47);

                  case 51:
                    return _context2.finish(44);

                  case 52:
                    return _context2.abrupt("return", this.current);

                  case 53:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee, this, [[30, 40, 44, 52], [45,, 47, 51]]);
          }));
        }
      }, {
        key: "sleep",
        value: function sleep(ms) {
          return new Promise(function (resolve) {
            setTimeout(resolve, ms);
          });
        } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Unbinds real-time data bindings and nullify this.current.

      }, {
        key: "logout",
        value: function logout() {
          if (!this.current) return;
          this.log("Log-out: ".concat(this.current.user.email)); // Unsubscribe to real-time data binding
          // See https://firebase.google.com/docs/firestore/query-data/listen

          if (this.current.detach_bind_user) {
            this.current.detach_bind_user();
            this.current.detach_bind_user = null;
          }

          if (this.current.detach_bind_drive) {
            this.current.detach_bind_drive();
            this.current.detach_bind_drive = null;
          }

          this.current = null;
        } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Basic CRUD operators

      }, {
        key: "collection",
        value: function collection(table) {
          return firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection(table);
        }
      }, {
        key: "read",
        value: function read(table, key) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.collection(table).doc(key).get();

                  case 2:
                    return _context3.abrupt("return", _context3.sent);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "write",
        value: function write(table, key, doc) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.log("Write table:".concat(table, " key:").concat(key));

                  case 2:
                    _context4.next = 4;
                    return this.collection(table).doc(key).set(doc);

                  case 4:
                    return _context4.abrupt("return", _context4.sent);

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "add",
        value: function add(table, doc) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.log("Write table:".concat(table));

                  case 2:
                    _context5.next = 4;
                    return this.collection(table).add(doc);

                  case 4:
                    return _context5.abrupt("return", _context5.sent);

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(table, key) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.log("Delete table:".concat(table, " key:").concat(key));

                  case 2:
                    _context6.next = 4;
                    return this.collection(table).doc(key)["delete"]();

                  case 4:
                    return _context6.abrupt("return", _context6.sent);

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "list",
        value: function list(table, condition, order_by) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var query, snapshot, array;
            return regeneratorRuntime.wrap(function _callee6$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    query = firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection(table);

                    if (condition) {
                      // Augment query with optional condition
                      query = query.where(condition[0], condition[1], condition[2]);
                    }

                    if (order_by) {
                      // Augment query with sorted order
                      order_by.forEach(function (order) {
                        query = query.orderBy(order); // Not yet tested
                      });
                    }

                    _context7.next = 5;
                    return query.get();

                  case 5:
                    snapshot = _context7.sent;
                    array = [];
                    snapshot.forEach(function (doc) {
                      array.push(doc.data()); // Caller will access documents with: "doc.id" and "doc.data()"
                    });
                    return _context7.abrupt("return", array);

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee6);
          }));
        }
      }, {
        key: "log",
        value: function log(message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var now, user, key;
            return regeneratorRuntime.wrap(function _callee7$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    now = dayjs__WEBPACK_IMPORTED_MODULE_4__();
                    user = this.current && this.current.user.email != "sample@gmail.com" ? ",".concat(this.current.user.email) : '';
                    key = "".concat(now.format('YYYY-MM-DD,HH:mm:ss')).concat(user);
                    console.log("> ".concat(message));
                    _context8.next = 6;
                    return this.collection('logger').doc(key).set({
                      message: message
                    });

                  case 6:
                    return _context8.abrupt("return", _context8.sent);

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee7, this);
          }));
        } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Aggregates mileage and durations in drive history array.
        // Track most recent drive and calculate operator currency.

      }, {
        key: "summarize",
        value: function summarize(drive_history) {
          var stats = {
            drive_count: 0,
            mileage_km: 0,
            duration_minutes: 0,
            most_recent_drive: dayjs__WEBPACK_IMPORTED_MODULE_4__(0),
            most_recent_drive_by_vehicle_type: {},
            mileage_by_vehicle_type: {}
          };

          for (var i = 0; i < drive_history.length; i++) {
            var trip = drive_history[i];

            if (trip.status === 'in-progress') {
              console.log("[".concat(i, "] ").concat(trip.date, " *** Drive In-progress *** ").concat(trip.id));
              continue;
            }

            var distance = this.distance(trip);
            var duration = this.duration(trip);
            stats.drive_count++;
            stats.mileage_km += distance;
            stats.duration_minutes += duration; //console.log(`[${i}] ${trip.date}, ${distance} km, ${duration} mins ${trip.id}`);
            // Update mileage per vehicle type

            if (stats.mileage_by_vehicle_type[trip.vehicle_type]) stats.mileage_by_vehicle_type[trip.vehicle_type] += distance;else stats.mileage_by_vehicle_type[trip.vehicle_type] = distance; // Update operator currency for each vehicle class

            var end_dt = dayjs__WEBPACK_IMPORTED_MODULE_4__(trip.date + " " + trip.end_time, 'YYYY-MM-DD HH:mm');

            if (!stats.most_recent_drive.unix() || stats.most_recent_drive.isBefore(end_dt)) {
              stats.most_recent_drive = end_dt;
            }

            if (!stats.most_recent_drive_by_vehicle_type[trip.vehicle_type] || stats.most_recent_drive_by_vehicle_type[trip.vehicle_type].isBefore(end_dt)) {
              stats.most_recent_drive_by_vehicle_type[trip.vehicle_type] = end_dt;
            }
          }

          console.log("> Summary: mileage=".concat(stats.mileage_km, " duration=").concat(stats.duration_minutes, " drives=").concat(drive_history.length, " recent=").concat(stats.most_recent_drive));
          console.log("> Recent drives by VehicleType: ".concat(JSON.stringify(stats.most_recent_drive_by_vehicle_type)));
          console.log("> Mileage by VehicleType: ".concat(JSON.stringify(stats.mileage_by_vehicle_type)));
          return stats;
        } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Real-time data binding. This is automatically called right after any CRUD operation
        // on the current user's drive history or profile.

      }, {
        key: "bind",
        value: function bind(login) {
          var _this3 = this;

          // For both drivers and commanders
          login.detach_bind_user = this.collection('user').doc(login.user.email).onSnapshot(function (doc) {
            login.user = doc.data(); // Casting to interface User

            console.log("\n> Updated Login object:", login.user);
          }); // Construct composite query depending on driver or commander (require Firestore composite index)

          var query = this.collection("drive").orderBy("date", "desc").orderBy("start_time", "desc");

          if (login.user.is_commander == true) {
            query.where("fleet", "==", login.user.fleet);
            /*login.detach_bind_drive =
              query.onSnapshot
              (
                (querySnapshot) =>
              {
                login.drive_history = [];
                login.drive_in_progress = null;
                querySnapshot.forEach
                (
                 (doc) =>
                {
                  let trip: Drive = doc.data() as Drive;  // Casting to interface Drive
                  trip.id = doc.id;
                  if (trip.company == login.user.company)
                  {
                    login.drive_history.push(trip);
                  }
                  if (trip.end_time == null) login.drive_in_progress = trip;
                }
                );
              }
              );*/
          } else {
            query = query.where("driver", "==", login.user.email);
            /*login.detach_bind_drive =
              query.onSnapshot( (querySnapshot) => {
                login.drive_history = [];
                login.drive_in_progress = null;
                querySnapshot.forEach( (doc) => {
                  let trip: Drive = doc.data() as Drive;  // Casting to interface Drive
                  trip.id = doc.id;
                  login.drive_history.push(trip);
                  if (trip.end_time == null) login.drive_in_progress = trip;
                });*/
          }

          login.detach_bind_drive = query.onSnapshot(function (querySnapshot) {
            login.drive_history = [];
            login.fuel_history = [];
            login.drive_in_progress = null;
            querySnapshot.forEach(function (doc) {
              var trip = doc.data(); // Casting to interface Drive

              trip.id = doc.id;

              if (trip.company == login.user.company && trip.fleet == login.user.fleet) {
                login.drive_history.push(trip);
              }

              if (trip.end_time == null) login.drive_in_progress = trip;
            }); //console.log(login.drive_history);

            console.log("\n> Updated Drive history for ".concat(login.user.email, ", ").concat(login.drive_history.length, " drives found.")); // Calculate new stats for both drivers and commanders

            login.stats = _this3.summarize(login.drive_history); // For drivers, write summarized report to database (For commanders' module)

            if (login.user.is_driver) {
              _this3.write("summary", login.user.email, JSON.parse(JSON.stringify(login.stats)));
            } // Allow login to proceed..


            login.snapshot_wait++;
          });
        } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Utilities

      }, {
        key: "duration",
        value: function duration(trip) {
          if (!trip.end_odometer || trip.status === 'in-progress') return 0; // Handle drive-in-progress

          var dayjs_format = 'YYYY-MM-DD HH:mm';
          var start_dt = dayjs__WEBPACK_IMPORTED_MODULE_4__(trip.date + " " + trip.start_time, dayjs_format);
          var end_dt = dayjs__WEBPACK_IMPORTED_MODULE_4__(trip.date + " " + trip.end_time, dayjs_format);
          var diff = end_dt.diff(start_dt, "minute");
          if (diff < 0) diff += 60 * 24; // rollover to next day

          return diff;
        }
      }, {
        key: "distance",
        value: function distance(trip) {
          if (!trip.end_odometer || trip.status === 'in-progress') return 0; // Handle drive-in-progress

          return trip.end_odometer - trip.start_odometer;
        }
      }, {
        key: "formatMinutesToString",
        value: function formatMinutesToString(minutes) {
          var result = "";
          var show_hours = true,
              show_minutes = true;
          var days = Math.floor(minutes / 24 / 60);

          if (days > 30) {
            var months = Math.floor(days / 30);
            days = days % 30;
            result += months + " Months ";
            show_hours = show_minutes = false;
          }

          if (days >= 1) {
            result += days + " Days ";
            show_minutes = false;
          }

          if (show_hours && show_minutes) {
            result += Object(sprintf_js__WEBPACK_IMPORTED_MODULE_5__["sprintf"])("%02d:%02d", Math.floor(minutes / 60 % 24), minutes % 60);
          } else {
            if (show_hours) {
              result += Math.floor(minutes / 60 % 24) + " Hours ";
            }

            if (show_minutes) {
              result += minutes % 60 + " Mins";
            }
          }

          return result;
        }
      }, {
        key: "getTimeStamp",
        value: function getTimeStamp() {
          return dayjs__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD HH:mm');
        } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Test data

      }, {
        key: "createDebugLogin",
        value: function createDebugLogin() {
          var drive_history = [{
            created: '',
            driver: 'sample@gmail.com',
            commander: 'commander_name',
            vehicle: '1234MID',
            vehicle_type: '5TON',
            date: '2019-08-10',
            start_time: '13:00',
            start_location: 'NSC',
            start_odometer: 100000,
            status: 'in-progress',
            company: 'C',
            fleet: 'C',
            incamp: true
          }, {
            created: '',
            driver: 'sample@gmail.com',
            commander: 'commander_name',
            vehicle: '1235MID',
            vehicle_type: 'MSS',
            date: '2019-08-12',
            start_time: '15:00',
            end_time: '18:24',
            start_location: 'JC2',
            end_location: 'AMK',
            start_odometer: 200000,
            end_odometer: 200037,
            status: 'pending',
            fuel_level: 2,
            comments: 'AOC',
            company: 'C',
            fleet: 'C',
            incamp: true
          }];
          var user = {
            created: '',
            name: "Sample User",
            fleet: "Sample Fleet",
            email: "sample@gmail.com",
            is_driver: true,
            company: 'C'
          };
          return {
            user: user,
            drive_history: drive_history,
            snapshot_wait: 1,
            stats: this.summarize(drive_history)
          };
        }
      }]);

      return DatabaseService;
    }();

    DatabaseService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], DatabaseService);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"],
      children: [{
        path: 'about',
        loadChildren: '../pages/about/about.module#AboutPageModule'
      }, {
        path: 'profile',
        loadChildren: '../pages/profile/profile.module#ProfilePageModule'
      }, {
        path: 'summary',
        loadChildren: '../pages/summary/summary.module#SummaryPageModule'
      }, {
        path: 'history',
        loadChildren: '../pages/history/history.module#HistoryPageModule'
      }, {
        path: 'CmdHistory',
        loadChildren: '../pages/CmdHistory/CmdHistory.module#CmdHistoryPageModule'
      }, {
        path: 'commander',
        loadChildren: '../pages/commander/commander.module#CommanderPageModule'
      }, {
        path: 'CmdMap',
        loadChildren: '../pages/CmdMap/CmdMap.module#CmdMapPageModule'
      }, {
        path: 'map',
        loadChildren: '../pages/map/map.module#MapPageModule'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/summary',
      pathMatch: 'full'
    }];

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab {\n  bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2phdmUvRGVza3RvcC9FbmdpbmVlcnNMb2dib29rMi9zcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYntcbi8vICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgYm90dG9tOiAtMjF2aDtcbiAgYm90dG9tOiAyNXB4O1xufSIsImlvbi1mYWIge1xuICBib3R0b206IDI1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
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
    /*! ../services/database.service */
    "./src/app/services/database.service.ts");

    var TabsPage =
    /*#__PURE__*/
    function () {
      function TabsPage(database) {
        _classCallCheck(this, TabsPage);

        this.database = database;
      }

      _createClass(TabsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "gettime",
        value: function gettime() {
          var cd = new Date(); // for now

          var nmtmoringstart = new Date();
          nmtmoringstart.setHours(7, 30, 0);
          var nmtmoringend = new Date();
          nmtmoringend.setHours(9, 30, 0);
          var nmtnightstart = new Date();
          nmtnightstart.setHours(17, 30, 0);
          var nmtnightend = new Date();
          nmtnightend.setHours(19, 30, 0);

          if (cd >= nmtmoringstart && cd < nmtmoringend) {
            return false;
          }

          if (cd >= nmtnightstart && cd < nmtnightend) {
            return false;
          }

          return true;
        }
      }]);

      return TabsPage;
    }();

    TabsPage.ctorParameters = function () {
      return [{
        type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
      }];
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])], TabsPage);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyCZ71jPdOF6e02nQmca2WrbJw_QeXZBh5Q",
        authDomain: "engineerslogbook-v1.firebaseapp.com",
        databaseURL: "https://engineerslogbook-v1.firebaseio.com",
        projectId: "engineerslogbook-v1",
        storageBucket: "engineerslogbook-v1.appspot.com",
        messagingSenderId: "778276158903"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/mojave/Desktop/EngineersLogbook2/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map