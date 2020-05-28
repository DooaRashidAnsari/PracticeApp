import EStyleSheet from 'react-native-extended-stylesheet';
import Sizes from '../../resources/Sizes'
import Colors from '../../resources/Colors'

const style = EStyleSheet.create({
  mainView: {
    flexDirection: 'row',
    backgroundColor: Colors.fieldBackColor,
    width: '100%'
  },
  textInput: {
    fontSize: Sizes.Font.fontFields,
    color: Colors.fieldColor,
    paddingTop:'4%',
    paddingBottom:'4%'

  },
  touchableStyle: {
  
    justifyContent: 'center'
  },

  iconStyle: {
    color: Colors.fieldColor,
    alignItems: 'center',

  },
}
)

export default style