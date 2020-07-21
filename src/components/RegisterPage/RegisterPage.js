import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {registerUser} from '../../actions/userActions';

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
      jsExperience: '',
      reactExperience: '',
      companyId: '',
      birthDate: Date.now(),
    },
    errors: {}
  }

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({...this.state, userDetails: {...this.state.userDetails, [name]: value}});
  }

  handleBirthDateChange = date => {
    this.setState({...this.state, userDetails: {...this.state.userDetails, birthDate: date}})
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
      this.props.registerUser(data)
    }else{
      console.error('20')
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
          Register
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <div className={classes.formFields}>
            <div>
              <TextField
                className={classes.formField}
                required
                error={this.state.errors.email? true : false}
                id="outlined-required"
                name="email"
                label="email"
                variant="outlined"
                value={this.state.userDetails.email}
                onChange={this.handleChange}
                helperText={this.state.errors.email}

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
                error={this.state.errors.password ? true : false}
                helperText={this.state.errors.password}

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
                error={this.state.errors.firstName ? true : false}
                helperText={this.state.errors.firstName}
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
                error={this.state.errors.lastName ? true : false}
                helperText={this.state.errors.lastName}
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
                error={this.state.errors.avatarUrl ? true : false}
                helperText={this.state.errors.avatarUrl}
              />
            </div>
            <div className={classes.sexAndCompany}>
              <FormControl 
                variant="outlined" 
                className={classes.sexForm} 
                required                 
                error={this.state.errors.sex ? true : false}

              >
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
              <FormControl 
                variant="outlined" 
                className={classes.companyId}  
                required 
                error={this.state.errors.companyId ? true : false}

              > 
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
                error={this.state.errors.js ? true : false}
                helperText={this.state.errors.js}
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
                error={this.state.errors.react ? true : false}
                helperText={this.state.errors.react}
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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProprs = (dispatch) => {
  return {
    registerUser: (data) => dispatch(registerUser(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProprs)(withStyles(styles)(RegisterPage));
