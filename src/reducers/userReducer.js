import {EDIT_USER, SET_CURRENT_USER} from '../actions/userActions';

export const userReducer = (state, action) => {
    switch(action.type){
        case EDIT_USER : 
            return {
               currentUser: action.user 
            };
        case SET_CURRENT_USER : 
        console.log('ttt',action.user)
            return {
                currentUser: action.user 
            }
        default: 
            return state
    }
}