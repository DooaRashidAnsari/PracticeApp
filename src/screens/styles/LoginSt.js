import EStyleSheet from 'react-native-extended-stylesheet';
import Sizes from '../../resources/Sizes'
import Colors from '../../resources/Colors'
import stylegeneral from '../styles/GeneralSt'


const style = EStyleSheet.create({
  container:{
    ...stylegeneral.container
  },
  
  passwordStyle: {
    marginTop: Sizes.Margin.medium
  },
  buttonSave: {
    marginTop: Sizes.Margin.medium
  },
  bottomText: {
    fontSize: Sizes.Font.dSmall,
    color: Colors.headerColor,
    textDecorationLine: 'underline'
  },
  textHeading: {
    fontSize: Sizes.Font.headingFont,
    fontWeight:'bold',
    color: Colors.headerColor
   },

  buttonStyle: {
    width: '90%'
  }
}
)

export default style