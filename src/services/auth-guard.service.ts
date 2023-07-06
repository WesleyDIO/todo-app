import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthGuardAutorize } from "./auth-guard-Autorize";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private autorize: AuthGuardAutorize
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
        return this.autorize.autorize()
    }

}