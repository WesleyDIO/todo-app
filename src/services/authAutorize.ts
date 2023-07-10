import { Injectable } from "@angular/core";
import { User } from "src/models/users/user";
import { CookieService } from "./cookie.service";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthAutorize {

    constructor(
        private cookie: CookieService
    ){
        const logado = this.cookie.getCookie("logado")
        this.logado = JSON.parse(logado)
    }

    logado: User

    autorizeOn(): boolean{
        if(this.logado){
            return true
        }
        
        return false
    }

}