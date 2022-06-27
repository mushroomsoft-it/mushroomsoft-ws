import {HttpClient} from '@angular/common/http';
import {getTestBed, TestBed} from '@angular/core/testing';

import {MianLibService} from './lib.service';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('MianLibService', () => {
  let service: MianLibService;
  let httpClient: HttpClient;
  let injector;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MianLibService);
    injector = getTestBed();
    httpClient = injector.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get menu', () => {
    spyOn(httpClient, 'get').and.returnValue(of([]));
    service.getForm('contact');
    expect(httpClient.get).toHaveBeenCalled();
  });
});
