import {Component, OnInit} from '@angular/core';
import sectionItems from '../../../config/section.json';
import commitmentItems from '../../../config/commitment.json';
import technologyItems from '../../../config/technology.json';
import locationItems from '../../../config/location.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sectionOne = sectionItems.section.one;
  public sectionTwo = sectionItems.section.two;
  public sectionThree = sectionItems.section.three;
  public commitmentItems = commitmentItems.items;
  public technologyItems = technologyItems.title;
  public technologyItemsService = technologyItems.service;
  public technologyItemsImage: any = [];
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
      this.technologyItemsImage = res.image;
    });
  }
}
