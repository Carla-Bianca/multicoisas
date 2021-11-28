import { Component } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { MultiCoisasService } from "./services/produtos.service";
import categorias from '../constants/categorias'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categorias = categorias
  title = 'MultiCoisas';
  routeActive = '';

  constructor(private route:ActivatedRoute, private router:Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // pegamos a categoria da rota
        this.routeActive = this.router.url
      }
    })
  }

  getCategoria () {
    const categoria = this.categorias.find(categoria => this.routeActive.match(categoria.url))
    if (categoria) {
      return categoria.nome
    } else {
      return ''
    }
  }

}
