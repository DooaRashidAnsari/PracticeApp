import React from 'react'
import { Image, View, Text, Animated, Easing } from "react-native";
import styles from './styles/SplashSt.js'
import strings from '../resources/Strings'
import Names from './names'
import { StackActions } from '@react-navigation/native';
import { connect } from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../actions/SplashActions'


class SplashScreen extends React.Component {
  constructor() {
    super()
    this.spinValue = new Animated.Value(0)
    this.animatedValue1 = new Animated.Value(0)
    this.animatedValue2 = new Animated.Value(0)
    this.animatedValue3 = new Animated.Value(0)
  }

  render() {
    const scaleText = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 2]
    })
    const scaleText2 = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1.5]
    })
    const introButton = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 100]
    })
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={styles.container}>
        <Image
          source={require('../resources/gradient.jpg')}
          style={styles.logoStyle}

        />

        <Animated.View style={{ transform: [{ scale: scaleText }] }}>
          <Text style={styles.textHeading}>
            {strings.heading}
          </Text>

        </Animated.View>

        <Animated.View style={{ top: introButton, position: 'absolute', transform: [{ scale: scaleText2 }] }}>
          <Text style={styles.textBottom}>
            {strings.headingBottom}
          </Text>
        </Animated.View>

        <Animated.Image
          style={{
            width: 227,
            height: 200,
            marginTop: 150,
            transform: [{ rotate: spin }]
          }}
          source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
        />

      </View>
    )
  }


  componentDidMount() {
    this.animate(this.props)
    this.props.setInitialStates()
  }

  animate(props) {
    this.animatedValue1.setValue(0)
    this.animatedValue2.setValue(0)
    this.animatedValue3.setValue(0)
    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(
        value,
        {
          toValue: 1,
          duration,
          useNativeDriver: false,
          easing,
          delay
        }
      )
    }
    Animated.parallel([
      createAnimation(this.animatedValue1, 2000, Easing.ease),
      createAnimation(this.animatedValue2, 1000, Easing.ease, 2000),
      createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)
    ]).start(() => {
      setTimeout(() => {
        if (!this.props.isOnboarding) {
          this.props.navigation.dispatch(StackActions.replace(Names.onBoarding));
        } else if (this.props.userId == 'none') {
          this.props.navigation.dispatch(StackActions.replace(Names.login));

        }
        else {
          this.props.navigation.dispatch(StackActions.replace(Names.todo));

        }
   
      }, 4000)
    })
    this.spin()
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SplashScreen)
