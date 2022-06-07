import { Component } from '@angular/core';
import sectionItems from '../../../config/section.json';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent  {
  public sectionItems = sectionItems.sections;
  public sectionTitle = sectionItems.section.title;
  public sectionImage = sectionItems.section.img;
}
