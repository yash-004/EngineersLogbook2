"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DatabaseService = exports.VehicleTypes = void 0;
var core_1 = require("@angular/core");
var firebase = require("firebase/app");
var dayjs = require("dayjs"); // DateTime utility, See http://zetcode.com/javascript/dayjs/
var sprintf_js_1 = require("sprintf-js");
//Vehicle Type B for BELREX,MS for MSS,T for 5TON, O for OUV, F for FLB, M3 for M3G
exports.VehicleTypes = ['BELREX', 'MSS', '5TON', 'OUV', 'FLB', 'M3G'];
var DatabaseService = /** @class */ (function () {
    function DatabaseService(firestore) {
        this.firestore = firestore;
        this.current = null; // Currently logged in user
        // Create dummy login for debugging without Firebase authentication
        this.current = this.createDebugLogin();
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Retrieves and populates profile/drive fields for the currently logged in user.
    // This is called right after Firebase authentication is successful.
    DatabaseService.prototype.init = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a, _b, _loop_1, this_1, _i, _c, driver, _loop_2, this_2, _d, _e, driver;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (this.current)
                            this.logout();
                        return [4 /*yield*/, this.read('user', email)];
                    case 1:
                        result = _f.sent();
                        this.current = {
                            user: result.data(),
                            snapshot_wait: 0
                        };
                        return [4 /*yield*/, this.log("Logged-in: " + email)];
                    case 2:
                        _f.sent();
                        if (!!this.current.user.fleet) return [3 /*break*/, 4];
                        // No fleet string? Set it to the default and update the database
                        this.current.user.fleet = "30SCE";
                        return [4 /*yield*/, this.write('user', email, this.current.user)];
                    case 3:
                        _f.sent();
                        _f.label = 4;
                    case 4:
                        if (!(this.current.user.is_driver && !this.current.user.is_commander && this.current.user.admin_level != 0)) return [3 /*break*/, 6];
                        // No fleet string? Set it to the default and update the database
                        this.current.user.admin_level = 0;
                        return [4 /*yield*/, this.write('user', email, this.current.user)];
                    case 5:
                        _f.sent();
                        _f.label = 6;
                    case 6:
                        // Bind local data to database
                        this.bind(this.current);
                        _f.label = 7;
                    case 7:
                        if (!(this.current.snapshot_wait == 0)) return [3 /*break*/, 9];
                        console.log("> Still retrieving userdata...");
                        return [4 /*yield*/, this.sleep(500)];
                    case 8:
                        _f.sent();
                        return [3 /*break*/, 7];
                    case 9:
                        console.log("> Current database user: " + email + " => " + JSON.stringify(this.current.user));
                        // Get all users who are in the same company as logged in user
                        _a = this.current;
                        return [4 /*yield*/, this.list('user', ['company', '==', this.current.user.company])];
                    case 10:
                        // Get all users who are in the same company as logged in user
                        _a.all_coyusers = _f.sent();
                        _b = this.current;
                        return [4 /*yield*/, this.list('user', ['fleet', '==', this.current.user.fleet])];
                    case 11:
                        _b.all_unitusers = _f.sent();
                        //console.log(`> All Users: ${JSON.stringify(this.current.all_coyusers)}`);
                        //console.log(`> All Users: ${JSON.stringify(this.current.all_unitusers)}`);
                        // If user is_driver, get list of commanders from the same company (for drop-down list in add-drive)
                        if (this.current.user.is_driver || this.current.user.is_commander) {
                            this.current.all_commanders_of_driver = this.current.all_coyusers.filter(function (user) { return user.is_commander && user.email != _this.current.user.email; });
                            console.log("> List of commanders[" + this.current.all_commanders_of_driver.length + "] = " + JSON.stringify(this.current.all_commanders_of_driver));
                        }
                        if (!(this.current.user.is_commander && this.current.user.admin_level != 3)) return [3 /*break*/, 15];
                        this.current.all_drivers_of_commander = this.current.all_coyusers.filter(function (user) { return user.is_driver || user.email == _this.current.user.email; });
                        console.log("> List of drivers[" + this.current.all_drivers_of_commander.length + "] = " + JSON.stringify(this.current.all_drivers_of_commander));
                        _loop_1 = function (driver) {
                            var result_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.read('summary', driver.email)];
                                    case 1:
                                        result_1 = _a.sent();
                                        if (result_1.data()) {
                                            // Found summary, great.
                                            driver.summary = result_1.data();
                                        }
                                        else {
                                            // No summary? Calculate it...
                                            driver.summary = this_1.summarize(this_1.current.drive_history.filter(function (drive) { return drive.driver === driver.email; }));
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _c = this.current.all_drivers_of_commander;
                        _f.label = 12;
                    case 12:
                        if (!(_i < _c.length)) return [3 /*break*/, 15];
                        driver = _c[_i];
                        return [5 /*yield**/, _loop_1(driver)];
                    case 13:
                        _f.sent();
                        _f.label = 14;
                    case 14:
                        _i++;
                        return [3 /*break*/, 12];
                    case 15:
                        if (!(this.current.user.is_commander && this.current.user.admin_level == 3)) return [3 /*break*/, 19];
                        this.current.all_drivers_of_commander = this.current.all_unitusers.filter(function (user) { return user.is_driver; });
                        console.log("> List of drivers[" + this.current.all_drivers_of_commander.length + "] = " + JSON.stringify(this.current.all_drivers_of_commander));
                        _loop_2 = function (driver) {
                            var result_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_2.read('summary', driver.email)];
                                    case 1:
                                        result_2 = _a.sent();
                                        if (result_2.data()) {
                                            // Found summary, great.
                                            driver.summary = result_2.data();
                                        }
                                        else {
                                            // No summary? Calculate it...
                                            driver.summary = this_2.summarize(this_2.current.drive_history.filter(function (drive) { return drive.driver === driver.email; }));
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        _d = 0, _e = this.current.all_drivers_of_commander;
                        _f.label = 16;
                    case 16:
                        if (!(_d < _e.length)) return [3 /*break*/, 19];
                        driver = _e[_d];
                        return [5 /*yield**/, _loop_2(driver)];
                    case 17:
                        _f.sent();
                        _f.label = 18;
                    case 18:
                        _d++;
                        return [3 /*break*/, 16];
                    case 19: return [2 /*return*/, this.current];
                }
            });
        });
    };
    DatabaseService.prototype.sleep = function (ms) { return new Promise(function (resolve) { setTimeout(resolve, ms); }); };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Unbinds real-time data bindings and nullify this.current.
    DatabaseService.prototype.logout = function () {
        if (!this.current)
            return;
        this.log("Log-out: " + this.current.user.email);
        // Unsubscribe to real-time data binding
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
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Basic CRUD operators
    DatabaseService.prototype.collection = function (table) {
        return firebase.firestore().collection(table);
    };
    DatabaseService.prototype.read = function (table, key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collection(table).doc(key).get()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DatabaseService.prototype.write = function (table, key, doc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.log("Write table:" + table + " key:" + key)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.collection(table).doc(key).set(doc)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DatabaseService.prototype.add = function (table, doc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.log("Write table:" + table)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.collection(table).add(doc)];
                    case 2: return [2 /*return*/, _a.sent()]; // add() creates a new random document key
                }
            });
        });
    };
    DatabaseService.prototype["delete"] = function (table, key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.log("Delete table:" + table + " key:" + key)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.collection(table).doc(key)["delete"]()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DatabaseService.prototype.list = function (table, condition, order_by) {
        return __awaiter(this, void 0, void 0, function () {
            var query, snapshot, array;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = firebase.firestore().collection(table);
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
                        return [4 /*yield*/, query.get()];
                    case 1:
                        snapshot = _a.sent();
                        array = [];
                        snapshot.forEach(function (doc) {
                            array.push(doc.data()); // Caller will access documents with: "doc.id" and "doc.data()"
                        });
                        return [2 /*return*/, array];
                }
            });
        });
    };
    DatabaseService.prototype.log = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var now, user, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        now = dayjs();
                        user = this.current && this.current.user.email != "sample@gmail.com" ? "," + this.current.user.email : '';
                        key = "" + now.format('YYYY-MM-DD,HH:mm:ss') + user;
                        console.log("> " + message);
                        return [4 /*yield*/, this.collection('logger').doc(key).set({ message: message })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Aggregates mileage and durations in drive history array.
    // Track most recent drive and calculate operator currency.
    DatabaseService.prototype.summarize = function (drive_history) {
        var stats = {
            drive_count: 0,
            mileage_km: 0,
            duration_minutes: 0,
            most_recent_drive: dayjs(0),
            most_recent_drive_by_vehicle_type: {},
            mileage_by_vehicle_type: {}
        };
        for (var i = 0; i < drive_history.length; i++) {
            var trip = drive_history[i];
            if (trip.status === 'in-progress') {
                console.log("[" + i + "] " + trip.date + " *** Drive In-progress *** " + trip.id);
                continue;
            }
            var distance = this.distance(trip);
            var duration = this.duration(trip);
            stats.drive_count++;
            stats.mileage_km += distance;
            stats.duration_minutes += duration;
            //console.log(`[${i}] ${trip.date}, ${distance} km, ${duration} mins ${trip.id}`);
            // Update mileage per vehicle type
            if (stats.mileage_by_vehicle_type[trip.vehicle_type])
                stats.mileage_by_vehicle_type[trip.vehicle_type] += distance;
            else
                stats.mileage_by_vehicle_type[trip.vehicle_type] = distance;
            // Update operator currency for each vehicle class
            var end_dt = dayjs(trip.date + " " + trip.end_time, 'YYYY-MM-DD HH:mm');
            if (!stats.most_recent_drive.unix() || stats.most_recent_drive.isBefore(end_dt)) {
                stats.most_recent_drive = end_dt;
            }
            if (!stats.most_recent_drive_by_vehicle_type[trip.vehicle_type] || stats.most_recent_drive_by_vehicle_type[trip.vehicle_type].isBefore(end_dt)) {
                stats.most_recent_drive_by_vehicle_type[trip.vehicle_type] = end_dt;
            }
        }
        console.log("> Summary: mileage=" + stats.mileage_km + " duration=" + stats.duration_minutes + " drives=" + drive_history.length + " recent=" + stats.most_recent_drive);
        console.log("> Recent drives by VehicleType: " + JSON.stringify(stats.most_recent_drive_by_vehicle_type));
        console.log("> Mileage by VehicleType: " + JSON.stringify(stats.mileage_by_vehicle_type));
        return stats;
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Real-time data binding. This is automatically called right after any CRUD operation
    // on the current user's drive history or profile.
    DatabaseService.prototype.bind = function (login) {
        var _this = this;
        // For both drivers and commanders
        login.detach_bind_user = this.collection('user')
            .doc(login.user.email)
            .onSnapshot(function (doc) {
            login.user = doc.data(); // Casting to interface User
            console.log("\n> Updated Login object:", login.user);
        });
        // Construct composite query depending on driver or commander (require Firestore composite index)
        var query = this.collection("drive").orderBy("date", "desc").orderBy("start_time", "desc");
        if (login.user.is_commander == true) {
            query.where("commander", "==", login.user.fleet);
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
        }
        else {
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
        login.detach_bind_drive =
            query.onSnapshot(function (querySnapshot) {
                login.drive_history = [];
                login.fuel_history = [];
                login.drive_in_progress = null;
                querySnapshot.forEach(function (doc) {
                    var trip = doc.data(); // Casting to interface Drive
                    trip.id = doc.id;
                    if (trip.company == login.user.company && trip.fleet == login.user.fleet) {
                        login.drive_history.push(trip);
                    }
                    if (trip.end_time == null)
                        login.drive_in_progress = trip;
                });
                console.log(login.drive_in_progress);
                var query = _this.collection("mtrac").orderBy("created", "desc");
                if (login.user.is_commander == true) {
                    query.where("commander", "==", login.user.email);
                }
                else {
                    query = query.where("driver", "==", login.user.email);
                }
                login.detach_bind_mtrac =
                    query.onSnapshot(function (querySnapshot) {
                        login.mtrac_history = [];
                        login.mtrac_in_progress = null;
                        querySnapshot.forEach(function (doc) {
                            var form = doc.data(); // Casting to interface Drive
                            form.id = doc.id;
                            if (form.company == login.user.company && form.fleet == login.user.fleet) {
                                login.mtrac_history.push(form);
                            }
                            if (form.status != "completed") {
                                login.mtrac_in_progress = form;
                            }
                        });
                    });
                console.log(login.mtrac_in_progress);
                console.log("\n> Updated Drive history for " + login.user.email + ", " + login.drive_history.length + " drives found.");
                // Calculate new stats for both drivers and commanders
                login.stats = _this.summarize(login.drive_history);
                // For drivers, write summarized report to database (For commanders' module)
                if (login.user.is_driver) {
                    _this.write("summary", login.user.email, JSON.parse(JSON.stringify(login.stats)));
                }
                // Allow login to proceed..
                login.snapshot_wait++;
            });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Utilities
    DatabaseService.prototype.duration = function (trip) {
        if (!trip.end_odometer || trip.status === 'in-progress')
            return 0; // Handle drive-in-progress
        var dayjs_format = 'YYYY-MM-DD HH:mm';
        var start_dt = dayjs(trip.date + " " + trip.start_time, dayjs_format);
        var end_dt = dayjs(trip.date + " " + trip.end_time, dayjs_format);
        var diff = end_dt.diff(start_dt, "minute");
        if (diff < 0)
            diff += 60 * 24; // rollover to next day
        return diff;
    };
    DatabaseService.prototype.distance = function (trip) {
        if (!trip.end_odometer || trip.status === 'in-progress')
            return 0; // Handle drive-in-progress
        return trip.end_odometer - trip.start_odometer;
    };
    DatabaseService.prototype.formatMinutesToString = function (minutes) {
        var result = "";
        var show_hours = true, show_minutes = true;
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
            result += sprintf_js_1.sprintf("%02d:%02d", Math.floor(minutes / 60 % 24), minutes % 60);
        }
        else {
            if (show_hours) {
                result += Math.floor(minutes / 60 % 24) + " Hours ";
            }
            if (show_minutes) {
                result += minutes % 60 + " Mins";
            }
        }
        return result;
    };
    DatabaseService.prototype.getTimeStamp = function () {
        return dayjs(new Date()).format('YYYY-MM-DD HH:mm');
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Test data
    DatabaseService.prototype.createDebugLogin = function () {
        var drive_history = [
            {
                created: '',
                driver: 'sample@test.com',
                commander: 'commander_name',
                vehicle: '1234MID',
                vehicle_type: 'T',
                date: '2019-08-10',
                start_time: '13:00',
                start_location: 'NSC',
                start_odometer: 100000,
                status: 'in-progress',
                company: 'C',
                fleet: 'C',
                incamp: true,
                is_jit: true
            },
            {
                created: '',
                driver: 'sample@test.com',
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
            }
        ];
        var user = {
            admin_level: 1,
            belrex_certified: false,
            company: "A",
            created: "2020-02-13 02:33",
            email: "sample@test.com",
            flb_certified: false,
            fleet: "test",
            is_commander: true,
            is_driver: false,
            licence_num: "SXXXXXX",
            licence_type: "A",
            location: { lat: 1.3365133, lng: 103.7405132 },
            mss_certified: false,
            name: "Sample User"
        };
        return {
            user: user,
            drive_history: drive_history,
            snapshot_wait: 1,
            stats: this.summarize(drive_history)
        };
    };
    DatabaseService = __decorate([
        core_1.Injectable()
    ], DatabaseService);
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
