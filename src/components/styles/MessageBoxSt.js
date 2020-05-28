import EStyleSheet from 'react-native-extended-stylesheet';
import Sizes from '../../resources/Sizes'
import Colors from '../../resources/Colors'

const style = EStyleSheet.create({
  heading: {fontSize:Sizes.Font.fontFields,color:Colors.placeholdeColor},
  textInput: {width:'50%',justifyContent:'center',alignSelf:'center',fontSize:Sizes.Font.fontFields,color:Colors.placeholdeColor},
  
}
)

export default style