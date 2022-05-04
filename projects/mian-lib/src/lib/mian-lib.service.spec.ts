import { TestBed } from '@angular/core/testing';

import { MianLibService } from './mian-lib.service';

describe('MianLibService', () => {
  let service: MianLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MianLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
