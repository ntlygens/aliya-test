import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMatModule } from '../ngmat/ng-mat.module';

import { CategoryPipe } from './category/category.pipe';
import { RecipeService } from '../recipe/recipe.service';
import { RecipeModule } from '../recipe/recipe.module';
import { HomeRoutingModule } from './home-routing.module';

import { AddFormComponent } from '../forms/add-form.component';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NgMatModule,
    RecipeModule
  ],
  providers: [RecipeService],
  declarations: [
    AddFormComponent,
    HomeComponent,
    CategoryComponent,
    CategoryPipe,
  ],
  entryComponents: [
    AddFormComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
