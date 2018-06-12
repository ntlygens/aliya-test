import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeFormData } from './recipe.enum';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'amm-recipe',
  template: `
    <mat-card class="rcpeCard" >
      <mat-card-header>
        <mat-card-title *ngIf='hasTitle'>{{rcpeTitle}}</mat-card-title>
        <mat-card-title *ngIf='!hasTitle'>{{rcpeTitle}}</mat-card-title>
        <mat-card-subtitle>{{rcpeCat}}</mat-card-subtitle>
      </mat-card-header>
      <div class='user-img'>
        <!--<div #rcpeImage><ng-content select='mat-nav-list-item'></ng-content></div>-->
        <img *ngIf='hasImage' [src]='rcpeImg' mat-card-image >
        <img *ngIf='!hasImage' src='../../assets/chefs-hat.png' mat-card-image >
        <!--<img *ngIf=''-->
        <!--<img *ngIf='rcpeImage.children.length === 0' mat-card-image src="../../assets/chefs-hat.png" >-->
      </div>

      <mat-card-content>
        <!--<div #rcpeCntnt><ng-content select=''></ng-content></div>
        <p *ngIf='rcpeCntnt.children.length === 0'></p>-->
        <p *ngIf='hasDesc'>{{rcpeDesc}}</p>
        <p *ngIf='!hasDesc'>Default Description. Your Description goes here.</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button><mat-icon>favorite_border</mat-icon></button>
        <button mat-button routerLinkActive='active' (click)='getDetails(); $event.preventDefault()' ><mat-icon>edit</mat-icon></button>
      </mat-card-actions>
    </mat-card>
    
  `,
  styles: [`

    .rcpeCard {
      margin: 5px;
      width: 200px;
      float: left;
      border: thin purple solid;
      border-radius: 4px;
    }
    .rcpeCard > .mat-card-actions > .mat-button {
      margin: 0;
    }
    .rcpeCard > .mat-card-actions {
      padding-bottom: 8px;
    }
    .user-img {
      width: inherit;
      max-width: 100%;
      margin: auto;
      padding: 10%;
    }
  `]
})
export class RecipeComponent implements OnInit {

  @Input() rcpeTitle: string;
  @Input() rcpeImg: string;
  @Input() rcpeDesc: string;
  @Input() rcpeCat: any;
  @Input() rcpeID: string;
  // @Input() rcpeLike: string;
  // @Input() rcpeShare: string;

  hasImage: boolean;
  hasDesc: boolean;
  hasTitle: boolean;
  dRecipes: RecipeFormData;
  slctdRecipe: any;
  constructor(
    private route: ActivatedRoute,
    private rte: Router,
    // private dRecipes: RecipeFormData,
    private rcpService: RecipeService
  ) {
      this.route.paramMap.subscribe(params => {
        this.slctdRecipe = params['params']['id'];
        console.log('from Rcp Comp ' + this.slctdRecipe);
      });

  }

  ngOnInit() {
    this.hasImage = (this.rcpeImg !== '');
    this.hasDesc = (this.rcpeDesc !== '');
    this.hasTitle = (this.rcpeTitle !== '');
    console.log(this.rcpeID + ' hasAnImg ?= ' + this.hasImage + ' image-name: ' + this.rcpeImg);


  }

  getDetails() {
    this.rte.navigate(['home/' + this.rcpeCat.toLowerCase() + '/' + this.rcpeID, { outlets: {'mainRO': [this.rcpeCat.toLowerCase()], 'detailRO': [this.rcpeID]}}]);
  }

}
