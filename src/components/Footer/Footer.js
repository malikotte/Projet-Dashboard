import React, { Component } from 'react';
import "./Footer.css";
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <span className="text-muted"> © 2020 Tous droits réservés.</span>
                </div>
            </div>
        );
    }
}

export default Footer;