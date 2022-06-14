import {Injectable} from '@angular/core';
import menuItems from '../shared/config/menu.json';
import sectionItems from '../shared/config/section.json';
import articleItems from '../shared/config/commitment.json';
import serviceItems from '../shared/config/service.json';
import technologyItems from '../shared/config/technology.json';
import locationItems from '../shared/config/location.json';
import contactItems from '../shared/config/contact.json';

@Injectable({
  providedIn: 'root'
})
export class MianLibService {
  public menuItems: {} = {};
  public sectionItems: {} = {};
  public articleItems: {} = {};
  public serviceItems: {} = {};
  public technologyItems: {} = {};
  public locationItems: {} = {};
  public contactItems: [] = [];

  /**
   * @description get menu of the file Json
   * @return menuItems
   */

  getMenu() {
    this.menuItems = menuItems.menu;
    return this.menuItems;
  }

  /**
   * @description get banner of the file Json
   * @return sectionItems
   */

  getBanner() {
    this.sectionItems = sectionItems;
    return this.sectionItems;
  }

  /**
   * @description get section of the file Json
   * @return sectionItems
   */

  getSection() {
    this.sectionItems = sectionItems;
    return this.sectionItems;
  }

  /**
   * @description get article of the file Json
   * @return articleItems
   */

  getArticle() {
    this.articleItems = articleItems.items;
    return this.articleItems;
  }

  /**
   * @description get service of the file Json
   * @return serviceItems
   */

  getService() {
    this.serviceItems = serviceItems;
    return this.serviceItems;
  }

  /**
   * @description get technology of the file Json
   * @return technologyItems
   */

  getTechnology() {
    this.technologyItems = technologyItems;
    return this.technologyItems;
  }

  /**
   * @description get location of the file Json
   * @return locationItems
   */

  getLocation() {
    this.locationItems = locationItems;
    return this.locationItems;
  }

  /**
   * @description get contact of the file Json
   * @return contactItems
   */

  getContact() {
    this.contactItems = contactItems as [];
    return this.contactItems;
  }
}
