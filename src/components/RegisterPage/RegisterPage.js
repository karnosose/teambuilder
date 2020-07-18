import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import DatePicker from 'react-datepicker';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {changeDateFormat} from '../../helpers/changeDateFormat';
import {validateFormFields} from '../../helpers/validate';

import "react-datepicker/dist/react-datepicker.css";
import {styles} from './RegisterPage.style';
import {withStyles} from '@material-ui/core';

class RegisterPage extends Component{
  state = {
    userDetails: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      sex: '',
      avatarUrl: '',
      jsExperience: 0,
      reactExperience: 0,
      companyId: '',
      birthDate: Date.now(),
    },
    errors: {}
  }

  checkformFields = data => {
    let valid = false
    Object.values(data).forEach(val => val.length > 0 && (valid = true));
    return valid
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    
    this.setState({...this.state, userDetails: {...this.state.userDetails, [name]: value}});
  }

  handleBirthDateChange = date => {
    // const birthDate = changeDateFormat(date)
    this.setState({...this.state, userDetails: {...this.state.userDetails, birthDate: date}})
  }

  registerUser = userData => {
    fetch('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      
      body: JSON.stringify(userData)
    })
    .then(response =>  {
      if(response.status !== 200){
        throw Error(response.statusText)
      }
    })
    .then(response => console.log(response))
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateFormFields(this.state.userDetails)

    this.setState({...this.state, errors: errors});
    
    if(Object.entries(errors).length === 0) {
      const birthDate = changeDateFormat(this.state.userDetails.birthDate)
      const data = this.state.userDetails;
      data.birthDate = birthDate;
      data.jsExperience = +data.jsExperience;
      data.reactExperience = +data.reactExperience;
      this.registerUser(data)
    }else{
      console.error('20')
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
                value={this.state.userDetails.email}
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
                value={this.state.userDetails.password}
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
                value={this.state.userDetails.firstName}
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
                value={this.state.userDetails.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className={classes.dateField}>
              <label>Birdth date:</label>
              <DatePicker 
                name="birthdate"
                className={classes.dataPicker}
                selected={this.state.userDetails.birthDate} 
                onChange={date => this.handleBirthDateChange(date)}
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
                value={this.state.userDetails.avatarUrl}
                onChange={this.handleChange}
              />
            </div>
            <div className={classes.sexAndCompany}>
              <FormControl variant="outlined" className={classes.sexForm} required>
                <InputLabel id="demo-simple-select-outlined-label">Sex</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={this.state.userDetails.sex}
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
                  value={this.state.userDetails.companyId}
                  name="companyId"
                  onChange={this.handleChange}
                  label="Company ID"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
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
                value={this.state.userDetails.jsExperience}
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
                value={this.state.userDetails.reactExperience}
                variant="outlined"
                onChange={this.handleChange}
              />
            </div>
            <div>
            <Button 
              variant="contained" 
              color="primary"
              className={classes.registerButton}
              onClick={e => this.handleSubmit(e)}
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