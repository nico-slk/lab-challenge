import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/nav.jsx';
import Catalogo from './components/Catalogo.jsx';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      query: 'SE'
    }

    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(valor) {
    if (!valor) {
      valor = 'SE'
    }
    if (!localStorage.getItem(`listado_${valor}`)) {
      fetch(`http://localhost:3001/api/search?q=${valor}`)
        .then((r) => r.json())
        .then((data) => {
          this.setState(data)
          // console.log(`NO EXISTE listado_${valor}`)
          localStorage.setItem(`listado_${valor}`, JSON.stringify(data)) // Seteo el item al estado, le asigno una key y despues seteo un obj a string
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // console.log(`YA EXISTE listado_${valor}`)
      this.setState(JSON.parse(localStorage.getItem(`listado_${valor}`))) // Busco el item por su key, lo paso de string a obj y guardo
    }
  }

  componentDidMount() {
    this.onSearch(this.state.query)
  }

  render() {
    return (
      <Router>
        <Route path="/" render={() => <Nav onSearch={this.onSearch} state={this.state} />} />
        <Route path="/" render={() => <Catalogo state={this.state} />} />
      </Router>
    );
  }
}

export default App;
