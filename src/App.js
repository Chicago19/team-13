import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MainAdultPage from './pages/mainAdult.jsx';
import FrontPage from './pages/frontpage.jsx';
import Resources from './pages/Resources.jsx';
import childPage from './pages/childPage.jsx';
class App extends Component{
  render(){
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={FrontPage}/>
<<<<<<< HEAD
            <Route exact path="/claireslittyreactpage" component={mainAdultPage}/>
=======
            <Route exact path="/claireslittyreactpage" component={MainAdultPage}/>
>>>>>>> mainadultpage
            <Route exact path="/resources" component={Resources}/>
            <Route exact path="/games" component={childPage}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>
    );
  }
}

export default App;
