import Constant from '../constants/ReducersCN'
import ListAllTodoRepo from '../repositories/ListAllTodoRepo'

const repo = new ListAllTodoRepo()

export function mapStateToProps(state) {
    return {
        userId: state.globalActionsReducer.userId,
        data: state.listAllTodoReducer.data
    }
}


export function mapDispatchToProps(dispatch) {
    return {
        listAllTodos: (userId) => {
            repo.getAllTodos(userId).then(result=>{
                dispatch({ type: Constant.RD_LIST_ALL.DATA, payload: result })
            })
        }
    }
}
