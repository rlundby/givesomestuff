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
                <div className="container-fluid main-display" id="test">
                    <div className="row pb-3 card-body">
                        <div className="col-12 align-center m-4 card-title">
                            <h2 className="text-center">{category}</h2>
                            <h3 className="text-center">Välj en organisation</h3>
                            <div className="col-md-12 col-xs-12 org-list">
                                {array.length > 0 ?  array.map((object, i) => {
                                    return (
                                        <button
                                            href={'#' + i}
                                            onClick={() => this.changeOrg(i)}
                                            className="btn btn-lg btn-primary"
                                            id={i}
                                            key={i}>
                                            {object.name}
                                        </button>
                                    )
                                }) : <p>Det finns inga organisationer här just nu</p>}
                            </div>
                        </div>
                        { this.state.org !== null  ?  <Organisation details={array[this.state.org]} array={array}/> : <p><hr/></p> }
                    </div>
                </div>
            </F>
        )
    }
}