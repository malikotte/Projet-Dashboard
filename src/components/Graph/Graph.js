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
            series: [],
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
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false,
                            horizontalAlign: 'right',
                        }
                    }
                }],
                colors: ['#ee6f57', '#1f3c88', '#070d59'],

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



    render() {
        /* let min = 0;
         let max = 20;
         for (let i = 0; i < this.state.Countries.length; i++) {
             if (this.state.Countries[i].TotalConfirmed < min) {
                 min = this.state.Countries[i].TotalConfirmed;
             }
             if (this.state.Countries[i].TotalConfirmed > max) {
                 max = this.state.Countries[i].TotalConfirmed;
             }
     
         }
         */



        return (
            <div className="card">
                <div className="card-body">
                    <div>
                    </div>
                    <h5 className="mb-5">Épidémie en France</h5>
                    <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={420} />
                    <div class="text-muted mt-4">
                        <center><small>Données issues du gouvernement français</small></center>
                    </div>
                </div>

            </div>
        );
    }
}

export default Graph;

