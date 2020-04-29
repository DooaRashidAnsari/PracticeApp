import { StyleSheet } from 'react-native'
import Sizes from '../../resources/Sizes'
import Colors from '../../resources/Colors'

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
    color: Colors.white,
    justifyContent:'center',
    marginTop:Sizes.Margin.medium,
    textDecorationLine: 'underline'

  },logoStyle:{
    height:150
  }

}
)

export default style