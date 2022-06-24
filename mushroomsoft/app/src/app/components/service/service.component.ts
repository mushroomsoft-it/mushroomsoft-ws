import {Component, OnInit} from '@angular/core';
import {MianLibService} from '@mushroomsoft-lib';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  public serviceTitle: string = '';
  public serviceClass: string = '';
  public serviceItems: any = '';
  public servicesItems: any = '';

  constructor(private libService: MianLibService) {}

  ngOnInit() {
    this.getForm('service');
    this.getServices('service');
    this.getTitle('service');
    this.getClass('service');

  }

  getForm(type:string):void {
    this.libService.getForm(type).subscribe((data : any ) => {
      this.serviceItems = data.data[0].attributes.structure;
    });
  }

  getServices(type:string){
    this.libService.getForm(type).subscribe((data : any ) => {
      this.servicesItems = data.data[0].attributes.structure.services;
    });
  }

  getTitle(type:string){
    this.libService.getForm(type).subscribe((data : any ) => {
      this.serviceTitle = data.data[0].attributes.structure.service.class;
    });
  }

  getClass(type:string){
    this.libService.getForm(type).subscribe((data : any ) => {
      this.serviceClass = data.data[0].attributes.structure.service.class;
    });
  }
}

