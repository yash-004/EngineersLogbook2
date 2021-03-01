import { Component, OnInit } from '@angular/core';
import { DatabaseService, Drive, VehicleTypes } from '../../services/database.service';
import * as dayjs from 'dayjs'; // DateTime utility, See http://zetcode.com/javascript/dayjs/;

import { API, Auth, graphqlOperation } from 'aws-amplify';
import * as queries from '../../services/graphql/queries';
import * as mutations from '../../services/graphql/mutations';
import * as subscriptions from '../../services/graphql/subscriptions';

@Component({
  selector: 'app-cmd_history',
  templateUrl: './CmdHistory.page.html',
  styleUrls: ['./CmdHistory.page.scss'],
})
export class CmdHistoryPage implements OnInit {

  select_month: number = 0;
  select_year: number = 0;

  constructor(
    private database: DatabaseService,
  ) { }

  ngOnInit() {
    this.buildChart();
    // let watch = this.geolocation.watchPosition();
    // watch.subscribe(async (data) => {
    //   if ( ( parseFloat(data.coords.latitude.toFixed(9)), parseFloat(data.coords.longitude.toFixed(9)) ) != (this.database.current.user.location.lat, this.database.current.user.location.lng) )
    //   { 
    //     this.database.current.user.location = {lat: parseFloat(data.coords.latitude.toFixed(9)),lng: parseFloat(data.coords.longitude.toFixed(9))};
    //     console.log(this.database.current.user.location);
    //     console.log("write");
    //     this.database.current.user.location = JSON.stringify(this.database.current.user.location)
    //     // this.database.write('user', this.database.current.user.email, this.database.current.user);
    //     var updateuser = await API.graphql(graphqlOperation(mutations.updateUser, {input: {...this.database.current.user, createdAt: undefined, updatedAt: undefined}}))
    //     console.log("updateuser", updateuser)

    //     this.database.current.user.location = JSON.parse(this.database.current.user.location)
    //   }
    // });
  }

  public getMileage() {
    var mileage = 0;
    var drives = this.getDrives();
    for (var d of drives) {
      mileage += d.end_odometer - d.start_odometer }
    return mileage;
  }

  getMileagebyVehicleType(vehicle: string) {
    var mileage = 0;
    var drives = this.getDrives();
    for (var d of drives) {
      if (d.vehicle_type == vehicle) {
        mileage += d.end_odometer - d.start_odometer }
      }
    return mileage;
  }

  public getDrives() : Drive[] {

    var drives = this.database.current.drive_history;
    var vtype = (<HTMLInputElement>document.getElementById("vehitype")).value;
    var drvr = (<HTMLInputElement>document.getElementById("drvr")).value;
    // 4 cases
    // if vtype = X and drvr = X
    // if vtype = ALL and drvr = X
    // if vtype = X and drvr = ALL
    // if vtype = ALL and drvr = ALL
    if (!this.select_month && !this.select_year) {
      // if vtype = X and drvr = X
      if (vtype != "ALL" && drvr != "ALL") {
        var r = drives.filter( (drive) => drive.vehicle_type == vtype);
        return r.filter( (drive) => drive.driver == drvr);
      }
      // if vtype = ALL and drvr = X
      else if (vtype == "ALL" && drvr != "ALL") {
        return drives.filter( (drive) => drive.driver == drvr);
      }
      // if vtype = X and drvr = ALL
      else if (vtype != "ALL" && drvr == "ALL") {
        return drives.filter( (drive) => drive.vehicle_type == vtype);
      }
      // if vtype = ALL and drvr = ALL
      return drives
    }
    else {
      // if vtype = X and drvr = X
      if (vtype != "ALL" && drvr != "ALL") {
        var r =drives.filter( (drive) => drive.vehicle_type == vtype);
        var r =r.filter( (drive) => drive.driver == drvr);
        return r.filter( (drive) => {
          var elem = drive.date.split("-");
          return (!this.select_year||parseInt(elem[0])==this.select_year)
            && (!this.select_month||parseInt(elem[1])==this.select_month);
        });
      }
      // if vtype = ALL and drvr = X
      else if (vtype == "ALL" && drvr != "ALL") {
        var r =drives.filter( (drive) => drive.driver == drvr);
        return r.filter( (drive) => {
          var elem = drive.date.split("-");
          return (!this.select_year||parseInt(elem[0])==this.select_year)
            && (!this.select_month||parseInt(elem[1])==this.select_month);
        });
      }
      // if vtype = X and drvr = ALL
      else if (vtype != "ALL" && drvr == "ALL") {
        var r =drives.filter( (drive) => drive.vehicle_type == vtype);
        return r.filter( (drive) => {
          var elem = drive.date.split("-");
          return (!this.select_year||parseInt(elem[0])==this.select_year)
            && (!this.select_month||parseInt(elem[1])==this.select_month);
        });
      }
      // if vtype = ALL and drvr = ALL
      return drives.filter( (drive) => {
        var elem = drive.date.split("-");
        return (!this.select_year||parseInt(elem[0])==this.select_year)
          && (!this.select_month||parseInt(elem[1])==this.select_month);
      });
    }
  }

