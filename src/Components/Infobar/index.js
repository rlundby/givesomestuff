import React, { Component } from 'react';

export default class Infobar extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="container-fluid infobar">
                <div className="row  justify-content-center card-deck">
                    <div className="col-md-2 text-center card">
                        <div className="service-box">
                            <div className="card-body">
                                <h3 className="card-title">1.</h3>
                                <p className="text-muted">Välj vilken kategori du vill hitta en organisation inom.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-2 text-center card">
                        <div className="service-box">
                            <div className="card-body">
                            <h3 className="card-title">2.</h3>
                            <p className="text-muted">Välj en av organisationerna som verkar intressant för att läsa om hur de arbetar och spenderar gåvor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 text-center card">
                        <div className="service-box">
                            <div className="card-body">
                            <h3 className="card-title">3.</h3>
                            <p className="text-muted">Bestäm dig för om det är en organisation du vill skänka pengar till eller inte.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}