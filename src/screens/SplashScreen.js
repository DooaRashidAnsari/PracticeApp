import React from 'react'
import { Image, View, Text, Animated, Easing, NativeModules } from "react-native";
import styles from './styles/SplashSt.js'
import strings from '../resources/Strings'
import Names from './names'
import AndroidButton from '../components/AndroidButton'
import { StackActions } from '@react-navigation/native';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../actions/SplashActions'
import Animations from '../helpers/Animations'

const animations = new Animations()
const { AppNativeModule } = NativeModules;
class SplashScreen extends React.Component {
  animationsTransform = []
  transforms = []


  constructor() {
    super()
    this.spinValue = new Animated.Value(0)
  }
  onButtonTap = () => {
    console.log("Android Native Button clicked")
  }

  render() {
    return (
      <View style={styles.container}>
        <AndroidButton buttonText="Press Me!"
          onTap={this.onButtonTap}
          style= {{width:100,height:40}}
        />
      </View>
    );
  }


  /* render() {
     return (
       <View style={styles.container}>
         <Image
           source={require('../resources/gradient.jpg')}
           style={styles.logoStyle}
         />
 
         <Animated.View style={{ transform: [{ scale: this.transforms[0] }] }}>
           <Text style={styles.textHeading}>
             {strings.heading}
           </Text>
 
         </Animated.View>
 
         <Animated.View style={{ top: this.transforms[1], position: 'absolute' }}>
           <Text style={styles.textBottom}>
             {strings.headingBottom}
           </Text>
         </Animated.View>
 
         <Animated.Image
           style={[styles.bottomLogoStyle, {
             transform: [{ rotate: this.transforms[2] }]
           }]}
           source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
         />
 
       </View>
     )*/
//}

componentWillMount() {
  this.animationsTransform = animations.getMultipleAnimations([
    {
      easing: Easing.ease, duration: 2000, delay: 0, inputRange: [0, 1], outputRange: [0.5, 2]
    },
    {
      easing: Easing.ease, duration: 1000, delay: 2000, inputRange: [0, 1], outputRange: [-100, 100]
    },
    {
      easing: Easing.ease, duration: 1000, delay: 2000, inputRange: [0, 1], outputRange: ['0deg', '360deg']
    }
  ])
  this.transforms = this.animationsTransform.transforms

}
componentDidMount() {
  this.animate()
  this.props.setInitialStates()

  //Just a method to test native module functionality, no use in app
  AppNativeModule.greetUser(
    "Dooa Ansari",
    true,
    (result) => {
      console.log(result)
    }
  );

}

animate() {
  animations.startParallelAnimations(this.navigate.bind(this), this.animationsTransform.animations)
}

navigate() {
  if (!this.props.isOnboarding) {
    this.props.navigation.dispatch(StackActions.replace(Names.onBoarding));
  } else if (this.props.userId == 'none') {
    this.props.navigation.dispatch(StackActions.replace(Names.login));
  }
  else {
    this.props.navigation.dispatch(StackActions.replace(Names.todo));

  }
}


}
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
