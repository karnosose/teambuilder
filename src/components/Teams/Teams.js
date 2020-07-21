import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'react-uuid'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {getTeams} from '../../actions/teamActions';

import {styles} from './Teams.style';
import {withStyles} from '@material-ui/core';

class Teams extends Component{

    componentDidMount(){
        this.props.getTeams(JSON.parse(localStorage.getItem('token')));
    }

    render(){
        const {classes, teams} = this.props

        return (
            <div>
                {console.log(teams)}
                <h2 className={classes.title}>Teams</h2>
                {teams.map(team => {
                    return (
                        <Card className={classes.root} key={uuid()}>
                            <div className={classes.details} >
                                <CardContent className={classes.content}>
                                    <div className={classes.teamTitle}>
                                        <Typography component="h5" variant="h5">
                                            {team.name}
                                        </Typography>
                                    </div>
                                    <div className={classes.descAndVotes}>
                                        <Typography className={classes.description}>
                                            {team.project}
                                        </Typography>
                                        <Typography>
                                            {team.topic}
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
      teams: state.teams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTeams: token => dispatch(getTeams(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Teams));