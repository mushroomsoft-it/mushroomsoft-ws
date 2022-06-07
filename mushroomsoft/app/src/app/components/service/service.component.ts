import { Component } from '@angular/core';
import serviceItems from '../../../config/service.json';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  public serviceTitle = serviceItems.service.title;
  public serviceClass = serviceItems.service.class;
  public serviceItems = serviceItems.services;
}
