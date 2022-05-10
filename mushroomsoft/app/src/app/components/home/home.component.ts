import {Component} from '@angular/core';
import sectionItems from '../../../config/section.json';
import commitmentItems from '../../../config/commitment.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public sectionOne = sectionItems.section.one;
  public sectionTwo = sectionItems.section.two;
  public sectionThree = sectionItems.section.three;
  public commitmentItems = commitmentItems.items;
}
