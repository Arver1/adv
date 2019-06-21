import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import history from '../history';


const enhancer = applyMiddleware(thunk, logger);

const store = createStore(reducer(history), enhancer);
window.store = store;

export default store;

