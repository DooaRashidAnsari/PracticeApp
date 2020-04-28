import Constant from '../constants/ReducersCN'
import Validations from '../helpers/Validations'
import ValidationCN from '../constants/ValidationCN'
import Database from '../Database';
import { StackActions } from '@react-navigation/native';
import Names from '../screens/names'

const validations = new Validations()
const db = new Database();


export function mapStateToProps(state) {
    return {
        isUserNameValid: state.LoginReducer.isUserNameValid, isPasswordValid: state.LoginReducer.isPasswordValid
        , username: state.LoginReducer.username
        , password: state.LoginReducer.password, msg_username: state.LoginReducer.msg_username
        , msg_password: state.LoginReducer.msg_password
    }
}


export function mapDispatchToProps(dispatch) {
    return {
        setUserName: (value) => dispatch({ type: Constant.RD_LOGIN.USERNAME, payload: value }),

        setPassword: (value) => dispatch({ type: Constant.RD_LOGIN.PASSWORD, payload: value }),

        validateFormData: (username, password, passwordField, userNameField) => {
            var msgUserName = validations.validate([ValidationCN.EMPTY], username, userNameField)
            var msgPassword = validations.validate([ValidationCN.EMPTY], password, passwordField)
            dispatch({
                type: Constant.RD_LOGIN.VALID_USERNAME,
                payload: msgUserName == null ? true : false
            })
            dispatch({
                type: Constant.RD_LOGIN.VALID_PASSWORD,
                payload: msgPassword == null ? true : false
            })
            dispatch({
                type: Constant.RD_LOGIN.MSG_PASSWORD,
                payload: msgPassword
            })
            dispatch({
                type: Constant.RD_LOGIN.MSG_USERNAME,
                payload: msgUserName
            })

        },
        loginUser: (username,password,navigation) => {
            db.searchUser(username, password, (isFound, userId) => {
                if (isFound) {
                    navigation.dispatch(StackActions.replace(Names.todo));
                }
                else Alert.alert(strings.userNotExist);

            })
        }

    }
}
