import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
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
      imports: [HttpClientTestingModule]
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
    let mockContact = {
      data: [
        {
          id: 5,
          attributes: {
            structure: [
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
            ],
            date_created: '2022-06-20T04:00:00.000Z',
            version: 0,
            createdAt: '2022-06-20T14:37:35.297Z',
            updatedAt: '2022-06-20T14:37:37.549Z',
            publishedAt: '2022-06-20T14:37:37.548Z',
            type: 'contact'
          }
        }
      ],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 1,
          total: 1
        }
      }
    };
    spyOn(service, 'getForm').and.returnValue(of(mockContact));
    component.getForm();
    fixture.detectChanges();
    expect(component.fields).toEqual(mockContact.data[0].attributes.structure);
    component.submit();
  });
});
