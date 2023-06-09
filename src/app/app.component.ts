import { Component } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';
import { CookieService } from 'src/services/cookie.service';
import { TesteService } from 'src/services/teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    private userRepository: UserRepository,
    private testeService: TesteService,
    private cookie: CookieService 
  ) {
    userRepository.getUsers().subscribe({
      next: (value) => {
        this.cookie.setCookie("Usuarios", JSON.stringify(value),1);
      }
    })
  }

}
