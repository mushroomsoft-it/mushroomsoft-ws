import {Component, OnInit} from '@angular/core';
import {MianLibService} from '@mushroomsoft-lib';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public locationItems: any;
  public titleLocation: any;
  public descriptionLocation: any;
  public imageLocation: any;
  public titleAddress: any;
  public streetAddress: any;
  public locationAddress: any;
  public floorAddress: any;
  public phoneAddress: any;
  public socialGithub: any;
  public socialLinkedin: any;
  public socialClassImage: any;
  public logoFooterImage: any;
  public logoClassImage: any;

  constructor(private libService: MianLibService) {}

  ngOnInit(): void {
    this.locationItems = this.libService.getLocation();
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
  }
}
