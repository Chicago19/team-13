import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MainAdultPage from './pages/mainAdult.jsx';
import FrontPage from './pages/frontpage.jsx';
import Resources from './pages/Resources.jsx';
import childPage from './pages/childPage.jsx';
import childPage1 from './pages/childPage1.jsx';
import childPage2 from './pages/childPage2.jsx';
import childPage3 from './pages/childPage3.jsx';
import Surveys from './pages/surveys.jsx';
import Login from './pages/loginPage.jsx';

class App extends Component{
  render(){
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={FrontPage}/>
            <Route exact path="/adult-main" component={MainAdultPage}/>
            <Route exact path="/resources" component={Resources}/>
            <Route exact path="/games" component={childPage}/>
            <Route exact path="/games1" component={childPage1}/>
            <Route exact path="/games2" component={childPage2}/>
            <Route exact path="/games3" component={childPage3}/>
            <Route exact path="/surveys" component ={Surveys}/>
            <Route exact path="/login" component={Login}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>
    );
  }
}

export default App;
