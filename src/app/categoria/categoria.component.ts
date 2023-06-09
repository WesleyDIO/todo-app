import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';
import { CookieService } from 'src/services/cookie.service';
import { TesteService } from 'src/services/teste.service';

interface categoria {
  nome: string;
}

interface Tarefas{
  id: number;
 nome: string;
 descricao: string;
 categoria: string;
}

@Component({
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit{

  private userId: string = 'joao.silva';
  private users: User[] = [];
  user!: User;

  constructor(
    private cookie: CookieService,
    private userRepository: UserRepository,
    private testeService: TesteService
  ){
    userRepository.getUsers().subscribe({
      next: (value) => {
        this.users = value;
        this.user = this.getUsuarioLogado();
      }
    })
  }

  private getUsuarioLogado(): User {
    return this.users.find((user) => {
      return user.id === this.userId
    }) as User;
  }

  ctgs: categoria[] = []; // Propriedade que armazena as categorias

  categorias: categoria = { nome: '' }

  trfs: Tarefas[] = [];
  nextId = 1;

  Tarefas: Tarefas = {
    nome : '',
    id : 1,
    descricao:'',
    categoria:''
    }

  ngOnInit(): void {
    // Recupera os dados salvos no localStorage, se houver
    const categoriasSalvas = this.cookie.getCookie('categorias')
    if (categoriasSalvas) {
      this.ctgs = JSON.parse(categoriasSalvas)
    }
  }

  cadastrarCategoria(): void {
    let ctg = this.categorias.nome
   if(!this.categorias.nome || this.verificaCategoria(this.categorias.nome)){
      return;
    }
    

    const categoria: categoria = { nome: this.categorias.nome }
    this.ctgs.push(categoria)
    this.categorias.nome = ''

    // Salva as categorias atualizadas no cookie
    this.cookie.setCookie('categorias',JSON.stringify(this.ctgs), 1);
    
    
  }
  removerCategoria(indice: number):void{
    this.ctgs.splice(indice, 1);
    this.cookie.setCookie('categorias', JSON.stringify(this.ctgs),1)
    
    
    this.trfs.splice(indice, 1)
    this.cookie.setCookie('tarefas', JSON.stringify(this.ctgs),1)
    
  }
   
  verificaCategoria(ctg: string): boolean{
    return this.ctgs.some(categoria => categoria.nome === ctg);
}

}
