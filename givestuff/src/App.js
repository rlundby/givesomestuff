import React, { Component, Fragment as F } from 'react';
import './App.css';
import Navigation from "./Components/Navigation";
import Jumbatron from "./Components/Jumbatron";
import Infobar from "./Components/Infobar";
import MainContent from "./Components/Main Content";

class App extends Component {
  render() {
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

export default App;
