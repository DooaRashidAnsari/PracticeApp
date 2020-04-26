import { combineReducers } from 'redux';
import { loginReducer } from './LoginReducer';
import {todoReducer} from './TodoReducer'

export default combineReducers({
  loginReducer,todoReducer

});