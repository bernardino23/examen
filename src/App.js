import React, { Component } from 'react';
import Header from './Componentes/Header';
import ListaP from './Componentes/TablaArticulos'
import Carrito from './Componentes/Carrito'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      carrito: [],
      total: 0,
      productosLista: [

        { codigo: 1, descripcion: "Huawei Matebook D 15", precio: 15899 },
        { codigo: 2, descripcion: "Samsung Galaxy S10", precio: 13999 },
        { codigo: 3, descripcion: "Samsung Galaxy A01", precio: 1850 },
        { codigo: 4, descripcion: "Xiaomi Redmi Note 9s", precio: 5949 },
        { codigo: 5, descripcion: "Mochila Xiaomi", precio: 699 },
        { codigo: 6, descripcion: "Teclado Primus Gaming Ballista", precio: 1999 },
      ],
    };
  }

  enviar = (producto, precio) => {
    let total = this.state.total;

    this.setState({
      ...this.state,
      carrito: [...this.state.carrito, producto],
      total: total + precio
    })

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    })

  }

  eliminar = (precio, index) => {
    const tem = this.state.carrito.filter((a, i) => i !== index)

    let total = this.state.total;
    this.setState({
      carrito: tem,
      total: total - precio
    })

    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Eliminado del carrito',
      showConfirmButton: false,
      timer: 1500
    })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <br></br>
        <div className="tablas">
          <ListaP
            enviar={this.enviar}
            lista={this.state.productosLista}
            total={this.state.total}
          />
          <Carrito
            carrito={this.state.carrito}
            eliminar={this.eliminar}
          />
        </div>

      </div>
    )
  };
}

export default App;
