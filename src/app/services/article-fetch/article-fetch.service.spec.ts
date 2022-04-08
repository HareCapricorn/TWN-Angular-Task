import { TestBed } from '@angular/core/testing';

import { ArticleFetchService } from './article-fetch.service';

describe('ArticleFetchService', () => {
  let service: ArticleFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
