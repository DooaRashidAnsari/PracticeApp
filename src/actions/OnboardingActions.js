import Constant from '../constants/ReducersCN'
import OnboardingRepo from '../repositories/OnboardingRepo'

const repo = new OnboardingRepo()
export function mapStateToProps(state) {
    return {
        userId: state.globalActionsReducer.userId,
    }
}


export function mapDispatchToProps(dispatch) {
    return {
        setOnboarding: () => {
            repo.setOnboardingStatus()
        }
    }
}