  /*public getDrives() : Drive[] {

    var drives = this.database.current.drive_history;

    if (!this.select_month && !this.select_year) return drives; // No filter

    return drives.filter( (drive) => {
      var elem = drive.date.split("-");
      return (!this.select_year||parseInt(elem[0])==this.select_year) 
        && (!this.select_month||parseInt(elem[1])==this.select_month);
    });
  }*/
  
  public getFilterPeriodString(): string {
    if (this.select_month==0 || this.select_year==0) {
      return "All";
    } else {
      const dt = dayjs(new Date(this.select_year, this.select_month-1, 1));  // months in dayjs, Jan=0
      return dt.format("MMMM, YYYY");
    }
  }
  
  public incrementFilterPeriod(delta: number) {

    const today = dayjs();

    var changed: boolean = true;
    
    if (delta==-1) {
      if (!this.select_month || !this.select_year) {
        // Current month/year
        this.select_month = today.month()+1;
        this.select_year = today.year();
      } else {
        this.select_month--;
        if (this.select_month==0) { 
          // Roll back to previous year
          this.select_year--; 
          this.select_month = 12;
        }
      }
    } else {
      if (!this.select_month || !this.select_year) {
        // Can't increment
        changed = false;
      } else {
        // When incrementing beyond current month/year, select "all"
        if (this.select_year==today.year() && (this.select_month-1)==today.month()) {
          this.select_year = this.select_month = 0;
        } else {
          this.select_month++;
          if (this.select_month==13) { 
            // Roll over to next year
            this.select_year++; 
            this.select_month = 1;
          }
        }
      }
    }
    if (changed) this.buildChart();
  }

  // Build Doughnut chart of mileage per VehicleType
  public chartLabels:string[] = Object.keys(this.database.current.stats.most_recent_drive_by_vehicle_type);
  public chartData:number[] = [ 0,0,0,0 ];
  public chartType:string = 'doughnut';
  public chartColors:any[] = [{backgroundColor: [
            "rgba(255,99,132,0.2)",
            "rgba(54, 162, 235,0.2)",
            "rgba(255, 206, 86,0.2)",
            "rgba(75, 192, 192,0.2)",
            "rgba(153, 102, 255,0.2)",],
            borderColor: [
            "rgba(255,99,132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",]
            }];
  public chartOptions = {
    responsive: true,
    legend: {
      onClick: (e) => e.stopPropagation()
    }
  };
          
  private buildChart(): void {

    var count:number[] = Array(this.chartLabels.length).fill(0)
    
    this.getDrives().map( (trip) => {
      var valid_type = false;
      for (let i=0; i<this.chartLabels.length; i++) {
        if (trip.vehicle_type === this.chartLabels[i]) {
          count[i] += this.database.distance(trip);
          valid_type = true;
        }
      }
      if (!valid_type) { console.log(`### Error: Invalid vehicle type: ${trip.vehicle_type} in ${trip.id}`); }
    });
    
    //console.log(`>buildChart() = ${count}`);
    this.chartData = count;
  }
  
  public chartClicked(e:any):void {
    //console.log(e);
  }
  public chartHovered(e:any):void {
    //console.log(e);
  }

}
