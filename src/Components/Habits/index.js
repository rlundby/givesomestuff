import React, {Component, Fragment as F} from 'react';
import {Redirect} from 'react-router-dom';
import Navigation from "../Navigation";
import './habits.css'


class Habits extends Component {
    render() {
        let auth = sessionStorage.getItem('auth');
        if (!auth) {
            return <Redirect to="/login"/>
        }

        return (
            <F>
                <Navigation/>
                <div className="container-fluid habits-box">
                    <div className="row">
                        <div className="col-xs-12 d-block d-sm-none">
                            <div className="card infographic">
                                <h1>Wooops! Surfar du på mobilen?</h1>
                                <p>Den här sidan är gjord för att visas på en dator, så det kan bli lite knasigt
                                    i mobilläge. Lycka till! :)</p>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-5">
                            <div className="card-body">
                                <h1 className="text-center card-title">Hur resonerar svenskarna om välgörenhet?</h1>
                                <div className="row container">
                                    <div className="col-md-3">
                                        <div className="card infographic">
                                            <h1 className={"text-center"}>46%</h1>
                                            <p className={"text-center"}>Har en positiv inställning till
                                                välgörenhetsorganisationer</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="card infographic">
                                            <h1 className={"text-center"}>80%</h1>
                                            <p className={"text-center"}>Hade störst förtroende för Cancerfonden</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card infographic">
                                            <h1 className={"text-center"}> 6 av 10 skänker pengar till välgörenhet</h1>
                                            <p className={"text-center"}>57% av tillfrågade kvinnor ger vs. 43% av alla
                                                män</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row third-row">

                                        <div className="col-md-4">
                                            <div className="card infographic">
                                                <h1>96%</h1>
                                                <p>Väljer den organisation som stödjer det ändamål man värnar om</p>
                                            </div>

                                            <div className="card infographic">
                                                <h1>93%</h1>
                                                <p>Vill att organisationen berättar hur pengarna spenderas</p>
                                            </div>

                                            <div className="card infographic">
                                                <h1>92%</h1>
                                                <p>Vill att organisationen har ett bra rykte</p>
                                            </div>
                                        </div>

                                        <div className="col-md-8 d-flex justify-content-center">
                                            <div className="card infographic">
                                                <h1 className={"text-center"}>Endast 1 av 10 fick välgörenhetsgåva i julklapp</h1>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-secondary font-italic fixed-bottom">Obs. Denna datan bygger på en undersökning av
                        Välgörenhetsbarometern. Ladda ner den <a
                            href="https://valgorenhetsbarometern.se/rapporter/">här</a>.</p>
                </div>
            </F>
        );
    }
}

export default Habits;
