import {Component} from '@angular/core';
import menuItems from '../../../config/menu.json';
import {logoMushroomSoft} from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  element: any;
  constructor() {}
  public menuItems = menuItems.menu;
  public logo = logoMushroomSoft;

  checked() {
    this.element = true;
  }

  notChecked() {
    this.element = false;
  }
}
