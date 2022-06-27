import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {FooterComponent} from './footer.component';
import {of} from 'rxjs';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let service: MianLibService;
  let httpClient: HttpClient;
  let injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      providers: [MianLibService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(MianLibService);
    injector = getTestBed();
    httpClient = injector.get(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const mockFooter = {
    data: [
      {
        id: 6,
        attributes: {
          structure: {
            title: {
              title: 'Location',
              description:
                " Quito, also known as the 'Light of America', is the city where wehave planted our roots. It is the sanctuary where our talent develops and where we design technological solutions for your business.",
              img: 'assets/footers/location.png'
            },
            location: {
              title: 'Address',
              address: 'Av. Río Amazonas y Roca',
              location: 'Edificio Río Amazonas',
              floor: '3er. Piso, Of.319',
              phone: '(+593) 2 2551 030'
            },
            footer: {
              github: 'assets/footers/github.png',
              linkedin: 'assets/footers/linkedin.png',
              classSocial: 'image-social',
              logo: 'assets/footers/logo-footer.png',
              classLogo: 'image-logo-footer'
            }
          },
          date_created: '2022-06-20T04:00:00.000Z',
          version: 0,
          createdAt: '2022-06-20T14:38:01.907Z',
          updatedAt: '2022-06-20T14:38:03.394Z',
          publishedAt: '2022-06-20T14:38:03.393Z',
          type: 'footer'
        }
      }
    ],
    meta: {
      pagination: {
        page: 1,
        pageSize: 25,
        pageCount: 1,
        total: 1
      }
    }
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should of getForm ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getForm('footer');
    fixture.detectChanges();
    expect(component.locationItems).toEqual(mockFooter.data[0].attributes.structure);
  });

  it('should of getTitleLocation ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getTitleLocation('footer');
    fixture.detectChanges();
    expect(component.titleLocation).toEqual(mockFooter.data[0].attributes.structure.title.title);
  });

  it('should of getDescriptionLocation ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getDescriptionLocation('footer');
    fixture.detectChanges();
    expect(component.descriptionLocation).toEqual(mockFooter.data[0].attributes.structure.title.description);
  });

  it('should of getImageLocation ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getImageLocation('footer');
    fixture.detectChanges();
    expect(component.imageLocation).toEqual(mockFooter.data[0].attributes.structure.title.img);
  });

  it('should of getTitleAddress ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getTitleAddress('footer');
    fixture.detectChanges();
    expect(component.titleAddress).toEqual(mockFooter.data[0].attributes.structure.location.title);
  });

  it('should of getStreetAddress ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getStreetAddress('footer');
    fixture.detectChanges();
    expect(component.streetAddress).toEqual(mockFooter.data[0].attributes.structure.location.address);
  });

  it('should of getLocationAddress ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getLocationAddress('footer');
    fixture.detectChanges();
    expect(component.locationAddress).toEqual(mockFooter.data[0].attributes.structure.location.location);
  });

  it('should of getFloorAddress ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getFloorAddress('footer');
    fixture.detectChanges();
    expect(component.floorAddress).toEqual(mockFooter.data[0].attributes.structure.location.floor);
  });

  it('should of getPhoneAddress ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getPhoneAddress('footer');
    fixture.detectChanges();
    expect(component.phoneAddress).toEqual(mockFooter.data[0].attributes.structure.location.phone);
  });

  it('should of getGithubFooter ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getGithubFooter('footer');
    fixture.detectChanges();
    expect(component.socialGithub).toEqual(mockFooter.data[0].attributes.structure.footer.github);
  });

  it('should of getLinkedinFooter ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getLinkedinFooter('footer');
    fixture.detectChanges();
    expect(component.socialLinkedin).toEqual(mockFooter.data[0].attributes.structure.footer.linkedin);
  });

  it('should of getClassImageFooter ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getClassImageFooter('footer');
    fixture.detectChanges();
    expect(component.socialClassImage).toEqual(mockFooter.data[0].attributes.structure.footer.classSocial);
  });

  it('should of logoFooterImage ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getLogoFooter('footer');
    fixture.detectChanges();
    expect(component.logoFooterImage).toEqual(mockFooter.data[0].attributes.structure.footer.logo);
  });

  it('should of getClassLogoFooter ', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockFooter));
    component.getClassLogoFooter('footer');
    fixture.detectChanges();
    expect(component.logoClassImage).toEqual(mockFooter.data[0].attributes.structure.footer.classLogo);
  });
});
