import React, { Component } from 'react';
import NbreCas from '../NbreCas/NbreCas';
import Searchbar from '../SearchBar/Searchbar';
import TotalCas from '../TotalCas/TotalCas';

import CasEce from '../CasEce/CasEce';
import Graph from '../Graph/Graph';
import Graph2 from '../Graph2/Graph2';
import Graph3 from '../Graph3/Graph3';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "France" }; // Par défaut France
        this.onNameFormSubmitted = this.onNameFormSubmitted.bind(this);
    }

    onNameFormSubmitted(value) {
        this.setState({ name: value });
    }

    render() {
        return (
            <div>
                <Searchbar onNameFormSubmitted={this.onNameFormSubmitted} />
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-xl-4 col-lg-4 col-xs-12 col-md-7 col-sm-10">
                            <NbreCas name={this.state.name} />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-xs-6 col-md-4 col-sm-10">
                            <TotalCas />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-xs-12 col-md-7 col-sm-10">
                            <CasEce />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-xs-6 col-md-4 col-sm-10">
                            <Graph name={this.state.name} />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-xs-12 col-md-7 col-sm-10">
                            <Graph2 name={this.state.name} />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-xs-12 col-md-7 col-sm-10">
                            <Graph3 name={this.state.name} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Landing;
