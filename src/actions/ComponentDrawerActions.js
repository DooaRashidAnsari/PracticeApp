import Constant from '../constants/ReducersCN'
import CustomDrawerRepo from '../repositories/CustomDrawerRepo'

const repo = new CustomDrawerRepo()

export function mapStateToProps(state) {
    return {
        username:state.customDrawerReducer.username,
        picture: state.customDrawerReducer.picture,
        isVisible: state.customDrawerReducer.isVisible,
        userId: state.globalActionsReducer.userId,
        drawerRef: state.globalActionsReducer.drawerRef
    }
}
export function mapDispatchToProps(dispatch) {
    return {
        setDrawerRef: (value) => {
            dispatch({ type: Constant.GLOBAL_ACTIONS.DRAWER_REF, payload: value })
        },
        setPicture: (value) => dispatch({ type: Constant.DRAWER.PICTURE, payload: value }),
        setUserName: (value) => dispatch({ type: Constant.DRAWER.USERNAME, payload: value }),
        setDialogVisible: (value) => dispatch({ type: Constant.DRAWER.IS_VISIBLE, payload: value }),

        getUserData: (userId) => {
            repo.getUserData(userId).then(result => {
                console.log(result)
                dispatch({ type: Constant.DRAWER.PICTURE, payload: result.Picture })
                dispatch({ type: Constant.DRAWER.USERNAME, payload: result.Name })


            })
        },
        deletAll: (userId, navigate) => {
            repo.deleteAll(userId).then(result => {
                navigate()
            })
        },
        deleteSession: (navigate) => {
            repo.deleteSession().then(result => {
                if (result)
                    navigate()

            })
        },
        clearCache: (navigate) => {
            repo.deleteSession(userId).then(result => {
                if (result)
                    repo.deleteAllTodays(userId).then(result => {
                        if (result)
                            navigate()

                    })

            })
        },

    }
}
