import { Injectable } from '@angular/core';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { Tab2PageModule } from '../tab2/tab2.module';
import { Tab2Page } from "../tab2/tab2.page";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = []

  constructor() { }

  setData(nuevo) {
    if (this.data.length == 0) { this.data.push(nuevo) } else {
      this.data.forEach(plato => {
        if (plato.plato == nuevo.plato) {
          plato.cant += 1;
          console.log(plato.cant, 'salud')
        } else {
          this.data.push(nuevo);
        }
      })
    }
  }
  getData() {
    return this.data;
  }
}
