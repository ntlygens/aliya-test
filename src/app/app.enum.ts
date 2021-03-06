export enum HeaderMenuType {
  BRAND,
  NAVMENU,
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
