import React, { Component } from 'react';

export default class Infobar extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="container-fluid infobar">
                <div className="row  justify-content-center">
                    <div className="col-md-3 text-center">
                        <div className="service-box">
                            <h3>1.</h3>
                            <p className="text-muted">Välj vilken kategori du vill hitta en organisation inom.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="service-box">
                            <h3>2.</h3>
                            <p className="text-muted">Välj en av organisationerna som verkar intressant för att läsa om hur de arbetar och spenderar gåvor.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <div className="service-box">
                            <h3>3.</h3>
                            <p className="text-muted">Bestäm dig för om det är en organisation du vill skänka pengar till eller inte.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}