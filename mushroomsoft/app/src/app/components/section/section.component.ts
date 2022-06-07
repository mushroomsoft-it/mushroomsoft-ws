import { Component } from '@angular/core';
import sectionItems from '../../../config/section.json';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent  {
  public sectionDescription = sectionItems.section.description;
  public sectionItems = sectionItems.sections;
}
