import BaseRepo from './BaseRepo';


export default class SignUpRepo extends BaseRepo {

    getUserData = (userId) => {
        return this.db.getUser(userId)
    }

    updateUser = (username,country,date,gender,picture,userId) => {
        db.updateUser(username, country
            , date, gender
            , picture, userId
        )
    }

    insertUser = (username,country,date,gender,picture,userId) => {
        db.insertUser(username, country
            , date, gender
            , picture, userId
        )
    }

    saveUser(userId){
        session.saveUserId(userId)
                    
    }


}