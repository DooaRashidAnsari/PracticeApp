import Constants from '../constants/ReducersCN';

const initialState = {
    userId: '', drawerRef: null
}
const GlobalActionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.GLOBAL_ACTIONS.USER_ID:
            return {
                ...state,
                userId: action.payload
            }
        case Constants.GLOBAL_ACTIONS.DRAWER_REF:
            return {
                ...state,
                drawerRef: action.payload
            }

        default: return state
    }

}

export default GlobalActionReducer;