import Constants from '../constants/ReducersCN';
const initialState = {
    work: '', desc: '', userId: '', data: [], isWork: true, isDesc: true, isUpdate: false, updateId: '', buttonText: '', refresh: false
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.RD_TODO.WORK: return { ...state, work: action.payload }
        case Constants.RD_TODO.DESC: return { ...state, desc: action.payload }
        case Constants.RD_TODO.USER_ID: return { ...state,userId:action.payload }
        case Constants.RD_TODO.DATA: return { ...state,data:action.payload }
        case Constants.RD_TODO.IS_WORK: return { ...state,isWork:action.payload }
        case Constants.RD_TODO.IS_DESC: return { ...state,isDesc:action.payload }
        case Constants.RD_TODO.IS_UPDATE: return { ...state, isUpdate:action.payload}
        case Constants.RD_TODO.UPDATE_ID: return { ...state, buttonText:action.payload}
        case Constants.RD_TODO.BUTTON_TEXT: return { ...state, buttonText:action.payload}
        case Constants.RD_TODO.REFRESH: return { ...state, refresh:action.payload}
        default:
            return state;
    }
}
export default todoReducer;