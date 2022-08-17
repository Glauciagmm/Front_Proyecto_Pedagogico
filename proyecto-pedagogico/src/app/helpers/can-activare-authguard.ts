import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
@Injectable()
export class CanActivateAuthGuard implements CanActivate {
  constructor(private router: Router, private tokenStorageService: TokenStorageService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.tokenStorageService.getUser()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['/login']);
        return false;
    }
} 