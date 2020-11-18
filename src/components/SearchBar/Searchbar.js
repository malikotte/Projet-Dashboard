import React, { Component } from 'react';
import "./Searchbar.css";
import Autosuggest from 'react-autosuggest';
import PostData from './data.json';

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return PostData.filter(PostData => regex.test(PostData.Country));
}

function getSuggestionValue(suggestion) {
    return suggestion.Country;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.Country}</span>
    );
}


class Searchbar extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.props.onNameFormSubmitted(this.state.value);
        event.preventDefault();

    }
    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Saisir un Pays",
            value,
            onChange: this.onChange
        };
        return (
            <div className="container">
                <div className="input-group mb-5 justify-content-center">
                    <form onSubmit={this.handleSubmit}>
                        <Autosuggest className="input-group"
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                            value={this.state.value}
                            onChange={this.state.handleChange}
                        />
                        <button id="city-input-button" className="btn btn-success rounded-0" type="submit">Actualiser</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Searchbar;