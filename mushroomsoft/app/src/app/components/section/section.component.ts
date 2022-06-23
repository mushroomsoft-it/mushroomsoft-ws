import {Component, OnInit} from '@angular/core';
import {MianLibService} from '@mushroomsoft-lib';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  public sectionDescription: any = '';
  public sectionItems: any = '';
  public sectionsItems: any = '';

  constructor(private libService: MianLibService) {}

  ngOnInit() {
    this.getForm();
  }

  getForm():void {
    this.libService.getForm('section').subscribe((data : any ) => {
      this.sectionItems = data.data[0].attributes.structure;
      this.sectionDescription = this.sectionItems.section.description;
      this.sectionsItems = this.sectionItems.sections;
    });
  }
}
