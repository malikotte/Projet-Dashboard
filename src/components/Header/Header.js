import React, { Component } from 'react';
import "./Header.css";
import logo from './covid.png';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link to="/" className="text-white">
                        COVID Analyzer
                </Link>
                    <span class="navbar-text">
                        <Link to="/Admin" className="Header-a">Administration</Link>
                    </span>


                </nav>
                <div className="alert alert-warning" role="alert">

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
            </div>
        );
    }
}

export default Header;

