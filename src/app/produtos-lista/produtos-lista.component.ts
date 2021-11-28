import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

// importamos o service de Produtos
import { ProdutosService } from '../services/produtos.service'

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss']
})
export class ProdutosListaComponent implements OnInit {
  // variavel
  categoria = null
  produtos : any = []

  constructor(private route:ActivatedRoute, private router:Router, private produtosService: ProdutosService) {
    // fica de olho nos eventos das rotas
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        // codigo a ser rodado no inicio da requisicao
        // mostrar um loading
      }

      if (event instanceof NavigationEnd) {
        // sempre que tiver a mudanca de evento, iremos chamar o metodo init
        this.init()
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    })
  }


  ngOnInit(): void {
  }

  init () {
    // pegamos a categoria da rota
    this.categoria = this.route.snapshot.params.categoria

    // com a categoria, listamos o produtos
    this.produtos = this.produtosService.getByCategoria(this.categoria)

    this.produtos = this.produtos.map((produto: any) => {
      const name = produto.titulo.split(' ');
      produto.titulo = `${name[0]} ${name[1]}`;
      produto.descricao = `${name[2]} ${name[3]}`;

      return produto
    })
  }

}
