import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderMenuData, HeaderMenuType } from './app.enum';
import { WelcomeComponent } from './welcome/welcome.component';

export const MAIN_ROUTES: HeaderMenuData[] = [
  { path: '', component: WelcomeComponent},
  { title: 'home', path: 'home', loadChildren: './home/home.module#HomeModule', menuType: HeaderMenuType.NAVMENU },
  { title: 'sales', path: 'sales', loadChildren: './sales/sales.module#SalesModule', menuType: HeaderMenuType.NAVMENU },

];

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
