import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ConseillerComponent } from './conseiller.component';
import { ConseillerService } from './conseiller.service';

@NgModule({
  declarations: [ConseillerComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [ConseillerService],
  bootstrap: [ConseillerComponent]
})
export class ConseillerModule { }
