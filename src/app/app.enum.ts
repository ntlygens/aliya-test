export enum HeaderMenuType {
  BRAND,
  NAVMENU,
  CATMENU,
  SEARCH
}

export interface HeaderMenuData {
  title?: string;
  redirectTo?: string;
  loadChildren?: string;
  pathMatch?: string;
  path: string;
  component?: any;
  children?: any;
  menuType?: HeaderMenuType;
}
