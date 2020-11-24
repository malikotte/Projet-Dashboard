import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing/Landing.js';
import Admin from './components/Admin/Admin.js';
import Form from './components/Form/Form.js';
import React, { Component } from 'react';

import "./components/Header/Header.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/Admin">
              <div className="container mt-3">
                <div className="row mb-5">
                  <div className="col-xl-6 col-lg-6 mb-2">
                    <Admin />
                  </div>
                  <div className="col-xl-6 col-lg-6 mb-2">
                    <Form />
                  </div>
                </div>
              </div>

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
