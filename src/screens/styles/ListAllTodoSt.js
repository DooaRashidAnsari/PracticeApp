import EStyleSheet from 'react-native-extended-stylesheet';
import Sizes from '../../resources/Sizes'
import Colors from '../../resources/Colors'
import stylegeneral from '../styles/GeneralSt'

const style = EStyleSheet.create({
    container: {
        ...stylegeneral.container,
        justifyContent: 'flex-start'
    },
    topcontainer:{
          ...stylegeneral.topcontainer
    },
    listStyle: {
        flex: 0.5,
        width: '100%'
    },
    itemStyle: {
        backgroundColor: Colors.fieldBackColor,
        width: '100%',
        flex: 1,
    },
    itemTextStyle: {
        flex: 0.9,
        fontSize: Sizes.Font.fontFields,
        color: Colors.white,
        paddingTop: '1%',
        paddingBottom: '1%',
    },
    itemTextStyleDate: {
        flex: 0.9,
        fontSize: Sizes.Font.smallFont,
        color: Colors.placeholderColor,
        paddingTop: '1%',
        paddingBottom: '1%',
    },
    itemTextStyleDesc: {
        fontSize: Sizes.Font.smallFont,
        color: Colors.buttonColor,
        paddingTop: '1%',
        
    },
    itemTextStyleDescFull: {
        fontSize: Sizes.Font.fontFields,
        color: Colors.placeholdeColor,
        paddingBottom: '1%',
     },
    
    innerList: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
}
)

export default style