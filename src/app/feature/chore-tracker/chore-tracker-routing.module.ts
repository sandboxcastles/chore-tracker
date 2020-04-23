import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoreTrackerComponent } from './chore-tracker.component';

const routes: Routes = [{ path: '', component: ChoreTrackerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoreTrackerRoutingModule { }
