import Constant from '../constants/ReducersCN'
import TodoRepo from '../repositories/TodoRepo'
import Validations from '../helpers/Validations'
import ValidationCN from '../constants/ValidationCN'
const validations = new Validations()



const repo = new TodoRepo()
export function mapStateToProps(state) {
    return {
        drawerRef:state.globalActionsReducer.drawerRef, isWork: state.todoReducer.isWork, isDesc: state.todoReducer.isDesc, userId: state.todoReducer.userId
        , data: state.todoReducer.data, work: state.todoReducer.work
        , desc: state.todoReducer.desc, isUpdate: state.todoReducer.isUpdate, updateId: state.todoReducer.updateId
        , buttonText: state.todoReducer.buttonText
        , refresh: state.todoReducer.refresh, userId: state.globalActionsReducer.userId, msgTodo: state.todoReducer.msgTodo
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
            dispatch({ type: Constant.RD_TODO.WORK, payload: work })
            dispatch({ type: Constant.RD_TODO.DESC, payload: desc })
            dispatch({ type: Constant.RD_TODO.IS_UPDATE, payload: true })
            dispatch({ type: Constant.RD_TODO.BUTTON_TEXT, payload: buttonText })
            dispatch({ type: Constant.RD_TODO.UPDATE_ID, payload: key })
        }
        ,
        setCancelValues: (buttonText) => {
            dispatch({ type: Constant.RD_TODO.WORK, payload: '' })
            dispatch({ type: Constant.RD_TODO.DESC, payload: '' })
            dispatch({ type: Constant.RD_TODO.IS_UPDATE, payload: false })
            dispatch({ type: Constant.RD_TODO.BUTTON_TEXT, payload: buttonText })
        }
        ,
        setIsUpdateState: (buttonText) => {
            dispatch({ type: Constant.RD_TODO.IS_UPDATE, payload: false })
            dispatch({ type: Constant.RD_TODO.BUTTON_TEXT, payload: buttonText })
        }
        ,

        updateWorkDone: (userId, id, updateView) => {
            repo.markCheckToDone(id).then(result => {
                console.log(result)
                repo.getListTodos(userId).then(result => {
                    console.log(result)
                    updateView()
                })
            })
        },
        deleteItem: (userId, id) => {
            repo.deleteItem(id).then(result => {
                console.log(result)
                repo.getListTodos(userId).then(result => {
                    dispatch({ type: Constant.RD_TODO.DATA, payload: result })
                })
            })
        },
        listTodos: (userId) => {
            repo.getListTodos(userId).then(result => {
                dispatch({ type: Constant.RD_TODO.DATA, payload: result })

            })
        },
        validateData: (todoName, todoField,func) => {
            new Promise((resolve) => {
                var msgTodo = validations.validate([ValidationCN.EMPTY], todoName, todoField)
                console.log('message todo')
                console.log(msgTodo)
                dispatch({
                    type: Constant.RD_TODO.IS_WORK,
                    payload: msgTodo == null ? true : false
                })
                dispatch({
                    type: Constant.RD_TODO.MSG_TODO,
                    payload: msgTodo
                })
                resolve(msgTodo)
                    
            }).then(result=>{
                func()
            })
            
        },
        updateWork: (id, work, desc, buttonText, userId) => {
            repo.updateWork(id, work, desc).then(result => {
                dispatch({ type: Constant.RD_TODO.IS_UPDATE, payload: false })
                dispatch({ type: Constant.RD_TODO.BUTTON_TEXT, payload: buttonText })
                repo.getListTodos(userId).then(result => {
                    dispatch({ type: Constant.RD_TODO.DATA, payload: result })

                })
            })
        },
        insertWork: (work, desc, userId) => {
            repo.insertWork(work, desc, userId).then(result => {
                repo.getListTodos(userId).then(result => {
                    dispatch({ type: Constant.RD_TODO.DATA, payload: result })

                })
            })
        }

    }
}
