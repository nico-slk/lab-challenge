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
  }

  onSearch(valor) {
    if (!valor) {
      valor = 'zapatillas'
    }
    fetch(`http://localhost:3001/api/search?q=${valor}`)
      .then((r) => r.json())
      .then((data) => {
        this.setState(data)
      })
      .catch((error) => {
        console.error(error);
      });
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
