import { Component, OnInit, ViewChild, Pipe } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { HomeService } from './home.service';

@Component({
  selector: 'amm-home',
  templateUrl: './home.component.html',
  providers: [ RecipeService, HomeService ],
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('rcpelist') rcpelist: any;
  recipes: any[];
  categories = [];

  constructor(private rcpeSvc: RecipeService, private homeSvc: HomeService) {
    this.rcpeSvc.getAllRecipes().subscribe( res => {
      this.recipes = res;
      console.log('res: ' + JSON.stringify(res));
    });

    console.log('lg: ' + this.homeSvc.getCategories());
  }

  ngOnInit() {
    this.rcpeSvc.setSidenav(this.rcpelist);
    this.rcpeSvc.sendDrawerState( {'state': 'open'});
    this.categories = this.homeSvc.getCategories();
  }

}
