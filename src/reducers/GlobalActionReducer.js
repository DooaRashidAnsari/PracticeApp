import Constants from '../constants/ReducersCN';

const initialState = {
    userId: ''
}
const GlobalActionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.GLOBAL_ACTIONS.USER_ID:
            return {
                ...state,
                userId: action.payload
            }
        
        default: return state
    }

}

export default GlobalActionReducer;