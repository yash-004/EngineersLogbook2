import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatabaseService, VehicleTypes, Drive, Mtrac } from '../../services/database.service';
import * as dayjs from 'dayjs';
import { Chart } from "chart.js";
import { PipesModule } from '../../pipes/pipes.module';
import 'chartjs-plugin-labels';
import 'chartjs-chart-radial-gauge';
import 'chartjs-tsgauge';
import { Geolocation } from '@ionic-native/geolocation/ngx';

//Chart.defaults.global.defaultFontSize = 10;
//Chart.defaults.global.maintainAspectRatio = true;

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})

export class SummaryPage implements OnInit {

  constructor( 
    public database: DatabaseService,
    private navCtrl: NavController,
    private geolocation: Geolocation,
  ) { }

  drivestatus = 9 > 10;
  mileagestatus = 9 > 10;
  otherstatus = 9 > 10;

  ngOnInit() {
    this.initCharts();
  }

  public checkOperatorCurrencyValid(date:any){
    const today = dayjs();
    var period = 8;
    return today.diff(date,"day") < period ;
  }

  public getnmtimemorning() {
    var cd = new Date(); // for now
    var nmtmoringstart = new Date();
    nmtmoringstart.setHours(7,30,0);
    var nmtmoringend = new Date();
    nmtmoringend.setHours(9,30,0);
    if (cd >= nmtmoringstart && cd < nmtmoringend){
      return false;
    }
    return true;
  }

  public getnmtimenight() {
    var cd = new Date(); // for now
    var nmtnightstart = new Date();
    nmtnightstart.setHours(17,30,0);
    var nmtnightend = new Date();
    nmtnightend.setHours(19,30,0);
    if (cd >= nmtnightstart && cd < nmtnightend){
      return false;
    }
    return true;
  }

  public checkOperatordaysCurrencyValid(date:any, vehicletype?:string){
    const today = dayjs();
    //var period = vehicletype==="BELREX" ? 30 : 7;
    var period = 8
    var left = period - today.diff(date,"day")
    if (left < 0) {
      return "JIT OVERDUE by " + Math.abs(left).toString() + " days";
    }
    else {
      return left.toString() + " days left";
    }
  }

  public checkOperatorCurrencyInvalid(date:any){
    const today = dayjs();
    var period = 8;
    return today.diff(date,"day") > period ;
  }

  public showdrives(){
    this.drivestatus = !this.drivestatus;
  }

  public checkDriveStatus(){
    return this.drivestatus;
  }

  public showmileage(){
    this.mileagestatus = !this.mileagestatus;
  }

  public checkMileageStatus(){
    return this.mileagestatus;
  }

  public checkTimelefttoJIT(date: any) {
    const today = dayjs();
    var period = 8;
    var left = period - today.diff(date,"day");
    if (left < 0)
    {
      return false;
    }
    return true;
  }

  public getTimelefttoJIT(date:any) {
    var today = dayjs();
    var period = 7*24*60*60;
    var left = period - today.diff(date,"s");
    return left;
  }

  public getMileagebyVehicleType(data: any,vehicle: any) {
    for (var type of VehicleTypes) {
      if (type == vehicle) {
        if (data[type] != null) {
          return data[type] + " km";
        }
      }
    }
  }

  public getDrivesbyVehicleType(vehicle: any) {
    for (var type of VehicleTypes) {
      var drv = 0
      if (type == vehicle){
        for (let trip of this.database.current.drive_history) {
          if (trip.vehicle_type == vehicle) {
            drv += 1;
          }
        }
      return drv;
      }
    }
  }

  public getVerifiedMTRAC() : Mtrac[] {
    return this.database.current.mtrac_history.filter( (form) => { if (this.database.current.user.email === form.driver)
    {return form.status === 'verified';}
    });
    }

  public getNotifications() {

    var result: Array<any> = [];
    for (let trip of this.database.current.drive_history) {

      let date_str = dayjs(`${trip.date} ${trip.start_time}`,'YYYY-MM-DD HH:mm').format('dddd, MMM DD, YYYY');
      let distance = this.database.distance(trip);
      let drive_msg = `Completed ${distance} km drive, from ${trip.start_location} (${trip.start_time}) to ${trip.end_location} (${trip.end_time}).`;

      if (trip.status === 'in-progress') {
        result.push( { 
          subtitle: "Drive-In-Progress",
          title: date_str,
          text: `Journey started from location ${trip.start_location} at ${trip.start_time}.`,
          trip: trip
        });
      } else
      if (trip.status === 'pending') {
        result.push( { 
          subtitle: "Awaiting Review",
          title: date_str,
          text: drive_msg, 
          trip: trip
        });
      } else
      if (trip.status === 'rejected') {
        result.push( { 
          subtitle: "Drive Rejected (Action Required)",
          title: date_str,
          text: drive_msg, 
          trip: trip
        });
      }
    }
    return result;
  }
  
  public click(drive: Drive): void {
    this.database.current.drive_to_edit = drive;
    console.log(`> Navigating to AddDrivePage for drive id=${drive.id}`);
    this.navCtrl.navigateForward(['/add-drive']);
  }

 public clickmtrac(form: Mtrac): void {
    this.database.current.mtrac_to_edit = form;
    console.log(`> Navigating to mtracPage for mtrac id=${form.id}`);
    this.navCtrl.navigateForward(['/mtrac']);
  }

