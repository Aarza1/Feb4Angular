import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';
import { TwoWayyDataBindingComponent } from './two-wayy-data-binding/two-wayy-data-binding.component';
import { EnableButtonComponent } from './enable-button/enable-button.component';
import { ClickEventComponent } from './click-event/click-event.component';
import { EventEnableButtonComponent } from './event-enable-button/event-enable-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TwoWayyDataBindingComponent,
    EnableButtonComponent,
    ClickEventComponent,
    EventEnableButtonComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
