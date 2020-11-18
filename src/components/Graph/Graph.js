import React, { Component } from "react";
import "./Graph.css";
import ReactApexChart from "react-apexcharts";

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

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Countries: [],
            series: [5, 50, 70],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            return numStr(value, ".");
                        }
                    },
                },
                labels: ['Nombre de Cas', 'Nombre de Morts', 'Nombre de Guéris'],
                responsive: [{
                    options: {
                        chart: {
                            width: 500
                        },
                        legend: {
                            show: false,
                            horizontalAlign: 'right',
                        }
                    }
                }],
                colors: ['#1b262c', '#0f4c75', '#3282b8'],

            },

        };



    }


    componentDidMount() {
        fetch('https://api.covid19api.com/summary')
            .then((response) => {
                return response.json()
            })

            .then((result) => {
                this.setState(result);
                // console.log(result);

                this.setState({
                    series:
                        [this.state.Countries[59].TotalConfirmed, this.state.Countries[59].TotalDeaths, this.state.Countries[59].TotalRecovered]

                })
            })
    }

    componentDidUpdate(prevProps) {
        // Utilisation classique (pensez bien à comparer les props) :
        if (this.props.name !== prevProps.name) { // Vérifie si le pays a été modifié (valeur par défaut France)
            let NumPaysSaisi = 59; // ID France
            for (let i = 0; i < this.state.Countries.length; i++) { // Boucle for qui permet d'assosier le nom du pays à sa position dans le json de l'api
                if (this.props.name === this.state.Countries[i].Country) {
                    //alert(`position : ${i}, pays : ${this.state.Countries[i].Country}`);
                    NumPaysSaisi = i;
                }

            }
            fetch('https://api.covid19api.com/summary')
                .then((response) => {
                    return response.json()
                })

                .then((result) => {
                    this.setState(result);
                    // console.log(result);

                    this.setState({
                        series:
                            [this.state.Countries[NumPaysSaisi].TotalConfirmed, this.state.Countries[NumPaysSaisi].TotalDeaths, this.state.Countries[NumPaysSaisi].TotalRecovered]

                    })
                })
        }
    }


    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div>
                    </div>
                    <h5 className="mb-5">Épidémie en {this.props.name}</h5>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={420} />
                    <div class="text-muted mt-4">
                        <center><small>Données issues du gouvernement</small></center>
                    </div>
                </div>

            </div>
        );
    }
}

export default Graph;

