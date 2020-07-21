import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuid from 'react-uuid'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {getTopics} from '../../actions/topicActions'

import {styles} from './Topics.style';
import {withStyles} from '@material-ui/core';

class Topics extends Component{
    componentDidMount(){
        this.props.getTopics(JSON.parse(localStorage.getItem('token')));
    }

    render(){
        const {classes, topics} = this.props

        return (
            <div>
                <h2 className={classes.title}>Topics</h2>
                {topics.map(topic => {
                    return (
                        <Card className={classes.root} key={uuid()}>
                            <div className={classes.details}>
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
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      topics: state.topics
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        getTopics: token => dispatch(getTopics(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Topics));