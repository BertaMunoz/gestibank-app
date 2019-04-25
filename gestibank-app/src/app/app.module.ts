import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcueilComponent } from './admin/acueil/acueil.component';
import { CreateCompteComponent } from './create-compte/create-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    AcueilComponent,
    CreateCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
