import {Component, OnInit} from '@angular/core';
import {logoMushroomSoft, menuIcon} from '../../constants';
import {MianLibService} from '@mushroomsoft-lib';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public element: boolean = false;
  public menuItems: any;
  public logo = logoMushroomSoft;
  public menuIcon = menuIcon;

  constructor(private libService: MianLibService) {}

  ngOnInit() {
    this.libService.getForm('menu').subscribe((data : any ) => {
      this.menuItems = data.data[0].attributes.structure.menu
    });
  }

  checked() {
    this.element = true;
  }

  notChecked() {
    this.element = !this.element as boolean;
  }
}
