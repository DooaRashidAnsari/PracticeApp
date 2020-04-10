import {StyleSheet} from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'

const style = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column',
      alignItems:'center'
    },
    textInput:{
      fontSize:Sizes.Font.medium,
      color:Colors.textColorSecondary,
      borderColor:Colors.primaryColor,
      borderWidth:1,
      marginBottom:Sizes.Margin.medium,
      width:'90%'

    },
    bottomText:{
      fontSize:Sizes.Font.small,
      color:Colors.primaryColor,
      marginTop:Sizes.Margin.large,
      textDecorationLine: 'underline'
    },
    textHeading: {
        fontSize: Sizes.Font.large,
        color: Colors.textHeadingColor
        ,marginTop:Sizes.Margin.large,
        marginBottom:Sizes.Margin.large
    
      },

      buttonStyle:{
        width:'90%'
      }
      
      
  }
)

export default style