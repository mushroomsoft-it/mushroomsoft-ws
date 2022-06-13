import { ComponentFixture, TestBed} from '@angular/core/testing';
import { MianLibService } from 'mushroomsoft-lib';
import { ServiceComponent } from './service.component';


describe('ServiceComponent', () => {
  let service: MianLibService;
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MianLibService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should initialization of the component', () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
