import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderMenuData, HeaderMenuType } from './app.enum';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';

export const MAIN_ROUTES: HeaderMenuData[] = [
  { title: '', path: '', redirectTo: 'home', pathMatch: 'full' },
  { title: 'home', path: '', component: HomeComponent, menuType: HeaderMenuType.NAVMENU },
  { title: 'sales', path: 'sales', component: SalesComponent, menuType: HeaderMenuType.NAVMENU }
];

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
