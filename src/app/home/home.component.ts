import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { HomeService } from './home.service';
import { MatButtonToggleGroup } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material';
import { AddFormComponent } from '../forms/add-form.component';

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
  formDialogRef: MatDialogRef<AddFormComponent>

  constructor(
    private rcpeSvc: RecipeService,
    private homeSvc: HomeService,
    private actvdRte: ActivatedRoute,
    private rte: Router,
    private dialog: MatDialog
  ) {
    this.categories = this.homeSvc.getAllCategories();
    this.actvdRte.paramMap.subscribe( res => {
      this.crntCat = res['params']['id'];
      console.log('dparams: ' + this.crntCat);

    });

  }

  ngOnInit() {
    this.rcpeSvc.setSidenav(this.rcpelist);
    /*if(group.value) {
      console.log('echo: ' + group.value);
    }*/

  }

  getDValue(val: string) {
    // this.rte.navigate(['home/' + val.toLowerCase()]);
    // this.rte.navigate(['home/' + val.toLowerCase(), { outlets: {'mainRO': 'recipes'} }]);
    this.rte.navigate(['home/' + val.toLowerCase()]);

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

  addRecipe(val: string) {
    this.formDialogRef = this.dialog.open(AddFormComponent);
    console.log('recipe ' + val);

  }

  getClick(val: string) {
    console.log('string ' + val);

  }

}
