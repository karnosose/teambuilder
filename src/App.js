import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage'
import Profile from './components/Profile/Profile'

import {styles} from './App.style';
import {withStyles} from '@material-ui/core';

class App extends Component {

  render() {

  const {classes} = this.props; 

    return (
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path="/profile">
             <Profile />
          </Route>
        </Switch>
      </Router>
      
    );
  }
}

export default withStyles(styles)(App);
