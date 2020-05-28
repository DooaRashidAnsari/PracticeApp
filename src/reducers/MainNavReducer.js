import Constants from '../constants/ReducersCN';

const initialState = {
    drawerRef: null
}
const MainNavReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.GLOBAL_ACTIONS.DRAWER_REF:
            return {
                ...state,
                drawerRef: action.payload
            }
        
        default: return state
    }

}

export default MainNavReducer;