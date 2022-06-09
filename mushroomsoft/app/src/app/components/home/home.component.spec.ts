import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
  it('should initialization of the component', () => {
    const component = new HomeComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(HomeComponent);
  });
});
