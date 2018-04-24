import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatSidenavModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatToolbarModule, MatGridListModule, MatNavList} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
  ],
  declarations: [MatNavList],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatNavList
  ]
})
export class NgMatModule { }
