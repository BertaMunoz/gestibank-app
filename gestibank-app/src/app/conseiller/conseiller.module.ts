import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ConseillerComponent } from './conseiller.component';

@NgModule({
  declarations: [ConseillerComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [ConseillerComponent]
})
export class ConseillerModule { }
