import {Component} from '@angular/core';
import menuItems from '../../../config/menu.json';
import {logoMushroomSoft} from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuItems = menuItems.menu;
  public logo = logoMushroomSoft;
}
