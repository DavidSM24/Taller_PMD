import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WardAdminService implements CanActivate {

  constructor(private authS: AuthService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    let user: User = this.authS.user;

    try {

      if (user.administrator) return true;
      else {
        this.router.navigate(['']);
        return false;
      }

    } catch (error) {
      this.router.navigate(['']);
      return false;
    }


  }


}
