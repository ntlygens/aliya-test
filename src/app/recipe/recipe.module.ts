import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from '../home/home-routing.module';
import { NgMatModule } from '../ngmat/ng-mat.module';
import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgMatModule
  ],
  declarations: [
    RecipeContainerComponent,
    RecipeComponent,
    RecipeDetailComponent
  ],
  exports: [
    RecipeContainerComponent,
    RecipeComponent,
    RecipeDetailComponent
  ]
})
export class RecipeModule { }
