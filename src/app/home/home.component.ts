import { Component, OnInit } from '@angular/core';

// importamos a constante de categorias
import categoriasConstante from '../../constants/categorias'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // criamos a variavel "categoria"
  // e jogamos a constante de categorias dentro da variavel categorias
  categorias = categoriasConstante

  constructor() { }

  ngOnInit(): void {
  }

}
