import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MianLibService } from 'mushroomsoft-lib';
import { HeaderComponent } from './header.component';
describe('HeaderComponent', () => {
  let service: MianLibService;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MianLibService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should initialization of the component', () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
    component.checked();
    component.notChecked();
  });
});
