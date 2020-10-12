"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
    { path: 'add-fuel', loadChildren: './add-fuel/add-fuel.module#AddFuelPageModule' },
    { path: 'add-drive', loadChildren: './add-drive/add-drive.module#AddDrivePageModule' },
    { path: 'boc', loadChildren: './boc/boc.module#bocPageModule' },
    { path: 'jitboc', loadChildren: './jitboc/jitboc.module#jitbocPageModule' },
    { path: 'mtrac', loadChildren: './mtrac/mtrac.module#mtracPageModule' },
    { path: 'jitmtrac', loadChildren: './jitmtrac/jitmtrac.module#jitmtracPageModule' },
    { path: 'mtracinfo', loadChildren: './mtrac/info/mtracinfo.module#mtracinfoPageModule' },
    { path: 'summary', loadChildren: './pages/summary/summary.module#SummaryPageModule' },
    { path: 'reportvehicle', loadChildren: './reportvehicle/reportvehicle.module#ReportVehiclePageModule' },
    {
        path: 'about',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./pages/about/about.module'); }).then(function (m) { return m.AboutPageModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules }),
                forms_1.FormsModule, forms_1.ReactiveFormsModule
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
