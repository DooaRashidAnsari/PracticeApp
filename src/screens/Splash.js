import React from 'react'
import { Image,View, Text, Animated, Easing } from "react-native";
import styles from './styles.js'
import strings from '../resources/Strings'
import Database from '../Database';
import Names from '../screens/names'
import { StackActions } from '@react-navigation/native';
const db = new Database();
import Session from '../Session'
const session = new Session()

export default class Splash extends React.Component {
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
    db.initDB()
    this.animate()
    session.getUserId().then(result => {
      console.log('getting userid')
      console.log(result + '')
      this.setState({ userId: result + '' })
    })

  }

  animate() {
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
        if (this.state.userId == 'none')
          this.props.navigation.dispatch(StackActions.replace(Names.login));
        else
          this.props.navigation.dispatch(StackActions.replace(Names.drawer));

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