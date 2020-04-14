import { StyleSheet } from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'

const style = StyleSheet.create({
    pickerView: { flex: 1, flexDirection: 'row', height: '50%', justifyContent: 'center', alignItems: 'center', alignContent: 'center'
    , paddingStart: Sizes.Margin.large, paddingEnd: Sizes.Margin.large
},
    mainView: { flex: 1, paddingStart: Sizes.Margin.large, paddingEnd: Sizes.Margin.large }
    ,
}
)

export default style