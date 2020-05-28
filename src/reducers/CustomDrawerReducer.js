import Constants from '../constants/ReducersCN';

const initialState = {
    userId: '', picture: '', username: '', isVisible: false,drawerRef: null
}
const CustomDrawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.DRAWER.PICTURE:
            return {
                ...state,
                picture: action.payload
            }

        case Constants.DRAWER.USERNAME:
            return {
                ...state,
                username: action.payload
            }

        case Constants.DRAWER.IS_VISIBLE:
            return {
                ...state,
                isVisible: action.payload
            }

        case Constants.GLOBAL_ACTIONS.DRAWER_REF:
            return {
                ...state,
                drawerRef: action.payload
            }

       default: return state
    }

}

export default CustomDrawerReducer;