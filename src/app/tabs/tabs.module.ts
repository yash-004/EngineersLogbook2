import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'about', loadChildren: '../pages/about/about.module#AboutPageModule' },
      { path: 'profile', loadChildren: '../pages/profile/profile.module#ProfilePageModule' },
      { path: 'summary', loadChildren: '../pages/summary/summary.module#SummaryPageModule' },
      { path: 'history', loadChildren: '../pages/history/history.module#HistoryPageModule' },
      { path: 'CmdHistory', loadChildren: '../pages/CmdHistory/CmdHistory.module#CmdHistoryPageModule' },
      { path: 'commander', loadChildren: '../pages/commander/commander.module#CommanderPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/summary',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
