import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'react-uuid'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {getProjects} from '../../actions/projectActions';

import {styles} from './Projects.style';
import {withStyles} from '@material-ui/core';

class Projects extends Component{

    componentDidMount(){
        this.props.getProjects(JSON.parse(localStorage.getItem('token')));
    }

    render(){
        const {classes, projects} = this.props

        return (
            <div>
                <h2 className={classes.title}>Projects</h2>
                {projects.map(project => {
                    return (
                        <Card className={classes.root} key={uuid()}>
                            <div className={classes.details} >
                                <CardContent className={classes.content}>
                                    <div className={classes.projectTitle}>
                                        <Typography component="h5" variant="h5">
                                            {project.title}
                                        </Typography>
                                    </div>
                                    <div className={classes.descAndVotes}>
                                        <Typography className={classes.description}>
                                            {project.description}
                                        </Typography>
                                        <Typography>
                                            Votes: {project.votingsCount}
                                        </Typography>
                                    </div>
                                    
                                </CardContent>
                            </div>
                        </Card>

                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      projects: state.projects
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: token => dispatch(getProjects(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Projects));