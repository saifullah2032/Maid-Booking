import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // Provide mocks or real instances
        {
          provide: AuthService,
          useValue: {
            // Mock any methods your guard depends on
            isAdmin: () => true
          }
        },
        {
          provide: Router,
          useValue: {
            // Mock any methods your guard depends on
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    });

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    guard = new AdminGuard(authService, router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if user is admin', () => {
    // Create dummy route and state
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;

    // Now call canActivate with the correct arguments
    const result = guard.canActivate(route, state);

    expect(result).toBeTrue(); // or whatever your guard returns
  });

  it('should deny access if user is not admin', () => {
    // Make your mock method return false
    (authService.isAdmin as jasmine.Spy).and.returnValue(false);

    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;

    const result = guard.canActivate(route, state);

    expect(result).toBeFalse();
  });
});
