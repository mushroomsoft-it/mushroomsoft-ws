import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MianLibService} from '@mushroomsoft-lib';
import {ContactComponent} from './contact.component';
describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      providers: [MianLibService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Get the JSON of the banner for the formly', () => {
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
    expect(component.fields).toEqual(mockContact);
    component.submit();
  });
});
