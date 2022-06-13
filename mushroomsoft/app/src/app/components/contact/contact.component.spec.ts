import {ComponentFixture, TestBed} from '@angular/core/testing';
import { MianLibService } from 'mushroomsoft-lib';
import { ContactComponent } from './contact.component';


describe('ContactComponent', () => {
  let service: MianLibService;
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MianLibService);
  });
  it('should initialization of the component', () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
    component.submit();
  });
});
