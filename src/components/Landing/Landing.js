import React, { Component } from 'react';
import NbreCas from '../NbreCas/NbreCas';
import Searchbar from '../SearchBar/Searchbar';
import TotalCas from '../TotalCas/TotalCas';
import CasEce from '../CasEce/CasEce';
import Graph from '../Graph/Graph';
import Graph2 from '../Graph2/Graph2';
import Graph3 from '../Graph3/Graph3';
import Map from '../Map/Map';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

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
                <BouncyDiv>
                    <Searchbar onNameFormSubmitted={this.onNameFormSubmitted} />
                </BouncyDiv>
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <NbreCas name={this.state.name} />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <Graph name={this.state.name} />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <CasEce />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <TotalCas />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <Graph2 name={this.state.name} />
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-5">
                            <Graph3 name={this.state.name} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 mb-5">
                            <Map name={this.state.name} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Landing;
