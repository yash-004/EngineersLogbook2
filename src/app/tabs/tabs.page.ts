import { Component, OnInit } from '@angular/core';
import { DatabaseService, Drive, Mtrac } from '../services/database.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public database: DatabaseService, private navCtrl: NavController,) { }

  ngOnInit() {
  }

  gettime() {
    var cd = new Date(); // for now
    var nmtmoringstart = new Date();
    nmtmoringstart.setHours(7,30,0);
    var nmtmoringend = new Date();
    nmtmoringend.setHours(9,30,0);
    var nmtnightstart = new Date();
    nmtnightstart.setHours(17,30,0);
    var nmtnightend = new Date();
    nmtnightend.setHours(19,30,0);
    if (cd >= nmtmoringstart && cd < nmtmoringend){
      return false;
    }
    if (cd >= nmtnightstart && cd < nmtnightend){
      return false;
    }
    return true;
  }

  public getPendingDrives() : Drive[] {
    return this.database.current.drive_history.filter( (drive) => { if (this.database.current.user.email === drive.driver) {
      return drive.status === 'pending';}
    });
  }

  public getInProgressDrives() : Drive[] {
    return this.database.current.drive_history.filter( (drive) => { if (this.database.current.user.email === drive.driver) {
      return drive.status === 'in-progress';}
    });
  }

  public getDrive() : Drive[] {
    if (this.database.current.drive_history != null){
    return this.database.current.drive_history.filter( (drive) => { if (this.database.current.user.email === drive.driver) {
      if (drive.status == "in-progress" || drive.status == "rejected"){
        return drive}
      }
    });
    }
  }

  public getVerifiedMTRAC() : Mtrac[] {
    return this.database.current.mtrac_history.filter( (form) => { if (this.database.current.user.email === form.driver)
    {return form.status === 'verified';}
    });
  }

  public getPendingMTRAC() : Mtrac[] {
    return this.database.current.mtrac_history.filter( (form) => { if (this.database.current.user.email === form.driver)
    {return form.status === 'pending';}
    });
  }

  public getIncompleteMTRAC() : Mtrac[] {
    return this.database.current.mtrac_history.filter( (form) => { if (this.database.current.user.email === form.driver)
    {return form.status != 'completed';}
    });
  }

  public clickdrive(drive: Drive): void {
    this.database.current.drive_to_edit = drive;
    //console.log(`> Navigating to AddDrivePage for drive id=${drive.id}`);
    this.navCtrl.navigateForward(['/add-drive']);
  }

 public clickmtrac(form: Mtrac): void {
    this.database.current.mtrac_to_edit = form;
    //console.log(`> Navigating to mtracPage for mtrac id=${form.id}`);
    this.navCtrl.navigateForward(['/mtrac']);
  }

}
