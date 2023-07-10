import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthAutorize } from "./authAutorize";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private userLogado: AuthAutorize
    ){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        return this.userLogado.autorizeOn()
        
    }

}