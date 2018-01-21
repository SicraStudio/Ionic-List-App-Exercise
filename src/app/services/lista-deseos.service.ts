import { Injectable } from '@angular/core';
import { Lista } from '../classes/lista';


@Injectable()
export class ListaDeseosService {
  
  public listas: Lista[] = [];
  
  constructor() {


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

   public borrarLista(idx:number) {
     this.listas.splice(idx, 1);
     this.actualizarData();
   }

}