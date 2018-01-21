import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../classes/lista';


@Pipe({name: 'pendientes', pure: false})
export class PendientesPipe implements PipeTransform {
  transform(listas: Lista[], completa: boolean = false): Lista[] {
    let listaFiltrada:Lista[] = [];

    for(let lista of listas) {
      if(lista.terminada === completa) {
        listaFiltrada.push(lista);
      }
    }

    return listaFiltrada;
  }
}