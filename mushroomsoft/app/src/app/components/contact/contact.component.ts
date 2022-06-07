import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
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

  submit() {
    alert(JSON.stringify(this.model));
  }
}
