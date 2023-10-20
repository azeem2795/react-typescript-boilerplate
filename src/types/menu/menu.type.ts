export interface IMenu {
  name: string;
  url: string;
  key: string;
  hasSubMenu: boolean;
  menu: IMenu[];
}
