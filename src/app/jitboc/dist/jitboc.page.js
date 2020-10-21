"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.jitbocPage = void 0;
var core_1 = require("@angular/core");
var jitbocPage = /** @class */ (function () {
    function jitbocPage(navCtrl, formBuilder, toastController, database, route) {
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
                { type: 'required', message: 'Date is required.'
                }
            ],
            time: [
                { type: 'required', message: 'Enter current time'
                },
            ]
        };
        this.checklist = [
            { listID: 1, name: "Check Engine Oil in between minimum and maximum level.", ischecked: false },
            { listID: 2, name: "Check Brake Fluid is between minimum minimum and maximum level. (if applicable)", ischecked: false },
            { listID: 3, name: "Check Clutch Fluid is between minimum minimum and maximum level. (if applicable)", ischecked: false },
            { listID: 4, name: "Check Power Steering Oil is between minimum minimum and maximum level.", ischecked: false },
            { listID: 5, name: "Check Radiator Coolant is filled to the required level.", ischecked: false },
            { listID: 6, name: "Check all wheel nuts are intact & tyre side wall for physical damage.", ischecked: false },
            { listID: 7, name: "Check Canopy Ropes are tightened. (if applicable)", ischecked: false },
            { listID: 8, name: "Check Battery terminal / mounting bracket secured & terminal insulators are intact.", ischecked: false },
            { listID: 9, name: "Check Front & Rear Seat Belts are able to buckle & lock.", ischecked: false },
            { listID: 10, name: "Check Headlight / Signal Height / Tail Height / Brake Light / Horn / Wipers are working.", ischecked: false },
            { listID: 11, name: "Check instrument panel warning lights and buzzer are working.", ischecked: false },
            { listID: 12, name: "Check SWD / IVD are working.", ischecked: false },
            { listID: 13, name: "Check Fuel Tank level. (not less than 1/2 tank)", ischecked: false },
            { listID: 14, name: "Check for abnormal noise, vibration and burning smell.", ischecked: false },
            { listID: 15, name: "Check that reverse sensor is switched on. (for OUV)", ischecked: false },
            { listID: 16, name: "Check that reverse camera is working. (if applicable)", ischecked: false }
        ];
        this.selectedArray = [];
    }
    jitbocPage.prototype.onChange = function (name) {
        if (this.selectedArray.includes(name)) {
            this.selectedArray = this.selectedArray.filter(function (value) { return value != name; });
        }
        else {
            this.selectedArray.push(name);
        }
    };
    jitbocPage.prototype.setcheckboxstatus = function () {
        this.checkboxstatus = !this.checkboxstatus;
    };
    jitbocPage.prototype.getcheckboxstatus = function () {
        return this.checkboxstatus;
    };
    jitbocPage.prototype.ngOnInit = function () {
    };
    jitbocPage.prototype.onCancel = function () {
        this.navCtrl.pop();
    };
    jitbocPage.prototype.showSubmit = function () {
        return true;
    };
    jitbocPage.prototype.showToast = function (msg) {
        this.toastController.create({
            message: msg,
            duration: 2000,
            //  showCloseButton: true,
            //  closeButtonText: 'OK',
            position: 'bottom'
        }).then(function (obj) {
            obj.present();
        });
    };
    jitbocPage = __decorate([
        core_1.Component({
            selector: 'app-boc',
            templateUrl: './jitboc.page.html',
            styleUrls: ['./jitboc.page.scss']
        })
    ], jitbocPage);
    return jitbocPage;
}());
exports.jitbocPage = jitbocPage;
