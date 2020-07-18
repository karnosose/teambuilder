import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import DatePicker from 'react-datepicker';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {validateFormFields} from '../../helpers/validate';

import "react-datepicker/dist/react-datepicker.css";
import {styles} from './RegisterPage.style';
import {withStyles} from '@material-ui/core';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class RegisterPage extends Component{
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    sex: '',
    avatarUrl: '',
    jsExperience: null,
    reactExperience: null,
    companyId: null,
    birthDate: null,
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      sex: '',
      avatarUrl: '',
      jsExperience: '',
      reactExperience: '',
      companyId: '',
      birthDate: '',
    }

  }

  handleChange = (event) => {
    const {name, value} = event.target;

    const errors = validateFormFields(name, value, this.state.errors)
    
    this.setState({[name]: value, errors: errors});
  }

  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.validateForm(this.state.errors)) {
      
    }else{
      console.error('Invalid Form')
    }
  }
  render(){
    const {classes} = this.props;

    return (
      <div className={classes.form}>
        {console.log(this.state)}
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
                name="email"
                label="email"
                variant="outlined"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </div>
            <div>
              <TextField
                className={classes.formField}
                required
                id="outlined-required"
                name="firstName"
                label="first name"
                variant="outlined"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <TextField
                className={classes.formField}
                required
                id="outlined-required"
                label="last name"
                name="lastName"
                variant="outlined"
                onChange={this.handleChange}
              />
            </div>
            <div className={classes.dateField}>
              <label>Birdth date:</label>
              <DatePicker 
                name="birthdate"
                className={classes.dataPicker}
                selected={this.state.birthDate} 
                onChange={date => this.setState({...this.state, birthDate: date})}
                />
            </div>
            <div>
              <TextField
                className={classes.formField}
                required
                id="outlined-required"
                label="avatar url"
                name="avatarUrl"
                variant="outlined"
                onChange={this.handleChange}
              />
            </div>
            <div className={classes.sexAndCompany}>
              <FormControl variant="outlined" className={classes.sexForm} required>
                <InputLabel id="demo-simple-select-outlined-label">Sex</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.sex}
                  onChange={this.handleChange}
                  label="Sex"
                  name="sex"
                >
                  <MenuItem value='male'>male</MenuItem>
                  <MenuItem value='female'>female</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.companyId}  required>
                <InputLabel id="demo-simple-select-outlined-label">Company ID</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.sex}
                  name="companyId"
                  onChange={this.handleChange}
                  label="Company ID"
                >
                  <MenuItem value='male'>1</MenuItem>
                  <MenuItem value='female'>2</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.numberField}>
              <TextField
                required
                id="outlined-number"
                label="Js experience (months)"
                name="jsExperience"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={this.handleChange}
              />
              <TextField
                required
                id="outlined-number"
                label="React experience (months)"
                name="reactExperience"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={this.handleChange}
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