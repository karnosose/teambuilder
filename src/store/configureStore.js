import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {userReducer} from '../reducers/userReducer';

export default function configureStore(initialState){
    const enhancer = applyMiddleware(thunk);

    return  createStore (
        userReducer,
        initialState,
        enhancer
    )
}