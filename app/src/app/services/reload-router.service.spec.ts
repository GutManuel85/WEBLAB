import { TestBed } from '@angular/core/testing';

import { ReloadRouteService } from './reload-router.service';

describe('ReoloadRouterService', () => {
  let service: ReloadRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
