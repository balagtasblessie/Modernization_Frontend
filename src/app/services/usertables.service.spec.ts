import { TestBed } from '@angular/core/testing';

import { UsertablesService } from './usertables.service';

describe('UsertablesService', () => {
  let service: UsertablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsertablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
