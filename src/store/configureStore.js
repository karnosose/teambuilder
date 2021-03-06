import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers/rootReducer';

const enhancer = applyMiddleware(thunk);

export const store = createStore(reducer, enhancer)
 