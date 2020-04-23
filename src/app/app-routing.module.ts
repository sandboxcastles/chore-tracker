import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './site/components/about/about.component';
import { HomeComponent } from './site/components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'auth', loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule) },
  { path: 'chore-tracker', loadChildren: () => import('./feature/chore-tracker/chore-tracker.module').then(m => m.ChoreTrackerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
