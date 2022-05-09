import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
  it('should initialization of the component', () => {
    const component = new HomeComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(HomeComponent);
    expect(component.sectionOne.length).toBe(1);
    expect(component.sectionTwo.length).toBe(1);
    expect(component.sectionThree.length).toBe(1);
    expect(component.commitmentTitle.length).toBe(1);
    expect(component.commitmentImage.length).toBe(1);
    expect(component.commitmentClass.length).toBe(1);
    expect(component.commitmentDescription.length).toBe(1);
  });
});
