import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderMenuData, HeaderMenuType } from './app.enum';
// import { HomeComponent } from './home/home.component';
// import { routes, cat_routes } from './home/home-routing.module';
// import { PuttestComponent } from './home/puttest/puttest.component';
// import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const MAIN_ROUTES: HeaderMenuData[] = [
  { path: '', component: WelcomeComponent},
  { title: 'home', path: 'home', loadChildren: './home/home.module#HomeModule', menuType: HeaderMenuType.NAVMENU },
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { title: 'home', path: 'home', children: routes, menuType: HeaderMenuType.NAVMENU },
  // { title: 'cat', path: 'home/:id', children: cat_routes, menuType: HeaderMenuType.CATMENU },
  // { title: 'cat', path: 'home/:id', loadChildren: './home/home.module#HomeModule', menuType: HeaderMenuType.CATMENU },
  { title: 'sales', path: 'sales', loadChildren: './sales/sales.module#SalesModule', menuType: HeaderMenuType.NAVMENU },

];

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
