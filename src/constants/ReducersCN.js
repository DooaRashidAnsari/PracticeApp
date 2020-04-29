const Constants = {
    GLOBAL_ACTIONS: {
        USER_ID: 'USER_ID',
    },
    RD_SPLASH: {
        IS_ONBOARDING: 'IS_ONBOARDING'
    },
    RD_LOGIN: {
        VALID_USERNAME: 'VALID_USERNAME',
        VALID_PASSWORD: 'VALID_PASSWORD',
        USERNAME: 'USERNAME',
        PASSWORD: 'PASSWORD',
        MSG_USERNAME: 'MSG_USERNAME',
        MSG_PASSWORD: 'MSG_PASSWORD'
    },
    RD_TODO: {
        WORK: 'WORK',
        DESC: 'DESC',
        DATA: 'DATA',
        IS_WORK: 'IS_WORK',
        IS_DESC: 'IS_DESC',
        IS_UPDATE: 'IS_UPDATE',
        UPDATE_ID: 'UPDATE_ID',
        BUTTON_TEXT: 'BUTTON_TEXT',
        REFRESH: 'REFRESH',
        MSG_TODO: 'MSG_TODO'
    },
    RD_SIGNUP: {
        ...RD_LOGIN,
        IS_VISIBLE: 'IS_VISIBLE',
        IS_EDIT: 'IS_EDIT',
        IS_FEMALE: 'IS_FEMALE',
        IS_MALE: 'IS_MALE',
        BIRTHDAY:'BIRTHDAY',
        COUNTRY:'COUNTRY',
        PICTURE:'PICTURE',
        COUNTRY_DATA:'COUNTRY_DATA',
        TERMS_CHECKED:'TERMS_CHECKED'
    },
    RD_LIST_ALL:{
        DATA:'DATA'
    }
    
}
export default Constants