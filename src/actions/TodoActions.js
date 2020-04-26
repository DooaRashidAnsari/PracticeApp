import Constant from '../Constants'


export function mapStateToProps(state) {
    return {
        isWork: state.isWork, isDesc: state.isDesc, userId: state.userId, data: state.data, work: state.work
        , desc: state.desc, isUpdate: state.isUpdate, updateId: state.updateId, buttonText: state.buttonText
        , refresh: state.refresh
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
