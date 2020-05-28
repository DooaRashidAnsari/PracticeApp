import Constant from '../constants/ReducersCN'


export function mapStateToProps(state) {
    return {
        drawerRef:state.globalActionsReducer.drawerRef
    }
}


export function mapDispatchToProps(dispatch) {
    return {
        setDrawerRef: (value) => {
            console.log('calling dispatchof drawer')
            dispatch({ type: Constant.GLOBAL_ACTIONS.DRAWER_REF, payload: value })
    }
    }
}
