import { StyleSheet } from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'
import stylegeneral from '../screens/generalstyle'

const style = StyleSheet.create({
    container: {
        ...stylegeneral.container,
        justifyContent: 'flex-start'
    },
    topcontainer:{
          ...stylegeneral.topcontainer
    },
    textInput: {
        fontSize: Sizes.Font.medium,
        color: Colors.textColorSecondary,
        borderColor: Colors.primaryColor,
        borderWidth: 1,
        marginBottom: Sizes.Margin.medium,
        width: '100%'

    },
    inputWork: {
        marginTop: Sizes.Margin.medium
    },

    inputDesc: {
        marginTop: Sizes.Margin.medium
    },
    buttonUpdate: {
        flex: 0.5,
        marginTop: Sizes.Margin.medium,
        marginBottom:Sizes.Margin.large,
        alignSelf:'center'
    },
    buttonSave: {
        marginTop: Sizes.Margin.medium,
        marginBottom:Sizes.Margin.large,
        alignSelf:'center'
    },
    pickerStyle: {
        marginTop: Sizes.Margin.medium
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
    itemStyleDone: {
        backgroundColor: Colors.done,
        width: '100%',
        flex: 1,
    },
    itemTextStyle: {
        flex: 0.9,
        fontSize: Sizes.Font.medium,
        color: Colors.white,
        paddingTop: 3,
        paddingBottom: 3,


    },
    itemTextStyleDesc: {
        fontSize: Sizes.Font.small,
        color: Colors.buttonColor,
        paddingTop: 3,
        marginLeft:12


    },
    itemTextStyleDescFull: {
        fontSize: Sizes.Font.medium,
        color: Colors.placeholdeColor,
        paddingBottom: 3,
        marginLeft:12


    },
    
    iconStyle: {
        flex: 0.1,
        fontSize: 30,
        color: Colors.fieldColor,
        marginBottom: Sizes.Margin.medium,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        flexWrap: 'wrap'

    },
    innerList: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    innerListInput: {
        flex: 0.3,
        width:'100%'
    },
    dividerStyle:{
        backgroundColor: Colors.textColorSecondary,
        width: '100%',
        height: 0.3,
        marginLeft:12,
        marginRight:12
      }





}
)

export default style