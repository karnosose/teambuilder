import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'react-uuid'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import {styles} from './Projects.style';
import {withStyles} from '@material-ui/core';

class Projects extends Component{
    render(){
        const {classes, projects} = this.props

        return (
            <div>
                <h2 className={classes.title}>Topics</h2>
                {/* {Projects.map(topic => {
                    return (
                        <Card className={classes.root}>
                            <div className={classes.details} key={uuid()}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        {topic.title}
                                    </Typography>
                                    <Typography>
                                        Votes: {topic.votingsCount}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>

                    )
                })} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      projects: state.projects
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Projects));