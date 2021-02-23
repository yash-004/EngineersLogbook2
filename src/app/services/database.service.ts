import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import * as dayjs from 'dayjs'; // DateTime utility, See http://zetcode.com/javascript/dayjs/
import { sprintf } from 'sprintf-js';
import { AuthenticationService } from './authentication.service';
import { userInfo } from 'os';
import { APIService } from '../API.service'

export interface Summary
{
drive_count: number;
mileage_km: number;
duration_minutes: number;
most_recent_drive: any;   // dayjs type
most_recent_drive_by_vehicle_type: any;
mileage_by_vehicle_type: any;
}

export interface User
{
created: string;
last_login?: string;
name: string;
email: string;  // identifier
fleet: string;
company: string;
is_admin?: boolean;  // Superuser
is_commander?: boolean;
location?: any;
admin_level?: number;

// For drivers only
is_driver?: boolean;
licence_num?: string;

licence_type?: string;
mss_certified?: boolean;
flb_certified?: boolean;
belrex_certified?: boolean;
m3g_certified?: boolean;

summary?: Summary;  // Commander page needs this...
}

export interface Fuel
{
created: string;
id?: string;
driver: string;
vehicle: string;
vehicle_type: string;  // TODO: to retrieve from Vehicle table?
date: string;          // date format is YYYY-MM-DD for sorting purposes
time: string;    // time format is hh:mm in 24-hour format
location: string;
FuelTopUp: number;
fleet: string;
company: string;
}

export interface Drive
{
created: string;
id?: string;  // random identifier created by Firestore
status: string;  // valid values: 'in-progress', 'pending', 'verified', 'rejected'
incamp: boolean;
is_jit?: boolean;
// Stage-1 details (Start journey)
driver: string;
commander: string;
vehicle: string;
vehicle_type: string;  // TODO: to retrieve from Vehicle table?
date: string;          // date format is YYYY-MM-DD for sorting purposes
start_time: string;    // time format is hh:mm in 24-hour format
start_location: string;
start_odometer: number;
fleet: string;
company: string;

// Stage-2 details (End journey)
end_time?: string;
end_location?: string;
end_odometer?: number;
fuel_level?: number;  // valid values: 0, 1, 2, 3, 4
is_maintenance?: boolean;
comments?: string;
}

export interface Mtrac
{
created: string;
id?: string;  // random identifier created by Firestore
status: string;  // valid values: 'in-progress', 'pending', 'verified', 'rejected'
incamp: boolean;
is_jit?: boolean;
// Stage-1 details (Start journey)
driver: string;
commander: string;
fleet: string;
company: string;
vehicleNumber: string,
licenseType: string;
vehicle_type: string;
vehicleType2: string;
rest: string;
health: string;
weather: string;
route: string;
detailType: string;
vc: string;
vehicleServiceability: string;
startLocation: string;
endLocation: string;
counterSignature: any;
frontSignature: any;
safetyMeasures: string;
frontName: string;
counterName: string;

cmdlicense: boolean;
cmdroute: boolean;
cmdspeedlimit: boolean;
cmddanger: boolean;
cmdreverse: boolean;
seatbeltcommander: boolean;
safetystrapcommander: boolean;
smokingcommander: boolean;
loadcommander: boolean;
accidentcommander: boolean;
mtraccompletecommander: boolean;
cmdchecklistcomplete: boolean;

seatbeltdriver: boolean;
safetystrapdriver: boolean;
smokingdriver: boolean;
loaddriver: boolean;
accidentdriver: boolean;
mtraccompletedriver: boolean;
drivermtrac: boolean;
commandermtrac: boolean;

admindriver: boolean,
admincommander: boolean;

psgerlicense: boolean;
psgerspeedlimit: boolean;
psgerdanger: boolean;
accidentpsger: boolean;
}

export interface Login
{
  user: User;
  drive_history?: Drive[];  // All drives relevant to current driver or commander
  fuel_history?: Fuel[];
  mtrac_history?: Mtrac[];

