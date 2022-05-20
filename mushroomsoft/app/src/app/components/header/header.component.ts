import {Component} from '@angular/core';
import menuItems from '../../../config/menu.json';
import {logoMushroomSoft, menuIcon} from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public element: boolean = false;
  public menuItems = menuItems.menu;
  public logo = logoMushroomSoft;
  public menuIcon = menuIcon;

  checked() {
    this.element = true;
  }

  notChecked() {
    this.element = !this.element as boolean;
  }
}
