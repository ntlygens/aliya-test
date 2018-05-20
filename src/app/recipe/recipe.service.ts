import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { MatSidenav } from '@angular/material';

@Injectable()
export class RecipeService {
  recipes = []; catRecipes: any;
  allDRecipes = [];
  isDrawerOpen$: Observable<any>;
  private selectedDrawerState = new BehaviorSubject<any>({state: true});
  sidenav: MatSidenav;

  constructor(private _http: HttpClient) {
    this.isDrawerOpen$ = this.selectedDrawerState.asObservable();
  }

  getAllRecipes(): Observable<any> {
    const allRecipes = this._http.get('../assets/all-recipes.json');
    return allRecipes;
  }

  getRecipeDetail(rID: string): Observable<any> {
    // const allRecipes = this._http.get('../assets/all-recipes.json');
    this.catRecipes = this.getAllRecipes().subscribe(res => {
      // console.log('resp: ' + res[1].title);
      const allRecipes = res.filter(dRte => dRte.rcpCategory === rID);
      // console.log('slctd Rcps: ' + allRecipes);
      this.recipes = allRecipes;
    });

    // const catRecipes = this.getAllRecipes().subscribe(res => { catRecipes = res.filter(dRte => dRte.rcpCategory === cat) });
    // console.log('ll: ' + this.catRecipes);
    return this.catRecipes;
  }

  sendDrawerState(isOpen: any) {
    this.selectedDrawerState.next(isOpen);
  }

  addNewRecipe(data: FormData) {

  }

  getDrawerState(): any {
    return this.isDrawerOpen$;
  }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
    this.sidenav.opened = true;
    // if (this.sidenav.opened) { console.log('true'); } else { console.log('false'); }
  }

  public open() {
    return this.sidenav.opened = true;
  }


  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }
}
