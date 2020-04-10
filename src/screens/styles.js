import { StyleSheet } from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  textHeading: {
    fontSize: Sizes.Font.large,
    color: Colors.textHeadingColor,
    justifyContent:'center',
    marginTop:Sizes.Margin.large
    

  },
  textBottom: {
    fontSize: Sizes.Font.large,
    color: Colors.textColorSecondary,
    justifyContent:'center',
    marginTop:Sizes.Margin.medium

  }

}
)

export default style