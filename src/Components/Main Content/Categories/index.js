import React, { Component, Fragment as F } from 'react';

export default class Categories extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <F>
                <div className="col-md-4 pointer" onClick={() => this.props.clickCategory('animals')}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <div className="card-title text-center"><i className="fas fa-paw categIcon"></i></div>
                            <h3 className="card-text text-center">Djur & Natur</h3>
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 pointer" onClick={() => this.props.clickCategory('people')}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <div className="card-title text-center"><i className="fas fa-users categIcon"></i></div>
                            <h3 className="card-text text-center">Drabbade människor</h3>
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 pointer" onClick={() => this.props.clickCategory('sickness')}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <div className="card-title text-center"><i className="fas fa-ribbon categIcon"></i></div>
                            <h3 className="card-text text-center">Sjukdom & Forskning</h3>
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 pointer" onClick={() => this.props.clickCategory('violence')}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <div className="card-title text-center"><i className="fas fa-hands-helping categIcon"></i></div>
                            <h3 className="card-text text-center">Antivåld/mobbning</h3>
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 pointer" onClick={() => this.props.clickCategory('culture')}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <div className="card-title text-center"><i className="fas fa-church categIcon"></i></div>
                            <h3 className="card-text text-center">Kultur & Fritid</h3>
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 pointer">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <div className="card-title text-center"><i className="fas fa-bars categIcon"></i></div>
                            <h3 className="card-text text-center">Annat</h3>
                            <div className="d-flex justify-content-between align-items-center">
                            </div>
                        </div>
                    </div>
                </div>
            </F>


        )
    }
}