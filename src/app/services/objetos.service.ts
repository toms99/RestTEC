import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

  constructor() { }

  Plato = {
    plato: "Lentejas con platano maduro",
        descripcion: "Deliciosas lentejas en sopa, con pimienta que le da cierto picor." ,
        precio: "800",
        calorias: "200",
        tipo: "almuerzo",
        cant: 1
  }

  carrito = {
    id: '',
    idCliente: '',
    idPedido: '',
    monto: ''
  }

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
  
  setCarrito(carrito) {
    this.carrito.id = carrito.id;
  }
  
  getMenu() {
    return this.menu;
  }

  public addPlato(nuevoPlato) {
    this.menu.push(nuevoPlato);
  }

}
