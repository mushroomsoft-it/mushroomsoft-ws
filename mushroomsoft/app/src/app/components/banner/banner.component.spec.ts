import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  it('should initialization of the component', () => {
    const component = new BannerComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(BannerComponent);
    expect(component.sectionItems.length).toBe(2);
  });
});
