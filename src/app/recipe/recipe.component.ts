import { Component, Input, OnInit } from '@angular/core';
import { isUndefined } from 'util';

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
        <button mat-button>SHARE</button>
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
  @Input() rcpeId: any;
  // @Input() rcpeLike: string;
  // @Input() rcpeShare: string;

  hasImage: boolean;
  hasDesc: boolean;
  hasTitle: boolean;
  constructor() {

  }

  ngOnInit() {
    this.hasImage = ( !isUndefined(this.rcpeImg) && (this.rcpeImg !== '') );
    this.hasDesc = !isUndefined(this.rcpeDesc);
    this.hasTitle = !isUndefined(this.rcpeTitle);
    console.log('hasImg: ' + this.hasImage + '\n rcpeImg: ' + this.rcpeImg + '\n ID: ' + this.rcpeId);
  }

}
