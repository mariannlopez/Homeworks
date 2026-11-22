import { TestBed } from '@angular/core/testing';

import { GiphyService } from './services';

describe('GiphyService', () => {
  let service: GiphyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
