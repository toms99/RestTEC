import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ModalController, ToastController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Tab2Page } from "../tab2/tab2.page";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router,
    private dataService: DataService,
    public toastController: ToastController,
    public modalController: ModalController) { }

  
  menu = [
    {
      plato: "Lentejas con platano maduro",
      descripcion: "Deliciosas lentejas en sopa, con pimienta que le da cierto picor." ,
      precio: "800",
      calorias: "200",
      tipo: "almuerzo",
      cant: 1
    },
    {
      plato: "Sopa azteca",
      descripcion: "Una sopita tradicional de méxico a base de un caldo de tomate." ,
      precio: "650",
      calorias: "250",
      tipo: "cena",
      cant: 1
    },
    {
      plato: "Cereal con leche",
      descripcion: "Kelloggs con banano y leche deslactosada." ,
      precio: "300",
      calorias: "150",
      tipo: "desayuno",
      cant: 1
    }
  ]

  agregarCarrito(plato) {
    //console.log(plato)
    this.dataService.setData(plato);
    this.presentToast(plato.plato);

  }

  // Toast display
  async presentToast(plato) {
    const toast = await this.toastController.create({
      message: plato + ' fue agregado :)',
      duration: 2000
    });
    toast.present();
  }

  // Modal display
  async presentModal() {
    const modal = await this.modalController.create({
      component: Tab2Page,
      componentProps:  {menu : this.dataService.getData()}
    });
    return await modal.present();
  }



}
