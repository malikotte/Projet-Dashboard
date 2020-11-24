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
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <NbreCas name={this.state.name} />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <TotalCas />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <CasEce />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <Graph name={this.state.name} />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <Graph2 name={this.state.name} />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <Graph3 name={this.state.name} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Landing;
