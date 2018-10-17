import React, { Component } from 'react';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="/"><img src="./Untitled-3.png"  alt="logo"/></a>
                <button onClick={this.toggleNavbar} className={classTwo} type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                    <ul className="nav justify-content-end w-100">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Startsidan <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/90konto">Vad är ett 90-konto?</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link last-link" href="/vanor">Hur skänker vi svenskar?</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </header>
        )
    }
}