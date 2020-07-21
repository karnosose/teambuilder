import React, {Component} from 'react';
import {connect} from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {styles} from './Profile.style';
import {withStyles} from '@material-ui/core';

class Profile extends Component{

    render(){
        const {classes, currentUser} = this.props;
        
        return (
            <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    className={classes.avatar}
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={currentUser.avatarUrl}
                    title="Contemplative Reptile"
                />
                <CardContent classname={classes.profileDetails}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.fullName}>
                    {currentUser.firstName} {currentUser.lastName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    email: {currentUser.email}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    sex: {currentUser.sex}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Birth date: {currentUser.sex}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Js Experience: {currentUser.sex}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    React Experience: {currentUser.sex}
                </Typography>
              
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.editUser}>
                    <Button size="small" color="primary">
                        Edit details
                    </Button>
                </CardActions>
            </Card>
        )
    } 

}

const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser
    }
  }

export default connect(mapStateToProps)(withStyles(styles)(Profile));