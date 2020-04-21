import { StyleSheet } from 'react-native'
import Sizes from '../resources/Sizes'
import Colors from '../resources/Colors'

const style = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    backgroundColor: Colors.fieldBackColor,
    width: '100%',
  },
  textInput: {
    fontSize: Sizes.Font.medium,
    color: Colors.fieldColor,
    width: '88%',
    justifyContent: 'center',
    alignContent: 'center',


  },
  iconStyle: {
    fontSize: 30,
    color: Colors.fieldColor,
    marginBottom: Sizes.Margin.medium,
    marginLeft: 20,
    marginRight: 10,
    alignItems: 'center',
    marginTop: 20

  },
  innerContainer: {
    flexDirection: 'column',
    flex: 1,
  }, errorText: {
    fontSize: Sizes.Font.small,
    color: Colors.errorRed,
    fontStyle: 'italic'

  },



}
)

export default style