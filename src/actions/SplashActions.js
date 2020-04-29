import Constant from '../constants/ReducersCN'
import SplashRepo from '../repositories/SplashRepo'

const repo = new SplashRepo()

export function mapStateToProps(state) {
    return {
        userId: state.globalActionsReducer.userId,
        isOnboarding: state.splashReducer.isOnboarding
    }
}


export function mapDispatchToProps(dispatch) {
    return {
        setInitialStates: () => {
            repo.initiate()
            repo.getOnboardingStatus().then(isShown => {
                dispatch({ type: Constant.RD_SPLASH.IS_ONBOARDING, payload: isShown })
                repo.getUserId().then(result => {
                    dispatch({ type: Constant.GLOBAL_ACTIONS.USER_ID, payload: result + '' })
                })
            })
        }
    }
}
