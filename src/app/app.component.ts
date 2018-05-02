import { Component, OnInit } from '@angular/core';
import { VERSION, MatDialog } from '@angular/material';

import { MAIN_ROUTES } from './app-routing.module';
import { HeaderMenuData, HeaderMenuType } from './app.enum';
@Component({
  selector: 'amm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  version = VERSION;

  headerMenuItems: any[];
  constructor(private matDialog: MatDialog) {
    this.headerMenuItems = MAIN_ROUTES.filter(dRte => dRte.menuType === HeaderMenuType.NAVMENU);
  }

  ngOnInit() {

  }
}
