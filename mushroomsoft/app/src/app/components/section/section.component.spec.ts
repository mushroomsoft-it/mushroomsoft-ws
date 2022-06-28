import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {SectionComponent} from './section.component';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;
  let service: MianLibService;
  let httpClient: HttpClient;
  let injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionComponent],
      providers: [MianLibService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(MianLibService);
    injector = getTestBed();
    httpClient = injector.get(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const mockSection = {
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
  it('should of getForm', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockSection));
    component.getForm('section');
    fixture.detectChanges();
    expect(component.sectionItems).toEqual(mockSection.data[0].attributes.structure);
  });

  it('should of getSections', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockSection));
    component.getSections('section');
    fixture.detectChanges();
    expect(component.sectionsItems).toEqual(mockSection.data[0].attributes.structure.sections);
  });

  it('should of getDescription', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockSection));
    component.getDescription('section');
    fixture.detectChanges();
    expect(component.sectionDescription).toEqual(mockSection.data[0].attributes.structure.section.description);
  });
});
