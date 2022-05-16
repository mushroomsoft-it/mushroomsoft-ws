import {Component, OnInit} from '@angular/core';
import sectionItems from '../../../config/section.json';
import commitmentItems from '../../../config/commitment.json';
import technologyItems from '../../../config/technology.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sectionTitle = sectionItems.section.title;
  public sectionDescription = sectionItems.section.description;
  public sectionItems = sectionItems.sections;
  public commitmentItems = commitmentItems.items;
  public titleTechnology = technologyItems.title.title;
  public descriptionTechnology = technologyItems.title.description;
  public technologyItemsService = technologyItems.service;
  public technologyItemsImage = [];
  ngOnInit() {
    this.technologyItemsService.map((res) => {
      this.technologyItemsImage = res.images as [];
    });
  }
}
