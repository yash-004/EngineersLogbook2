import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoryPage } from './history.page';
import { DriveViewModule } from '../../drive-view/drive-view.module';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: HistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
DriveViewModule,
ChartsModule
  ],
  declarations: [HistoryPage
  ]
})
export class HistoryPageModule {}
