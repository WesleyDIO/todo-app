import { Component, OnInit } from '@angular/core';

interface categoria {
  nome: string;
}

@Component({
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit{

  ctgs: categoria[] = []; // Propriedade que armazena as categorias

  categorias: categoria = { nome: '' }

  ngOnInit(): void {
    // Recupera os dados salvos no localStorage, se houver
    const categoriasSalvas = localStorage.getItem('categorias')
    if (categoriasSalvas) {
      this.ctgs = JSON.parse(categoriasSalvas)
    }
  }

  cadastrarCategoria(): void {
    const categoria: categoria = { nome: this.categorias.nome }
    this.ctgs.push(categoria)
    this.categorias.nome = ''

    // Salva as categorias atualizadas no localStorage
    localStorage.setItem('categorias', JSON.stringify(this.ctgs))
  }
  removerCategoria(indice: number):void{
    this.ctgs.splice(indice, 1);
    localStorage.setItem('categorias', JSON.stringify(this.ctgs));
  }
}
