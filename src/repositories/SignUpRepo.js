import BaseRepo from './BaseRepo';


export default class SignUpRepo extends BaseRepo {

    getUserData = (userId) => {
        return this.db.getUser(userId)
    }

    updateUser = (username,country,date,gender,picture,userId) => {
        return this.db.updateUser(username, country
            , date, gender
            , picture, userId
        )
    }

    insertUser = (username,country,date,gender,picture,userId) => {
        return this.db.insertUser(username, country
            , date, gender
            , picture, userId
        )
    }

    saveUser(userId){
        return this.session.saveUserId(userId)
                    
    }


}