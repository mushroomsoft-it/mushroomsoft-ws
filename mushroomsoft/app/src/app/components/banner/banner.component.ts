import {Component, OnInit} from '@angular/core';
import {MianLibService} from '@mushroomsoft-lib';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public sectionItems: any;
  public sectionTitle: string = '';
  public sectionImage: string = '';

  constructor(private libService: MianLibService) {}

  ngOnInit(): void {
    this.libService.getForm('section').subscribe((data : any ) => {
      this.sectionItems = data.data[0].attributes.structure
      console.log(this.sectionItems);
      this.sectionTitle = this.sectionItems.section.title;
      this.sectionImage = this.sectionItems.section.img;
  });
  }
}
