import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
  it('should initialization of the component', () => {
    const component = new HomeComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(HomeComponent);
    expect(component.sectionItems.length).toBe(2);
    expect(component.serviceItems.length).toBe(5);
    expect(component.commitmentItems.length).toBe(3);
    expect(component.technologyItemsService.length).toBe(4);
    expect(component.technologyItemsImage.length).toBe(0);
    component.ngOnInit();
  });
});
