import {TestBed} from '@angular/core/testing';
import { MianLibService } from 'mushroomsoft-lib';
import { FooterComponent } from './footer.component';
describe('FooterComponent', () => {

  const mockLocation = {
    title:
      {
        title: "Location",
        description: " Quito, also known as the 'Light of America', is the city where wehave planted our roots. It is the sanctuary where our talent develops and where we design technological solutions for your business.",
        img:"assets/footers/location.png"
      },
    location:
      {
        title: "Address",
        address: "Av. Río Amazonas y Roca",
        location: "Edificio Río Amazonas",
        floor : "3er. Piso, Of.319",
        phone: "(+593) 2 2551 030"
      },
    footer:
      {
        github:"assets/footers/github.png",
        linkedin:"assets/footers/linkedin.png",
        classSocial:"image-social",
        logo: "assets/footers/logo-footer.png",
        classLogo:"image-logo-footer"
      }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      providers:[MianLibService]
    }).compileComponents();
  });
  it('should initialization of the component', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.locationItems).toEqual(mockLocation);
  });
});
