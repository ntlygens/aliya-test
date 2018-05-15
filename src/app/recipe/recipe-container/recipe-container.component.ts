import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router} from '@angular/router';
import { isUndefined } from 'util';

@Component({
  selector: 'amm-recipe-container',
  template: `
    <amm-recipe
      style='max-width: 200px'
      [ngClass]=''
      *ngFor='let recipe of recipes; let idx=index;'
      [rcpeTitle]='recipe.title'
      [rcpeImg]='recipe.img'
      [rcpeDesc]='recipe.desc'
      [rcpeCat]='recipe.rcpCategory'
      [rcpeID]='recipe.id'
    ></amm-recipe>
  `,
  styles: [],
  providers: [RecipeService]
})
export class RecipeContainerComponent implements OnInit {

  recipes = [];
  constructor(private route: ActivatedRoute, private rte: Router, private rcpeSvc: RecipeService) {
    this.route.paramMap.subscribe( dRte => {
      /*console.log('rcN: ' + JSON.stringify(dRte));
      this.rcpeSvc.getAllRecipes().subscribe( res => {
        const allRecipes = res.filter(dRoute => dRoute.rcpCategory !== dRte);
        this.recipes = allRecipes;
      });*/
      /*const catRoute = dRte['params']['id'];
      console.log('iii: ' + catRoute);
      if (isUndefined(catRoute) || !catRoute || catRoute === '') {
        console.log('rcN: ' + catRoute + ' - no route submitted');
        this.rcpeSvc.getAllRecipes().subscribe( res => {
          const allRecipes = res.filter(dRoute => dRoute.rcpCategory === 'BREAKFAST');
          this.recipes = allRecipes;
        });
      } else {
        console.log('rcY: ' + catRoute + ' - route provided');
        this.rcpeSvc.getAllRecipes().subscribe( res => {
          const allRecipes = res.filter( dRoute => dRoute.rcpCategory === catRoute );
          this.recipes = allRecipes;
        });
      }*/

    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe( dRte => {
      const catRoute = dRte['params']['id'];
      console.log('iii: ' + catRoute);
      if (isUndefined(catRoute) || !catRoute || catRoute === '') {
        this.noSubmittedRte();

      } else {
        console.log('rcY: ' + catRoute + ' - route provided');
        this.rcpeSvc.getAllRecipes().subscribe( res => {
          const allRecipes = res.filter( dRoute => dRoute.rcpCategory === catRoute );
          this.recipes = allRecipes;
        });
      }
    });


    // this.recipes =
      // const te = this.rcpeSvc.getCatRecipes('BREAKFAST');
    /*this.rcpeSvc.getAllRecipes().subscribe(res => {
      console.log('res: ' + res[1].title);
      const allRecipes = res.filter(dRte => dRte.rcpCategory !== 'ALL');
      this.recipes = allRecipes;
    });*/
    // console.log('l: ' + te);
    // console.log('l: ' + this.recipes);
  }

  noSubmittedRte() {
    this.rcpeSvc.getAllRecipes().subscribe( res => {
      const allRecipes = res.filter( dRoute => dRoute.rcpCategory === 'BREAKFAST');
      this.recipes = allRecipes;
      console.log('default');
    });

  }

}