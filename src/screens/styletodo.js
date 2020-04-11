import {StyleSheet} from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'

const style = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center'
    },
    itemText:{
      fontSize:Sizes.Font.medium,
      color:Colors.textColorSecondary,
      marginTop:Sizes.Margin.large,
      backgroundColor:Colors.white,
      
      
    }
      
      
  }
)

export default style