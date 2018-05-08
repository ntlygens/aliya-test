import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMatModule } from '../ngmat/ng-mat.module';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeContainerComponent } from './recipe-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecipeRoutingModule,
    NgMatModule
  ],
  declarations: [
    RecipeComponent,
    RecipeDetailComponent,
    RecipeContainerComponent
  ],
  exports: [
    RecipeComponent,
    RecipeDetailComponent,
    RecipeContainerComponent
  ]
})
export class RecipeModule { }
