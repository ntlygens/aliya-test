import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'amm-category',
  template: `
    <mat-card class="cat-card">
      <mat-card-header>
        <div mat-card-avatar class="cat-image"></div>
        <mat-card-title>{{catName}}</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
    </mat-card>
  `,
  styles: [`
    .cat-card {
      max-width: 400px;
    }

    .cat-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
  `]
})
export class CategoryComponent implements OnInit {
  @Input() catName: string;
  constructor() { }

  ngOnInit() {
  }

}
