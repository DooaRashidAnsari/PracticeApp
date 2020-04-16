import {StyleSheet} from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'
import stylegeneral from '../screens/generalstyle'

const style = StyleSheet.create({
    container:{
      ...stylegeneral.container
    },
    textInput:{
      fontSize:Sizes.Font.medium,
      color:Colors.textColorSecondary,
      borderColor:Colors.primaryColor,
      borderWidth:1,
      marginBottom:Sizes.Margin.medium,
      width:'100%'

    },
      inputPassword:{
          marginTop:Sizes.Margin.medium,
      },
      buttonSave:{
        marginTop:Sizes.Margin.medium
    },
    pickerStyle:{
      marginTop:Sizes.Margin.medium
    },
    textHeading: {
      fontSize: 40,
      fontWeight:'bold',
      color: Colors.headerColor
      , marginTop: Sizes.Margin.large,
      marginBottom: Sizes.Margin.large
  
    },
  
    
      
      
  }
)

export default style