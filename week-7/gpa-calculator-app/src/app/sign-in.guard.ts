
/**
 * Title: sign-in.guard.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/19/2023
 * Description: sign-in guard
 */

// import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const sessionUser = this.cookieService.get('session_user');
      //manages the cookies for the application

      if (sessionUser) {
        return true;
      } else {
        this.router.navigate(['/session/sign-in']);
        //this redirects the user to the sign-in page
        return false;
      }
    }
};
