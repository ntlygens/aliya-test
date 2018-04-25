import { Component, OnInit, ViewChild, Pipe } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { HomeService } from './home.service';
import { RecipeCategory } from '../recipe/recipe.enum';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'amm-home',
  templateUrl: './home.component.html',
  providers: [ RecipeService, HomeService ],
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('rcpelist') rcpelist: any;
  recipes = [];
  categories = [];

  constructor(private rcpeSvc: RecipeService, private homeSvc: HomeService) {
    console.log('lg: ' + this.homeSvc.getAllCategories());
  }

  ngOnInit() {
    this.rcpeSvc.setSidenav(this.rcpelist);
    this.rcpeSvc.sendDrawerState( {'state': 'open'});
    this.categories = this.homeSvc.getAllCategories();
    // this.recipes = this.rcpeSvc.getAllRecipes().subscribe( res => res );
    this.rcpeSvc.getAllRecipes().subscribe(res => {
      console.log('res: ' + res[1].title);
      this.recipes = res;
    });

    /*.filter( cat => {
        return cat.toLowerCase().includes(searchText);
      });

      this.recipes = res.filter( rcp => rcp.rcpCategory === RecipeCategory.BREAKFAST );
      console.log('res: ' + JSON.stringify(res));
    });
*/
  }

}
