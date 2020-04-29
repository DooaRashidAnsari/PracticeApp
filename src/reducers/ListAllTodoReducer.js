import Constants from '../constants/ReducersCN';

const initialState = {
    data:[],userId:''
}
const ListAllTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.RD_LIST_ALL.DATA:
            return {
                ...state,
                data: action.payload
            }
        
        default: return state
    }

}

export default ListAllTodoReducer;