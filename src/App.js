import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import {getUsers} from './actions/userActions';

import Header from './components/Header/Header';
import Topics from './components/Topics/Topics';
import Projects from './components/Projects/Projects';
import Teams from './components/Teams/Teams';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage'
import Profile from './components/Profile/Profile'

class App extends Component {

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.getUsers(JSON.parse(localStorage.getItem('token')));
    }
  }

  render() {
    
    return (
      <Router>
        {!this.props.currentUser.email && (
          <Redirect to='/login' />
        )}
        <Header />
        <Switch>
          <Route path='/topics'>
            <Topics />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/teams'>
            <Teams />
          </Route>
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getUsers: (token) => dispatch(getUsers(token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
