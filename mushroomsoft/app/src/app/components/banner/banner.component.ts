import {Component, OnInit} from '@angular/core';
import { MianLibService } from 'lib';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public sectionItems : any;
  public sectionTitle : string = '';
  public sectionImage : string = '';

  constructor(
    private libService: MianLibService,
  ) {}

  ngOnInit(): void {
    console.log(this.libService.getBanner());
    this.sectionItems= this.libService.getBanner();
    this.sectionTitle = this.sectionItems.section.title;
    this.sectionImage = this.sectionItems.section.img;
  }
}
