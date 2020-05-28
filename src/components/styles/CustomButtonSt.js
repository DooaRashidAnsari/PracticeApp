import EStyleSheet from 'react-native-extended-stylesheet';
import Sizes from '../../resources/Sizes'
import Colors from '../../resources/Colors'

const style = EStyleSheet.create({
    opacityView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.buttonColor,
        width: '100%',
        
    },
    textInput: {
        paddingTop: '3%',
        paddingBottom: '3%',
        fontSize: Sizes.Font.fontFields,
        color: Colors.fieldColor,
        justifyContent: 'center',
        textTransform: 'uppercase',
        fontWeight:'bold'
    }


}
)

export default style