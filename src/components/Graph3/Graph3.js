import React, { Component } from "react";
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
class Graph3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Countries: [],
            series: [{
                name: 'Cas',
                data: []
            }, {
                name: 'Morts',
                data: []
            }, {
                name: 'Réanimations',
                data: []
            }, {
                name: 'Guéris',
                data: []
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,

                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                xaxis: {
                    show: true,
                    labels: {
                        formatter: function (value) {
                            return numStr(value, ".");
                        }
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: '',
                    align: 'left'
                },
                legend: {
                    show: false,
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                }
            },


        };



    }


    componentDidMount() {
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
            .then((response) => {
                return response.json()
            })

            .then((result) => {
                this.setState({ Countries: result });
                this.setState({
                    series: [{
                        data: [this.state.Countries[10].cases, this.state.Countries[9].cases, this.state.Countries[8].cases, this.state.Countries[7].cases, this.state.Countries[6].cases, this.state.Countries[5].cases, this.state.Countries[4].cases, this.state.Countries[3].cases, this.state.Countries[2].cases, this.state.Countries[1].cases]
                    }, { data: [this.state.Countries[10].deaths, this.state.Countries[9].deaths, this.state.Countries[8].deaths, this.state.Countries[7].deaths, this.state.Countries[6].deaths, this.state.Countries[5].deaths, this.state.Countries[4].deaths, this.state.Countries[3].deaths, this.state.Countries[2].deaths, this.state.Countries[1].deaths] }
                        , { data: [this.state.Countries[10].recovered, this.state.Countries[9].recovered, this.state.Countries[8].recovered, this.state.Countries[7].recovered, this.state.Countries[6].recovered, this.state.Countries[5].recovered, this.state.Countries[4].recovered, this.state.Countries[3].recovered, this.state.Countries[2].recovered, this.state.Countries[1].recovered,] },
                    { data: [this.state.Countries[10].critical, this.state.Countries[9].critical, this.state.Countries[8].critical, this.state.Countries[7].critical, this.state.Countries[6].critical, this.state.Countries[5].critical, this.state.Countries[4].critical, this.state.Countries[3].critical, this.state.Countries[2].critical, this.state.Countries[1].critical,] }]

                })
                this.setState({
                    options: {
                        xaxis: {
                            categories: [this.state.Countries[10].country, this.state.Countries[9].country, this.state.Countries[8].country, this.state.Countries[7].country, this.state.Countries[6].country, this.state.Countries[5].country, this.state.Countries[4].country, this.state.Countries[3].country, this.state.Countries[2].country, this.state.Countries[1].country],
                        }

                    }


                })
            })
    }



    render() {



        return (
            <div className="card">
                <div className="card-body">
                    <div>
                    </div>

                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                </div>

            </div>
        );
    }
}

export default Graph3;

