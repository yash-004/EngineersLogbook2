import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';

const routes: Routes = [
{
path:'menu',
component:MenuPage,
children: [
{
path: 'creation', loadChildren: './creation/creation.module#CreationPageModule' },
{
path: 'edit', loadChildren: './edit/edit.module#EditPageModule' },
{
path: 'export', loadChildren: './export/export.module#ExportPageModule' },
]
}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
