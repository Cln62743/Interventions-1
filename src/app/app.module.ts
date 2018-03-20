import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { BienvenueComponent } from './bienvenue/bienvenue.component';
import { RouterModule } from '@angular/router';
import { ProblemeComponent } from './probleme/probleme.component';
import { AccueilComponent } from './Accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenueComponent,
    AccueilComponent,
    ProblemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
