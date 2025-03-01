import { StyleSheet } from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'
import stylegeneral from '../screens/generalstyle'

const style = StyleSheet.create({
    imageStyle: {
       width:'80%',
       height:'50%'
    },
    imageStyleFull: {
        width:'90%',
        height:'95%'
     },
     imageStyleHalf: {
        alignSelf:'center', 
        width:'100%',
        height:'60%'
     }


}
)

export default style