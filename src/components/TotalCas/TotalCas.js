import React, { Component } from 'react';
import "./TotalCas.css";
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
class TotalCas extends Component {

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
                //  console.log(result);
            })


    }


    render() {
        return (

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title mt-2">🌍 Statistiques Globales 🌍</h5>
                    <p className="card-text mt-5"><strong>Nombre de cas :</strong> {numStr(this.state.Global.TotalConfirmed, ".")} 🧟 </p>
                    <p className="card-text mt-1"><strong>Total de décès :</strong> {numStr(this.state.Global.TotalDeaths, ".")} ☠</p>
                    <p className="card-text mt-1"><strong>Total de guéris :</strong> {numStr(this.state.Global.TotalRecovered, ".")} ❤️</p>
                    <div className="row justify-content-center mt-5 mr-3 ml-3">
                        <div className="trait"></div>
                        <div className="col-3"> <br />+{numStr(this.state.Global.NewDeaths)} <br />Morts</div>
                        <div className="col-sm-offset-3 col-3"><br />+{numStr(this.state.Global.NewConfirmed, ".")}<br />Infectés </div>
                        <div className="col-sm-offset-3 col-3"><br />+{numStr(this.state.Global.NewRecovered, ".")}<br />Guéris ️</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default TotalCas;
