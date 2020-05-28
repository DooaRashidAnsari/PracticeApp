import EStyleSheet from 'react-native-extended-stylesheet';
import Sizes from '../../resources/Sizes'
import Colors from '../../resources/Colors'

const style = EStyleSheet.create({
    mainView: {
        flexDirection: 'row',
        backgroundColor: Colors.headerColor,
        width: '100%',
        height: '7%',
        justifyContent:'center',
        alignItems:'center',
        

    },
    textInput: {
        flex:0.9,
        fontSize: Sizes.Font.fontFields,
        color: Colors.white,
        fontWeight:'bold',
        
    },
    menuStyle: {
        flex:0.1,
       }
}
)

export default style