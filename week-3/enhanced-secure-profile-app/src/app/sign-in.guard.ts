/**
 * Title: sign-in.guard.ts
 * Author: Professor Krasso
 * Date: 02/26/2023
 * Modified By: Patrick Cuauro
 * Description: Sign-in guard
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
// added import
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SignInGuard implements CanActivate {
  
  constructor(private router: Router) {

  }

  canActivate( next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let isLoggedIn = next.queryParams['isLoggedIn'];
      
      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/']);
      }
      return false;
    }
}
// export const signInGuard: CanActivateFn = (route, state) => {
//   return true;
// }
