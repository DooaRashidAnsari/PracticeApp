import Constant from '../constants/ReducersCN'
import Validations from '../helpers/Validations'
import ValidationCN from '../constants/ValidationCN'
import { StackActions } from '@react-navigation/native';
import Names from '../screens/names'
import SignUpRepo from '../repositories/SignUpRepo'

const validations = new Validations()
const repo = new SignUpRepo()

export function mapStateToProps(state) {
    return {
        termsCheck: state.signUpReducer.termsCheck,
        countryData: state.signUpReducer.countryData,
        picture: state.signUpReducer.picture,
        birthday: state.signUpReducer.birthday,
        country: state.signUpReducer.country,
        isVisible: state.signUpReducer.isVisible,
        isEdit: state.signUpReducer.isEdit,
        isFemale: state.signUpReducer.isFemale, isMale: state.signUpReducer.isMale,
        isUserNameValid: state.signUpReducer.isUserNameValid, isPasswordValid: state.signUpReducer.isPasswordValid
        , username: state.signUpReducer.username
        , password: state.signUpReducer.password, msg_username: state.signUpReducer.msg_username
        , msg_password: state.signUpReducer.msg_password, userId: state.globalActionsReducer.userId
    }
}
export function mapDispatchToProps(dispatch) {
    return {
        setIsEdit: (value) => dispatch({ type: Constant.RD_SIGNUP.IS_EDIT, payload: value }),
        getUserData: (userId) => {
            repo.getUserData(userId).then(result => {
                console.log(result)
                dispatch({ type: Constant.RD_SIGNUP.USERNAME, payload: result.Name })
                dispatch({ type: Constant.RD_SIGNUP.COUNTRY, payload: result.Country })
                
                dispatch({ type: Constant.RD_SIGNUP.IS_FEMALE, payload: result.Gender == 'Female' ? true : false })
                dispatch({ type: Constant.RD_SIGNUP.IS_MALE, payload: result.Gender == 'Male' ? true : false })
                dispatch({ type: Constant.RD_SIGNUP.BIRTHDAY, payload: result.Birthday })
                
                dispatch({ type: Constant.RD_SIGNUP.PICTURE, payload: result.Picture })

            })
        },
        setEditValues: (value) => {
            dispatch({ type: Constant.RD_SIGNUP.IS_EDIT, payload: value })
        },
        setUserName: (value) => dispatch({ type: Constant.RD_SIGNUP.USERNAME, payload: value }),
        setTermsCheck: (value) => dispatch({ type: Constant.RD_SIGNUP.TERMS_CHECKED, payload: value }),
        setDialogVisible: (value) => dispatch({ type: Constant.RD_SIGNUP.IS_VISIBLE, payload: value }),
        setPassword: (value) => dispatch({ type: Constant.RD_SIGNUP.PASSWORD, payload: value }),
        setRadioData: (valueIsFemale, valueIsMale) => {
            dispatch({ type: Constant.RD_SIGNUP.IS_FEMALE, payload: valueIsFemale })
            dispatch({ type: Constant.RD_SIGNUP.IS_MALE, payload: valueIsMale })
        },

        validateFormData: (username, password, passwordField, userNameField, func) => {
            new Promise((resolve) => {

                var msgUserName = validations.validate([ValidationCN.EMPTY], username, userNameField)
                var msgPassword = validations.validate([ValidationCN.EMPTY], password, passwordField)
                dispatch({
                    type: Constant.RD_SIGNUP.VALID_USERNAME,
                    payload: msgUserName == null ? true : false
                })
                dispatch({
                    type: Constant.RD_SIGNUP.VALID_PASSWORD,
                    payload: msgPassword == null ? true : false
                })
                dispatch({
                    type: Constant.RD_SIGNUP.MSG_PASSWORD,
                    payload: msgPassword
                })
                dispatch({
                    type: Constant.RD_SIGNUP.MSG_USERNAME,
                    payload: msgUserName
                })
                resolve(true)
            }).then(result => {
                if (result)
                    func()
            })


        },
        updateUser: (username, country, date, gender, picture, userId) => {
            repo.updateUser(username, country, date, gender, picture, userId)
                .then(result => {
                    dispatch({ type: Constant.RD_SIGNUP.IS_VISIBLE, payload: true })
                })

        },
        insertUser: (username, country, date, gender, picture, userId,moveToNextScreen) => {
            repo.insertUser(username, country, date, gender, picture, userId)
                .then(result => {
                   repo.saveUser(result)
                   moveToNextScreen()
                })
        }

    }
}
