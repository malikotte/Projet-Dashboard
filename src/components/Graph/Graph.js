import React, { Component } from "react";
import "./Graph.css";
import ReactApexChart from "react-apexcharts";


class Graph extends Component {
    constructor(props) {

        super(props);

        this.state = {
            post: [],
            series: [{
                data: [1, 2, 3, 4]
            }],

            options: {
                chart: {
                    id: "basic-bar",
                    toolbar: {
                        show: false,
                    }
                },
                xaxis: {
                    cas: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },





        };

    }


    componentDidMount() {

        fetch(`https://api.covid19api.com/total/country/${this.props.name}?from=2020-11-01T00:00:00Z&to=2020-10-01T00:00:00Z`)
            .then((response) => {
                return response.json()
            })

            .then((result) => {
                this.setState({ result });
                console.log(result);

            })



    }


    render() {

        return (
            <div className="card">
                <div className="card-body">
                    <div>

                    </div>
                    <ReactApexChart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height={350}
                    />
                </div>
            </div>
        );
    }
}

export default Graph;

