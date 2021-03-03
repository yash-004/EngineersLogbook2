import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor( public database: DatabaseService, private authService: AuthenticationService ) { }

  ngOnInit() {
  }

}
