import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  users: User[];
  ngOnInit() {
  }
  id: string;
  nome: string;
  password: string;
  email: string;



  constructor(private httpClient: HttpClient, private userRepository: UserRepository) {
    userRepository.getUsers().subscribe({
      next: (value) => {
        this.users = value;
      }
    });
  }


  cadastrarUsuario(): void {
    let cadastrado: boolean = true;

    const usuario: User = {
      id: this.id,
      nome: this.nome,
      password: this.password,
      email: this.email
    }


    this.users.forEach(element => {
      if (element.id == this.id) {
        alert("Usuário já foi cadastrado. Cadastre um novo Usuário");
        this.id = "";
        this.nome = "";
        this.password = "";
        this.email = "";
        cadastrado = false
      }
    });



    if (cadastrado == true) {
      this.httpClient.post<User[]>("http://localhost:4300/usuarios/cadastro", usuario)
        .subscribe((req) => {
        })
      this.id = "";
      this.nome = "";
      this.password = "";
      this.email = "";

      alert("Usuário Cadastrado com Sucesso!");
      window.location.replace("http://localhost:4200/login")
      cadastrado = false;
    }
        
  }


  chamaLogin(): void {
    window.location.replace("http://localhost:4200/login")
  }

}