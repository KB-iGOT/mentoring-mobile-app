import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { localKeys } from 'src/app/core/constants/localStorage.keys';
import { LocalStorageService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private localStorage: LocalStorageService) { }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<any> {
    this.localStorage.setLocalData(localKeys.userDetails.access_token, "dsvgseiorgergergergeg");
    // TODO : remove above line
    var accessToken: any = await this.localStorage.getLocalData(localKeys.userDetails?.access_token);
    if (accessToken) {
      return true
    } else {
      alert("You are currently not logged in, please provide Login!")
      this.router.navigate(["/auth/login"]);
      return false
    }
  }
}