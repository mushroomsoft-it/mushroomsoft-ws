import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {BannerComponent} from './banner.component';
import {of} from 'rxjs';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let service: MianLibService;
  let httpClient: HttpClient;
  let injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerComponent],
      providers: [MianLibService],
      imports:[HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(MianLibService);
    injector = getTestBed();
    httpClient = injector.get(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should of getForm', () => {
    const response: any = '';
    spyOn(service, 'getForm').and.returnValue(of(response))
    component.getForm('section');
    fixture.detectChanges();
    expect(component.sectionItems).toEqual(response);
  });

  it('should of getTitle', () => {
    const response: string = '';
    spyOn(service, 'getForm').and.returnValue(of(response))
    component.getTitle('section');
    fixture.detectChanges();
    expect(component.sectionTitle).toEqual(response);
  });

  it('should of getImage', () => {
    const response: string = '';
    spyOn(service, 'getForm').and.returnValue(of(response))
    component.getImage('section');
    fixture.detectChanges();
    expect(component.sectionImage).toEqual(response);
  });
});
