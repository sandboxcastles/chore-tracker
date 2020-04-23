import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoreTrackerRoutingModule } from './chore-tracker-routing.module';
import { ChoreTrackerComponent } from './chore-tracker.component';


@NgModule({
  declarations: [ChoreTrackerComponent],
  imports: [
    CommonModule,
    ChoreTrackerRoutingModule
  ]
})
export class ChoreTrackerModule { }
