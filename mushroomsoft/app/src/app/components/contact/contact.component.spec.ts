import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {ContactComponent} from './contact.component';
import {of} from 'rxjs';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let service: MianLibService;
  let httpClient: HttpClient;
  let injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      providers: [MianLibService],
      imports:[HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(MianLibService);
    injector = getTestBed();
    httpClient = injector.get(HttpClient);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get the file contact.json', () => {
    let mockContact = [
      {
        key: 'Name',
        type: 'input',
        templateOptions: {
          label: 'Name',
          placeholder: 'Name'
        }
      },
      {
        key: 'Phone',
        type: 'input',
        templateOptions: {
          label: 'Phone',
          placeholder: 'Phone number'
        }
      },
      {
        key: 'Email',
        type: 'input',
        templateOptions: {
          label: 'Email Address',
          placeholder: 'Email'
        }
      },
      {
        key: 'Message',
        type: 'textarea',
        templateOptions: {
          label: 'Message',
          placeholder: 'Message'
        }
      }
    ];
    component.ngOnInit();
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getForm('contact');
    expect(httpClient.get).toHaveBeenCalled();
    expect(component.fields).toEqual(mockContact);
    component.submit();
  });
});
