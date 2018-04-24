import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesComponent } from './sales.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SalesComponent],
  exports: [SalesComponent]
})
export class SalesModule { }
