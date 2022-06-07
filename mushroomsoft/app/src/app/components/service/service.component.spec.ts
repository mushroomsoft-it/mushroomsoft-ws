import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceComponent } from './service.component';

describe('ServiceComponent', () => {
  it('should initialization of the component', () => {
    const component = new ServiceComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ServiceComponent);
    expect(component.serviceItems.length).toBe(5);
  });
});