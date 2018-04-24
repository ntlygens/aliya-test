import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatModule } from '../ngmat/ng-mat.module';
import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  imports: [
    CommonModule,
    NgMatModule
  ],
  declarations: [
    RecipeComponent,
    RecipeDetailComponent
  ],
  exports: [
    RecipeComponent,
    RecipeDetailComponent
  ]
})
export class RecipeModule { }
