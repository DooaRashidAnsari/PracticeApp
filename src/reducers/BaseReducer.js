import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import todoReducer from './TodoReducer'
import globalActionsReducer from './GlobalActionReducer'
import splashReducer from './SplashReducer'
import signUpReducer from './SignUpReducer'
import listAllTodoReducer from './ListAllTodoReducer'
import onBoardingReducer from './OnboardingReducer'



const rootReducer = combineReducers({
  onBoardingReducer,listAllTodoReducer,globalActionsReducer, LoginReducer, todoReducer,splashReducer,signUpReducer

});
export default rootReducer