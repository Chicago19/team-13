import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MainAdultPage from './pages/mainAdult.jsx';
// import FrontPage from './pages/frontpage.jsx';
// import Resources from './pages/Resources.jsx';

class App extends Component{
  render(){
    return (
        <Router>
          <Switch>
            {/* <Route exact path="/" component={FrontPage}/> */}
            <Route exact path="/claireslittyreactpage" component={MainAdultPage}/>
            {/* <Route exact path="/resources" component={Resources}/> */}
            <Redirect to="/404"/>
          </Switch>
        </Router>
    );
  }
}

export default App;
