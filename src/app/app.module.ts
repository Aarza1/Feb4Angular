import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';
import { TwoWayyDataBindingComponent } from './two-wayy-data-binding/two-wayy-data-binding.component';
import { EnableButtonComponent } from './enable-button/enable-button.component';
import { ClickEventComponent } from './click-event/click-event.component';
import { EventEnableButtonComponent } from './event-enable-button/event-enable-button.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { EmployeeReportComponent } from './employee-report/employee-report.component';
import { EmployeeReportType2Component } from './employee-report-type2/employee-report-type2.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TwoWayyDataBindingComponent,
    EnableButtonComponent,
    ClickEventComponent,
    EventEnableButtonComponent,
    EmployeeDetailsComponent,
    TemplateReferenceVariableComponent,
    SwitchExampleComponent,
    EmployeeReportComponent,
    EmployeeReportType2Component,
    AngularPipesComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
