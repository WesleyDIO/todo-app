import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";
import { CookieService } from "src/services/cookie.service";

@Component({
  templateUrl: "login.component.html",
  styleUrls: ['login.component.css']
})

export class LoginComponent{
    constructor(private httpClient: HttpClient, private userRepository: UserRepository, private cookie: CookieService) {
        userRepository.getUsers().subscribe({
          next: (value) => {
            this.users = value;
          }
        });
    }

    users: User [] = []
    id: string
    senha: string
    
    login(){
        this.users.forEach(element => {
           if(this.id == element.id && this.senha == element.password) {
            window.location.replace("http://localhost:4200/todo")
            this.cookie.setCookie("logado",JSON.stringify(element),1);
           }
        });
    }

}