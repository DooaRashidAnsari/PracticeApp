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
        paddingTop: '4%',
        paddingBottom: '4%',
        fontSize: '1.3rem',
        color: Colors.fieldColor,
        justifyContent: 'center',
        textTransform: 'uppercase',
        fontWeight:'bold'
    },
    smallText:{
        fontSize: '1rem',
        color: Colors.fieldBackColor,
        justifyContent: 'center',
        alignSelf:'center',
        
        
    }


}
)

export default style