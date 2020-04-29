import BaseRepo from './BaseRepo';

export default class OnboardingRepo extends BaseRepo {
    setOnboardingStatus() {
        this.session.setOnBoardingShown()
    }

}