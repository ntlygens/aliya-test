import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PuttestComponent } from './puttest/puttest.component';
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: PuttestComponent,
        outlet: 'mainRO'
      },

      {
        path: '',
        component: RecipeDetailComponent,
        outlet: 'detailRO'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
