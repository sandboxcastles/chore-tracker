import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoreTrackerComponent } from './chore-tracker.component';

describe('ChoreTrackerComponent', () => {
  let component: ChoreTrackerComponent;
  let fixture: ComponentFixture<ChoreTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoreTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoreTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
