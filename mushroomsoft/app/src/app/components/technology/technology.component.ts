import {Component, OnInit} from '@angular/core';
import {MianLibService} from '@mushroomsoft-lib';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  public titleTechnology: string = '';
  public descriptionTechnology: string = '';
  public technologyItemsService: any;
  public technologyItemsImage = [];
  public technologyItems: any;
  constructor(private libService: MianLibService) {}

  ngOnInit() {
    this.libService.getForm('technology').subscribe((data : any ) => {
      this.technologyItems = data.data[0].attributes.structure
      this.titleTechnology = this.technologyItems.title.title;
      this.descriptionTechnology = this.technologyItems.title.description;
      this.technologyItemsService = this.technologyItems.service;
      this.technologyItemsService.map((res: any) => {
        this.technologyItemsImage = res.images as [];
      });
    });
  }
}
