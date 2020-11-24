import React, { Component } from 'react';
import "./CasEce.css";

import logo from '../Admin/ece.png';
function numStr(a, b) {
    a = '' + a;
    b = b || ' ';
    let c = '',
        d = 0;
    while (a.match(/^0[0-9]/)) {
        a = a.substr(1);
    }
    for (let i = a.length - 1; i >= 0; i--) {
        c = (d !== 0 && d % 3 === 0) ? a[i] + b + c : a[i] + c;
        d++;
    }
    return c;
}
class CasEce extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        fetch('https://express-app-covid.herokuapp.com:3001/posts/')
            .then((response) => {
                return response.json()
            })

            .then((result) => {
                this.setState({ data: result });
                console.log(result);
            })


    }


    render() {
        let compteur = 0;
        let longueur = this.state.data.length;
        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].statut === "P") {
                compteur++;
            }

        }
        return (

            <div className="card">
                <div className="card-body">
                    <img src={logo} alt="Ece" />
                    <p className="card-text mt-5"><strong>Nombre de cas :</strong> {compteur} 🧟</p>
                    <p className="card-text mt-1"><strong>Nombre de tests effectués :</strong> {longueur} 💉</p>
                    <p className="card-text mt-1"><strong>Dernier testé :</strong> {this.state.data.length > 0 && this.state.data[longueur - 1].firstname + " " + this.state.data[longueur - 1].lastname}</p>
                    <div className="row justify-content-center mt-5 mr-3">
                        <div className="trait"></div>
                        <div className="col-sm-4"> </div>
                        <div className="col-sm-offset-3 col-sm-4"></div>
                        <div className="col-sm-offset-3 col-sm-3"> ️</div>
                    </div>
                    <div class="text-muted mt-4">
                        <center><small>Données issues de l'établissement</small></center>
                    </div>

                </div>

            </div>
        );
    }
}


export default CasEce;
