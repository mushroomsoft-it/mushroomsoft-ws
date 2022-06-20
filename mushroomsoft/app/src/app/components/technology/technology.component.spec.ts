import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {TechnologyComponent} from './technology.component';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TechnologyComponent', () => {
  let component: TechnologyComponent;
  let fixture: ComponentFixture<TechnologyComponent>;
  let service: MianLibService;
  let httpClient: HttpClient;
  let injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologyComponent],
      providers: [MianLibService],
      imports:[HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(MianLibService);
    injector = getTestBed();
    httpClient = injector.get(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get the file technology.json ', () => {
    let mockTechnology = {
      title: {
        title: 'Technology',
        description:
          "We implement software development projects in a wide range of cutting-edge technologies. Our team of specialists are qualified in various technologies. We would love to discuss and recommend the best solution for your business' needs."
      },
      service: [
        {
          title: 'Operating Systems',
          class: 'ms-grid-6',
          images: [
            {
              id: 'linux',
              url: 'assets/technologies/service-1.png'
            },
            {
              id: 'windows',
              url: 'assets/technologies/service-1-1.png'
            },
            {
              id: 'android',
              url: 'assets/technologies/service-1-2.png'
            },
            {
              id: 'ios',
              url: 'assets/technologies/service-1-3.png'
            }
          ]
        },
        {
          title: 'Databases',
          class: 'ms-grid-10',
          images: [
            {
              id: 'mysql',
              url: 'assets/technologies/service-2.png'
            },
            {
              id: 'mongodb',
              url: 'assets/technologies/service-2-1.png'
            },
            {
              id: 'sqlserver',
              url: 'assets/technologies/service-2-2.png'
            },
            {
              id: '',
              url: ''
            }
          ]
        },
        {
          title: 'Frameworks',
          class: 'grid-12',
          images: [
            {
              id: 'angular',
              url: 'assets/technologies/service-3.png'
            },
            {
              id: 'node',
              url: 'assets/technologies/service-3-1.png'
            },
            {
              id: 'typescript',
              url: 'assets/technologies/service-3-2.png'
            },
            {
              id: 'javascript',
              url: 'assets/technologies/service-3-3.png'
            }
          ]
        },
        {
          title: 'Services and Platforms',
          class: 'grid-14',
          images: [
            {
              id: 'aws',
              url: 'assets/technologies/service-4.png'
            },
            {
              id: 'github',
              url: 'assets/technologies/service-4-1.png'
            },
            {
              id: '',
              url: ''
            },
            {
              id: '',
              url: ''
            }
          ]
        }
      ]
    };
    component.ngOnInit();
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getForm('service');
    expect(httpClient.get).toHaveBeenCalled();
    expect(component.technologyItemsService).toEqual(mockTechnology.service);
  });
});
