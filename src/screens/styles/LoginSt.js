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
    marginTop: Sizes.Margin.large,
    textDecorationLine: 'underline'
  },
  textHeading: {
    fontSize: Sizes.Font.heading,
    fontWeight:'bold',
    color: Colors.headerColor
    , marginTop: Sizes.Margin.large,
    marginBottom: Sizes.Margin.large

  },

  buttonStyle: {
    width: '90%'
  }
}
)

export default style