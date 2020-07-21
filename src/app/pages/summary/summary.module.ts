import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SummaryPage } from './summary.page';
import { DriveViewModule } from '../../drive-view/drive-view.module';
import { PipesModule } from '../../pipes/pipes.module';
import { CountdownModule } from 'ngx-countdown';

const routes: Routes = [
  {
    path: '',
    component: SummaryPage
  }
];

@NgModule({
  imports: [
    CountdownModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DriveViewModule,
    PipesModule
  ],
  declarations: [SummaryPage
  ]
})
export class SummaryPageModule {}
