import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe/recipe.service';

@Component({
  selector: 'amm-puttest',
  template: `
    <amm-recipe
      style='max-width: 200px'
      [ngClass]=''
      *ngFor='let recipe of recipes; let idx=index;'
      [rcpeTitle]='recipe.title'
      [rcpeImg]='recipe.img'
      [rcpeDesc]='recipe.desc'
      [rcpeCat]='recipe.rcpCategory'
    ></amm-recipe>
  `,
  styles: [`
  
  `]
})
export class PuttestComponent implements OnInit {
  recipes = [];
  constructor(private rcpeSvc: RecipeService) { }

  ngOnInit() {
    this.rcpeSvc.getAllRecipes().subscribe(res => {
      console.log('res: ' + res[1].title);
      this.recipes = res;
    });
  }

}
