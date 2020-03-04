import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFinishedComponent } from './work-finished.component';

describe('WorkFinishedComponent', () => {
  let component: WorkFinishedComponent;
  let fixture: ComponentFixture<WorkFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
