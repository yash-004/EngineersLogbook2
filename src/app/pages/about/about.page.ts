import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public platform: Platform, private authService: AuthenticationService) { }

  ngOnInit() {
  }

}
