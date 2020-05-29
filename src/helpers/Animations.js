import { Animated} from "react-native";

export default class Animations {
    constructor() {

    }

    getMultipleAnimations(inputs) {
        var dataArrAnimations = []
        var dataArrTransforms = []
        
        for (var params of inputs) {
             var animationTranformation = this.getAnimations(params.easing,params.duration, params.delay, params.inputRange, params.outputRange)
             dataArrAnimations.push(animationTranformation.animation)
             dataArrTransforms.push(animationTranformation.transform)
        }
        return {animations:dataArrAnimations,transforms:dataArrTransforms}
    }

    getAnimations(easing,duration, delay, inputRange, outputRange) {
        var animatedValue = new Animated.Value(0)
        animatedValue.setValue(0)
        var animation =  this.createAnimation(animatedValue, duration, easing, delay)
        var transform =  animatedValue.interpolate({
            inputRange: inputRange,
            outputRange: outputRange
        })
        return {
            animation:animation , transform: transform 
        }
    }

    createAnimation = function (value, duration, easing, delay = 0) {
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

    startParallelAnimations(afterAnimation, animations) {
        Animated.parallel(animations).start(() => {
            setTimeout(() => {
                afterAnimation()
            }, 4000)
        })
    }

     
}