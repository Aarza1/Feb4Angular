import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEnableButtonComponent } from './event-enable-button.component';

describe('EventEnableButtonComponent', () => {
  let component: EventEnableButtonComponent;
  let fixture: ComponentFixture<EventEnableButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEnableButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEnableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
