import { TestBed } from '@angular/core/testing';

import { PrinterestService } from './printerest.service';

describe('PrinterestService', () => {
  let service: PrinterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
