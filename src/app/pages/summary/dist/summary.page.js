"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SummaryPage = void 0;
var core_1 = require("@angular/core");
var database_service_1 = require("../../services/database.service");
var dayjs = require("dayjs");
var chart_js_1 = require("chart.js");
require("chartjs-plugin-labels");
require("chartjs-chart-radial-gauge");
require("chartjs-tsgauge");
//Chart.defaults.global.defaultFontSize = 10;
//Chart.defaults.global.maintainAspectRatio = true;
var SummaryPage = /** @class */ (function () {
    function SummaryPage(database, navCtrl, geolocation) {
        this.database = database;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.drivestatus = 9 > 10;
        this.mileagestatus = 9 > 10;
        this.otherstatus = 9 > 10;
    }
    SummaryPage.prototype.ngOnInit = function () {
        this.initCharts();
    };
    SummaryPage.prototype.checkOperatorCurrencyValid = function (date) {
        var today = dayjs();
        var period = 8;
        return today.diff(date, "day") < period;
    };
    SummaryPage.prototype.getnmtimemorning = function () {
        var cd = new Date(); // for now
        var nmtmoringstart = new Date();
        nmtmoringstart.setHours(7, 30, 0);
        var nmtmoringend = new Date();
        nmtmoringend.setHours(9, 30, 0);
        if (cd >= nmtmoringstart && cd < nmtmoringend) {
            return false;
        }
        return true;
    };
    SummaryPage.prototype.getnmtimenight = function () {
        var cd = new Date(); // for now
        var nmtnightstart = new Date();
        nmtnightstart.setHours(17, 30, 0);
        var nmtnightend = new Date();
        nmtnightend.setHours(19, 30, 0);
        if (cd >= nmtnightstart && cd < nmtnightend) {
            return false;
        }
        return true;
    };
    SummaryPage.prototype.checkOperatordaysCurrencyValid = function (date, vehicletype) {
        var today = dayjs();
        //var period = vehicletype==="BELREX" ? 30 : 7;
        var period = 10;
        var left = period - today.diff(date, "day");
        if (left < 0) {
            return "JIT OVERDUE by " + Math.abs(left).toString() + " days";
        }
        else {
            return left.toString() + " days left";
        }
    };
    SummaryPage.prototype.checkOperatorCurrencyInvalid = function (date) {
        var today = dayjs();
        var period = 10;
        return today.diff(date, "day") > period;
    };
    SummaryPage.prototype.showdrives = function () {
        this.drivestatus = !this.drivestatus;
    };
    SummaryPage.prototype.checkDriveStatus = function () {
        return this.drivestatus;
    };
    SummaryPage.prototype.showmileage = function () {
        this.mileagestatus = !this.mileagestatus;
    };
    SummaryPage.prototype.checkMileageStatus = function () {
        return this.mileagestatus;
    };
    SummaryPage.prototype.checkTimelefttoJIT = function (date) {
        var today = dayjs();
        var period = 8;
        var left = period - today.diff(date, "day");
        if (left < 0) {
            return false;
        }
        return true;
    };
    SummaryPage.prototype.getTimelefttoJIT = function (date) {
        var today = dayjs();
        var period = 7 * 24 * 60 * 60;
        var left = period - today.diff(date, "s");
        return left;
    };
    SummaryPage.prototype.getMileagebyVehicleType = function (data, vehicle) {
        for (var _i = 0, VehicleTypes_1 = database_service_1.VehicleTypes; _i < VehicleTypes_1.length; _i++) {
            var type = VehicleTypes_1[_i];
            if (type == vehicle) {
                if (data[type] != null) {
                    return data[type] + " km";
                }
            }
        }
    };
    SummaryPage.prototype.getDrivesbyVehicleType = function (vehicle) {
        for (var _i = 0, VehicleTypes_2 = database_service_1.VehicleTypes; _i < VehicleTypes_2.length; _i++) {
            var type = VehicleTypes_2[_i];
            var drv = 0;
            if (type == vehicle) {
                for (var _a = 0, _b = this.database.current.drive_history; _a < _b.length; _a++) {
                    var trip = _b[_a];
                    if (trip.vehicle_type == vehicle) {
                        drv += 1;
                    }
                }
                return drv;
            }
        }
    };
    SummaryPage.prototype.getVerifiedMTRAC = function () {
        var _this = this;
        return this.database.current.mtrac_history.filter(function (form) {
            if (_this.database.current.user.email === form.driver) {
                return form.status === 'verified';
            }
        });
    };
    SummaryPage.prototype.getNotifications = function () {
        var result = [];
        for (var _i = 0, _a = this.database.current.drive_history; _i < _a.length; _i++) {
            var trip = _a[_i];
            var date_str = dayjs(trip.date + " " + trip.start_time, 'YYYY-MM-DD HH:mm').format('dddd, MMM DD, YYYY');
            var distance = this.database.distance(trip);
            var drive_msg = "Completed " + distance + " km drive, from " + trip.start_location + " (" + trip.start_time + ") to " + trip.end_location + " (" + trip.end_time + ").";
            if (trip.status === 'in-progress') {
                result.push({
                    subtitle: "Drive-In-Progress",
                    title: date_str,
                    text: "Journey started from location " + trip.start_location + " at " + trip.start_time + ".",
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
    };
    SummaryPage.prototype.click = function (drive) {
        this.database.current.drive_to_edit = drive;
        console.log("> Navigating to AddDrivePage for drive id=" + drive.id);
        this.navCtrl.navigateForward(['/add-drive']);
    };
    SummaryPage.prototype.clickmtrac = function (form) {
        this.database.current.mtrac_to_edit = form;
        console.log("> Navigating to mtracPage for mtrac id=" + form.id);
        if (form.is_jit == true) {
            this.navCtrl.navigateForward(['/jitmtrac']);
        }
        else {
            this.navCtrl.navigateForward(['/mtrac']);
        }
    };
    SummaryPage.prototype.initCharts = function () {
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
    };
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
    SummaryPage.prototype.getStatus = function () {
        return false;
    };
    SummaryPage.prototype.makeChart2 = function (canvas, data) {
        var mileage = [];
        var vtypes = this.database.current.stats.most_recent_drive_by_vehicle_type;
        vtypes = Object.keys(vtypes);
        console.log(vtypes);
        for (var _i = 0, vtypes_1 = vtypes; _i < vtypes_1.length; _i++) {
            var vehicle = vtypes_1[_i];
            mileage.push(this.getMileagebyVehicleType(this.database.current.stats.mileage_by_vehicle_type, vehicle).replace(" km", ""));
        }
        console.log(mileage);
        return new chart_js_1.Chart(canvas.nativeElement, {
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
                            "rgba(255, 99, 132, 0.5)",
                            "rgba(54, 162, 235, 0.5)",
                            "rgba(255, 206, 86, 0.5)",
                            "rgba(75, 192, 192, 0.5)",
                            "rgba(153, 102, 255, 0.5)",
                            "rgba(255, 159, 64, 0.5)"
                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
                        ]
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
                        render: function (args) { return args.value + ' km'; }
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
    };
    SummaryPage.prototype.makeChart5 = function (canvas, value, max_value, overseas) {
        return new chart_js_1.Chart(canvas.nativeElement, {
            type: "horizontalBar",
            data: {
                labels: ["Overseas", "Conversion"],
                datasets: [
                    {
                        label: "Mileage",
                        borderWidth: 1,
                        data: [value, value],
                        backgroundColor: [
                            "rgb(54, 162, 235, 0.5)",
                            "rgb(255, 205, 86, 0.5)",
                        ],
                        borderColor: [
                            "rgb(54, 162, 235, 1)",
                            "rgb(255, 205, 86, 1)",
                        ]
                    }, {
                        label: "Overseas",
                        borderWidth: 1,
                        data: [overseas, 0],
                        backgroundColor: [
                            "rgb(155, 155, 155, 0.5)",
                        ],
                        borderColor: [
                            "rgb(155, 155, 155, 1)",
                        ]
                    },
                    {
                        label: "Conversion",
                        borderWidth: 1,
                        data: [0, max_value],
                        backgroundColor: [
                            "rgb(155, 155, 155, 0.5)",
                            "rgb(155, 155, 155, 0.5)",
                        ],
                        borderColor: [
                            "rgb(255, 205, 86, 1)",
                            "rgb(155, 155, 155, 1)",
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
                        }
                    }
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
                            stacked: true
                        }]
                }
            }
        });
    };
    SummaryPage.prototype.makeChart3 = function (canvas, value, max_value, overseas) {
        return new chart_js_1.Chart(canvas.nativeElement, {
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
                        weight: 1.05
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
                    fontSize: 14
                },
                legend: {
                    display: true,
                    position: "left"
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
                        fontColor: 'rgba(0,0,0,1)'
                    }
                },
                circumference: Math.PI,
                rotation: Math.PI,
                cutoutPercentage: 80
            }
        });
    };
    __decorate([
        core_1.ViewChild("chartCanvas1", { static: true })
    ], SummaryPage.prototype, "chartCanvas1");
    __decorate([
        core_1.ViewChild("chartCanvas4", { static: true })
    ], SummaryPage.prototype, "chartCanvas4");
    __decorate([
        core_1.ViewChild("chartCanvas3", { static: true })
    ], SummaryPage.prototype, "chartCanvas3");
    __decorate([
        core_1.ViewChild("chartCanvas2", { static: true })
    ], SummaryPage.prototype, "chartCanvas2");
    __decorate([
        core_1.ViewChild("chartCanvas5", { static: true })
    ], SummaryPage.prototype, "chartCanvas5");
    SummaryPage = __decorate([
        core_1.Component({
            selector: 'app-summary',
            templateUrl: './summary.page.html',
            styleUrls: ['./summary.page.scss']
        })
    ], SummaryPage);
    return SummaryPage;
}());
exports.SummaryPage = SummaryPage;
