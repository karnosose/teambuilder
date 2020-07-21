import React, {Component} from 'react';
import  {Link} from 'react-router-dom'
import uuid from 'react-uuid';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

import {logOut} from '../../actions/userActions';

import {styles} from './Header.style';
import {withStyles} from '@material-ui/core';



class Header extends Component{
  state = {
    loggedIn: false
  }

  handleLogOut = () => {
    this.props.logOut(JSON.stringify(localStorage.getItem('token')));
    localStorage.removeItem('token')
  }
  render(){

  
    const {classes} = this.props;

    const MenuItems = () => {
      if(this.props.currentUser.email){
        return (
          <>
            <Link 
              to='/teams' 
              key={uuid()}
              className={classes.menuItem}
            >
              Teams
           </Link>
           <Link 
              to='/topics' 
              key={uuid()}
              className={classes.menuItem}
            >
              Topics
           </Link>
           <Link 
              to='/projects' 
              key={uuid()}
              className={classes.menuItem}
            >
              Projects
           </Link>
           <Link 
              to='/' 
              key={uuid()}
              className={classes.menuItem}
              onClick={this.handleLogOut}
            >
              Log out
           </Link>
            <Link 
              to='/profile' 
              key={uuid()}
              className={classes.menuItem}
            >
              <AccountCircleSharpIcon />
            </Link>
            
          </>
        )
      } else {
        return (
          <>
            <Link 
              to='/login' 
              key={uuid()}
              className={classes.menuItem}
            >
            Log in
            </Link>
            <Link 
                to='/register' 
                key={uuid()}
                className={classes.menuItem}
              >
              Register
          </Link>
        </>
        )
      }
        
      
    }
    
    return (
      <AppBar position="static">
        <Toolbar className={classes.header}>
          <div className={classes.icon}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <GroupWorkIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              TeamBuilder
            </Typography>
          </div>
          
          <div className={classes.menuItems}>
            <MenuItems />
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      logOut: (token) => dispatch(logOut(token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));