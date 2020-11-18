import React, { Component } from 'react';
import "./NbreCas.css"

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
class NbreCas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Global: {},
            Countries: []
        };
    }
    componentDidMount() {
        fetch('https://api.covid19api.com/summary')
            .then((response) => {
                return response.json()
            })

            .then((result) => {
                this.setState(result);
                //   console.log(result);
            })


    }


    render() {
        let NumPaysSaisi = 59;
        for (let i = 0; i < this.state.Countries.length; i++) {
            if (this.props.name === this.state.Countries[i].Country) {
                //alert(`position : ${i}, pays : ${this.state.Countries[i].Country}`);
                NumPaysSaisi = i;
            }

        }


        return (

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title mt-2">
                        Statistiques {this.state.Countries.length > 0 && (this.state.Countries[NumPaysSaisi].Country)}</h5>
                    <p className="card-text mt-5"><strong>Nombre de cas :</strong> {this.state.Countries.length > 0 && (numStr(this.state.Countries[NumPaysSaisi].TotalConfirmed, "."))} 🧟 </p>
                    <p className="card-text mt-1"><strong>Total de décès :</strong> {this.state.Countries.length > 0 && (numStr(this.state.Countries[NumPaysSaisi].TotalDeaths, "."))} ☠</p>
                    <p className="card-text mt-1"><strong>Total de guéris :</strong> {this.state.Countries.length > 0 && (numStr(this.state.Countries[NumPaysSaisi].TotalRecovered, "."))} ❤️</p>
                    <div className="row justify-content-center mt-5 mr-3">
                        <div className="trait"></div>
                        <div className="col-sm-4"> <br />+{this.state.Countries.length > 0 && (numStr(this.state.Countries[NumPaysSaisi].NewDeaths))} <br />Morts</div>
                        <div className="col-sm-offset-3 col-sm-4"><br />+{this.state.Countries.length > 0 && (numStr(this.state.Countries[NumPaysSaisi].NewConfirmed, "."))}<br />Infectés </div>
                        <div className="col-sm-offset-3 col-sm-3"><br />+{this.state.Countries.length > 0 && (numStr(this.state.Countries[NumPaysSaisi].NewRecovered, "."))}<br />Guéris ️</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default NbreCas;