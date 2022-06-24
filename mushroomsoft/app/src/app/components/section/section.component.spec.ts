import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {SectionComponent} from './section.component';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;
  let service: MianLibService;
  let httpClient: HttpClient;
  let injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionComponent],
      providers: [MianLibService],
      imports:[HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(MianLibService);
    injector = getTestBed();
    httpClient = injector.get(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should of getForm', () => {
    const response: any = '' ;
    spyOn(service, 'getForm').and.returnValue(of(response))
    component.getForm('section');
    fixture.detectChanges();
    expect(component.sectionItems).toEqual(response);
  });

  it('should of getSections', () => {
    const response: any = '' ;
    spyOn(service, 'getForm').and.returnValue(of(response))
    component.getSections('section');
    fixture.detectChanges();
    expect(component.sectionsItems).toEqual(response);
  });

  it('should of getDescription', () => {
    const response: any = '' ;
    spyOn(service, 'getForm').and.returnValue(of(response))
    component.getDescription('section');
    fixture.detectChanges();
    expect(component.sectionDescription).toEqual(response);
  });
});
