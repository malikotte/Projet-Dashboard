import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing/Landing.js';
import Admin from './components/Admin/Admin.js';
import Form from './components/Form/Form.js';
import React, { Component, useState } from 'react';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Logout from './components/Logout/Index.js';
import LandingAdmin from './components/LandingAdmin/LandingAdmin';
import "./components/Header/Header.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/Login">
            <div className="container mt-3">
              <div className="row mb-5">
                <div className="col-xl-12 col-lg-12 mb-2">
                  {/* <Admin />*/}
                  <Login />
                </div>
              </div>
            </div>

            <Footer />
          </Route>
          <Route path="/Register">
            <div className="container mt-3">
              <div className="row mb-5">
                <div className="col-xl-12 col-lg-12 mb-2">
                  <Register />
                </div>
              </div>
            </div>

            <Footer />
          </Route>
          <Route path="/Admin">

            <LandingAdmin />

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


export default App;
