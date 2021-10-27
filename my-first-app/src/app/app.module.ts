import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { FatherComponent } from './father/father.component';
import { Son1Component } from './son1/son1.component';
import { Son2Component } from './son2/son2.component';
import { EventsComponent } from './events/events.component';
import { DecoratorsComponent } from './decorators/decorators.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    FatherComponent,
    Son1Component,
    Son2Component,
    EventsComponent,
    DecoratorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
