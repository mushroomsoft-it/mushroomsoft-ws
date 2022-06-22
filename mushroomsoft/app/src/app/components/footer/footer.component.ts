import {Component, OnInit} from '@angular/core';
import {MianLibService} from '@mushroomsoft-lib';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public locationItems: any;
  public titleLocation: string = '';
  public descriptionLocation: string = '';
  public imageLocation: string = '';
  public titleAddress: string = '';
  public streetAddress: string = '';
  public locationAddress: string = '';
  public floorAddress: string = '';
  public phoneAddress: string = '';
  public socialGithub: string = '';
  public socialLinkedin: string = '';
  public socialClassImage: string = '';
  public logoFooterImage: string = '';
  public logoClassImage: string = '';

  constructor(private libService: MianLibService) {}

  ngOnInit() {
    this.libService.getForm('footer').subscribe((data : any ) => {
      this.locationItems = data.data[0].attributes.structure;
      this.titleLocation = this.locationItems.title.title;
      this.descriptionLocation = this.locationItems.title.description;
      this.imageLocation = this.locationItems.title.img;
      this.titleAddress = this.locationItems.location.title;
      this.streetAddress = this.locationItems.location.address;
      this.locationAddress = this.locationItems.location.location;
      this.floorAddress = this.locationItems.location.floor;
      this.phoneAddress = this.locationItems.location.phone;
      this.socialGithub = this.locationItems.footer.github;
      this.socialLinkedin = this.locationItems.footer.linkedin;
      this.socialClassImage = this.locationItems.footer.classSocial;
      this.logoFooterImage = this.locationItems.footer.logo;
      this.logoClassImage = this.locationItems.footer.classLogo;
    });
  }
}
