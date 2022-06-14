import {TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {HeaderComponent} from './header.component';
describe('HeaderComponent', () => {
  const mockMenu = {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [MianLibService]
    }).compileComponents();
  });
  it('should initialization of the component', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.menuItems).toEqual(mockMenu.menu);
    app.checked();
    app.notChecked();
  });
});
