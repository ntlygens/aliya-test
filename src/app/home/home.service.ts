import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { RecipeCategory } from '../recipe/recipe.enum';

@Injectable()
export class HomeService {

  isObservable$: Observable<any>;
  private selectedBehaviorSubject = new BehaviorSubject<any>({data: 'temp'});
  constructor() {
    this.isObservable$ = this.selectedBehaviorSubject.asObservable();
  }

  sendHomeData(data: any) {
    this.selectedBehaviorSubject.next(data);
  }

  getHomeData() {
    return this.isObservable$;
  }

  getAllCategories() {
    const tempCats = [];
    Object.keys(RecipeCategory)
      .forEach((key, i) => {
        if ( i % 2 === 0 ) {
          // console.log( 'key: ' + key );
          // return key;
          tempCats.push(key);
        }
      });
    return tempCats;
  }

  getCategoryItems(cat: RecipeCategory) {

    return ;
  }

}
