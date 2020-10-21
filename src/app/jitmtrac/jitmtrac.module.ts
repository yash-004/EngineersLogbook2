import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { jitmtracPage } from './jitmtrac.page';

import { SignaturePadModule } from 'angular2-signaturepad'

const routes: Routes = [
  {
    path: '',
    component: jitmtracPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SignaturePadModule,
    RouterModule.forChild(routes)
  ],
  declarations: [jitmtracPage]
})
export class jitmtracPageModule {}
