import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipe.service';
import { RecipeCategory } from './recipe.enum';

@Component({
  selector: 'amm-recipe-container',
  template: `
    <amm-recipe
      style='max-width: 200px'
      [ngClass]=''
      *ngFor='let recipe of recipes; let idx=index;'
      [rcpeTitle]='recipe.title'
      [rcpeId]='recipe.rcpID'
      [rcpeCat]='recipe.rcpcategory'
      [rcpeImg]='recipe.image'
      [rcpeDesc]='recipe.desc'
      routerLinkActive='active'
      [routerLink]='recipe.rcpID'
    ></amm-recipe>
    <div style='background-color: green'>
      recipe-container works!
      <router-outlet name='rcpDetail'>[three]</router-outlet>
    </div>
    
  `,
  providers: [RecipeService],
  styles: []
})
export class RecipeContainerComponent implements OnInit {

  recipes = [];
  constructor(private rcpSvc: RecipeService) { }

  ngOnInit() {
    this.rcpSvc.getAllRecipes().subscribe( res => {
      const allRcps = res.filter( rcp => rcp.rcpcategory !== RecipeCategory.ALL );
      this.recipes = allRcps;
    });
  }

}
