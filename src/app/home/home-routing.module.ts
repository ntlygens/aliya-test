import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PuttestComponent } from './puttest/puttest.component';
import { RecipeContainerComponent } from '../recipe/recipe-container.component';
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: RecipeContainerComponent,
        outlet: 'mainRO',
        children: [
          { path: '', component: RecipeDetailComponent, outlet: 'detailRO' },
          { path: 'home/:id', component: RecipeDetailComponent, outlet: 'detailRO' }
        ]
      },
      {
        path: ':id',
        component: PuttestComponent,
        outlet: 'mainRO',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
