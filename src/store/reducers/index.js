import { combineReducers } from 'redux';
import lotrReducer from './lotrReducer';

export default combineReducers({
    lotr: lotrReducer
});