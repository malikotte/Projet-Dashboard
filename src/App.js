import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing/Landing.js';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h2 className="display-4">COVID-19</h2>
          <p className="lead">
            Application sur la pandémie du COVID-19
        </p>
        </div>
        <Landing />
        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;