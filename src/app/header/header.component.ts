import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MAIN_ROUTES } from '../app-routing.module';
import { HeaderMenuType } from '../app.enum';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'amm-header',
  template: `
    <!--<mat-card>
      <mat-card-title translate='HEADER_TITLE'>JVF Flooring</mat-card-title>
      <mat-card-content translate='HEADER_MOTTO'>Our Strength is Under Your Feet</mat-card-content>
      <button (click)="switchLanguage('en')">en</button>
      <button (click)="switchLanguage('sp')">sp</button>
    </mat-card>-->
    <mat-toolbar color='primary'>
      <!--<button mat-button routerLinkActive='active' routerLink='{{menuBrand.path}}' (click)='setHome4QI(menuBrand.title)'><mat-icon>{{menuBrand.title}}</mat-icon></button>-->
      <div *ngFor='let headerMenuItem of headerMenuItems'>
        <button mat-button routerLinkActive='active' routerLink='{{headerMenuItem.path}}'>{{headerMenuItem.title}}</button>
      </div>
      <span class='my-spacer'></span>
      <div class='align-content-end'>
        <a href='#' class=''><mat-icon class=''>list</mat-icon></a>
        <a href='#' class=''><mat-icon class=''>add</mat-icon></a>
        <a href='#' class='' (click)='showSideBar()'><mat-icon>menu</mat-icon></a>
      </div>
    </mat-toolbar>
  `,
  providers: [RecipeService],
  styles: [`
    .my-spacer {
      flex: 1 1 auto;
    }
    a:active {
      color: initial;
    }
  `]
})
export class HeaderComponent implements OnInit {
  @Input() sideBarOpen: boolean;
  // @ViewChild('')
  elem: Element;
  headerMenuItems: any[];
  menuBrand: any;
  constructor(private elRef: ElementRef, private rcpeSvc: RecipeService) {
    this.elem = this.elRef.nativeElement;
  }

  ngOnInit() {
    this.headerMenuItems = MAIN_ROUTES.filter( dRte => dRte.menuType === HeaderMenuType.NAVMENU );
  }

  showSideBar() {
    this.rcpeSvc.getDrawerState().subscribe( res => {
      const state = res.state;
      console.log('st: ' + state);
    });
  }

}
