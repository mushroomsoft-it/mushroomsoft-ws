import {TechnologyComponent} from './technology.component';

describe('TechnologyComponent', () => {
  it('should initialization of the component', () => {
    const component = new TechnologyComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(TechnologyComponent);
    expect(component.technologyItemsService.length).toBe(4);
    expect(component.technologyItemsImage.length).toBe(0);
    component.ngOnInit();
  });
});
