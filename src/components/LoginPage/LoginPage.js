import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

import {styles} from './LoginPage.style';
import {withStyles} from '@material-ui/core';

class LoginPage extends Component{
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
                // value={this.state.userDetails.email}
                // onChange={this.handleChange}
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
                // value={this.state.userDetails.password}
                // onChange={this.handleChange}
                // error={this.state.errors.password ? true : false}
                // helperText={this.state.errors.password}

              />
            </div>
            <div>
            <Button 
              variant="contained" 
              color="primary"
              className={classes.loginButton}
              // onClick={e => this.handleSubmit(e)}
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