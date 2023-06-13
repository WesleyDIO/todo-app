import { Component } from "@angular/core";
import { forEach } from "@angular/router/src/utils/collection";


interface Tarefas{
    id: number;
   nome: string;
   descricao: string;
   categoria: string;
  }

  interface categoria {
    nome: string;
  }
  

@Component({
    templateUrl:'./todo.component.html',
})

export class TodoComponent{
    trfs: Tarefas[] = [];
    nextId = 1;


    ctgs: categoria[] = []; // Propriedade que armazena as categorias

      categorias: categoria = { nome: '' }
      categoria: string = ""
      
      categoriaDrop: categoria;
      tarefaDrop: Tarefas;
      indexDrop: number;

  
    Tarefas: Tarefas = {
    nome : '',
    id : 1,
    descricao:'',
    categoria:''
    }
  
    cadastrar():void{
  
        if(!this.Tarefas.categoria || !this.Tarefas.nome ){
          return;
        }

        if(this.verificarTarefa(this.Tarefas.categoria, this.Tarefas.nome)){
          return;
        }

      const Tarefa: Tarefas= {
        nome:this.Tarefas.nome,
        id : this.nextId ,
        descricao: this.Tarefas.descricao,
        categoria: this.Tarefas.categoria
      }
      this.trfs.push(Tarefa);
      

      this.Tarefas.nome="";
      this.Tarefas.descricao="";
      
       this.nextId ++
       localStorage.setItem('tarefas', JSON.stringify(this.trfs ));
      
    }
    
    removerTarefa(index): void {
      this.trfs.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(this.trfs));
    }
  
    ngOnInit(){
      const salvamento = localStorage.getItem('tarefas');
      if(salvamento){
        this.trfs = JSON.parse(salvamento)
        if(this.trfs.length > 0){
        this.nextId = this.trfs[this.trfs.length - 1].id + 1;
        }
      }
      const categoriasSalvas = localStorage.getItem('categorias')
    if (categoriasSalvas) {
      this.ctgs = JSON.parse(categoriasSalvas)
    }
    }
    
   
    mudar(): void{
      localStorage.setItem('tarefas', JSON.stringify(this.trfs))
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
      localStorage.setItem('tarefas', JSON.stringify(this.trfs ));
     

    }
  
    drag(trf) {
      this.tarefaDrop= trf;
   
    }
    
    drop (event: Event, index): void {
      event.preventDefault();
      this.trfs.splice(this.trfs.indexOf(this.tarefaDrop), 1);
      this.trfs.splice(index, 0, this.tarefaDrop);
  
    }
    
    

  }
  
