import AsyncStorage from '@react-native-community/async-storage';

export default class Session{
     getUserId = async () => {
        let userId = '';
        try {
          userId = await AsyncStorage.getItem('userId') || 'none';
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
        return userId;
      }

      deleteSession = async () => {
        try {
            await AsyncStorage.removeItem('userId');
            return true;
        }
        catch(exception) {
            return false;
        }
    }

     saveUserId = async userId => {
        try {
          await AsyncStorage.setItem('userId', userId+'');
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
      };
      
      setOnBoardingShown = async () => {
        try {
          await AsyncStorage.setItem('onBoardingShown', true+'');
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
      };

      isOnBoardingShown = async () => {
        let shown = false;
        try {
          shown = await AsyncStorage.getItem('onBoardingShown') || false;
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
        return shown;
      }

      

      
}