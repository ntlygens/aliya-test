import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMatModule } from '../ngmat/ng-mat.module';

import { CategoryPipe } from './category/category.pipe';
import { RecipeService } from '../recipe/recipe.service';
import { RecipeModule } from '../recipe/recipe.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { PuttestComponent } from './puttest/puttest.component';
// import { RecipeContainerComponent } from '../recipe/recipe-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    NgMatModule,
    RecipeModule
  ],
  providers: [RecipeService],
  declarations: [HomeComponent, CategoryComponent, CategoryPipe, PuttestComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
