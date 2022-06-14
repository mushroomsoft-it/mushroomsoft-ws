import {TestBed} from '@angular/core/testing';

import {MianLibService} from './lib.service';

describe('MianLibService', () => {
  let service: MianLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MianLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get menu', () => {
    expect(service.getMenu());
  });

  it('should get banner', () => {
    expect(service.getBanner());
  });

  it('should get section', () => {
    expect(service.getSection());
  });

  it('should get article', () => {
    expect(service.getArticle());
  });

  it('should get service', () => {
    expect(service.getService());
  });

  it('should get technology', () => {
    expect(service.getTechnology());
  });

  it('should get location', () => {
    expect(service.getLocation());
  });

  it('should get contact', () => {
    expect(service.getContact());
  });
});
