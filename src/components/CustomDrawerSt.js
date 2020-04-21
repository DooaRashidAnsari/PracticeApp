import { StyleSheet } from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'

const style = StyleSheet.create({
    opacityView: {
        height:45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.buttonColor,
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        marginTop:1
        
    },
    textInput: {
        fontSize: Sizes.Font.medium,
        color: Colors.fieldColor,
        justifyContent: 'center',
        textTransform: 'uppercase',
        fontWeight:'bold'
    }


}
)

export default style