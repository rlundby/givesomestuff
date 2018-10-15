import React, { Component } from 'react';

export default class Navigation extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Våga välgörenhet - En guide till att välja rätt</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav justify-content-end w-100">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Startsidan <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/90konto">Vad är ett 90-konto?</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/vanor">Hur skänker vi svenskar?</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}