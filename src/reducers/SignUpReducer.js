import Constants from '../constants/ReducersCN';

const initialState = {
    termsCheck:false,
    countryData:[{ value: 'Pakistan' }, { value: 'India' }, { value: 'Usa' }, { value: 'Canada' }, { value: 'Russia' }],
    picture:'',
    birthday:'',
    country:'',
    userId:'',
    isVisible: false,
    isEdit: false,
    isFemale: true, isMale: false,
    username: '', password: ''
    , isUserNameValid: true, isPasswordValid: true,
     msg_username: '', msg_password: ''
}
const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.RD_SIGNUP.VALID_USERNAME:
            return {
                ...state,
                isUserNameValid: action.payload
            }
        case Constants.RD_SIGNUP.VALID_PASSWORD:
            return { ...state, isPasswordValid: action.payload }
        case Constants.RD_SIGNUP.USERNAME:
            return { ...state, username: action.payload }
        case Constants.RD_SIGNUP.PASSWORD:
            return { ...state, password: action.payload }
        case Constants.RD_SIGNUP.MSG_USERNAME: return { ...state, msg_username: action.payload }
        case Constants.RD_SIGNUP.MSG_PASSWORD: return { ...state, msg_password: action.payload }
        case Constants.RD_SIGNUP.IS_VISIBLE: return { ...state, isVisible: action.payload }
        case Constants.RD_SIGNUP.IS_EDIT: return { ...state, isEdit: action.payload }
        case Constants.RD_SIGNUP.IS_FEMALE: return { ...state, isFemale: action.payload }
        case Constants.RD_SIGNUP.IS_MALE: return { ...state, isMale: action.payload }
        case Constants.RD_SIGNUP.BIRTHDAY: return { ...state, birthday: action.payload }
        
        case Constants.RD_SIGNUP.COUNTRY: return { ...state, country: action.payload }
        case Constants.RD_SIGNUP.PICTURE: return { ...state, picture: action.payload }
        
        case Constants.RD_SIGNUP.COUNTRY_DATA: return { ...state, countryData: action.payload }
        case Constants.RD_SIGNUP.TERMS_CHECKED : return { ...state, termsCheck: action.payload }
        
        default: return state
    }

}

export default SignUpReducer;