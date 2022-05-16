import {HeaderComponent} from './header.component';
describe('HeaderComponent', () => {
  it('should initialization of the component', () => {
    const component = new HeaderComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(HeaderComponent);
    expect(component.menuItems.length).toBe(4);
  });
});
