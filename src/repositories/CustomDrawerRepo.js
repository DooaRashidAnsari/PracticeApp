import BaseRepo from './BaseRepo';


export default class SignUpRepo extends BaseRepo {

    getUserData = (userId) => {
        return this.db.getUser(userId)
    }

    updateUser = (username, country, date, gender, picture, userId) => {
        return this.db.updateUser(username, country
            , date, gender
            , picture, userId
        )
    }

    deleteAllTodays = (userId) => {
        return this.db.deleteAllTodays(userId)
    }

    deleteAll(userId) {
        return this.db.deleteAll(userId)

    }

    deleteSession(){
        return this.session.deleteSession()
    }


}