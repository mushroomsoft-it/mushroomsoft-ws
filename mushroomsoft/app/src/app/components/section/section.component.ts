import {Component, OnInit} from '@angular/core';
import { MianLibService } from 'lib';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  public sectionDescription : any;
  public sectionItems : any;
  public sectionsItems : any;


  constructor(
    private libService: MianLibService,
  ) {}

  ngOnInit(): void {
    console.log(this.libService.getSection());
    this.sectionItems= this.libService.getSection();
    this.sectionDescription = this.sectionItems.section.description;
    this.sectionsItems = this.sectionItems.sections;
  }
}
