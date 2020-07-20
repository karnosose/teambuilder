import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage'
import Profile from './components/Profile/Profile'

import {PrivateRoute} from './components/PrivateRoute';

class App extends Component {

  render() {

    return (
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path='/login'>
            <LoginPage />
          </PrivateRoute>
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

export default App;
