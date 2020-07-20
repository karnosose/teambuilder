import {EDIT_USER, SET_CURRENT_USER, SET_SERVER_ERROR} from '../actions/userActions';

import { combineReducers } from 'redux';

export const userReducer = (state = {}, action) => {
    switch(action.type){
        case EDIT_USER : 
            return {
               currentUser: action.user 
            };
        case SET_CURRENT_USER : 
            return {
                currentUser: action.user 
            }
        default: 
            return state
    }
}


export const serverErrorReducer = (state = '', action) => {
    switch(action.type){
        case SET_SERVER_ERROR:
            return {
                serverError: action.error
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    userReducer,
    serverErrorReducer
});

export default rootReducer;