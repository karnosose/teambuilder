import React, {Component} from 'react';
import  {Link} from 'react-router-dom'
import uuid from 'react-uuid'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

import {styles} from './Header.style';
import {withStyles} from '@material-ui/core';

import {MENU_ITEMS} from '../../constants/menuItems';
import { connect } from 'react-redux';


class Header extends Component{
  state = {
    loggedIn: false
  }
  render(){

  
    const {classes} = this.props;

    const MenuItems = () => {
      if(this.props.currentUser.email){
        return MENU_ITEMS.map(item => (
          (item.title === 'Profile') ? (
            <Link 
            to={item.url} 
            key={uuid()}
            className={classes.menuItem}
          >
            <AccountCircleSharpIcon />
  
           </Link>
          ) : (
           <Link 
            to={item.url} 
            key={uuid()}
            className={classes.menuItem}
          >
            {item.title}
           </Link>
          )
         ))
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

export default connect(mapStateToProps)(withStyles(styles)(Header));