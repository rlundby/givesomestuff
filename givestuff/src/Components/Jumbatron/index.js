import React, { Component } from 'react';

export default class Jumbatron extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid heroImage">
                <div className="container">
                    <h1 className="display-4">Hej kompis!</h1>
                    <p className="lead">Vill du hjälpa andra men tycker det är svårt att veta vem man kan lita på?</p>
                    <hr className="my-4"/>
                    <p>Den här sidan hjälper dig att hitta en välgörenhetsorganisation som du kan lita på.
                        Läs exakt vad de gör och hur de spenderar sina pengar - sedan kan du göra ett val som känns tryggt och bra.
                    Det är inte svårt, följ bara instruktionerna nedan!
                    </p>
                </div>
            </div>
        )
    }
}