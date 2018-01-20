import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from '../../app/classes/index'
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service'



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {
  
  private nombreLista: string = "";
  private nombreItem: string = "";
  private items: ListaItem[] = [];
  
  constructor(public _listaService: ListaDeseosService,
              public alertCtrl: AlertController,
              public navCtrl: NavController) { }

  ngOnInit() { }

  public agregar() {
    if (this.nombreItem.length == 0) {
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push(item);
    this.nombreItem = "";


  }

public borrarItem(idx: number) {
  this.items.splice(idx, 1);
}

private showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Nombre de la lista',
    subTitle: 'El nombre de la lista es necesario.',
    buttons: ['OK']
  });
  alert.present();
}

public guardarLista() {
  console.log("click en agregar lista");
  
  if (this.nombreLista.length === 0) {
    this.showAlert();
  } else {

    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    //this._listaService.listas.push(lista);

    this._listaService.agregarLista(lista);

    this.navCtrl.pop();
  }
}










}