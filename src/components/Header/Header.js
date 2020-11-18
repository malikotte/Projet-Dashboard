import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">

                <span className="text-white">

                    COVID Analyze
                </span>
                <span class="navbar-text">
                    <a href="./Admin.html" className="Header-a">Administration</a>
                </span>
            </nav>
        );
    }
}

export default Header;