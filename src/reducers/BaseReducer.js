import { combineReducers } from 'redux';
import  LoginReducer  from './LoginReducer';
import todoReducer from './TodoReducer'

const rootReducer =  combineReducers({
  LoginReducer,todoReducer

});
export default rootReducer