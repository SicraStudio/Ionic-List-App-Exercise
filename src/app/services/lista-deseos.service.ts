import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';


@Injectable()
export class ListaDeseosService {
  
  public listas: Lista[] = [];
  
  constructor() {

    // let lista1 = new Lista('Compras del Super');
    // let lista2 = new Lista('Juegos que deseo');
    // let lista3 = new Lista('Cosas de la Uni');

    // this.listas.push(lista1);
    // this.listas.push(lista2);
    // this.listas.push(lista3);

    this.cargarData();

    console.log("ListaDeseosService ::> inicializado");
    
   }

   public actualizarData() {
     localStorage.setItem('data', JSON.stringify(this.listas));
   }

   public cargarData() {
     if (localStorage.getItem('data')) this.listas = JSON.parse(localStorage.getItem('data'));
   }

   public agregarLista(lista: Lista) {
     this.listas.push(lista);
     this.actualizarData();
   }

}