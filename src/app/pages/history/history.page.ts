import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatabaseService, Drive, VehicleTypes } from '../../services/database.service';
import * as dayjs from 'dayjs'; // DateTime utility, See http://zetcode.com/javascript/dayjs/
import { Chart } from "chart.js";
import { PipesModule } from '../../pipes/pipes.module';
import 'chartjs-plugin-labels';
import 'chartjs-chart-radial-gauge';
import 'chartjs-tsgauge';
import {ChartsModule, Color} from 'ng2-charts';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  select_month: number = 0;
  select_year: number = 0;
  
  constructor(
    private database: DatabaseService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.buildChart();
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
    if (!this.select_month && !this.select_year) {
      if (vtype != "ALL") {
        return drives.filter( (drive) => drive.vehicle_type == vtype);
      }
      return drives
    }
    else {
      if (vtype != "ALL") {
        var  a = drives.filter( (drive) => drive.vehicle_type == vtype);
        return a.filter( (drive) => {
          var elem = drive.date.split("-");
          return (!this.select_year||parseInt(elem[0])==this.select_year)
            && (!this.select_month||parseInt(elem[1])==this.select_month);
        });
      }
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
