import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableButtonComponent } from './enable-button.component';

describe('EnableButtonComponent', () => {
  let component: EnableButtonComponent;
  let fixture: ComponentFixture<EnableButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnableButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
