import { TestBed } from '@angular/core/testing';

import { RankingHeapService } from './ranking-heap';

describe('RankingHeapService', () => {
  let service: RankingHeapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingHeapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
