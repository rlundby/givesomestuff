import React, { Component } from 'react';

export default class Jumbatron extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid heroImage shadow ">
                <div className="container">
                    <h1 className="display-4">Hej kompis!</h1>
                    <p className="lead">Vill du hjälpa andra men tycker det är svårt att veta vem man kan lita på?</p>
                    <p> Vi hjälper dig - bara följ instruktionerna nedan!</p>
                </div>
            </div>
        )
    }
}