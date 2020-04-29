import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import todoReducer from './TodoReducer'
import globalActionsReducer from './GlobalActionReducer'
import splashReducer from './SplashReducer'



const rootReducer = combineReducers({
  globalActionsReducer, LoginReducer, todoReducer,splashReducer

});
export default rootReducer