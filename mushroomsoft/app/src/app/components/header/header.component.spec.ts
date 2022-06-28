import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {HeaderComponent} from './header.component';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: MianLibService;
  let httpClient: HttpClient;
  let injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [MianLibService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(MianLibService);
    injector = getTestBed();
    httpClient = injector.get(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the file menu.json', () => {
    let mockMenu = {
      data: [
        {
          id: 7,
          attributes: {
            structure: {
              menu: [
                {
                  title: 'WHO WE ARE',
                  class: 'ms-navigation-item ms-nav-link',
                  url: 'whoWeare'
                },
                {
                  title: 'SERVICES',
                  class: 'ms-navigation-item ms-nav-link',
                  url: 'services'
                },
                {
                  title: 'COMMITMENT',
                  class: 'ms-navigation-item ms-nav-link',
                  url: 'focus'
                },
                {
                  title: 'TECHNOLOGY',
                  class: 'ms-navigation-item ms-nav-link',
                  url: 'tecnology'
                },
                {
                  title: 'LOCATION',
                  class: 'ms-navigation-item ms-nav-link',
                  url: 'location'
                }
              ]
            },
            date_created: '2022-06-20T04:00:00.000Z',
            version: 0,
            createdAt: '2022-06-20T14:38:33.908Z',
            updatedAt: '2022-06-20T14:43:27.035Z',
            publishedAt: '2022-06-20T14:43:27.032Z',
            type: 'menu'
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

    spyOn(service, 'getForm').and.returnValue(of(mockMenu));
    component.getForm();
    fixture.detectChanges();
    expect(component.menuItems).toEqual(mockMenu.data[0].attributes.structure.menu);
    component.checked();
    component.notChecked();
  });
});
