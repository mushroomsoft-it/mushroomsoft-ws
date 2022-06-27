import {Component, OnInit} from '@angular/core';
import {MianLibService} from '@mushroomsoft-lib';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public sectionItems: any = '';
  public sectionTitle: string = '';
  public sectionImage: string = '';

  constructor(private libService: MianLibService) {}

  ngOnInit() {
    this.getForm('section');
    this.getTitle('section');
    this.getImage('section');
  }

  getForm(type: string) {
    this.libService.getForm(type).subscribe((items: any) => {
      this.sectionItems = items.data?.[0].attributes.structure;
    });
  }

  getTitle(type: string) {
    this.libService.getForm(type).subscribe((items: any) => {
      this.sectionTitle = items.data?.[0].attributes.structure.section.title;
    });
  }

  getImage(type: string) {
    this.libService.getForm(type).subscribe((items: any) => {
      this.sectionImage = items.data?.[0].attributes.structure.section.img;
    });
  }
}
