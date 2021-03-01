import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'add-fuel', loadChildren: './add-fuel/add-fuel.module#AddFuelPageModule' },
  { path: 'add-drive', loadChildren: './add-drive/add-drive.module#AddDrivePageModule' },
  { path: 'boc', loadChildren: './boc/boc.module#bocPageModule' },
  { path: 'jitboc', loadChildren: './jitboc/jitboc.module#jitbocPageModule' },
  { path: 'mtrac', loadChildren: './mtrac/mtrac.module#mtracPageModule' },
  { path: 'jitmtrac', loadChildren: './jitmtrac/jitmtrac.module#jitmtracPageModule' },
  { path: 'mtracinfo', loadChildren: './mtrac/info/mtracinfo.module#mtracinfoPageModule' },
  { path: 'summary', loadChildren: './pages/summary/summary.module#SummaryPageModule' },

  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule, ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
