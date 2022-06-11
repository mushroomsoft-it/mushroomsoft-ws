import {Component} from '@angular/core';
import locationItems from '../../../config/location.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public titleLocation = locationItems.title.title;
  public descriptionLocation = locationItems.title.description;
  public imageLocation = locationItems.title.img;
  public titleAddress = locationItems.location.title;
  public streetAddress = locationItems.location.address;
  public locationAddress = locationItems.location.location;
  public floorAddress = locationItems.location.floor;
  public phoneAddress = locationItems.location.phone;
  public socialGithub = locationItems.footer.github;
  public socialLinkedin = locationItems.footer.linkedin;
  public socialClassImage = locationItems.footer.classSocial;
  public logoFooterImage = locationItems.footer.logo;
  public logoClassImage = locationItems.footer.classLogo;
}
