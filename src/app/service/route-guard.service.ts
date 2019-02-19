import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardCodedAuthenticationService: HardcodedAuthenticationService, private router: Router) { }

  // had to get this method by f12 into the CanActivate and taking the correct method
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardCodedAuthenticationService.isUserLoggedIn())
    return true;

    // reverts the user back to the login in page if the user isn't logged in
    this.router.navigate(['login']);

    return false;
  };
}
