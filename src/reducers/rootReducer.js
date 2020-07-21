import {SET_CURRENT_USER, SET_SERVER_ERROR} from '../actions/userActions';
import {SET_TOPICS} from '../actions/topicActions';
import {SET_PROJECTS} from '../actions/projectActions';

const initialstate = {
    currentUser:{},
    serverError: '',
    topics: [],
    projects: []
}
const userReducer = (state =  initialstate, action) => {
    console.log('enter', state, action);
    switch(action.type){
        case SET_CURRENT_USER : 
            return {
                ...state, currentUser: action.user 
            }
        case SET_SERVER_ERROR:
            return {
                ...state, serverError: action.error
            }
        case SET_TOPICS: 
            return {
                ...state, topics: action.topics
            }
        case SET_TOPICS: 
            return {
                ...state, projects: action.projects
            }
        default:
            return state
        
    }
}

export default userReducer;



