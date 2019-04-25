import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [AdminComponent]

})
export class AdminModule { }
