import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {ServiceComponent} from './service.component';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ServiceComponent', () => {
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;
  let service: MianLibService;
  let httpClient: HttpClient;
  let injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceComponent],
      providers: [MianLibService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(MianLibService);
    injector = getTestBed();
    httpClient = injector.get(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const mockService = {
    data: [
      {
        id: 9,
        attributes: {
          structure: {
            service: {
              title: 'Services',
              class: 'ms-heading-8'
            },
            services: [
              {
                title: 'Software Development',
                description:
                  'We manage the complete software development cycle, from definition to deployment, working closely with our clients on each specification.',
                img: 'assets/services/service_1.png'
              },
              {
                title: 'Platform Migrations',
                description:
                  " We upgrade platforms using Angular, React, and other technologies that best fit our clients' needs and requirements.",
                img: 'assets/services/service_2.png'
              },
              {
                title: 'Software Architecture Assessments',
                description:
                  'We offer solution architecture to optimize processes and application agility, avoiding the use of standard models.',
                img: 'assets/services/service_3.png'
              },
              {
                title: 'Quality Assurance',
                description:
                  'We prioritize code quality, taking into account technological standards and generating unit and integration tests that guarantee quality to every solution.',
                img: 'assets/services/service_4.png'
              },
              {
                title: 'Product Development for Startups',
                description: 'We design solutions for entrepreneurs using the most advanced development frameworks.',
                img: 'assets/services/service_5.png'
              }
            ]
          },
          date_created: '2022-06-20T04:00:00.000Z',
          version: 0,
          createdAt: '2022-06-20T14:39:24.830Z',
          updatedAt: '2022-06-20T14:39:27.766Z',
          publishedAt: '2022-06-20T14:39:27.764Z',
          type: 'service'
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
    spyOn(service, 'getForm').and.returnValue(of(mockService));
    component.getForm('service');
    fixture.detectChanges();
    expect(component.serviceItems).toEqual(mockService.data[0].attributes.structure);
  });

  it('should of getServices', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockService));
    component.getServices('service');
    fixture.detectChanges();
    expect(component.servicesItems).toEqual(mockService.data[0].attributes.structure.services);
  });

  it('should of getTitle', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockService));
    component.getTitle('service');
    fixture.detectChanges();
    expect(component.serviceTitle).toEqual(mockService.data[0].attributes.structure.service.title);
  });

  it('should of getClass', () => {
    spyOn(service, 'getForm').and.returnValue(of(mockService));
    component.getClass('service');
    fixture.detectChanges();
    expect(component.serviceClass).toEqual(mockService.data[0].attributes.structure.service.class);
  });
});
