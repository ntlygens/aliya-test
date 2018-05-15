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
        <button mat-button>LIKE</button>
        <button mat-button routerLinkActive='active' [routerLink]="[rcpeID, { outlets: {'mainRO': 'recipes', 'detailRO': rcpeID}}]">SHARE</button>
      </mat-card-actions>
    </mat-card>
    
  `,
  styles: [`

    .rcpeCard {
      margin: 5px;
      width: fit-content;
      float: left;
    }
    .user-img {
      width: 80px;
      max-width: 100%;
      margin: auto;
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
  constructor(
    private route: ActivatedRoute,
    private rte: Router,
    // private dRecipes: RecipeFormData,
    private rcpService: RecipeService
  ) {
      this.route.paramMap.subscribe(params => {
        // this.dRecipes = this.rcpService.getCatRecipes(params['id']);
        // console.log('dMmry: ' + params['params']['id']);
      });

  }

  ngOnInit() {
    this.hasImage = (this.rcpeImg !== '');
    this.hasDesc = (this.rcpeDesc !== '');
    this.hasTitle = (this.rcpeTitle !== '');
    console.log(this.rcpeID + ' hasAnImg ?= ' + this.hasImage + ' image-name: ' + this.rcpeImg);


  }

}
