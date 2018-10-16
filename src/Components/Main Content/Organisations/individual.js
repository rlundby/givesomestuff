import React, {Component, Fragment as F} from 'react';

export default class Organisation extends Component {


    render() {
        let details;

        if (!this.props.details) {
            details = this.props.array[0]
        } else {
            details = this.props.details
        }

        return (
            <F>
                <div className="col-12">
                    <div className="col-md-12"><h1 className="text-center">{details.name}</h1></div>

                    <div className="row checkbox-container mt-2">
                        <div className="col-md-4 col-offset-2">
                            <img className="img-fluid"
                                 src={details.image} alt="goat"/>
                        </div>
                        <div className="col-md-2">
                            <h5 className="text-center">Information</h5>
                            <hr/>
                            <table className="table table-striped">
                                <tbody className="">
                                <tr>
                                    <td>Namn:</td>
                                    <td>{details.table.name}</td>
                                </tr>
                                <tr>
                                    <td>Kategori:</td>
                                    <td>{details.table.category}</td>
                                </tr>
                                <tr>
                                    <td>Område:</td>
                                    <td>{details.table.area}</td>
                                </tr>
                                <tr>
                                    <td>90-konto:</td>
                                    <td>{details.table.verified}</td>
                                </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className="col-md-2">
                            <h5 className="text-center">Bra</h5>
                            <hr/>
                            <ul>
                                {details.checkboxes.map((object, i) => {
                                    return (
                                        <li key={i} className="row">

                                            <i className="fas fa-check-circle text-success"></i>
                                            <p>{object}</p>

                                        </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <h5 className="text-center">Mindre bra</h5>
                            <hr/>
                            <ul>
                                {details.notChecked.map((object, i) => {
                                    return (
                                        <li key={i} className="row">

                                            <i className="fas fa-exclamation-circle text-warning"></i>
                                            <p>{object}</p>

                                        </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 card">
                            <div className="card-body">
                                <h3 className="text-center card-title">Om {details.name}</h3>
                                <p>"{details.about}"</p>
                                <p> -Citat från <a href={details.source}>{details.name}</a></p>
                            </div>
                        </div>


                        <div className="col-md-6 card">
                            <div className="card-body mission">
                                <h3 className="text-center card-title">Vad gör {details.name}?</h3>
                                <p>"{details.mission}"</p>
                                <p> -Citat från <a href={details.source}>{details.name}</a></p>
                            </div>
                        </div>


                        <div className="col-md-6 card">
                            <div className="card-body">
                                <h3 className="text-center card-title">Hur kan jag stödja {details.name}?</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="how-to-give-list">

                                            {details.howtosupport.map((object, i) => {
                                                return (
                                                    <li
                                                        key={i}
                                                    >
                                                        {object}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="col-md-6 d-flex flex-column  justify-content-center">
                                        <a href={details.link} target="_blank" rel="noopener noreferrer"
                                           className="btn btn-lg btn-primary align-baseline give-btn"> Stöd {details.name}</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 card">
                            <div className="card-body">
                                <h3 className="text-center card-title">Transparens/Pålitlighet</h3>
                                <p>{details.misc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </F>
        )


    }
}