import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from "rxjs";
import {ApiServices} from "./api.services";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private api:ApiServices) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if(this.api.usuario){
      return true;
    }else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
