import { TestBed } from '@angular/core/testing';

import { SkeletonComponentsService } from './skeleton-components.service';

describe('SkeletonComponentsService', () => {
  let service: SkeletonComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkeletonComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
