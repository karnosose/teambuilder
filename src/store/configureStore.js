import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {userReducer} from '../reducers/userReducer';

export default function configureStore(){
    const enhancer = applyMiddleware(thunk);

    return  createStore (
        userReducer,
        undefined,
        enhancer
    )
}