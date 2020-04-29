import Constant from '../constants/ReducersCN'


export function mapStateToProps(state) {
    return {
        userId: state.globalActionsReducer.userId
    }
}


export function mapDispatchToProps(dispatch) {
    return {
        setUserId: (value) => dispatch({ type: Constant.GLOBAL_ACTIONS.USER_ID, payload: value }),
    }
}
