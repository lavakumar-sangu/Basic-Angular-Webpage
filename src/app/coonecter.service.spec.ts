import { TestBed } from '@angular/core/testing';

import { CoonecterService } from './coonecter.service';

describe('CoonecterService', () => {
  let service: CoonecterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoonecterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
