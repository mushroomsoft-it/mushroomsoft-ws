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
  public serviceItems: any;
  public servicesItems: any;

  constructor(private libService: MianLibService) {}

  ngOnInit(): void {
    this.serviceItems = this.libService.getService();
    this.serviceTitle = this.serviceItems.service.title;
    this.serviceClass = this.serviceItems.service.class;
    this.servicesItems = this.serviceItems.services;
  }
}
