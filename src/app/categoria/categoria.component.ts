import { Component, OnInit } from '@angular/core';

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
    const categoriasSalvas = localStorage.getItem('categorias')
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

    // Salva as categorias atualizadas no localStorage
    localStorage.setItem('categorias', JSON.stringify(this.ctgs))
    
  }
  removerCategoria(indice: number):void{
    this.ctgs.splice(indice, 1);
    localStorage.setItem('categorias', JSON.stringify(this.ctgs));
    
    this.trfs.splice(indice, 1)
    localStorage.setItem('tarefas', JSON.stringify(this.trfs));
  }
   
  verificaCategoria(ctg: string): boolean{
    return this.ctgs.some(categoria => categoria.nome === ctg);
}

}
