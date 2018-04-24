export enum RecipeCategory {
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
  title: string;
  rcpCategory: RecipeCategory;
  image?: string;
  desc: string;
}
