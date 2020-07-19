import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

import {validEmailRegex} from '../../helpers/validate';

import {styles} from './LoginPage.style';
import {withStyles} from '@material-ui/core';

class LoginPage extends Component{
  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    const {name, value } = e.target;
    console.log(name)
    this.setState({...this.state, [name]: value})
  }

  handleSubmit = e => {
    const validEmail = validEmailRegex.test(this.state.mail)
    // if(validEmail) {
      fetch('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      
      body: JSON.stringify(this.state)
    })
    .then(response =>  {
      if(response.status !== 200){
        throw Error(response.statusText)
      }
    })
    .then(response => console.log(response))
    // }
  }

  render(){
    const {classes} = this.props;
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
                // error={this.state.errors.email? true : false}
                // helperText={this.state.errors.email}
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
                // error={this.state.errors.password ? true : false}
                // helperText={this.state.errors.password}

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

export default withStyles(styles)(LoginPage);