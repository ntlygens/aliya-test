import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'amm-category',
  template: `
    <!--<mat-card class="btn cat-card">
      <mat-card-header>
        <div mat-card-avatar class="cat-image"></div>
        <mat-card-title>{{catName}}</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
    </mat-card>-->


    <!--<mat-button-toggle-group #group="matButtonToggleGroup">-->
      <mat-button-toggle class='cat-card' value="{{catName}}">
        <div mat-card-avatar class="cat-image"></div>
        <span class='cardDesc'>
          <mat-card-title class=''>{{catName}}</mat-card-title>
          <mat-card-subtitle>Dog Breed</mat-card-subtitle>
          <!--<mat-icon>star</mat-icon>-->
        </span>
      </mat-button-toggle>
    <mat-divider [inset]="true" *ngIf="!last"></mat-divider>
      <!--<mat-button-toggle value="center">
        <mat-icon>format_align_center</mat-icon>
      </mat-button-toggle>
      <mat-button-toggle value="right">
        <mat-icon>format_align_right</mat-icon>
      </mat-button-toggle>
      <mat-button-toggle value="justify" disabled>
        <mat-icon>format_align_justify</mat-icon>
      </mat-button-toggle>-->
    <!--</mat-button-toggle-group>-->
  `,
  styles: [`
    .cat-card {
      max-width: 400px;
      margin: 5% 5% 10%;
    }

    .cat-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
      display: inline-block;
      margin-right: 10%;
    }
    
    .cardDesc { display: inline-block }
    
    .mat-card-title, .mat-card-subtitle {
      font-size: 100%;
      margin: 0;
      color: #666;
      line-height: 25px;
    }
    .mat-card-subtitle {
      color: darkgray;
      font-size: 90%;
    }


    /*.cat-card:hover {
      background: #9c98a5;
    }
    .cat-card:active {
      background: #333;
    }
    .cat-card:visited {
      background: #390aeb;
    }*/

  `]
})
export class CategoryComponent implements OnInit {
  @Input() catName: string;
  constructor() { }

  ngOnInit() {
  }

}
