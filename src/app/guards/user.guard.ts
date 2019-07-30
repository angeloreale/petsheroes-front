import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../usuarios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private authService: AuthService, private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>| boolean{
    if(this.authService.Userlogged()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  canLoad(route : Route): Observable<boolean> | boolean{
    if(this.authService.Userlogged()){
      return false;
    }
    return true;
  }
}
