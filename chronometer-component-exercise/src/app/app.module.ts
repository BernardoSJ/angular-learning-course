import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChronometerComponent } from './components/chronometer/chronometer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChronometerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