  // Charts
  // References: https://www.joshmorony.com/adding-responsive-charts-graphs-to-ionic-2-applications/  

  @ViewChild("chartCanvas1", {static:true}) chartCanvas1: ElementRef;
  @ViewChild("chartCanvas2", {static:true}) chartCanvas2: ElementRef;
  @ViewChild("chartCanvas5", {static:true}) chartCanvas5: ElementRef;

  private initCharts(): void {



/*
   this.makeChart1(this.chartCanvas1);
*/
    //this.makeChart2(this.chartCanvas2, this.database.current.stats.mileage_by_vehicle_type);
    this.getStatus();

    this.makeChart2(this.chartCanvas2, this.database.current.stats.mileage_by_vehicle_type, this.database.current.stats.mileage_km);
    if (this.database.current.stats.mileage_km > 1000 && this.database.current.stats.mileage_km < 4000) {
      var maxVal= 4000-this.database.current.stats.mileage_km;
      this.makeChart5(this.chartCanvas3, this.database.current.stats.mileage_km, maxVal, 0);
    }
    else if (this.database.current.stats.mileage_km < 1000 && this.database.current.stats.mileage_km < 4000) {
      var overseas= 1000-this.database.current.stats.mileage_km;
      var maxVal= 4000-this.database.current.stats.mileage_km;
      this.makeChart5(this.chartCanvas3, this.database.current.stats.mileage_km, maxVal, overseas);
    }
    }

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

  private getStatus(){
      return false;
  }

  private makeChart2(canvas: ElementRef, data: any): Chart {

    var mileage = [];
    for (var type of VehicleTypes) {
      mileage.push(data[type]);
    }
    
    return new Chart(canvas.nativeElement, {
      type: "bar",
      data: {
        labels: VehicleTypes,
        datasets: [
        {
          label: "Your Mileage by Vehicle Types",
//          data: [54, 13, 227, 136],
          data: mileage,
          borderWidth: 2,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
        },
      ]
      },
      options: {
        plugins: {
          labels: {
              render: () => {}
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
  }

  private makeChart3(canvas: ElementRef, value: number, max_value: number, overseas: number): Chart {
    return new Chart(canvas.nativeElement, {
      type:"doughnut",
      data: {
          labels : ["Mileage", "Overseas" ,"Conversion"],
          datasets: [
          {
            label: "Licence Conversion",
            borderWidth: 1,
            data : [value, null, max_value],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)"],
            weight: 1.05,
          },
          {
            label: "Overseas",
            borderWidth: 1,
            data : [value, overseas, null],
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
          fontSize: 14,
        },
        legend: {
          display: true,
          position: "left",
        },
        plugins: {
          labels: {
            render: function(args) {
              if (args.value > 0.12*overseas) {
               return args.value+' km';
               };
            },
            arc: true,
            textShadow: true,
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.4)',
            fontColor: 'rgba(0,0,0,1)',
          },
        },
        circumference: Math.PI,
        rotation : Math.PI,
        cutoutPercentage : 80,
      }
    });
  }

  private makeChart4(canvas: ElementRef, data: any, total_mileage: number): Chart {
    var mileage = [];
    var i = -1;
    var drives = [];
    var values = []
    var data_array = [0,0,0,0,0,total_mileage];
    for (var type of VehicleTypes) {
      var data_array = [0,0,0,0,0,total_mileage];
      if (data[type] != null){
        i += 1;
        data_array[i] = data[type];
        values.push(data[type]);
        data_array.pop();
        data_array.push(total_mileage-data[type]);
        drives.push(type);
        var newDataset = {
          backgroundColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",],
          data: data_array,
          label: type,
          borderWidth: 1,
          responsive: true,
        };
      mileage.push(newDataset);
      };
    };

    return new Chart(canvas.nativeElement, {
      type:"doughnut",
      data: {
        datasets: mileage,
        labels: drives,
      },
      options: {
        //showMarkers: true,
        legend: {
          display: true,
          position: "right",
        },
        title: {
          display: true,
          text: 'Your Mileage by Vehicle Types',
          fontSize: 14,
        },
        plugins: {
          labels: {
            render: function(args) {
              if (values.findIndex(x => x === args.value) != -1) {
                return args.value+' km'};
            },
            arc: true,
            textShadow: true,
            shadowBlur: 10,
            shadowColor: 'rgba(0,0,0,0.4)',
            fontColor: 'rgba(0,0,0,1)',
          },
        },
        circumference: Math.PI,
        rotation : Math.PI,
        cutoutPercentage : 33,
        maintainAspectRatio: true,
        responsive: true,
      }
    });
  }
  private makeChart5(canvas: ElementRef, value: number, max_value: number, overseas: number): Chart {
    return new Chart(canvas.nativeElement, {
      type: "horizontalBar",
      data: {
        labels: ["Overseas" ,"Conversion"],
        datasets: [
        {
            label: "Mileage",
            borderWidth: 1,
            data : [value, value],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 99, 132)",]
        },{
            label: "Conversion",
            borderWidth: 1,
            data : [overseas, max_value],
            backgroundColor: [
              "rgb(255, 205, 86)",
              "rgb(54, 162, 235)",
              ]
        }
      ]
      },
      options: {
        plugins: {
          labels: {
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
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  }
}
