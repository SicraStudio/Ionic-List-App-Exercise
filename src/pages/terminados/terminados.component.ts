import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.component.html'
})
export class TerminadosComponent implements OnInit {

  constructor(
    public _listasService: ListaDeseosService,
    public navCtrl: NavController
  ) { }

  ngOnInit() { }

  public verDetalle(lista, idx: number) {
    this.navCtrl.push(DetalleComponent, { lista, idx });
  }
}