import { TestBed } from '@angular/core/testing';

import { ReloadRouterService } from './reoload-router.service';

describe('ReoloadRouterService', () => {
  let service: ReloadRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
