import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/material';

import { MAIN_ROUTES } from './app-routing.module';
import { HeaderMenuType } from './app.enum';
@Component({
  selector: 'amm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  version = VERSION;

  headerMenuItems: any[];
  constructor() {
    this.headerMenuItems = MAIN_ROUTES.filter(dRte => dRte.menuType === HeaderMenuType.NAVMENU);
  }

  ngOnInit() {

  }
}
