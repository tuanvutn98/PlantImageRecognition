import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducers from './authReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducers
});