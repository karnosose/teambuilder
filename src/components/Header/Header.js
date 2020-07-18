import React, {Component} from 'react';
import  {Link} from 'react-router-dom'
import uuid from 'react-uuid'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import {styles} from './Header.style';
import {withStyles} from '@material-ui/core';

import {MENU_ITEMS} from '../../constants/menuItems';


class Header extends Component{
  state = {
    loggedIn: false
  }
  render(){

    const handleProfileMenuOpen = (event) => {
        // setAnchorEl(event.currentTarget);
      };
    const {classes} = this.props;

    const MenuItems = () => {
      return MENU_ITEMS.map(item => (
         <Link 
          to={item.url} 
          key={uuid()}
          className={classes.menuItems}
        >
           {item.title}
         </Link>
       ))
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
          
          <div>
            <MenuItems />
            {this.state.loggedIn && (
              <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Header);