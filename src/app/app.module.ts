import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TimePickerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
