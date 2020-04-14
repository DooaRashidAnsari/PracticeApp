import {StyleSheet} from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'

const style = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      paddingStart:20,
      paddingEnd:20,
      justifyContent:'center',
      backgroundColor:Colors.backgroundScreen
    },
   }
)

export default style