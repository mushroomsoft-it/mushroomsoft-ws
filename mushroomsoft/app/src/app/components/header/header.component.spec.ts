import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  it('should initialization of the component', () => {
    const component = new HeaderComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(HeaderComponent);
    expect(component.menuItems.logo.length).toBe(1);
    expect(component.menuItems.menu.length).toBe(5);
  });
});
