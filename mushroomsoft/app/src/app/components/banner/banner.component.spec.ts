import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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
      imports:[HttpClientTestingModule]
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get the file banner.json', () => {
    let mockBanner = {
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
    };

    component.ngOnInit();
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getForm('section');
    expect(httpClient.get).toHaveBeenCalled();
    expect(component.sectionItems).toEqual(mockBanner);
  });
});
