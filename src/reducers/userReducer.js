import {EDIT_USER} from '../actions/userActions';

export const userReducer = (state, action) => {
    switch(action.type){
        case EDIT_USER : 
            return {
               currentUser: action.user 
            }
        default: 
            return state
    }
}