import {Injectable} from '@angular/core';
import menuItems from '../shared/config/menu.json';
import sectionItems from '../shared/config/section.json';
import articleItems from '../shared/config/commitment.json';
import serviceItems from '../shared/config/service.json';
import technologyItems from '../shared/config/technology.json';
import locationItems from '../shared/config/location.json';

@Injectable({
  providedIn: 'root'
})

export class MianLibService {
  public menuItems : any ;
  public sectionItems : any ;
  public articleItems : any ;
  public serviceItems : any ;
  public technologyItems : any ;
  public locationItems : any ;

  getMenu() {
    this.menuItems = menuItems.menu;
    return this.menuItems;
  }

  getBanner() {
    this.sectionItems = sectionItems;
    return this.sectionItems;
  }

  getSection() {
    this.sectionItems = sectionItems;
    return this.sectionItems;
  }

  getArticle() {
    this.articleItems = articleItems.items;
    return this.articleItems;
  }

  getService() {
    this.serviceItems = serviceItems;
    return this.serviceItems;
  }

  getTechnology() {
    this.technologyItems = technologyItems;
    return this.technologyItems;
  }

  getLocation() {
    this.locationItems = locationItems;
    return this.locationItems;
  }
}
