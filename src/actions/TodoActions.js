import Constant from '../constants/ReducersCN'


export function mapStateToProps(state) {
    return {
        isWork: state.todoReducer.isWork, isDesc: state.todoReducer.isDesc, userId: state.todoReducer.userId
        , data: state.todoReducer.data, work: state.todoReducer.work
        , desc: state.todoReducer.desc, isUpdate: state.todoReducer.isUpdate, updateId: state.todoReducer.updateId
        , buttonText: state.todoReducer.buttonText
        , refresh: state.todoReducer.refresh
    }

}


export function mapDispatchToProps(dispatch) {
    return {
        setValue: (constantId, value) => dispatch(
            {
                type: constantId,
                payload: value
            }
        ),

        setUpdatValues: (work, desc, buttonText, key) => {
            dispatch({ type:Constant.RD_TODO.WORK, payload: work})
            dispatch({ type:Constant.RD_TODO.DESC, payload: desc})
            dispatch({ type:Constant.RD_TODO.IS_UPDATE, payload: true})
            dispatch({ type:Constant.RD_TODO.BUTTON_TEXT, payload: buttonText})
            dispatch({ type:Constant.RD_TODO.UPDATE_ID, payload: key})
        }
        ,
        setCancelValues: (buttonText) => {
            dispatch({ type:Constant.RD_TODO.WORK, payload: ''})
            dispatch({ type:Constant.RD_TODO.DESC, payload: ''})
            dispatch({ type:Constant.RD_TODO.IS_UPDATE, payload: false})
            dispatch({ type:Constant.RD_TODO.BUTTON_TEXT, payload: buttonText})
        }
        ,
        setIsUpdateState: (buttonText) => {
            dispatch({ type:Constant.RD_TODO.IS_UPDATE, payload: false})
            dispatch({ type:Constant.RD_TODO.BUTTON_TEXT, payload: buttonText})
        }
        ,

        
    }
}
