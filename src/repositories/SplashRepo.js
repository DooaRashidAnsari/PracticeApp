import BaseRepo from './BaseRepo';

export default class SplashRepo extends BaseRepo {
    initiate() {
        this.db.initDB()
    }

    getOnboardingStatus() {
        return this.session.isOnBoardingShown()
    }

    getUserId(){
        return this.session.getUserId()
    }
}