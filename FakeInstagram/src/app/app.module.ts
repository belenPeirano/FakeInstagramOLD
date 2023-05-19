import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarreteComponent } from './photo-roll/photo-roll.component';
import { ImagesComponent } from './images/images.component';
import { UnselectedButtonComponent } from './unselected-button/unselected-button.component';
import { SelectedButtonComponent } from './selected-button/selected-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarreteComponent,
    ImagesComponent,
    UnselectedButtonComponent,
    SelectedButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
