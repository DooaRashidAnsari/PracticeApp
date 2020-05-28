import EStyleSheet from 'react-native-extended-stylesheet';
import Sizes from '../../resources/Sizes'
import Colors from '../../resources/Colors'


const style = EStyleSheet.create({
    dialogWindowText: {
        fontSize: Sizes.Font.fontFields, color: Colors.placeholdeColor,padding:'2%'
    },
    buttonStyle: {
        width: '50%', justifyContent: 'center', alignSelf: 'center',
        backgroundColor: Colors.headerColor,

    },
    buttonText: {
        fontSize: Sizes.Font.fontFields, color: Colors.placeholdeColor,textAlign:'center',padding:'2%'
    },
    mainView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textInput: {
        flex: 0.9,
        fontSize: Sizes.Font.fontFields,
        color: Colors.white,
        fontWeight: 'bold'
    },
    
}
)

export default style