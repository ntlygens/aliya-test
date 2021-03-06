import { Component, OnInit, ViewChild, ViewEncapsulation, Pipe } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { RecipeCategory } from '../recipe/recipe.enum';
import { Observable } from 'rxjs/Observable';
import { MatButtonToggleGroup } from '@angular/material';

@Component({
  selector: 'amm-home',
  templateUrl: './home.component.html',
  providers: [ RecipeService, HomeService ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('rcpelist') rcpelist: any;
  @ViewChild('group') toggleGroup: MatButtonToggleGroup;
  recipes = [];
  categories = [];
  crntCat: any;

  showOutlet: boolean;

  constructor(private rcpeSvc: RecipeService, private homeSvc: HomeService, private router: Router) {
    this.categories = this.homeSvc.getAllCategories();
    // console.log('lg: ' + this.homeSvc.getAllCategories());
    // console.log('cats: ' + JSON.stringify(RecipeCategory));
  }

  ngOnInit() {
    this.rcpeSvc.setSidenav(this.rcpelist);
    this.rcpeSvc.sendDrawerState( {'state': 'open'});
    // this.categories = this.homeSvc.getAllCategories();
    // this.recipes = this.rcpeSvc.getAllRecipes().subscribe( res => res );
    /*this.rcpeSvc.getAllRecipes().subscribe(res => {
      console.log('res: ' + res[1].title);
      this.recipes = res;
    });*/
    this.showOutlet = false;

  }

  /*ngDoCheck() {
    // toggleGroup: MatButtonToggleGroup
    // console.log('cats: ' + this.categories);
    switch (true) {
      case (this.categories.indexOf(this.toggleGroup.value) > -1) :
        console.log('here ' + this.toggleGroup.value);
        break;
      default:
        console.log('not here ' + this.toggleGroup.value);
        break;
    }
  }*/

  getDValue(val: string) {
    // console.log('rec: ' + JSON.stringify(this.recipes) + ' - ' + val);
    this.router.navigate(['home/' + val.toLowerCase(), { outlets: { 'mainRO': [val.toLowerCase()], 'detailRO': []}} ]);

    this.rcpeSvc.getAllRecipes().subscribe(res => {
      console.log('res: ' + res[1].title);
      const allRecipes = res.filter(dRte => dRte.rcpcategory === val);
      this.recipes = allRecipes;
    });

    /*const recCat =
    console.log('recCat: ' + JSON.stringify(recCat));
    this.recipes = recCat;*/
    /*const dItems = this.rcpeSvc.getAllRecipes().subscribe( res => {
      // res;
      console.log('r: ' + JSON.stringify(res) );
      return res;*/

    // });
    // console.log('value: ' + dItems[0]['title']);
  }

  onActivate(event: any) {
    this.showOutlet = true;
  }

  onDeactivate(event: any) {
    this.showOutlet = false;
  }
}
