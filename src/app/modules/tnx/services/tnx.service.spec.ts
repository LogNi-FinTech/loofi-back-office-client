import { TestBed } from '@angular/core/testing';

import { TnxService } from './tnx.service';

describe('TnxService', () => {
  let service: TnxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TnxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
