import { Component, OnInit } from '@angular/core';
import {Router,RouterEvent} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  pages= [
    {
      title:'Create Users',
      url:'/admin/creation'
    },
    {
      title:'edit',
      url:'/admin/edit'
    },
    {
    title:'Export MTRAC',
    url:'/admin/export'
    }
  ];
    selectedPath = '';


  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
    this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

};
