import React, {Component} from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

import {validEmailRegex} from '../../helpers/validate';

import {login} from '../../actions/userActions';
import {styles} from './LoginPage.style';
import {withStyles} from '@material-ui/core';
import { Redirect } from 'react-router-dom';

class LoginPage extends Component{
  state = {
    email: '',
    password: '',
    errors: []
  }

  handleChange = e => {
    const {name, value } = e.target;
    this.setState({...this.state, [name]: value})
  }

  handleSubmit = e => {
    const validEmail = validEmailRegex.test(this.state.email)

    if(validEmail) {
      this.props.login(this.state.email, this.state.password);
    } 
    else {
      this.setState({...this.state, errors: 'email is not valid'})
    }

  }

  render(){
    const {classes} = this.props;
    
    if(this.props.currentUser.email){
      return (
        <Redirect to='/'></Redirect>
      )
    }

    return (
      <div className={classes.form}>
        <Typography variant='h5'>
          Sign in
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <div className={classes.formFields}>
            <div>
              <TextField
                className={classes.formField}
                required
                id="outlined-required"
                name="email"
                label="email"
                variant="outlined"
                value={this.state.email}
                onChange={this.handleChange}
                error={this.state.errors.length > 0 ? true : false}
                helperText={this.state.errors}
              />
            </div>
            <div>
              <TextField
                className={classes.formField}
                id="outlined-password-input"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div>
            <Button 
              variant="contained" 
              color="primary"
              className={classes.loginButton}
              onClick={e => this.handleSubmit(e)}
            >
              sign in
            </Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProprs = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  }
};


export default connect(mapStateToProps, mapDispatchToProprs)(withStyles(styles)(LoginPage));
