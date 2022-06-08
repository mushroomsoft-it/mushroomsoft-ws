import {Component, OnInit} from '@angular/core';
import technologyItems from '../../../config/technology.json';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
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
