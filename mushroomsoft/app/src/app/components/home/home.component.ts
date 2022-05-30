import {Component, OnInit} from '@angular/core';
import sectionItems from '../../../config/section.json';
import commitmentItems from '../../../config/commitment.json';
import technologyItems from '../../../config/technology.json';
import locationItems from '../../../config/location.json';
import serviceItems from '../../../config/service.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sectionTitle = sectionItems.section.title;
  public sectionDescription = sectionItems.section.description;
  public sectionImage = sectionItems.section.img;
  public sectionItems = sectionItems.sections;
  public serviceTitle = serviceItems.service.title;
  public serviceClass = serviceItems.service.class;
  public serviceItems = serviceItems.services;
  public commitmentItems = commitmentItems.items;
  public titleTechnology = technologyItems.title.title;
  public descriptionTechnology = technologyItems.title.description;
  public technologyItemsService = technologyItems.service;
  public technologyItemsImage = [];
  public titleLocation = locationItems.title.title;
  public descriptionLocation = locationItems.title.description;
  public imageLocation = locationItems.title.img;
  public titleAddress = locationItems.location.title;
  public streetAddress = locationItems.location.address;
  public locationAddress = locationItems.location.location;
  public floorAddress = locationItems.location.floor;
  public phoneAddress = locationItems.location.phone;
  public socialImage = locationItems.footer.social;
  public socialClassImage = locationItems.footer.classSocial;
  public logoFooterImage = locationItems.footer.logo;
  public logoClassImage = locationItems.footer.classLogo;

  ngOnInit() {
    this.technologyItemsService.map((res) => {
      this.technologyItemsImage = res.images as [];
    });
  }
}