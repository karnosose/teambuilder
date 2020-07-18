import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';

import {styles} from './RegisterPage.style';
import {withStyles} from '@material-ui/core';

class RegisterPage extends Component{
  render(){
    const {classes} = this.props;

    return (
      <div className={classes.form}>
        <form className={classes.root} noValidate autoComplete="off">
          <div className={classes.formFields}>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
              variant="outlined"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="outlined"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
            <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="outlined"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(RegisterPage)