import React, { Component, Fragment as F } from 'react';
import { Organisations } from '../../../Mock/Organisations'

export default class MainDisplay extends Component {


    render() {

        const organisations =  Organisations[this.props.category];

        let category;
        switch(this.props.category) {
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
                    <div className="row pb-3">
                        <div className="col-12 align-center m-4">
                            <h5 className="text-center">Välj en organisation i listan</h5>
                        </div>
                        <div className="col-md-4 col-xs-12">
                            <div className="list-group" id="list-tab" role="tablist">
                                <a className="list-group-item list-group-item-action active" id="list-home-list"
                                   data-toggle="list" href="#list-home" role="tab" aria-controls="home">{category}</a>
                                <a className="list-group-item list-group-item-action" id="list-profile-list"
                                   data-toggle="list" href="#list-profile" role="tab"
                                   aria-controls="profile">Organisation 1</a>
                                <a className="list-group-item list-group-item-action" id="list-messages-list"
                                   data-toggle="list" href="#list-messages" role="tab"
                                   aria-controls="messages">Organisation 2</a>
                                <a className="list-group-item list-group-item-action" id="list-settings-list"
                                   data-toggle="list" href="#list-settings" role="tab"
                                   aria-controls="settings">Organisation 3</a>
                            </div>
                        </div>
                        <div className="col-8">
                            <p>Content</p>
                        </div>
                    </div>
                </div>
            </F>


        )
    }
}