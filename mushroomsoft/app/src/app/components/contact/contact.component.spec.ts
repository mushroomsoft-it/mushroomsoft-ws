import {TestBed} from '@angular/core/testing';
import {MianLibService} from 'mushroomsoft-lib';
import {ContactComponent} from './contact.component';
describe('ContactComponent', () => {
  const mockContact = [
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      providers: [MianLibService]
    }).compileComponents();
  });
  it('should initialization of the component', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.fields).toEqual(mockContact);
    app.submit();
  });
});
