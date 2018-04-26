import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatSidenavModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatToolbarModule, MatGridListModule, MatNavList,
  MatDividerModule
} from '@angular/material';

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
    MatDividerModule
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
    MatDividerModule,
    MatNavList
  ]
})
export class NgMatModule { }
