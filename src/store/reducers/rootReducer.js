import { combineReducers } from 'redux';
import windowReducer from './windowReducer';
import projectReducer from './projectReducer';

const rootreducer = combineReducers({
    projectState: projectReducer,
    windowsState: windowReducer
});

export default rootreducer;