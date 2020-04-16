import { StyleSheet } from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:Colors.backgroundScreen
  },
  textHeading: {
    fontSize: Sizes.Font.large,
    color: Colors.buttonColor,
    justifyContent:'center',
    marginTop:Sizes.Margin.large,
    fontWeight:'bold'
    

  },
  textBottom: {
    fontSize: Sizes.Font.small,
    color: Colors.headerColor,
    justifyContent:'center',
    marginTop:Sizes.Margin.medium,
    textDecorationLine: 'underline'

  }

}
)

export default style