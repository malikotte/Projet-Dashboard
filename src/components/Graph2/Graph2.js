import React, { Component } from "react";
import "./Graph2.css";
import ReactApexChart from "react-apexcharts";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';


const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;


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
class Graph2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Countries: [],
            series: [{
                name: "Nombre de cas",
                data: []
            }],
            options: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                    height: 500,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {
                            // console.log(chart, w, e)
                        }
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '50%',
                        distributed: true
                    }
                },
                colors: ['#112d4e'],
                yaxis: {
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
                    series:
                        [{ data: [this.state.Countries[10].cases, this.state.Countries[9].cases, this.state.Countries[8].cases, this.state.Countries[7].cases, this.state.Countries[6].cases, this.state.Countries[5].cases, this.state.Countries[4].cases, this.state.Countries[3].cases, this.state.Countries[2].cases, this.state.Countries[1].cases] }]

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
            <BouncyDiv>
            <div className="card">
                <div className="card-body">
                    <div>
                    </div>
                    <h5 className="mb-0">Top 10 des pays les plus touchés</h5>

                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
                </div>

            </div>
            </BouncyDiv>
        );
    }
}

export default Graph2;

