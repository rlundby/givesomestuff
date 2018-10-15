import React, { Component, Fragment as F } from 'react';
import {Redirect} from 'react-router-dom';
import Navigation from "../Navigation";
import Jumbatron from "../Jumbatron";
import Infobar from "../Infobar";
import MainContent from "../Main Content";

class MainLayout extends Component {
    render() {
        let auth = sessionStorage.getItem('auth');
        if(!auth) {
            return <Redirect to="/login" />
        }
        return (
            <F>
                <Navigation/>
                <Jumbatron/>
                <Infobar/>
                <MainContent/>
            </F>
        );
    }
}

export default MainLayout;
