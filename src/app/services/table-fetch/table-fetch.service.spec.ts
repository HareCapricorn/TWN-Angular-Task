import { TestBed } from '@angular/core/testing';

import { TableFetchService } from './table-fetch.service';

describe('TableFetchService', () => {
  let service: TableFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
