import React, { Component } from 'react';
import "./Admin.css";
import logo from './ece.png';
import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';


const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            statut: 'N'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        event.preventDefault();
    }
    handleSubmit = (event) => {
        // https://express-app-covid.herokuapp.com/posts/add
        fetch('http://localhost:3001/posts/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            // We convert the React state to JSON and send it as the POST body
            //body: "firstname=" + this.state.firstname + "&lastname=" + this.state.lastname + "&statut=" + this.state.statut
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                statut: this.state.statut,
            })
        }).then(function (response) {
            // console.log(response)
        });

        event.preventDefault();
    }


    render() {
        return (
            <BouncyDiv>
                <div className="card mb-5">
                    <div className="card-body">
                        <img src={logo} alt="Ece" />
                        <p id="para">Fiche étudiant</p>

                        <small>Bienvenue {this.props.userData.email}</small>
                        <form onSubmit={this.handleSubmit}>
                            <center>
                                <input type="text" className="form-control" id="input1" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="Prénom de l'étudiant" />
                                <input type="text" className="form-control" id="input1" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder="Nom de l'étudiant" />
                                <select name="statut" value={this.state.statut} onChange={this.handleChange} className="form-control">
                                    <option value="N" >Négatif</option>
                                    <option value="P" >Positif</option>
                                </select>
                                <button type="submit" className="btn btn-success bouton2">Envoyer à l'API</button>
                            </center>

                        </form>
                    </div>
                </div>
            </BouncyDiv>
        );
    }
}

export default Admin;
