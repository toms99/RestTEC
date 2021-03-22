import { Injectable } from '@angular/core';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Tab2PageModule } from '../tab2/tab2.module';
import { Tab2Page } from "../tab2/tab2.page";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Esta es la lista que almacena lo que esta dentro del carrito
  private data = []

  constructor() { }

  // Aqui recibe platos para agregarlos al carrito conforme recibe
  setData(platoEntrante) {
    if (this.data.length == 0) { this.data.push(platoEntrante) } else {
      this.data.forEach(plato => {
        if (plato.plato == platoEntrante.plato) {
          plato.cant += 1;
          console.log(plato.cant, 'salud')
        } else {
          this.data.push(platoEntrante);
        }
      })
    }
  }
  getData() {
    return this.data;
  }
}
