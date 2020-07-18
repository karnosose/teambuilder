import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import DatePicker from 'react-datepicker';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import "react-datepicker/dist/react-datepicker.css";
import {styles} from './RegisterPage.style';
import {withStyles} from '@material-ui/core';

class RegisterPage extends Component{
  state = {
    date: Date.now()
  }

  handleSexChange = e => {

  }
  render(){
    const {classes} = this.props;

    return (
      <div className={classes.form}>
        <Typography variant='h5'>
          Register
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <div className={classes.formFields}>
            <div>
              <TextField
                className={classes.formField}
                required
                id="outlined-required"
                label="email"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                className={classes.formField}
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                className={classes.formField}
                required
                id="outlined-required"
                label="first name"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                className={classes.formField}
                required
                id="outlined-required"
                label="last name"
                variant="outlined"
              />
            </div>
            <div className={classes.dateField}>
              <label>Birdth date:</label>
              <DatePicker 
                className={classes.dataPicker}
                selected={this.state.date} 
                onChange={birdthDate => this.setState({date: birdthDate})} 
              />

            </div>
            <div>
              <TextField
                className={classes.formField}
                required
                id="outlined-required"
                label="avatar url"
                variant="outlined"
              />
            </div>
            <div >
              <FormControl variant="outlined" className={classes.sexForm} required>
                <InputLabel id="demo-simple-select-outlined-label">Sex</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.sex}
                  onChange={this.handleSexChange}
                  label="Sex"
                >
                  <MenuItem value='male'>male</MenuItem>
                  <MenuItem value='female'>female</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.numberField}>
              <TextField
              // className={classes.numberField}
                required
                id="outlined-number"
                label="Js experience (months)"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            
              <TextField
                // className={classes.numberField}
                required
                id="outlined-number"
                label="React experience (months)"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </div>
            <div>
            <Button 
              variant="contained" 
              color="primary"
              className={classes.registerButton}
            >
              Register
            </Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(RegisterPage)