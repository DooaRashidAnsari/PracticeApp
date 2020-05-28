import EStyleSheet from 'react-native-extended-stylesheet';
import Sizes from '../../resources/Sizes'
import Colors from '../../resources/Colors'

const style = EStyleSheet.create({
  mainView: {
    flexDirection: 'row',
    backgroundColor: Colors.fieldBackColor,
    width: '100%',


  },
  textInput: {
    fontSize: Sizes.Font.fontFields,
    color: Colors.fieldColor,
    paddingTop:'4%',
    paddingBottom:'4%',
    width:'88%'

  },
  iconStyle: {
    color: Colors.fieldColor,
    alignItems: 'center',

  },
  errorText: {
    fontSize: Sizes.Font.smallFont,
    color: Colors.errorRed,
    fontStyle:'italic'
    
  },



}
)

export default style