import { Injectable } from '@angular/core';

// importamos a constante de produtos
import produtosConstante from '../../constants/produtos'

@Injectable({
  providedIn: 'root'
})

export class MultiCoisasService {
  private produtos: any = []

  constructor() {
  }

  // retorna todos produtos
  listar () {
    this.produtos = produtosConstante
    return this.produtos
  }

  // retorna produtos por categoria
  getByCategoria (categoria: any) {
    this.produtos = produtosConstante

    // filtramos o produto por categoria e retornamos
    return this.produtos.filter((produto: any) => produto.categoria === categoria)
  }
}
