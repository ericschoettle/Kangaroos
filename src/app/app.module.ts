import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { JackComponent } from './jack/jack.component';
import { JillComponent } from './jill/jill.component';
import { JoeyComponent } from './joey/joey.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    JackComponent,
    JillComponent,
    JoeyComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
