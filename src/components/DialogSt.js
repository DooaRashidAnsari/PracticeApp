import { StyleSheet } from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'


const style = StyleSheet.create({
    dialogWindowText: {
        fontSize: Sizes.Font.medium, color: Colors.placeholdeColor,padding:Sizes.Margin.xsmall
    },
    buttonStyle: {
        width: '50%', marginTop: Sizes.Margin.medium, justifyContent: 'center', alignSelf: 'center',
        backgroundColor: Colors.headerColor,

    },
    buttonText: {
        fontSize: Sizes.Font.medium, color: Colors.placeholdeColor,textAlign:'center',padding:Sizes.Margin.xsmall
    },
    mainView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Sizes.Margin.medium

    },
    textInput: {
        flex: 0.9,
        fontSize: Sizes.Font.medium,
        color: Colors.white,
        fontWeight: 'bold'
    },
    iconStyle: {
        flex: 0.1,
        color: Colors.white,

    }
}
)

export default style