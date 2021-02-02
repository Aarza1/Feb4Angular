import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayyDataBindingComponent } from './two-wayy-data-binding.component';

describe('TwoWayyDataBindingComponent', () => {
  let component: TwoWayyDataBindingComponent;
  let fixture: ComponentFixture<TwoWayyDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayyDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayyDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
