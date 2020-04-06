import { TestBed } from '@angular/core/testing';

import { PutformService } from './putform.service';

describe('PutformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutformService = TestBed.get(PutformService);
    expect(service).toBeTruthy();
  });
});
