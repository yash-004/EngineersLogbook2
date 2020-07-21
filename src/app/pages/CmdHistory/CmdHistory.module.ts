import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CmdHistoryPage } from './CmdHistory.page';
import { DriveViewModule } from '../../drive-view/drive-view.module';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: CmdHistoryPage
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
  declarations: [CmdHistoryPage
  ]
})
export class CmdHistoryPageModule {}
