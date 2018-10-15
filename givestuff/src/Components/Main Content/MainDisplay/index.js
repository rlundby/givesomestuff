import React, {Component, Fragment as F} from 'react';
import {Organisations} from '../../../Mock/Organisations'
import Organisation from "../Organisations/individual";

export default class MainDisplay extends Component {

    state = {
        org: null
    };

    changeOrg(index) {
        console.log('test');
        let number = parseInt(index);
        this.setState({
            org: number
        })
    };

    render() {
        let array = Organisations[this.props.category];
        let category;


        switch (this.props.category) {
            case 'animals':
                category = 'Djur & Natur';
                break;
            case 'people':
                category = 'Drabbade människor';
                break;
            case 'sickness':
                category = 'Sjukdom & Forskning';
                break;
            case 'violence':
                category = 'Antivåld/mobbning';
                break;
            case 'culture':
                category = 'Kultur & Fritid';
                break;
            case 'misc':
                category = 'Annat';
                break;
            default:
                category = 'Default';
                break;
        }
        return (
            <F>
                <div className="container main-display card" id="test">
                    <div className="row pb-3 card-body">
                        <div className="col-12 align-center m-4 card-title">
                            <h5 className="text-center">Välj en organisation</h5>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="list-group" id="list-tab" role="tablist">
                                <a className="list-group-item list-group-item-action active" id="list-home-list"
                                   data-toggle="list" href="#list-home" role="tab" aria-controls="home">{category}</a>
                                {array.length > 0 ?  array.map((object, i) => {
                                    return (
                                    <button
                                    href={'#' + i}
                                    onClick={() => this.changeOrg(i)}
                                    className="list-group-item list-group-item-action"
                                    id={i}
                                    key={i}>
                                    {object.name}
                                    </button>
                                    )
                                }) : <p>Det finns inga organisationer här just nu</p>}
                            </div>
                        </div>
                        { this.state.org !== null  ?  <Organisation details={array[this.state.org]} array={array}/> : <p>Välj en organisation i listan till vänster</p> }
                    </div>
                </div>
            </F>
        )
    }
}