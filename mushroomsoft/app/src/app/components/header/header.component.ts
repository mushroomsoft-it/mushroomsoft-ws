import {Component, OnInit} from '@angular/core';
import {logoMushroomSoft, menuIcon} from '../../constants';
import { MianLibService } from 'lib';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public element: boolean = false;
  public menuItems : any ;
  public logo = logoMushroomSoft;
  public menuIcon = menuIcon;

  constructor(
    private libService: MianLibService,
  ) {}

  ngOnInit(): void {
    console.log(this.libService.getMenu());
    this.menuItems = this.libService.getMenu();
  }

  checked() {
    this.element = true;
  }

  notChecked() {
    this.element = !this.element as boolean;
  }
}
