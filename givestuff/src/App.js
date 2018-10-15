import React, { Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import MainLayout from "./Components/Main Layout";
import Login from "./Components/Login";
import Verified from "./Components/Verified";
import Habits from "./Components/Habits";

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/' component={MainLayout} />
            <Route path='/login' component={Login}/>
            <Route path='/90konto' component={Verified}/>
            <Route path='/vanor' component={Habits}/>
        </Switch>
    );
  }
}

export default App;
