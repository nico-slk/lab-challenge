import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/nav.jsx';
import Catalogo from './components/Catalogo.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      query: 'zapatillas'
    }

    this.onSearch = this.onSearch.bind(this)
    this.getCategories = this.getCategories.bind(this)
  }

  onSearch(valor) {
    if (!valor) {
      valor = 'zapatillas'
    }
    fetch(`http://localhost:3000/api/search?q=${valor}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        this.setState(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  // onSearch(valor) {   NO BORRAR
  //   if (!valor) {
  //     valor = 'zapatillas'
  //   }
  //   fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valor}`)
  //     .then((r) => r.json())
  //     .then((data) => {
  //       console.log(data);
  //       this.setState(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  getCategories(valor) {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valor}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        this.setState(data);
      });
  }
  componentDidMount() {
    this.getCategories(this.state.query)
  }

  render() {
    return (
      <Router>
        <Route path="/" render={() => <Nav onSearch={this.onSearch} state={this.state} />} />
        <Route exact path="/" render={() => <Catalogo state={this.state} sortByPriceAsc={this.sortByPriceAsc} sortByPriceDesc={this.sortByPriceDesc} />} />
      </Router>
    );
  }
}

export default App;
