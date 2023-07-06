import { Injectable } from "@angular/core";
import { join } from "path";
import { User } from "src/models/users/user";
import { CookieService } from "./cookie.service";

@Injectable()
export class AuthGuardAutorize{
    constructor(
        private cookieLogado: CookieService
    ){
        const logado = cookieLogado.getCookie('logado') || null
        this.logado = JSON.parse(logado)
    }

    logado: User
    autorize():boolean{
        if(this.logado){
            return true
        }
        else{
            return false
        }
    }
}
