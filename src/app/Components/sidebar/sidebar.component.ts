import {Component, OnInit} from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: 'bienvenido', title: 'Bienvenido', icon: 'dashboard', class: ''},
  {path: 'contactos', title: 'Contactos', icon: 'person', class: ''},
  {path: 'tareas', title: 'Tareas', icon: 'assignment turned in', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if($(window).width() > 991) {
      return false;
    }
    return false;
  }
}
