import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidelecModule } from './widelec/widelec.module';
import { NoSuchPlaceComponent } from './no-such-place/no-such-place.component';

@NgModule({
  declarations: [
    AppComponent,
    NoSuchPlaceComponent
  ],
  imports: [
    BrowserModule,
    WidelecModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
