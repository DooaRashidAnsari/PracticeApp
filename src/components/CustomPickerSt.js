import { StyleSheet } from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'

const style = StyleSheet.create({
    mainView:{
        flexDirection:'row',
        backgroundColor:Colors.fieldBackColor,
        width:'100%'        
    },
    textInput:{
      fontSize:Sizes.Font.medium,
      color:Colors.fieldColor,
      justifyContent:'center',
      alignContent:'center',
      alignSelf:'center',
      flexWrap:'wrap'
      
    },
    touchableStyle:{
      justifyContent:'center'
    },
  
    textPicker:{
        fontSize:Sizes.Font.medium,
        color:Colors.fieldColor,
        width:'100%',
        justifyContent:'center',
        alignContent:'center',
        marginStart:10
          
      },
      iconStyle:{
        fontSize:30,
        color:Colors.fieldColor,
        marginBottom:Sizes.Margin.medium,
        marginLeft:15,
        alignItems:'center',
        marginTop:20,
        marginRight:15
               
      },
      pickerItemStyle:{
        backgroundColor:Colors.fieldBackColor,
        width:'100%',
        flex:1,
       },
      pickerTextStyle:{
        fontSize:Sizes.Font.medium,
        color:Colors.fieldColor,
        paddingTop:3,
        paddingBottom:3,
        textAlign:'center'
        
        
      }
      

}
)

export default style