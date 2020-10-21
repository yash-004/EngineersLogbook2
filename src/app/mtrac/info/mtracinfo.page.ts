import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mtrac-info',
  templateUrl: './mtracinfo.page.html',
  styleUrls: ['./mtracinfo.page.scss'],
})

export class mtracinfoPage implements OnInit {
  ngOnInit(){}

  constructor(
    private navCtrl: NavController
  ){}

  onCancel() {
    this.navCtrl.pop();
  }
} 