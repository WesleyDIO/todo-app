import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/models/users/user";
import { CookieService } from "./cookie.service";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthAutorize {

    constructor(
        private cookie: CookieService,
        private router: Router
    ){
        const logado = this.cookie.getCookie("logado") || null
        this.logado = JSON.parse(logado)
    }

    logado: User

    autorizeOn(): boolean{
        if(this.logado){
            return true
        }else{
            this.router.navigate(['/login'])
            return false

        }
    }

}