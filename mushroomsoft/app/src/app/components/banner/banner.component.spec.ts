import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {BannerComponent} from './banner.component';
import {of} from 'rxjs';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let service: MianLibService;
  let httpClient: HttpClient;
  let injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerComponent],
      providers: [MianLibService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(MianLibService);
    injector = getTestBed();
    httpClient = injector.get(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const mockBanner = {
    data: [
      {
        id: 8,
        attributes: {
          structure: {
            section: {
              title: 'Success is seeing our clients grow and overcome their IT challenges.',
              description: 'WE PROVIDE THE BEST TECH TALENT AND SOLUTIONS FOR YOUR BUSINESS.',
              img: 'assets/banner/banner.png'
            },
            sections: [
              {
                id: 'right',
                class: 'ms-about-grid',
                title: 'Who we are',
                description:
                  "We are MushroomSoft IT, an Ecuadorian software company that leverages new technologies and high-performance developer teams to deliver exceptional quality products.We create solutions that address tomorrow's challenges through innovation and technology.",
                img: 'assets/sections/section_1.png'
              },
              {
                id: 'left',
                class: 'ms-about-grid ms-about-2',
                title: 'What we do',
                description:
                  'We build teams of developers that are qualified to fulfill customer requirements and bring their ideas to life. Our developers are proactive; they are always looking for the best solution, prioritizing quality and performance. We have experience with different software platforms and solutions, specializing in NodeJS, Javascript and UI Technologies.',
                img: 'assets/sections/section_2.png'
              }
            ]
          },
          date_created: '2022-06-20T04:00:00.000Z',
          version: 0,
          createdAt: '2022-06-20T14:38:59.013Z',
          updatedAt: '2022-06-20T14:39:00.681Z',
          publishedAt: '2022-06-20T14:39:00.679Z',
          type: 'section'
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
  it('should of getForm', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockBanner));
    component.getForm('section');
    fixture.detectChanges();
    expect(component.sectionItems).toEqual(mockBanner.data[0].attributes.structure);
  });

  it('should of getTitle', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockBanner));
    component.getTitle('section');
    fixture.detectChanges();
    expect(component.sectionTitle).toEqual(mockBanner.data[0].attributes.structure.section.title);
  });

  it('should of getImage', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockBanner));
    component.getImage('section');
    fixture.detectChanges();
    expect(component.sectionImage).toEqual(mockBanner.data[0].attributes.structure.section.img);
  });
});
