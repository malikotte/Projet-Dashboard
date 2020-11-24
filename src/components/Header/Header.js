import React, { Component } from 'react';
import "./Header.css";
import logo from './covid.png';
import { Link } from "react-router-dom";

import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'


const bounceAnimation = keyframes`${zoomIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

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
                    <BouncyDiv>
                        <img src={logo} alt="covid" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
             Ensemble, respectons les gestes barrières
             <img src={logo} alt="covid" style={{ width: "20px", height: "20px", marginLeft: "5px" }} />
                    </BouncyDiv>
                </div>
                <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">

                    <h2 className="display-4">COVID-19</h2>
                    <p className="lead">
                        <Typewriter string='Application sur la pandémie du COVID-19' delay={80} stopBlinkinOnComplete />
                    </p>

                </div>
            </div>
        );
    }
}

export default Header;


