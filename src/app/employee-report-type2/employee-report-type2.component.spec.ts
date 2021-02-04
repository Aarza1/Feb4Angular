import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReportType2Component } from './employee-report-type2.component';

describe('EmployeeReportType2Component', () => {
  let component: EmployeeReportType2Component;
  let fixture: ComponentFixture<EmployeeReportType2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReportType2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReportType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
