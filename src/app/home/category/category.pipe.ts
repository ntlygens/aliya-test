import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(cats: any[], searchText: string): any {
    if (!cats) { return []; }
    if (!searchText) { return cats; }

    searchText = searchText.toLowerCase();
    return cats.filter( cat => {
      return cat.toLowerCase().includes(searchText);
    });
    // return null;
  }

}
