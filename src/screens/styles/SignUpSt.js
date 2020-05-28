import EStyleSheet from 'react-native-extended-stylesheet';
import Sizes from '../../resources/Sizes'
import Colors from '../../resources/Colors'
import stylegeneral from '../styles/GeneralSt'

const style = EStyleSheet.create({
  container: {
    ...stylegeneral.container
  },
  inputPassword: {
    marginTop: '4%',
  },
  buttonSave: {
    marginTop: '5%'
  },
  pickerStyle: {
    marginTop: '4%'
  },
  textHeading: {
    fontSize: Sizes.Font.headingFont,
    fontWeight: 'bold',
    color: Colors.headerColor
  },
  checkboxStyle: {
    width: '100%',
    backgroundColor: Colors.fieldBackColor,

  },
  checkBoxTextStyle: {
    color: Colors.white
  },
  radioButtonStyle: {
    flex: 0.5,
    backgroundColor: Colors.backgroundScreen,
    borderColor: Colors.backgroundScreen

  },
}
)

export default style