import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateReferenceVariableComponent } from './template-reference-variable.component';

describe('TemplateReferenceVariableComponent', () => {
  let component: TemplateReferenceVariableComponent;
  let fixture: ComponentFixture<TemplateReferenceVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateReferenceVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateReferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
