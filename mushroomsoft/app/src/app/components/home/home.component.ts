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
  public sectionOne = sectionItems.section.one;
  public sectionTwo = sectionItems.section.two;
  public sectionThree = sectionItems.section.three;
  public commitmentItems = commitmentItems.items;
  public technologyItems = technologyItems.title;
  public technologyItemsService = technologyItems.service;
  public technologyItemsImage: any = [];
  ngOnInit() {
    this.technologyItemsService.map((res) => {
      this.technologyItemsImage = res.image;
    });
  }
}