  all_coyusers?: User[];   // All users of the same company as logged in user
  all_unitusers?: User[];   // All users of the same unit as logged in user
  // For drivers only
  all_commanders_of_driver?: User[];   // For Driver: All commanders of the same company as driver required for drop-down list for add-drive

  // For commanders only
  all_drivers_of_commander?: User[];  // For Commander: All operators of the same company as commander (required for commander's page)

  // For both drivers and commanders
  stats?: Summary;

  // Interfacing with UI
  drive_in_progress?: Drive;
  drive_to_edit?: Drive;

  mtrac_in_progress?: Mtrac;
  mtrac_to_edit?: Mtrac;

  fuel_in_progress?: Fuel;
  fuel_to_edit?: Fuel;

  // For Firestore data binding/un-binding
  detach_bind_drive?: any;
  detach_bind_mtrac?: any;
  detach_bind_user?: any;
  snapshot_wait: number;
}
//Vehicle Type B for BELREX,MS for MSS,T for 5TON, O for OUV, F for FLB, M3 for M3G
//5TON 5Teridium
//OUV Octopus
//MSS Monster
//BELREX Bunny
//FLB Fly
//M3G Manta
export const VehicleTypes: string[] = [ 'Bunny', 'Monster', '5Teridium', 'Octopus', 'Fly', 'Manta' ];

@Injectable()
export class DatabaseService {

  public current: Login = null;  // Currently logged in user

