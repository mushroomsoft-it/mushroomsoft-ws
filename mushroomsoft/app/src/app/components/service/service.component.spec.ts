import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {ServiceComponent} from './service.component';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ServiceComponent', () => {
  let component: ServiceComponent;
  let fixture: ComponentFixture<ServiceComponent>;
  let service: MianLibService;
  let httpClient: HttpClient;
  let injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceComponent],
      providers: [MianLibService],
      imports:[HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(MianLibService);
    injector = getTestBed();
    httpClient = injector.get(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should of getForm', () => {
    const response: any = '' ;
    spyOn(service, 'getForm').and.returnValue(of(response))
    component.getForm('service');
    fixture.detectChanges();
    expect(component.serviceItems).toEqual(response);
  });

  it('should of getServices', () => {
    const response: any = '' ;
    spyOn(service, 'getForm').and.returnValue(of(response))
    component.getServices('service');
    fixture.detectChanges();
    expect(component.servicesItems).toEqual(response);
  });

  it('should of getTitle', () => {
    const response: any = '' ;
    spyOn(service, 'getForm').and.returnValue(of(response))
    component.getTitle('service');
    fixture.detectChanges();
    expect(component.serviceTitle).toEqual(response);
  });

  it('should of getClass', () => {
    const response: any = '' ;
    spyOn(service, 'getForm').and.returnValue(of(response))
    component.getClass('service');
    fixture.detectChanges();
    expect(component.serviceClass).toEqual(response);
  });
});
