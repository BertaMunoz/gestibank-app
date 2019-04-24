import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule
  ], 
  bootstrap: [ClientComponent]
})
export class ClientModule { }