  constructor(public firestore: AngularFirestore, private authService: AuthenticationService, private api: APIService)
  {
    // Create dummy login for debugging without Firebase authentication
    this.current = this.createDebugLogin();
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Retrieves and populates profile/drive fields for the currently logged in user.
  // This is called right after Firebase authentication is successful.
  public async init() {
    var user = await this.authService.userDetails()

    if (this.current) this.logout();

    console.log(user)
    console.log(user["custom:company"])

    var is_admin
    var is_commander
    var is_driver

    if (user["custom:role"] == "admin"){
      is_admin = true
      is_commander = true
      is_driver = false
    }
    else if (user["custom:role"] == "commander"){
      is_admin = false
      is_commander = true
      is_driver = false   
    }
    else{
      is_admin = false
      is_commander = false
      is_driver = true   
    }

    this.current = {
      user: {
        created: user["custom:created"],
        name: user["custom:name"],
        email: user.email,
        fleet: user["custom:fleet"],
        company: user["custom:company"],
        is_admin: is_admin,  // Superuser
        is_commander: is_commander,
        location: user["custom:location"],
        admin_level: user["custom:admin_level"],
        
        // For drivers only
        is_driver: is_driver,
        licence_num: user["custom:license_num"],
        
        licence_type: user["custom:license_type"],
        mss_certified: user["custom:mss_certified"],
        flb_certified: user["custom:flb_certified"],
        belrex_certified: user["custom:belrex_certified"],
        m3g_certified: user["custom:m3g_certified"]
      },
      snapshot_wait: 0
    };

    console.log(this.current.user)

    await this.log(`Logged-in: ${this.current.user.email}`);

    if (!this.current.user.fleet) {
      // No fleet string? Set it to the default and update the database
      this.current.user.fleet = "30SCE";
      await this.write('user',this.current.user.email,this.current.user);
    }

    if (this.current.user.is_driver && this.current.user.admin_level != 0) {
      // No fleet string? Set it to the default and update the database
      this.current.user.admin_level = 0;
      await this.write('user',this.current.user.email,this.current.user);
    }

    // Bind local data to database
    this.bind(this.current);

    // Wait for data binding to finish
    while (this.current.snapshot_wait==0) {
      console.log("> Still retrieving userdata...");
      await this.sleep(500);
    }
    console.log(`> Current database user: ${this.current.user.email} => ${JSON.stringify(this.current.user)}`);

    // Get all users who are in the same company as logged in user
    this.current.all_coyusers = await this.list('user', ['company','==',this.current.user.company] );
    this.current.all_unitusers = await this.list('user', ['fleet','==',this.current.user.fleet] );
    //console.log(`> All Users: ${JSON.stringify(this.current.all_coyusers)}`);
    //console.log(`> All Users: ${JSON.stringify(this.current.all_unitusers)}`);

    // If user is_driver, get list of commanders from the same company (for drop-down list in add-drive)
    if (this.current.user.is_driver||this.current.user.is_commander) {
      this.current.all_commanders_of_driver = this.current.all_coyusers.filter( (user) => { return user.is_commander && user.email != this.current.user.email; } );
      console.log(`> List of commanders[${this.current.all_commanders_of_driver.length}] = ${JSON.stringify(this.current.all_commanders_of_driver)}`);
    }

    // If user is_commander and admin_level != 3 (sgt, pc, oc, csm) , get list of drivers from the same company

    if (this.current.user.is_commander && this.current.user.admin_level != 3) {
      this.current.all_drivers_of_commander = this.current.all_coyusers.filter( (user) => { return user.is_driver || user.email == this.current.user.email; } );
      console.log(`> List of drivers[${this.current.all_drivers_of_commander.length}] = ${JSON.stringify(this.current.all_drivers_of_commander)}`);

      // Also retrieve summaries of drivers
      for (let driver of this.current.all_drivers_of_commander) {

        const result: any = await this.read('summary',driver.email);

        if (result.data()) {
          // Found summary, great.
          driver.summary = result.data() as Summary;
        } else {
          // No summary? Calculate it...
          driver.summary = this.summarize(this.current.drive_history.filter( (drive) => { return drive.driver === driver.email } ));
        }

        //console.log(`${driver.email} ${JSON.stringify(driver.summary)}`);
      }
    }

    // If user is_commander and admin_level == 3 (co,rsm) , get list of drivers from the same unit
    if (this.current.user.is_commander && this.current.user.admin_level == 3) {
      this.current.all_drivers_of_commander = this.current.all_unitusers.filter( (user) => { return user.is_driver; } );
      console.log(`> List of drivers[${this.current.all_drivers_of_commander.length}] = ${JSON.stringify(this.current.all_drivers_of_commander)}`);

      // Also retrieve summaries of drivers
      for (let driver of this.current.all_drivers_of_commander) {

        const result: any = await this.read('summary',driver.email);

        if (result.data()) {
          // Found summary, great.
          driver.summary = result.data() as Summary;
        } else {
          // No summary? Calculate it...
          driver.summary = this.summarize(this.current.drive_history.filter( (drive) => { return drive.driver === driver.email } ));
        }

        //console.log(`${driver.email} ${JSON.stringify(driver.summary)}`);
      }
    }

    return this.current;
  }

  private sleep(ms) { return new Promise(resolve=>{setTimeout(resolve,ms)}); }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Unbinds real-time data bindings and nullify this.current.
  public logout(): void
  {
    if (!this.current) return;

    this.log(`Log-out: ${this.current.user.email}`);

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
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Basic CRUD operators
  public collection(table: string) {
    return firebase.firestore().collection(table);
  }

  public async read(table:string, key:string) {
    return await this.collection(table).doc(key).get();
  }

  public async write(table:string, key:string, doc:any) {
    await this.log(`Write table:${table} key:${key}`);
    return await this.collection(table).doc(key).set(doc);
  }

  public async add(table:string, doc:any) {
    await this.log(`Write table:${table}`);
    return await this.collection(table).add(doc);  // add() creates a new random document key
  }

  public async delete(table:string, key:string) {
    await this.log(`Delete table:${table} key:${key}`);
    return await this.collection(table).doc(key).delete();
  }

  public async list(table:string, condition?:any, order_by?:any)
  {
    let query: any = firebase.firestore().collection(table);
    if (condition) {
      // Augment query with optional condition
      query = query.where( condition[0], condition[1], condition[2] );
    }
    if (order_by) {
      // Augment query with sorted order
      order_by.forEach( (order) => {
        query = query.orderBy(order);  // Not yet tested
      });
    }

    const snapshot = await query.get();
    const array: Array<any> = [];
    snapshot.forEach((doc) => {
      array.push( doc.data() );  // Caller will access documents with: "doc.id" and "doc.data()"
    });
    return array;
  }

  public async log(message: string) {

    const now = dayjs();
    var user: string = this.current && this.current.user.email != "sample@gmail.com" ? `,${this.current.user.email}` : '';
    var key: string = `${now.format('YYYY-MM-DD,HH:mm:ss')}${user}`;

    console.log(`> ${message}`);

    return await this.collection('logger').doc(key).set( { message:message } );
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Aggregates mileage and durations in drive history array.
  // Track most recent drive and calculate operator currency.
  private summarize(drive_history:Drive[]): Summary
  {
    const stats:Summary = {
      drive_count: 0,
      mileage_km: 0,
      duration_minutes: 0,
      most_recent_drive: dayjs(0),
      most_recent_drive_by_vehicle_type: {},
      mileage_by_vehicle_type: {}
    }

    for (let i=0; i<drive_history.length; i++) {

      let trip = drive_history[i];

      if (trip.status === 'in-progress') {
        console.log(`[${i}] ${trip.date} *** Drive In-progress *** ${trip.id}`);
        continue;
      }

      let distance = this.distance(trip);
      let duration = this.duration(trip);

      stats.drive_count++;
      stats.mileage_km += distance;
      stats.duration_minutes += duration;

      //console.log(`[${i}] ${trip.date}, ${distance} km, ${duration} mins ${trip.id}`);

      // Update mileage per vehicle type
      if (stats.mileage_by_vehicle_type[trip.vehicle_type]) stats.mileage_by_vehicle_type[trip.vehicle_type] += distance;
      else stats.mileage_by_vehicle_type[trip.vehicle_type] = distance;

      // Update operator currency for each vehicle class
      let end_dt = dayjs(trip.date + " " + trip.end_time, 'YYYY-MM-DD HH:mm');

      if (!stats.most_recent_drive.unix() || stats.most_recent_drive.isBefore(end_dt)) {
        stats.most_recent_drive = end_dt;
      }
      if (!stats.most_recent_drive_by_vehicle_type[trip.vehicle_type] || stats.most_recent_drive_by_vehicle_type[trip.vehicle_type].isBefore(end_dt)) {
        stats.most_recent_drive_by_vehicle_type[trip.vehicle_type] = end_dt;
      }
    }

    console.log(`> Summary: mileage=${stats.mileage_km} duration=${stats.duration_minutes} drives=${drive_history.length} recent=${stats.most_recent_drive}`);
    console.log(`> Recent drives by VehicleType: ${JSON.stringify(stats.most_recent_drive_by_vehicle_type)}`);
    console.log(`> Mileage by VehicleType: ${JSON.stringify(stats.mileage_by_vehicle_type)}`);

    return stats;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Real-time data binding. This is automatically called right after any CRUD operation
  // on the current user's drive history or profile.
  private bind(login:Login): void
  {
    // For both drivers and commanders
    login.detach_bind_user = this.collection('user')
      .doc(login.user.email)
      .onSnapshot( (doc) => {
        login.user = doc.data() as User;  // Casting to interface User
        console.log("\n> Updated Login object:", login.user);
      });

    // Construct composite query depending on driver or commander (require Firestore composite index)
    var query = this.collection("drive").orderBy("date","desc").orderBy("start_time","desc");
    if (login.user.is_commander == true)
    {
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
    else
    {
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
      query.onSnapshot( (querySnapshot) => {
        login.drive_history = [];
        login.fuel_history = [];
        login.drive_in_progress = null;
        querySnapshot.forEach( (doc) => {
          let trip: Drive = doc.data() as Drive;  // Casting to interface Drive
          trip.id = doc.id;
          if (trip.company == login.user.company && trip.fleet == login.user.fleet)
            {
              login.drive_history.push(trip);
            }
          if (trip.end_time == null) login.drive_in_progress = trip;
        });
        console.log(login.drive_in_progress);

    var query = this.collection("mtrac").orderBy("created","desc");
    if (login.user.is_commander == true)
      {
        query.where("commander", "==", login.user.email);
      }
    else
      {
      query = query.where("driver", "==", login.user.email);
      }
    login.detach_bind_mtrac =
      query.onSnapshot( (querySnapshot) => {
        login.mtrac_history = [];
        login.mtrac_in_progress = null;
        querySnapshot.forEach( (doc) => {
          let form: Mtrac = doc.data() as Mtrac;  // Casting to interface Drive
          form.id = doc.id;
          if (form.company == login.user.company && form.fleet == login.user.fleet)
          {
            login.mtrac_history.push(form);
          }
          if (form.status != "completed")
          {login.mtrac_in_progress = form;}
        });});
        console.log(login.mtrac_in_progress);
        console.log(`\n> Updated Drive history for ${login.user.email}, ${login.drive_history.length} drives found.`);

        // Calculate new stats for both drivers and commanders
        login.stats = this.summarize(login.drive_history);

        // For drivers, write summarized report to database (For commanders' module)
        if (login.user.is_driver) {
          this.write("summary",login.user.email, JSON.parse(JSON.stringify(login.stats)) );
        }
        // Allow login to proceed..
        login.snapshot_wait++;
      });
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Utilities

  public duration(trip:Drive): number {
    if (!trip.end_odometer || trip.status==='in-progress') return 0; // Handle drive-in-progress
    const dayjs_format = 'YYYY-MM-DD HH:mm';
    let start_dt = dayjs(trip.date + " " + trip.start_time, dayjs_format);
    let end_dt = dayjs(trip.date + " " + trip.end_time, dayjs_format);
    let diff = end_dt.diff(start_dt,"minute");
    if (diff<0) diff += 60*24; // rollover to next day
    return diff;
  }

  public distance(trip:Drive): number {
    if (!trip.end_odometer || trip.status==='in-progress') return 0; // Handle drive-in-progress
    return trip.end_odometer - trip.start_odometer;
  }

  public formatMinutesToString(minutes: number) {
    let result: string = "";
    let show_hours=true, show_minutes=true;
    let days = Math.floor(minutes/24/60);
    if (days > 30) {
      const months = Math.floor(days / 30);
      days = days%30;
      result += months + " Months ";
      show_hours = show_minutes = false;
    }
    if (days>=1) {
      result += days + " Days ";
      show_minutes = false;
    }

    if (show_hours && show_minutes) {
      result += sprintf("%02d:%02d", Math.floor(minutes/60%24), minutes%60);
    } else {
      if (show_hours) {
        result += Math.floor(minutes/60%24) + " Hours ";
      }
      if (show_minutes) {
        result += minutes%60 + " Mins";
      }
    }
    return result;
  }

  public getTimeStamp(): string {
    return dayjs(new Date()).format('YYYY-MM-DD HH:mm');
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Test data
  private createDebugLogin(): Login
  {



    const drive_history: Drive[] = [
      {
        created: '',
        driver: 'sample@test.com',
        commander: 'commander_name',
        vehicle: '1234',
        vehicle_type: 'T',
        date: '2019-08-10',
        start_time: '13:00',
        start_location: 'NSC',
        start_odometer: 100000,
        status: 'in-progress',
        company: 'C',
        fleet: 'C',
        incamp: true,
        is_jit:true
      },
      {
        created: '',
        driver: 'sample@test.com',
        commander: 'commander_name',
        vehicle: '1235',
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
        fleet : 'C',
        incamp: true,
      }
    ];

    const user: User = {
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
      name: "Sample User",
    };

    return {
      user: user,
      drive_history: drive_history,
      snapshot_wait: 1,
      stats: this.summarize(drive_history)
    };
  }
}
