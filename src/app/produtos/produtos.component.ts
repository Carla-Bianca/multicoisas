import { Component, OnInit } from '@angular/core';

// importamos o service de MultiCoisas
import { MultiCoisasService } from '../services/produtos.service'
import produtos from '../../constants/produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class MultiCoisasComponent implements OnInit {
  // criamos a variavel de produtos
  produtos : any = []

  constructor(private produtosService: MultiCoisasService) { }

  ngOnInit(): void {
    this.init()
  }

  init () {
    // pegamos todos os produtos e jogamos na variavel
    this.produtos = this.produtosService.listar()

    this.produtos = this.produtos.map((produto: any) => {
      const name = produto.titulo.split(' ');
      produto.titulo = `${name[0]} ${name[1]}`;
      produto.descricao = `${name[2]} ${name[3]}`;

      return produto
    })
  }
}
