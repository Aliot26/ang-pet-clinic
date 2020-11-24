import { TestBed } from '@angular/core/testing';

import { OwnerDetailsService } from './owner-details.service';

describe('OwnerDetailsService', () => {
  let service: OwnerDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
