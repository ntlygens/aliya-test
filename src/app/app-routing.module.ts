import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderMenuData, HeaderMenuType } from './app.enum';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';
import { myRoutes } from './home/home-routing.module';
import { RecipeContainerComponent } from './recipe/recipe-container.component';

export const MAIN_ROUTES: HeaderMenuData[] = [
  /*{ title: 'home', path: 'home', loadChildren: './home/home.module#HomeModule', menuType: HeaderMenuType.NAVMENU },
  { title: 'sales', path: 'sales', loadChildren: './sales/sales.module#SalesModule', menuType: HeaderMenuType.NAVMENU },*/

  { path: '', component: HomeComponent },
  { title: 'home', path: 'home', children: myRoutes, menuType: HeaderMenuType.NAVMENU },
  // { title: 'cat', path: 'home/:id', component: RecipeContainerComponent, menuType: HeaderMenuType.NAVMENU },
  { title: 'sales', path: 'sales', component: SalesComponent, menuType: HeaderMenuType.NAVMENU }
];

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
