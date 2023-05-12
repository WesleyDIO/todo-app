import { Component } from "@angular/core";

interface Tarefas{
    id: number;
   nome: string;
   descricao: string;
   categoria: string;
  }
  

@Component({
    templateUrl:'./todo.component.html',
})

export class TodoComponent{
    trfs: Tarefas[] = [];
    nextId = 1;
  
    Tarefas: Tarefas = {
    nome : '',
    id : 1,
    descricao:'',
    categoria:''
    }
  
    cadastrarUsuario():void{
  
      const Tarefa: Tarefas= {
        nome:this.Tarefas.nome,
        id : this.nextId ,
        descricao: this.Tarefas.descricao,
        categoria: this.Tarefas.categoria
      }
      this.trfs.push(Tarefa);
      

      this.Tarefas.nome=null;
      this.Tarefas.descricao=null;
      
       this.nextId ++
       localStorage.setItem('tarefas', JSON.stringify(this.trfs ));
      
       
    }
    
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
   
    mudar(): void{
      localStorage.setItem('tarefas', JSON.stringify(this.trfs))
    }
  
  }
  
