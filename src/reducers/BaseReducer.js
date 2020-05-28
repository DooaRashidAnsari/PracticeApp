import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import todoReducer from './TodoReducer'
import globalActionsReducer from './GlobalActionReducer'
import splashReducer from './SplashReducer'
import signUpReducer from './SignUpReducer'
import listAllTodoReducer from './ListAllTodoReducer'
import onBoardingReducer from './OnboardingReducer'
import customDrawerReducer from './CustomDrawerReducer'



const rootReducer = combineReducers({
  onBoardingReducer, listAllTodoReducer, globalActionsReducer, LoginReducer, todoReducer, splashReducer, signUpReducer
  , customDrawerReducer

});
export default rootReducer