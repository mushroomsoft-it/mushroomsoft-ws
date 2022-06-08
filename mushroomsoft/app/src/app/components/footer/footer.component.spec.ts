import {FooterComponent} from './footer.component';

describe('FooterComponent', () => {
  it('should initialization of the component', () => {
    const component = new FooterComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(FooterComponent);
    expect(component.titleLocation.length).toBe(8);
  });
});
