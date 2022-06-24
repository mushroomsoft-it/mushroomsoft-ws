import {Component, OnInit} from '@angular/core';
import {MianLibService} from '@mushroomsoft-lib';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public locationItems: any = '';
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
    this.getForm('footer');
    this.getTitleLocation('footer');
    this.getDescriptionLocation('footer');
    this.getImageLocation('footer');
    this.getTitleAddress('footer');
    this.getStreetAddress('footer');
    this.getLocationAddress('footer');
    this.getFloorAddress('footer');
    this.getPhoneAddress('footer');
    this.getGithubFooter('footer');
    this.getLinkedinFooter('footer');
    this.getClassImageFooter('footer');
    this.getLogoFooter('footer');
    this.getClassLogoFooter('footer');
  }

   getForm( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.locationItems = data.data[0].attributes.structure;
    });
  }

  getTitleLocation( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.titleLocation = data.data[0].attributes.structure.title.title;
    });
  }

  getDescriptionLocation( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.descriptionLocation = data.data[0].attributes.structure.title.description;
    });
  }

  getImageLocation( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.imageLocation = data.data[0].attributes.structure.title.img;
    });
  }

  getTitleAddress( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.titleAddress = data.data[0].attributes.structure.location.title;
    });
  }

  getStreetAddress( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.streetAddress = data.data[0].attributes.structure.location.address;
    });
  }

  getLocationAddress( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.locationAddress = data.data[0].attributes.structure.location.location;
    });
  }

  getFloorAddress( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.floorAddress = data.data[0].attributes.structure.location.floor;
    });
  }

  getPhoneAddress( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.phoneAddress = data.data[0].attributes.structure.location.phone;
    });
  }

  getGithubFooter( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.socialGithub = data.data[0].attributes.structure.footer.github;
    });
  }

  getLinkedinFooter( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.socialLinkedin = data.data[0].attributes.structure.footer.linkedin;
    });
  }

  getClassImageFooter( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.socialClassImage = data.data[0].attributes.structure.footer.classSocial;
    });
  }

  getLogoFooter( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.logoFooterImage = data.data[0].attributes.structure.footer.logo;
    });
  }

  getClassLogoFooter( type : string) {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.logoClassImage = data.data[0].attributes.structure.footer.classLogo;
    });
  }
}

