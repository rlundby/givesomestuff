import React, {Component, Fragment as F} from 'react';
import {Redirect} from 'react-router-dom';
import Navigation from "../Navigation";



class Habits extends Component {
    render() {
        let auth = sessionStorage.getItem('auth');
        if (!auth) {
            return <Redirect to="/login"/>
        }

        return (
            <F>
                <Navigation/>
                <div className="container-fluid verified-box">
                    <div className="row card-deck">
                        <div className="col-lg-12 card mt-5">
                            <div className="card-body">
                                <h3 className="text-center card-title">Hur resonerar svenskarna om välgörenhet?</h3>
                                <hr/>
                                <p className="text-secondary font-italic">Obs. Denna datan bygger på en undersökning av Välgörenhetsbarometern. Ladda ner den <a
                                    href="https://valgorenhetsbarometern.se/rapporter/">här</a>.</p>
                                <div className="row">
                                    <div className="col-md-3">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </F>
        );
    }
}

export default Habits;
