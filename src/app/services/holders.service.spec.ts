import { TestBed } from '@angular/core/testing';

import { HoldersService } from './holders.service';

describe('HoldersService', () => {
  let service: HoldersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoldersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
