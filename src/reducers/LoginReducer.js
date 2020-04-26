import Constants from '../Constants';

const initialState = {
    isUserNameValid: true, isPasswordValid: true, username: ''
    , password: '',msg_username:'',msg_password:''
}
const reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case Constants.RD_LOGIN.VALID_USERNAME:
            return {
                ...state,
                isUserNameValid: action.payload
            }
        case Constants.RD_LOGIN.VALID_PASSWORD:
            return { ...state, isPasswordValid: action.payload }
        case Constants.RD_LOGIN.USERNAME:
            return { ...state, username: action.payload }
        case Constants.RD_LOGIN.PASSWORD:
            return { ...state, password: action.payload }
        case Constants.RD_LOGIN.MSG_USERNAME: return { ...state, msg_username: action.payload }
        case Constants.RD_LOGIN.MSG_PASSWORD: return { ...state, msg_password: action.payload }

        default: return state
    }

}

export default reducerLogin;