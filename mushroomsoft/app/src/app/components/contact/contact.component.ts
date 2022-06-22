import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';
import {MianLibService} from '@mushroomsoft-lib';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form = new FormGroup({});
  model: {} = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  constructor(private libService: MianLibService) {}

  ngOnInit() {
    this.libService.getForm('contact').subscribe((data : any ) => {
      this.fields = data.data[0].attributes.structure
    });
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}
