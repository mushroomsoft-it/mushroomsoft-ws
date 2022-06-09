import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionComponent} from './section.component';

describe('SectionComponent', () => {
  it('should initialization of the component', () => {
    const component = new SectionComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(SectionComponent);
    expect(component.sectionItems.length).toBe(2);
  });
});
