import { Component } from "@angular/core";
import { User } from "src/models/users/user";
import { UserRepository } from "src/repositories/user.repository";
import { CookieService } from "src/services/cookie.service";
import { TesteService } from "src/services/teste.service";


interface Tarefas {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
}

interface categoria {
  nome: string;
}


@Component({
  templateUrl: './todo.component.html',
})

export class TodoComponent {

  private userId: string = 'joao.silva';
  private users: User[] = [];
  user!: User;

  constructor(
    private userRepository: UserRepository,
    private testeService: TesteService,
    private cookie: CookieService
  ) {
    userRepository.getUsers().subscribe({
      next: (value) => {
        this.users = value;
        this.user = this.getUsuarioLogado();
      }
    })
  }


  // adicionarTarefa(): void {
  //   if (!this.hasPermission('Add')) {
  //     alert('Não pode cadastrar');
  //     return;
  //   }
  //   alert('Pode cadastrar');
  // }

  // editarTarefa(): void {
  //   if (!this.hasPermission('Edit')) {
  //     alert('Não pode cadastrar');
  //     return;
  //   }
  //   alert('Pode cadastrar');
  // }

  // removerTarefa(): void {
  //   if (!this.hasPermission('Remove')) {
  //     alert('Não pode cadastrar');
  //     return;
  //   }
  //   this.removerTrf
  // }

  // hasPermission(permission: string): boolean {
  //   if (User === undefined) {
  //     return this.user.cardPermissions.some((cardPermission) => {
  //       return cardPermission === permission;
  //     });
  //   }
  //    return false;

  // }

  private getUsuarioLogado(): User {
    return this.users.find((user) => {
      return user.id === this.userId
    }) as User;
  }



  trfs: Tarefas[] = [];
  nextId = 1;


  ctgs: categoria[] = []; // Propriedade que armazena as categorias

  categorias: categoria = { nome: '' }
  categoria: string = ""

  categoriaDrop: categoria;
  tarefaDrop: Tarefas;
  indexDrop: number;


  Tarefas: Tarefas = {
    nome: '',
    id: 1,
    descricao: '',
    categoria: ''
  }

  cadastrar(): void {

    if (!this.Tarefas.categoria || !this.Tarefas.nome) {
      return;
    }

    if (this.verificarTarefa(this.Tarefas.categoria, this.Tarefas.nome)) {
      return;
    }

    const Tarefa: Tarefas = {
      nome: this.Tarefas.nome,
      id: this.nextId,
      descricao: this.Tarefas.descricao,
      categoria: this.Tarefas.categoria
    }
    this.trfs.push(Tarefa);


    this.Tarefas.nome = "";
    this.Tarefas.descricao = "";

    this.nextId++
    this.cookie.setCookie('tarefas', JSON.stringify(this.trfs),1)

  }

  removerTrf(index): void {
    this.trfs.splice(index, 1);
    this.cookie.setCookie('tarefas', JSON.stringify(this.trfs),1)
  }

  ngOnInit() {
    const salvamento = this.cookie.getCookie('tarefas');
    if (salvamento) {
      this.trfs = JSON.parse(salvamento)
      if (this.trfs.length > 0) {
        this.nextId = this.trfs[this.trfs.length - 1].id + 1;
      }
    }
    const categoriasSalvas = this.cookie.getCookie('categorias')
    if (categoriasSalvas) {
      this.ctgs = JSON.parse(categoriasSalvas)
    }
  }


  mudar(): void {
    this.cookie.setCookie('tarefas', JSON.stringify(this.trfs),1)
  }

  verificarTarefa(categoria: string, nome: string): boolean {
    for (const tarefa of this.trfs) {
      if (tarefa.categoria === categoria && tarefa.nome === nome) {
        return true;
      }
    }
    return false;
  }

  allowDrop(categoria, event: Event) {
    event.preventDefault();
    this.tarefaDrop.categoria = categoria
    console.log(categoria)
    this.cookie.setCookie('tarefas', JSON.stringify(this.trfs), 1);


  }

  drag(trf) {
    this.tarefaDrop = trf;

  }

  drop(event: Event, index): void {
    event.preventDefault();
    this.trfs.splice(this.trfs.indexOf(this.tarefaDrop), 1);
    this.trfs.splice(index, 0, this.tarefaDrop);

  }



}

