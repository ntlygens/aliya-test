import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { HomeService } from './home.service';
import { MatButtonToggleGroup } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private rcpeSvc: RecipeService, private homeSvc: HomeService, private actvdRte: ActivatedRoute, private rte: Router) {
    this.categories = this.homeSvc.getAllCategories();
    this.actvdRte.paramMap.subscribe( res => {
      this.crntCat = res['params']['id'];
      console.log('dparams: ' + this.crntCat);

    });
  }

  ngOnInit() {
    this.rcpeSvc.setSidenav(this.rcpelist);

  }

  getDValue(val: string) {
    // this.rte.navigate(['home/' + val.toLowerCase()]);
    // this.rte.navigate(['home/' + val.toLowerCase(), { outlets: {'mainRO': 'recipes'} }]);
    this.rte.navigate(['home/' + val.toLowerCase()]);

  }

}
