import { StyleSheet } from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'


const style = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        backgroundColor: Colors.headerColor,
        width: '100%',
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:Sizes.Margin.medium

    },
    textInput: {
        flex:0.9,
        fontSize: Sizes.Font.medium,
        color: Colors.white,
        fontWeight:'bold'
    },
    iconStyle: {
        flex:0.1,
        color: Colors.white,
        
     }
}
)

export default style