import { Component } from '@angular/core';



interface Tarefas{
  id: number;
 nome: string;
 descricao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  trfs: Tarefas[] = [];
  nextId = 1;

  Tarefas: Tarefas = {
  nome : '',
  id : 1,
  descricao:''
  }

  cadastrarUsuario():void{

    const Tarefa: Tarefas= {
      nome:this.Tarefas.nome,
      id : this.nextId ,
      descricao: this.Tarefas.descricao
    }
    this.trfs.push(Tarefa);

    this.Tarefas.nome=null;
    this.Tarefas.descricao=null;
    
     this.nextId ++
     localStorage.setItem('tarefas', JSON.stringify(this.trfs ));
  
  }
  
  indice2 = 0;
  
  removerTarefa(indice):void{
    this.trfs.splice(indice, 1)
    localStorage.setItem('tarefas', JSON.stringify(this.trfs));
  }

  ngOnInit(){
    const salvamento = localStorage.getItem('tarefas');
    if(salvamento){
      this.trfs = JSON.parse(salvamento);
      this.nextId = this.trfs[this.trfs.length - 1].id + 1;
    }
  }

}
