import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { rootRouterConfig } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client/client.component';
import { AddClientComponent } from './client/add-client/add-client.component';

import { CreateCompteComponent } from './create-compte/create-compte.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent, 
    ClientComponent,
    AddClientComponent,
    CreateCompteComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
