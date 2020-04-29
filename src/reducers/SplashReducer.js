import Constants from '../constants/ReducersCN';

const initialState = {
    isOnboarding: false
}
const SplashReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.RD_SPLASH.IS_ONBOARDING:
            return {
                ...state,
                isOnboarding: action.payload
            }
        
        default: return state
    }

}

export default SplashReducer;