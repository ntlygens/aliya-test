export enum RecipeCategory {
  ALL = <any>'all',
  BREAKFAST = <any>'breakfast',
  LUNCH = <any>'lunch',
  DINNER = <any>'dinner',
  SNACKS = <any>'snacks',
  SOUPS = <any>'soups',
  VEGETARIAN = <any>'vegetarian',
  SALADS = <any>'salads',
  BAKING = <any>'baking',
  DESERTS = <any>'deserts',
  DRINKS = <any>'drinks',

}

export interface RecipeFormData {
  title?: string;
  rcpID: string;
  rcpcategory: RecipeCategory;
  image?: string;
  desc?: string;
}
