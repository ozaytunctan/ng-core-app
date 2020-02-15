import { TestBed } from '@angular/core/testing';

import { CoreLibService } from './core-lib.service';

describe('CoreLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreLibService = TestBed.get(CoreLibService);
    expect(service).toBeTruthy();
  });
});
