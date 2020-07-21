function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mtrac-mtrac-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mtrac/mtrac.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mtrac/mtrac.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMtracMtracPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <div>\n      <h1 style=\"margin-left: 10px;\"><strong>MT RISK ASSESSMENT CHECKLIST (MT-RAC)</strong></h1>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <h5 style=\"text-align:right; margin-right: 10px;\"><strong><u>SAF 1200</u></strong></h5>\n    <h5 style=\"text-align:center;\"><strong><u>MT RISK ASSESSMENT CHECKLIST (MT-RAC)</u></strong></h5>\n    <h6 style=\"margin-left: 10px;\"><strong><u>ABOUT THE MT RAC FORM</u></strong><br></h6>\n    <h6 style=\"margin-left: 10px;\">It enables the drivers / riders to assess the risk level involved in their driving / riding detail. It allows the drivers / riders to make an informed decision as to whether to carry on with the detail.</h6>\n  </div>\n    <ion-item lines=\"none\" no-padding>\n    <ion-grid style=\"margin-left: 5px;\">\n      <ion-row class=\"cell-class\">\n        <ion-col size=\"2\">\n          <div>\n            <h6 style=\"text-align:center\"><strong>FACTORS</strong></h6>\n          </div>\n        </ion-col>\n        <ion-col class=\"cell-class\" style=\"margin-left : -1px\">\n          <div>\n            <h6 style=\"text-align:center\"><strong>MEANING</strong></h6>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center class=\"cell-class\">\n        <ion-col size=\"2\">\n          <div>\n            <h6 style=\"text-align:center\">MAN</h6>\n          </div>\n        </ion-col>\n        <ion-col class=\"cell-class\" style=\"margin-left : -1px\">\n          <div>\n            <h6 style=\"text-align:left\">This refers to the driver / rider and in particular his driving / riding experience and accident record.<br>How well he has rested before the detail is also important.</h6>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center class=\"cell-class\">\n        <ion-col size=\"2\">\n          <div>\n            <h6 style=\"text-align:center\">MACHINE</h6>\n          </div>\n        </ion-col>\n        <ion-col class=\"cell-class\" style=\"margin-left : -1px\">\n          <div>\n            <h6 style=\"text-align:left\">This refers to the condition of the vehicle / motorcycle, which they are handling on the road.<br>A faulty vehicle / motorcycle will heighten the risk level.</h6>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center class=\"cell-class\">\n        <ion-col size=\"2\">\n          <div>\n            <h6 style=\"text-align:center\">MISSION</h6>\n          </div>\n        </ion-col>\n        <ion-col class=\"cell-class\" style=\"margin-left : -1px\">\n          <div>\n            <h6 style=\"text-align:left\">This type of transport detail will have an effect on the risk level.<br>An administrative detail will have less risk than a training detail, which requires them to drive / ride in difficult cross-country terrain.</h6>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center class=\"cell-class\">\n        <ion-col size=\"2\">\n          <div>\n            <h6 style=\"text-align:center\">MEDIUM</h6>\n          </div>\n        </ion-col>\n        <ion-col class=\"cell-class\" style=\"margin-left : -1px\">\n          <div>\n            <h6 style=\"text-align:left\">This refers mainly to the road conditions under which the driver / rider operates.<br>Their prevailing conditions will have a direct effect on the driver / rider.</h6>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center class=\"cell-class\">\n        <ion-col size=\"2\">\n          <div>\n            <h6 style=\"text-align:center\">MANAGEMENT</h6>\n          </div>\n        </ion-col>\n        <ion-col class=\"cell-class\" style=\"margin-left : -1px\">\n          <div>\n            <h6 style=\"text-align:left\">Close supervision of the driver / rider will contribute to risk minimisation.<br>Assignment of Vehicle Commander of a high rank will have a psychological effect on the driver to do better.</h6>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item lines=\"none\" no-padding>\n    <ion-grid style=\"margin-left: 5px;\">\n      <ion-row>\n        <ion-col class=\"cell-class\">\n          <div>\n            <h6 style=\"text-align:center\"><strong>RISK LEVEL</strong></h6>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center class=\"cell-class\">\n        <ion-col>\n          <div>\n            <h6 style=\"text-align:center\"><strong>LOW RISK</strong></h6>\n          </div>\n        </ion-col>\n        <ion-col class=\"cell-class\" style=\"margin-left : -1px;\">\n          <div>\n            <h6 style=\"text-align:center\"><strong>MEDIUM RISK</strong></h6>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <h6 style=\"text-align:center\"><strong>HIGH RISK</strong></h6>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center class=\"cell-class\">\n        <ion-col>\n          <div>\n            <h6 style=\"text-align:center\">Normal operational risk.</h6>\n          </div>\n        </ion-col>\n        <ion-col class=\"cell-class\" style=\"margin-left : -1px;\">\n          <div>\n            <h6 style=\"text-align:center\">Above normal operational risk level.<br>Increase supervision, briefing and exercise caution, Mission may be suspended till conditions are better.</h6>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <h6 style=\"text-align:center\">Do not proceed with mission unless approved by higher authorities.<br><strong>All high risk factors must be mitigated.</strong></h6>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item lines=\"none\" no-padding>\n    <ion-grid style=\"margin-left: 5px;\">\n      <ion-row class=\"cell-class\">\n        <ion-col>\n          <div>\n            <h6 style=\"text-align:center\"><strong>List of Common Vehicle Defects</strong></h6>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"cell-class\">\n        <ion-col class=\"cell-class\">\n          <div>\n            <h6 style=\"text-align:center\"><strong>Major Defects</strong></h6>\n          </div>\n        </ion-col>\n        <ion-col class=\"cell-class\">\n          <div>\n            <h6 style=\"text-align:center\"><strong>Minor Defects</strong></h6>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"cell-class\">\n        <ion-col class=\"cell-class\">\n          <div>\n            <h6 style=\"text-align:left\">- Emitting black or white smoke<br>\n              - Exhaust silencer leaking<br>\n              - Speedometer not working<br>\n              - Horn not working<br>\n              - Signal Indicator not working<br>\n              - Brake light not working<br>\n              - Headlights not working<br>\n              - Tail lights not working<br>\n              - No Mirrors / <strong>Loose mirror</strong> / <strong>Blurred mirror</strong><br>\n              - Windscreen shattered / crack<br>\n              - Wiper not working<br>\n              - Unusual noise or vibration from engine<br>\n              - Brakes not effective<br>\n              - Engine oil level below the minimum level, exceed maximum level<br>\n              - Bald tyre<br>\n              - Door not closing properly<br>\n              - Radiator water leaking<br>\n              - Speed Warning Device not working<br>\n              - Unserviceable Front/Rear (Safety Belt)<br>\n              - Unserviceable Safety strap<br>\n              - Pintle securing pin missing (Not fit for towing)</h6>\n          </div>\n        </ion-col>\n        <ion-col class=\"cell-class\">\n          <div>\n            <h6 style=\"text-align:left\">- Weak batteries<br>\n              - Battery water too low<br>\n              - Temperature gauge and other panel gauges not working<br>\n              - Incorrect tyre pressure<br>\n              - Vehicle body dented<br>\n              - Superstructure damaged or broken<br>\n              - Canopy torn<br>\n              - Tailboard strap missing<br>\n              - No self-centering (Steering system)<br>\n              - Steering free-play too much<br>\n              - Fan belt worn or slacked<br>\n              - Weak suspension coil spring<br>\n              - Towing pin missing (Not fit for towing)<br>\n              - Pintle securing pin missing (Not fit for towing) to major fault</h6>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <div>\n    <h6 style=\"margin-left: 10px;\"><strong><u>Briefing and ensuring notes for TO/ DV/ LOA Drivers</u></strong><br></h6>\n\n    <h6 style=\"margin-left: 10px;\"><ol type=\"a\">\n      <li>Check and ensure seating capacity, if exceeds (Please do not proceed on with the detail)</li>\n      <li>Brief troops to engage seat belt throughout the journey</li>\n      <li>Assist the troops in engaging the safety straps. Safety straps are to be engaged throughout the journey.</li>\n      <li>Brief \"no smoking / sleeping on vehicle\" throughout the journey</li>\n      <li>Nobody is to move while the vehicle is on the move</li>\n      <li>No sitting on the tailboard at all times</li>\n    </ol></h6>\n\n    <h6 style=\"margin-left: 10px;\"><strong>* For any matters please seek vehicle commander's assistance</strong><br></h6>\n  </div>\n  <div>\n    <h5 style=\"text-align:right; margin-right: 10px;\"><strong><u>SAF 1200</u></strong></h5>\n    <h5 style=\"text-align:center;\"><strong><u>MT RISK ASSESSMENT CHECKLIST (MT-RAC)</u></strong></h5>\n    <ion-grid style=\"margin-left: 5px;\"><ion-row class=\"cell-class\">\n      <h6 style=\"margin-left: 10px;\">The MT-RAC form is an assessment of the 5-M Risk Factors and identified high risk factors are to be mitigated. All SAF Drivers are to fill up the MT-RAC form, and completed forms are to be kept by the MT Node for 3 working days or in the event of an accident, until the investigation is completed. A MT-RAC form is to be completed for every transport detail, or when there is a change in the conditions or nature of detail. For exercises/training, a MT-RAC is prepared at the start of each exercise, and updated  if there is a change in conditions.</h6>\n    </ion-row></ion-grid></div>\n\n  <form class=\"form\" [formGroup]=\"mtracForm\" (submit)=\"addmtrac(mtracForm.value)\">\n  <ion-card><ion-card-content>\n    <ion-item lines=\"none\">\n      <ion-label  position=\"floating\">driving area</ion-label>\n      <ion-select [ngStyle]=\"{'color': 'black'}\" formControlName=\"incamp\" interface=\"popover\">\n        <ion-select-option [ngStyle]=\"{'color': 'black'}\" text-wrap value=true>In Camp</ion-select-option>\n        <ion-select-option [ngStyle]=\"{'color': 'black'}\" text-wrap value=false *ngIf=\"gettime()\">Out of Camp</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label  position=\"floating\" >From</ion-label>\n      <ion-input [ngStyle]=\"{'color': 'black'}\" type=\"text\" onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"startLocation\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label  position=\"floating\">To</ion-label>\n      <ion-input [ngStyle]=\"{'color': 'black'}\" type=\"text\" onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"endLocation\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-col><ion-item>\n        <ion-label  position=\"floating\" >Vehicle Number</ion-label>\n        <ion-input [ngStyle]=\"{'color': 'black'}\" onkeyup=\"this.value = this.value.toUpperCase()\" formControlName=\"vehicleNumber\"></ion-input>\n      </ion-item>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validationMessages.vehicleNumber\">\n          <div class=\"error-message\" *ngIf=\"mtracForm.get('vehicleNumber').hasError(validation.type) && (mtracForm.get('vehicleNumber').dirty || mtracForm.get('vehicleNumber').touched)\">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n      </ion-col></ion-item>\n  </ion-card-content></ion-card>\n\n  <ion-card>\n    <ion-card-title text-center>MAN FACTORS</ion-card-title>\n    <ion-card-content>\n\n      <ion-col><ion-item>\n        <ion-label ><strong>Driving Experience</strong></ion-label>\n        <ion-select [ngStyle]=\"{'color': 'black'}\"  formControlName=\"licenseType\" interface=\"popover\" text-left>\n          <ion-select-option text-wrap value=\"L\">CAT A, B</ion-select-option>\n          <ion-select-option text-wrap value=\"M\">CAT C</ion-select-option>\n          <ion-select-option text-wrap value=\"H\">CAT D</ion-select-option>\n          <ion-select-option text-wrap value=\"N\">Have never been trained and familiarized in the vehicle that you will be driving</ion-select-option>\n        </ion-select></ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessages.licenseType\">\n            <div class=\"error-message\"\n                 *ngIf=\"mtracForm.get('licenseType').hasError(validation.type) && (mtracForm.get('licenseType').dirty || mtracForm.get('licenseType').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-col>\n      <ion-col><ion-item>\n        <ion-label ><strong>Vehicle Type</strong></ion-label>\n        <ion-select [ngStyle]=\"{'color': 'black'}\"  formControlName=\"vehicleType\" interface=\"popover\" text-wrap>\n          <ion-select-option text-wrap value=\"L\">Same as last detail / Different (GP Car/Pickup)</ion-select-option>\n          <ion-select-option text-wrap value=\"M\">Different (MUV/OUV/JEEP)</ion-select-option>\n          <ion-select-option text-wrap value=\"H\">Different (Coach/3Ton/5Ton/7Ton)</ion-select-option>\n        </ion-select></ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessages.vehicleType\">\n            <div class=\"error-message\"\n                 *ngIf=\"mtracForm.get('vehicleType').hasError(validation.type) && (mtracForm.get('vehicleType').dirty || mtracForm.get('vehicleType').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-col>\n      <ion-col><ion-item>\n        <ion-label ><strong>Fatigue/Length of Rest</strong></ion-label>\n        <ion-select [ngStyle]=\"{'color': 'black'}\" formControlName=\"rest\" interface=\"popover\" text-wrap>\n          <ion-select-option text-wrap value=\"L\">More than 6 hours</ion-select-option>\n          <ion-select-option text-wrap value=\"M\">Less than 6 hours (Home/Camp)</ion-select-option>\n          <ion-select-option text-wrap value=\"H\">Less than 6 hours (Field)</ion-select-option>\n        </ion-select></ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessages.rest\">\n            <div class=\"error-message\"\n                 *ngIf=\"mtracForm.get('rest').hasError(validation.type) && (mtracForm.get('rest').dirty || mtracForm.get('rest').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-col>\n      <ion-col><ion-item>\n        <ion-label ><strong>My Health</strong></ion-label>\n        <ion-select [ngStyle]=\"{'color': 'black'}\" formControlName=\"health\" interface=\"popover\" text-wrap>\n          <ion-select-option text-wrap value=\"L\">Good</ion-select-option>\n          <ion-select-option text-wrap value=\"M\">Fair (Just recovered from illness < 1 day)</ion-select-option>\n          <ion-select-option text-wrap value=\"N\">Poor (Still ill or Attend C) / Still under medication that causes drowsiness</ion-select-option>\n        </ion-select></ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessages.health\">\n            <div class=\"error-message\"\n                 *ngIf=\"mtracForm.get('health').hasError(validation.type) && (mtracForm.get('health').dirty || mtracForm.get('health').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-col>\n    </ion-card-content></ion-card>\n\n  <ion-card>\n    <ion-card-title text-center>MEDIUM FACTORS</ion-card-title>\n    <ion-card-content>\n      <ion-col><ion-item>\n        <ion-label ><strong>Weather</strong></ion-label>\n        <ion-select [ngStyle]=\"{'color': 'black'}\" formControlName=\"weather\" interface=\"popover\" text-wrap>\n          <ion-select-option text-wrap value=\"L\">Dry</ion-select-option>\n          <ion-select-option text-wrap value=\"M\">Wet</ion-select-option>\n          <ion-select-option text-wrap value=\"H\">Heavy showers</ion-select-option>\n        </ion-select></ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessages.weather\">\n            <div class=\"error-message\"\n                 *ngIf=\"mtracForm.get('weather').hasError(validation.type) && (mtracForm.get('weather').dirty || mtracForm.get('weather').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-col>\n      <ion-col><ion-item>\n        <ion-label ><strong>Route Familiarity</strong></ion-label>\n        <ion-select [ngStyle]=\"{'color': 'black'}\" formControlName=\"route\" interface=\"popover\" text-wrap>\n          <ion-select-option text-wrap value=\"L\">Familiar</ion-select-option>\n          <ion-select-option text-wrap value=\"H\">Not Familiar</ion-select-option>\n        </ion-select></ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessages.route\">\n            <div class=\"error-message\"\n                 *ngIf=\"mtracForm.get('route').hasError(validation.type) && (mtracForm.get('route').dirty || mtracForm.get('route').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-col>\n    </ion-card-content></ion-card>\n\n  <ion-card>\n    <ion-card-title text-center>MISSION FACTORS</ion-card-title>\n    <ion-card-content>\n      <ion-col><ion-item>\n        <ion-label ><strong>Detail Type</strong></ion-label>\n        <ion-select [ngStyle]=\"{'color': 'black'}\" formControlName=\"detailType\" interface=\"popover\" text-wrap>\n          <ion-select-option text-wrap value=\"L\">Admin</ion-select-option>\n          <ion-select-option text-wrap value=\"M\">Training/Special mission oriented towing vehicle/gun</ion-select-option>\n          <ion-select-option text-wrap value=\"H\">Occasional towing trailer/vehicle/gun</ion-select-option>\n        </ion-select></ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessages.detailType\">\n            <div class=\"error-message\"\n                 *ngIf=\"mtracForm.get('detailType').hasError(validation.type) && (mtracForm.get('detailType').dirty || mtracForm.get('detailType').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-col>\n    </ion-card-content></ion-card>\n\n  <ion-card>\n    <ion-card-title text-center>MANAGEMENT FACTORS</ion-card-title>\n    <ion-card-content>\n      <ion-col><ion-item>\n        <ion-label ><strong>Without Vehicle Commander</strong></ion-label>\n        <ion-select [ngStyle]=\"{'color': 'black'}\" formControlName=\"vc\" interface=\"popover\" text-wrap>\n          <ion-select-option text-wrap value=\"L\">CAT A, B</ion-select-option>\n          <ion-select-option text-wrap value=\"M\">CAT C</ion-select-option>\n          <ion-select-option text-wrap value=\"N\">CAT D</ion-select-option>\n        </ion-select></ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessages.vc\">\n            <div class=\"error-message\"\n                 *ngIf=\"mtracForm.get('vc').hasError(validation.type) && (mtracForm.get('vc').dirty || mtracForm.get('vc').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-col>\n    </ion-card-content></ion-card>\n\n  <ion-card>\n    <ion-card-title text-center>MACHINE FACTORS</ion-card-title>\n    <ion-card-content>\n      <ion-col><ion-item>\n        <ion-label ><strong>Vehicle Serviceability</strong></ion-label>\n        <ion-select [ngStyle]=\"{'color': 'black'}\" formControlName=\"vehicleServiceability\" interface=\"popover\" text-wrap>\n          <ion-select-option text-wrap value=\"L\">No fault</ion-select-option>\n          <ion-select-option text-wrap value=\"H\">Minor fault</ion-select-option>\n          <ion-select-option text-wrap value=\"N\">Major fault</ion-select-option>\n        </ion-select></ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validationMessages.vehicleServiceability\">\n            <div class=\"error-message\"\n                 *ngIf=\"mtracForm.get('vehicleServiceability').hasError(validation.type) && (mtracForm.get('vehicleServiceability').dirty || mtracForm.get('vehicleServiceability').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </ion-col>\n    </ion-card-content></ion-card>\n\n    <ion-card>\n      <ion-card-title text-center>OVERALL RISK LEVEL</ion-card-title>\n      <ion-card-content>\n        <ion-item *ngIf=\"!getoverallrisk()\" color=\"danger\" text-center>\n          <ion-label >\n            NO MOVE\n          </ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"getoverallrisk()=='HIGH'\" color=\"danger\" text-center>\n          <ion-label >\n            {{getoverallrisk()}}\n          </ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"getoverallrisk()=='MEDIUM'\" color=\"warning\" text-center>\n          <ion-label >\n            {{getoverallrisk()}}\n          </ion-label>\n        </ion-item>\n        <ion-item  *ngIf=\"getoverallrisk()=='LOW'\" color=\"success\" text-center>\n          <ion-label>\n            {{getoverallrisk()}}\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <div>\n      <h6 style=\"text-align:center;\"><strong>SAF DRIVERS<sup>1</sup> AND VEHICLE COMMANDERS ARE RESPONSIBLE FOR THE TROOPS AND CARGO TRANSPORTED. THEY ARE TO PERFORM THE FOLLOWING ACTIONS AND BRIEFING. (PLEASE TICK ACCORDINGLY ON THE CHECKLIST)</strong></h6>\n    </div>\n\n    <ion-item lines=\"none\" no-padding style=\"ion-item-background: white\">\n      <ion-grid style=\"margin-left: 5px;\">\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\"><strong>Description</strong></h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"cell-class\" style=\"margin-left : -1px; text-align:center;\">\n            <div>\n              <h6 style=\"text-align:center\"><strong>Driver</strong></h6>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <h6 style=\"text-align:center\"><strong>Veh Com</strong></h6>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Ensure that the driver is licensed to operate the vehicle</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"invalid-class\" style=\"margin-left : -1px;\">\n            <div class=\"invalid-div\">\n              <h5 style=\"text-align:center\"><strong>-</strong></h5>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"license\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Ensure that driver does not exceed the vehicle or road speed limit</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"invalid-class\" style=\"margin-left : -1px;\">\n            <div class=\"invalid-div\">\n              <h5 style=\"text-align:center\"><strong>-</strong></h5>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"speedlimit\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Warn the driver of any obstacles, hazards or dangers</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"invalid-class\" style=\"margin-left : -1px;\">\n            <div class=\"invalid-div\">\n              <h5 style=\"text-align:center\"><strong>-</strong></h5>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"danger\" style=\"background: transparent;\">></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Warn the driver during reversing or movement towards congested or narrow spaces</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"invalid-class\" style=\"margin-left : -1px;\">\n            <div class=\"invalid-div\">\n              <h5 style=\"text-align:center\"><strong>-</strong></h5>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"reverse\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Brief and ensure troops secure their seat belts before movement of vehicle</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"cell-class\" style=\"margin-left : -1px;\">\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"seatbeltdriver\"></ion-checkbox>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"seatbeltcommander\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Check and ensure seating or loading capacity of the vehicle is not exceeded</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"cell-class\" style=\"margin-left : -1px;\">\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"seatingdriver\"></ion-checkbox>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"seatingcommander\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Check and ensure safety straps in place and tailboard of vehicle is closed</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"cell-class\" style=\"margin-left : -1px;\">\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"safetystrapdriver\"></ion-checkbox>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"safetystrapcommander\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Brief troops on no smoking/sleeping on the vehicle before movement of vehicle</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"cell-class\" style=\"margin-left : -1px;\">\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"smokingdriver\"></ion-checkbox>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"smokingcommander\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Secure load before movement</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"cell-class\" style=\"margin-left : -1px;\">\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"loaddriver\"></ion-checkbox>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"loadcommander\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Brief and ensure troops secure their seat belts before movement of vehicle</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"cell-class\" style=\"margin-left : -1px;\">\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"seatbelttroopsdriver\"></ion-checkbox>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"seatbelttroopscommander\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">If vehicle involved in an accident to contact parent unit, POLICE and SAF PROVOST UNIT to inform about accident</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"cell-class\" style=\"margin-left : -1px;\">\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"accidentdriver\"></ion-checkbox>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"accidentcommander\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Ensure that MT RAC form is completed and duly counter-signed</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"cell-class\" style=\"margin-left : -1px;\">\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"mtraccompletedriver\"></ion-checkbox>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"mtraccompletecommander\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cell-class\">\n          <ion-col size=\"8\">\n            <div>\n              <h6 style=\"text-align:left\">Ensure that driver has completed the checks listed above</h6>\n            </div>\n          </ion-col>\n          <ion-col class=\"invalid-class\" style=\"margin-left : -1px;\">\n            <div class=\"invalid-div\">\n              <h5 style=\"text-align:center\"><strong>-</strong></h5>\n            </div>\n          </ion-col>\n          <ion-col align-items-center>\n            <div class=\"checkbox-div\" align=\"center\">\n              <ion-checkbox name=\"checklistcomplete\"></ion-checkbox>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n<!--\n\n    <div class=\"btn-wrapper\">\n      <div *ngIf = showSubmit()>\n        <ion-button class=\"submit-btn\" type=\"submit\" routerLink=\"/add-drive\" [disabled]=\"!mtracForm.valid\" style=\"padding-right:10px\">Submit\n        </ion-button>\n        <ion-button (click)='onCancel()'>Cancel</ion-button>\n      </div>\n      <div *ngIf = !showSubmit()>\n        <ion-button expand=\"block\" (click)='onCancel()'>OK</ion-button>\n      </div>\n    </div>\n\n-->\n  </form>\n  <ion-item>\n    <ion-label text-wrap>I acknowledge that I, {{this.database.current.user.name}}, have read through, understood, and checked through the MT Risk Assessment (MT-RAC) Checklist on {{getcdt()}}.</ion-label>\n    <ion-checkbox slot=\"start\" name=\"mtrac\" (ionChange)=\"setcheckboxstatus()\" style=\"background: transparent;\">></ion-checkbox>\n  </ion-item>\n  <div class=\"btn-wrapper\">\n    <div *ngIf=getcheckboxstatus()>\n      <ion-button style=\"padding-right:10px\" routerLink=\"/add-drive\" [disabled]=\"!mtracForm.valid || getoverallrisk()==false\">Continue</ion-button>\n      <ion-button (click)='onCancel()' routerLink=\"/tabs/summary\" >Cancel</ion-button>\n    </div>\n    <div *ngIf = !getcheckboxstatus()>\n      <ion-button expand=\"block\" (click)='onCancel()' routerLink=\"/tabs/summary\" >Cancel</ion-button>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/mtrac/mtrac.module.ts":
  /*!***************************************!*\
    !*** ./src/app/mtrac/mtrac.module.ts ***!
    \***************************************/

  /*! exports provided: mtracPageModule */

  /***/
  function srcAppMtracMtracModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mtracPageModule", function () {
      return mtracPageModule;
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


    var _mtrac_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mtrac.page */
    "./src/app/mtrac/mtrac.page.ts");

    var routes = [{
      path: '',
      component: _mtrac_page__WEBPACK_IMPORTED_MODULE_6__["mtracPage"]
    }];

    var mtracPageModule = function mtracPageModule() {
      _classCallCheck(this, mtracPageModule);
    };

    mtracPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_mtrac_page__WEBPACK_IMPORTED_MODULE_6__["mtracPage"]]
    })], mtracPageModule);
    /***/
  },

  /***/
  "./src/app/mtrac/mtrac.page.scss":
  /*!***************************************!*\
    !*** ./src/app/mtrac/mtrac.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppMtracMtracPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  --ion-text-color: black;\n}\n\nion-toolbar {\n  --background:#FFFF66;\n}\n\nion-content {\n  --ion-background-color:#FFFF66;\n  --color:black;\n  --ion-text-color: black;\n}\n\nion-card {\n  --background:#FFFF66;\n}\n\nion-item {\n  --background:#FFFF66;\n  height: auto;\n  min-height: auto;\n}\n\nion-grid {\n  --background:#FFFF66;\n}\n\nion-input {\n  text-transform: uppercase;\n  color: primary !important;\n}\n\nion-card-title {\n  --color:black;\n}\n\nion-select {\n  --placeholder-color:black;\n  --color:black;\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  min-width: auto;\n  max-width: 70%;\n  height: auto;\n  min-height: auto;\n  max-height: 100%;\n}\n\nlabel {\n  color: black;\n}\n\n.btn-wrapper {\n  text-align: center;\n}\n\n.input[type=number] {\n  -moz-appearance: textfield;\n}\n\n.input[type=number]::-webkit-inner-spin-button {\n  display: none;\n}\n\n.toolbar-title {\n  text-overflow: inherit;\n  white-space: normal;\n  text-align: left;\n  font-size: 1.3em;\n}\n\n.cell-class {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n}\n\n.invalid-class {\n  border-color: black;\n  border-width: 0.01em;\n  border-style: solid;\n  background: #c9c966;\n}\n\n.row {\n  height: 100%;\n}\n\n.col {\n  height: 100%;\n  border: solid black;\n}\n\n.sc-ion-popover-md-h {\n  min-width: auto;\n  min-height: auto;\n  max-width: 100%;\n  height: 50%;\n}\n\n.popover-content.sc-ion-popover-md {\n  position: inherit;\n  min-width: auto;\n  max-width: 100%;\n  height: auto;\n  min-height: auto;\n  max-height: 100%;\n}\n\ndiv {\n  color: black;\n}\n\n.invalid-div {\n  color: black;\n  background-color: #c9c966;\n}\n\n.checkbox-div {\n  background-color: #FFFF66;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb2phdmUvRGVza3RvcC9FbmdpbmVlcnNMb2dib29rMi9zcmMvYXBwL210cmFjL210cmFjLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXRyYWMvbXRyYWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUJBQUE7QUNBSjs7QURHQTtFQUNJLG9CQUFBO0FDQUo7O0FER0E7RUFDRSw4QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FESUE7RUFFRSwwQkFBQTtBQ0ZGOztBRENFO0VBQThCLGFBQUE7QUNFaEM7O0FERUE7RUFDRyxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NIOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBRUUsWUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tdHJhYy9tdHJhYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbi8vICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7ICAvLyBkaXNhYmxlZCBpdGVtcyB3aWxsIG5vdCBiZSBncmV5IG91dC5cbiAgICAtLWlvbi10ZXh0LWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiNGRkZGNjY7XG59XG5cbmlvbi1jb250ZW50e1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNGRkZGNjY7XG4gIC0tY29sb3I6YmxhY2s7XG4gIC0taW9uLXRleHQtY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY2FyZHtcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGNjY7XG59XG5cbmlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6I0ZGRkY2NjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuXG5pb24tZ3JpZHtcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGNjY7XG59XG5cbmlvbi1pbnB1dHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHByaW1hcnkhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC10aXRsZXtcbiAgLS1jb2xvcjpibGFjaztcbn1cblxuaW9uLXNlbGVjdHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjpibGFjaztcbiAgLS1jb2xvcjpibGFjaztcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG5sYWJlbHtcbiAgY29sb3I6YmxhY2s7XG59XG5cbi5idG4td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLy8gZG8gbm90IHNob3cgc3Bpbm5lciBmb3IgbnVtYmVyIGlucHV0c1xuLmlucHV0W3R5cGU9bnVtYmVyXSB7ICBcbiAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbnsgZGlzcGxheTogbm9uZTsgfVxuICAtbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkO1xufVxuXG4udG9vbGJhci10aXRsZSB7XG4gICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICBmb250LXNpemU6MS4zZW07XG59XG5cbi5jZWxsLWNsYXNzIHtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAuMDFlbTtcbiAgYm9yZGVyLXN0eWxlOnNvbGlkO1xufVxuXG4uaW52YWxpZC1jbGFzcyB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogLjAxZW07XG4gIGJvcmRlci1zdHlsZTpzb2xpZDtcbiAgYmFja2dyb3VuZDojYzljOTY2O1xufVxuXG4ucm93IHtcbiAgLy8gRm9yY2UgZ3JpZCB0byBmaWxsIGhlaWdodCBvZiBjb250ZW50IGFzIHRoaXMgaXMgbm90IHNldCBieSBkZWZhdWx0XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xufVxuXG4uc2MtaW9uLXBvcG92ZXItbWQtaCB7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xufVxuXG4ucG9wb3Zlci1jb250ZW50LnNjLWlvbi1wb3BvdmVyLW1kIHtcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbmRpdntcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5pbnZhbGlkLWRpdntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5Yzk2Njtcbn1cblxuLmNoZWNrYm94LWRpdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjY2O1xufSIsIioge1xuICAtLWlvbi10ZXh0LWNvbG9yOiBibGFjaztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6I0ZGRkY2Njtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNGRkZGNjY7XG4gIC0tY29sb3I6YmxhY2s7XG4gIC0taW9uLXRleHQtY29sb3I6IGJsYWNrO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDojRkZGRjY2O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDojRkZGRjY2O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1iYWNrZ3JvdW5kOiNGRkZGNjY7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBwcmltYXJ5ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgLS1jb2xvcjpibGFjaztcbn1cblxuaW9uLXNlbGVjdCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6YmxhY2s7XG4gIC0tY29sb3I6YmxhY2s7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxubGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5idG4td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cblxuLmNlbGwtY2xhc3Mge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDAuMDFlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmludmFsaWQtY2xhc3Mge1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDAuMDFlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZDogI2M5Yzk2Njtcbn1cblxuLnJvdyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcbn1cblxuLnNjLWlvbi1wb3BvdmVyLW1kLWgge1xuICBtaW4td2lkdGg6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5wb3BvdmVyLWNvbnRlbnQuc2MtaW9uLXBvcG92ZXItbWQge1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuZGl2IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaW52YWxpZC1kaXYge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWM5NjY7XG59XG5cbi5jaGVja2JveC1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjY2O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mtrac/mtrac.page.ts":
  /*!*************************************!*\
    !*** ./src/app/mtrac/mtrac.page.ts ***!
    \*************************************/

  /*! exports provided: mtracPage */

  /***/
  function srcAppMtracMtracPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mtracPage", function () {
      return mtracPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/database.service */
    "./src/app/services/database.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var mtracPage =
    /*#__PURE__*/
    function () {
      function mtracPage(navCtrl, formBuilder, toastController, database, route) {
        _classCallCheck(this, mtracPage);

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
          vehicleNumber: [{
            type: 'required',
            message: 'Vehicle Number is required.'
          }, {
            type: 'minlength',
            message: 'Vehicle number must be at least 5 characters long.'
          }],
          licenseType: [{
            type: 'required',
            message: 'choose license type'
          }],
          rest: [{
            type: 'required',
            message: 'choose rest'
          }],
          health: [{
            type: 'required',
            message: 'choose health'
          }],
          weather: [{
            type: 'required',
            message: 'choose weather'
          }],
          route: [{
            type: 'required',
            message: 'choose route'
          }],
          detailType: [{
            type: 'required',
            message: 'choose detail type'
          }],
          vc: [{
            type: 'required',
            message: 'choose vc'
          }],
          vehicleServiceability: [{
            type: 'required',
            message: 'choose vehicle serviceability'
          }],
          startLocation: [{
            type: 'required',
            message: 'enter start location'
          }],
          endLocation: [{
            type: 'required',
            message: 'enter end location'
          }],
          incamp: [{
            type: 'required',
            message: 'select drive area'
          }]
        };
      }

      _createClass(mtracPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.mtracForm = this.formBuilder.group({
            vehicleNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            licenseType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicleType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            rest: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            health: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            weather: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            route: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            detailType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            vehicleServiceability: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            incamp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            startLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            endLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
          });
        }
      }, {
        key: "setcheckboxstatus",
        value: function setcheckboxstatus() {
          this.checkboxstatus = !this.checkboxstatus;
        }
      }, {
        key: "getcheckboxstatus",
        value: function getcheckboxstatus() {
          return this.checkboxstatus;
        }
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
      }, {
        key: "getcdt",
        value: function getcdt() {
          var cd = new Date(); // for now

          var cdt = cd.getDate() + "/" + (cd.getMonth() + 1) + "/" + cd.getFullYear() + " @ " + this.timenow();
          return cdt;
        }
      }, {
        key: "timenow",
        value: function timenow() {
          var ct = new Date(); // for now

          var r = "";

          if (ct.getHours() < 10) {
            r += 0;
            r += ct.getHours();
          } else {
            r += ct.getHours();
          }

          r += ":";

          if (ct.getMinutes() < 10) {
            r += 0;
            r += ct.getMinutes();
          } else {
            r += ct.getMinutes();
          }

          return r;
        }
      }, {
        key: "getapprovedvtypes",
        value: function getapprovedvtypes() {
          var vtypes = _services_database_service__WEBPACK_IMPORTED_MODULE_4__["VehicleTypes"];

          if (this.database.current.user.mss_certified != true) {
            vtypes = vtypes.filter(function (vtype) {
              return vtype != 'MSS';
            });
          }

          if (this.database.current.user.flb_certified != true) {
            vtypes = vtypes.filter(function (vtype) {
              return vtype != 'FLB';
            });
          }

          if (this.database.current.user.belrex_certified != true) {
            vtypes = vtypes.filter(function (vtype) {
              return vtype != 'BELREX';
            });
            return vtypes;
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.navCtrl.pop();
        }
      }, {
        key: "showSubmit",
        value: function showSubmit() {
          return true;
        }
      }, {
        key: "showToast",
        value: function showToast(msg) {
          this.toastController.create({
            message: msg,
            duration: 2000,
            //  showCloseButton: true,
            //  closeButtonText: 'OK',
            position: 'bottom'
          }).then(function (obj) {
            obj.present();
          });
        }
      }, {
        key: "getoverallrisk",
        value: function getoverallrisk() {
          var licenseType = this.mtracForm.value.licenseType;
          var vehicleType = this.mtracForm.value.vehicleType;
          var rest = this.mtracForm.value.rest;
          var health = this.mtracForm.value.health;
          var weather = this.mtracForm.value.weather;
          var route = this.mtracForm.value.route;
          var detailType = this.mtracForm.value.detailType;
          var vc = this.mtracForm.value.vc;
          var vehicleServiceability = this.mtracForm.value.vehicleServiceability;

          if (licenseType == "N" || health == "N" || vc == "N" || vehicleServiceability == "N" || !this.mtracForm.valid) {
            return false;
          } else if (licenseType == "H" || vehicleType == "H" || rest == "H" || health == "H" || weather == "H" || route == "H" || detailType == "H" || vc == "H" || vehicleServiceability == "H") {
            return "HIGH";
          } else if (licenseType == "M" || vehicleType == "M" || rest == "M" || health == "M" || weather == "M" || route == "M" || detailType == "M" || vc == "M" || vehicleServiceability == "M") {
            return "MEDIUM";
          } else if (licenseType == "L" || vehicleType == "L" || rest == "L" || health == "L" || weather == "L" || route == "L" || detailType == "L" || vc == "L" || vehicleServiceability == "L") {
            return "LOW";
          }
        }
      }]);

      return mtracPage;
    }();

    mtracPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    mtracPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mtrac',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mtrac.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mtrac/mtrac.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mtrac.page.scss */
      "./src/app/mtrac/mtrac.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], mtracPage);
    /***/
  }
}]);
//# sourceMappingURL=mtrac-mtrac-module-es5.js.map