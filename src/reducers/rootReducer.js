import { combineReducers } from 'redux';


import {SET_CURRENT_USER, SET_SERVER_ERROR} from '../actions/userActions';

const userReducer = (state = {currentUser:{}, serverError: ''}, action) => {
    console.log('enter', state, action);
    switch(action.type){
        case SET_CURRENT_USER : 
            return {
                currentUser: action.user 
            }
        case SET_SERVER_ERROR:
            return {
                ...state, serverError: action.error
            }
        default:
            return state
        
    }
}

export default userReducer;



