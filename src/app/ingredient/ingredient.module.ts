import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientComponent } from './ingredient.component';
import { IngredientDetailComponent } from './ingredient-detail/ingredient-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IngredientComponent,
    IngredientDetailComponent
  ],
  exports: [
    IngredientComponent,
    IngredientDetailComponent
  ]
})
export class IngredientModule { }
