import { combineReducers } from 'redux';
import lotrReducer from './lotrReducer';
import catsReducer from './catsReducer';

export default combineReducers({
    lotr: lotrReducer,
    cats: catsReducer
});