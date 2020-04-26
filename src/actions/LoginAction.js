import Constant from '../constants/ReducersCN'


export function mapStateToProps(state) {
    return { isUserNameValid: state.isUserNameValid, isPasswordValid: state.isPasswordValid, username: state.username
        , password: state.password,msg_username:state.msg_username,msg_password:state.msg_password }
}


export function mapDispatchToProps(dispatch) {
    return {
        setValidationUserName: (value) => dispatch({ type: Constant.RD_LOGIN.VALID_USERNAME,payload:value }),
        setValidationPassword: (value) => dispatch({ type: Constant.RD_LOGIN.VALID_PASSWORD,payload:value }),
        setUserName: (value) => dispatch({ type: Constant.RD_LOGIN.USERNAME, payload: value }),
        setPassword: (value) => dispatch({ type: Constant.RD_LOGIN.PASSWORD,payload:value }),
        setUserNameMsg: (value) => dispatch({ type: Constant.RD_LOGIN.MSG_USERNAME, payload: value }),
        setPasswordMsg: (value) => dispatch({ type:Constant.RD_LOGIN.MSG_PASSWORD,payload:value }),


    }
}
