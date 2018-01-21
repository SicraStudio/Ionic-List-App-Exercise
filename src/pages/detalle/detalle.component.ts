import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Lista, ListaItem } from '../../app/classes/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})

export class DetalleComponent implements OnInit {

  private idx:number;
  private lista:Lista;

  constructor(
    public navCtrl:NavController,
    public navParams:NavParams,
    public alertCtrl:AlertController,
    public _listaDeseos:ListaDeseosService
  ) {

    this.idx = navParams.get('idx');
    this.lista = navParams.get('lista');
    

   }

  ngOnInit() { }

  public actualizar(item:ListaItem) {
    item.completado = !item.completado;

    let todosMarcados = true;
    for(let item of this.lista.items) {
      if (!item.completado) { todosMarcados = false; break;}
    }

    this.lista.terminada = todosMarcados;

    this._listaDeseos.actualizarData();
  }

  public borrarLista() {
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: '¿Estás seguro de que quieres borrar esta lista y todo su contenido?',
      buttons: ['Cancelar',
        {
          text: 'Confirmar',
          handler: () => {
            this._listaDeseos.borrarLista(this.idx);
            this.navCtrl.pop();
          }
        }        
      ]
    });
    confirm.present();
  }

}