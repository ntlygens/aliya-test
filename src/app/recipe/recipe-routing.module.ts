import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';
import { RecipeContainerComponent } from './recipe-container.component';
import { PuttestComponent } from '../home/puttest/puttest.component';

const routes: Routes = [
      {
        path: 'home/:id',
        component: PuttestComponent,
        // outlet: 'rcpDetail'
      },
      /*{
        path: 'home/:id',
        component: PuttestComponent,
        /!*children: [
          { path: '', component: RecipeDetailComponent, outlet: 'rcpDetail' }
          // { path: '', component: RecipeDetailComponent, outlet: 'mainRO' }
        ],*!/
        // outlet: 'rcpDetail'

      },*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
