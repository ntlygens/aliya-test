import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';
import { RecipeContainerComponent } from './recipe-container.component';

const routes: Routes = [
      {
        path: '',
        component: RecipeDetailComponent,
        /*children: [
          { path: ':id', component: RecipeDetailComponent, outlet: 'detailRO' }
        ],*/
        outlet: 'detailRO'

      },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
