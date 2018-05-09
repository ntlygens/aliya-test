import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PuttestComponent } from './puttest/puttest.component';
import { RecipeContainerComponent } from '../recipe/recipe-container.component';
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';

export const myRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: RecipeContainerComponent,
        outlet: 'mainRO',
        children: [
          { path: ':id', component: RecipeDetailComponent, outlet: 'detailRO' },
          // { path: ':id', component: RecipeDetailComponent, outlet: 'detailRO' },
          // { path: ':id', loadChildren: '../recipe/recipe.module#RecipeModule' },
          // { path: 'home/:id', component: RecipeDetailComponent, outlet: 'detailRO' }
        ]
      },
      {
        path: ':id',
        component: RecipeContainerComponent,
        outlet: 'mainRO'
      },
      {
        path: ':id/:id',
        component: RecipeDetailComponent,
        outlet: 'detailRO'
      },
      {
        path: '',
        component: RecipeDetailComponent,
        outlet: 'detailRO'
      }
      /*{
        path: ':id',
        component: PuttestComponent,
        outlet: 'mainRO',
      }*/
    ]
  },
  /*{
    path: ':id',
    component: PuttestComponent,
    outlet: 'mainRO'
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(myRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
