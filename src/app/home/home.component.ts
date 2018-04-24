import { Component, OnInit, ViewChild } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'amm-home',
  templateUrl: './home.component.html',
  providers: [ RecipeService ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('rcpelist') rcpelist: any;
  recipes: any[];

  constructor(private rcpeSvc: RecipeService) {
    this.rcpeSvc.getAllRecipes().subscribe( res => {
      this.recipes = res;
      console.log('res: ' + JSON.stringify(res));
    });
    // console.log('rcp: ' + this.recipes);
  }

  ngOnInit() {
    this.rcpeSvc.setSidenav(this.rcpelist);
    this.rcpeSvc.sendDrawerState( {'state': 'open'});
    // this.rcpelist.opened = true;
  }

}
