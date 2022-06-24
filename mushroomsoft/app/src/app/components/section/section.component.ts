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
    this.getForm('section');
    this.getSections('section');
    this.getDescription('section');
  }

  getForm(type:string):void {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.sectionItems = data.data[0].attributes.structure;
    });
  }

  getSections(type:string){
    this.libService.getForm(type).subscribe((data : any ) => {
      this.sectionsItems = data.data[0].attributes.structure.sections;
    });
  }

  getDescription(type:string){
    this.libService.getForm(type).subscribe((data : any ) => {
      this.sectionDescription = data.data[0].attributes.structure.section.description;
    });
  }
}
