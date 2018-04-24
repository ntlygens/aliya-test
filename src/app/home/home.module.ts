import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMatModule } from '../ngmat/ng-mat.module';
import { RecipeModule } from '../recipe/recipe.module';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RecipeService } from '../recipe/recipe.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgMatModule,
    RecipeModule
  ],
  providers: [RecipeService],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
