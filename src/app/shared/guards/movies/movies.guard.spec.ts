import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { moviesGuard } from './movies.guard';

describe('moviesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => moviesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
