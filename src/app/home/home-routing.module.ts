import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { RecipeContainerComponent } from '../recipe/recipe-container/recipe-container.component';
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from '../recipe/recipe.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: RecipeContainerComponent,
        outlet: 'mainRO'
      }

    ]
  },
  {
    path: ':id',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: RecipeContainerComponent,
        outlet: 'mainRO',
      },
      /*{
        path: ':id',
        component: RecipeDetailComponent,
        outlet: 'detailRO'
      }*/
    ]
  },
  {
    path: ':id/:id',
    component: HomeComponent,
    children: [
      /*{
        path: '', component: RecipeContainerComponent, outlet: 'mainRO',
      },*/
      {
        path: '',
        component: RecipeDetailComponent,
        outlet: 'detailRO'
      },
    ]
  }
];

/*export const cat_routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: RecipeContainerComponent,
        outlet: 'mainRO'
      },
      {
        path: '',
        component: RecipeDetailComponent,
        outlet: 'detailRO'
      },

    ]
  }


];*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
