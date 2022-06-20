import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {HeaderComponent} from './header.component';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
      imports:[HttpClientTestingModule]
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
    };
    component.ngOnInit();
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getForm('menu');
    expect(httpClient.get).toHaveBeenCalled();
    expect(component.menuItems).toEqual(mockMenu.menu);
    component.checked();
    component.notChecked();
  });
});
