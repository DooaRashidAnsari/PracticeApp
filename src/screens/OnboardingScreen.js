import * as React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './OnboardingSt'
import strings from '../resources/Strings'
import Colors from '../resources/Colors'
import Session from '../Session'
const session = new Session()
import Onboarding from 'react-native-onboarding-swiper';
import { StackActions } from '@react-navigation/native';
import Names from '../screens/names'




export default class OnboardingScreen extends React.Component {
    componentDidMount() {
        session.setOnBoardingShown().then(() => { 
            session.getUserId().then(result => {
                console.log('getting userid')
                console.log(result + '')
                this.setState({ userId: result + '' })
              })
        })
    }

    moveNext() {
        if (this.state.userId == 'none') {
            console.log('user id')
            this.props.navigation.dispatch(StackActions.replace(Names.login));
        }
        else
            this.props.navigation.dispatch(StackActions.replace(Names.drawer));

    }
    render() {
        return (
            <Onboarding
                onSkip={this.moveNext.bind(this)}
                onDone={this.moveNext.bind(this)}
                pages={[
                    {
                        backgroundColor: Colors.onBoardColor1,
                        image: <Image style={styles.imageStyle} source={require('../resources/person.jpg')} />,
                        title: strings.onboarding,
                        subtitle: strings.welcome,
                    },
                    {
                        backgroundColor: Colors.onBoardColor2,
                        image: <Image style={styles.imageStyleFull} source={require('../resources/main.jpg')} />,
                        title: 'List Screen',
                        
                    },
                    {
                        backgroundColor: Colors.onBoardColor3,
                        image: <Image style={styles.imageStyleHalf} source={require('../resources/menu.jpg')} />,
                        title: 'Menu',
                        subtitle: "This is main menu screen use it edit your preferences",
                    },{
                        backgroundColor: Colors.onBoardColor4,
                        image: <Image style={styles.imageStyle} source={require('../resources/all.jpg')} />,
                        title: 'Start Using',
                        subtitle: "Isn't it Beautiful App! Proceed to start using",
                    }
                ]}
            />
        )
    }



}
