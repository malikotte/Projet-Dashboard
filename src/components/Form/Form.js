import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "./Form.css";
import { Modal } from 'react-bootstrap';

import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';


const bounceAnimation = keyframes`${fadeIn}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

class Form extends Component {
    constructor(props) {

        super(props);
        this.state = {
            data: [],
            openModal: false,
            id_user: '',
            firstname: '',
            lastname: '',
            statut: 'N',
            activePage: 3
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    componentDidMount() {
        fetch('http://localhost:3001/posts/')
            .then((response) => {
                return response.json()
            })

            .then((result) => {
                this.setState({ data: result });
                // console.log(result);
            })


    }


    handleSubmit = (event) => {
        //https://express-app-covid.herokuapp.com/posts/update/${this.state.id_user}
        fetch(`https://express-app-covid.herokuapp.com/posts/update/${this.state.id_user}`, {
            method: 'PUT',
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
            // console.log(response);
        });
        event.preventDefault();
    }
    componentDidUpdate(prevProps) {
        if (this.state.firstname !== prevProps.firstname) {
            // https://express-app-covid.herokuapp.com/posts/
            fetch('https://express-app-covid.herokuapp.com/posts/')
                .then((response) => {
                    return response.json()
                })

                .then((result) => {
                    this.setState({ data: result });
                    // console.log(result);
                })


        }
    }


    delete(id) {
        //https://express-app-covid.herokuapp.com/posts/
        fetch('https://express-app-covid.herokuapp.com/posts/' + id, {
            method: 'DELETE',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'charset': 'UTF-8'
            },

        })
    }
    showModal(id) {
        this.setState({
            openModal: true,
            id_user: id,
        })

    }

    render() {
        return (
            <div>
            <BouncyDiv>
                <div className="card" >
                    <div className="card-body overflow-auto">
                        <table class="table datatable">
                            <thead>
                                <tr>
                                    <th scope="col">Prénom</th>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Statut</th>
                                    <th scope="col">Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {


                                    this.state.data.map(empresa => {

                                        return (
                                            <tr>
                                                <td>{empresa.firstname}</td>
                                                <td>{empresa.lastname}</td>
                                                <td>{empresa.statut} </td>
                                                <td>
                                                    <span className="btn btn-primary" onClick={() => this.showModal(empresa._id)}><FontAwesomeIcon icon={faEdit} /></span>
                                                    {"    "}
                                                    <span className="btn btn-danger" onClick={() => this.delete(empresa._id)}><FontAwesomeIcon icon={faTrashAlt} /></span>
                                                </td>
                                                {console.log(this.state.count)}
                                            </tr>
                                        )

                                    })
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
                   </BouncyDiv>
                <Modal show={this.state.openModal} aria-labelledby='ModalHeader'>
                    <Modal.Header>
                        <Modal.Title>Éditer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <center>
                                <input type="text" className="form-control" id="input1" name="id_user" value={this.state.id_user} onChange={this.handleChange} disabled />
                                <input type="text" className="form-control" id="input1" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="Prénom de l'étudiant" />
                                <input type="text" className="form-control" id="input1" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder="Nom de l'étudiant" />
                                <select name="statut" value={this.state.statut} onChange={this.handleChange} className="form-control">
                                    <option value="N" >Négatif</option>
                                    <option value="P" >Positif</option>
                                </select>
                                <button type="submit" className="btn btn-success bouton2">Envoyer à l'API</button>
                            </center>

                        </form>
                    </Modal.Body>
                    <div className="modal-footer">
                        {"ㅤㅤㅤ"}
                        <button type="button" class="btn btn-primary" onClick={() => this.setState({ openModal: false })}>
                            Fermer
                        </button>

                    </div>
                </Modal>
            </div >

        );

    }

}


export default Form;
