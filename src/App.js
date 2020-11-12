import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing/Landing.js';
import Admin from './components/Admin/Admin.js';
import React, { Component } from 'react';
import logo from './covid.png';
import "./components/Header/Header.css";
import { BrowserRouter as Router, Route, Link, Navlink, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-dark bg-dark">
            <Link to="/" className="text-white">
              COVID Analyzer
                </Link>
            <span class="navbar-text">
              <Link to="/Admin" className="Header-a">Administration</Link>
            </span>

          </nav>
          {/*<Header />*/}
          <div class="alert alert-warning" role="alert">

            <img src={logo} alt="covid" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
             Ensemble, respectons les gestes barrières
             <img src={logo} alt="covid" style={{ width: "20px", height: "20px", marginLeft: "5px" }} />
          </div>
          <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">

            <h2 className="display-4">COVID-19</h2>
            <p className="lead">
              Application sur la pandémie du COVID-19
        </p>

          </div>
          <Switch>
            <Route path="/Admin">
              <Admin />
              <Footer />
            </Route>
            <Route path="/">
              <Landing />

              <Footer />
            </Route>

          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;