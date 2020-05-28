import * as React from 'react';
import { Image } from 'react-native';
import styles from './styles/OnboardingSt'
import strings from '../resources/Strings'
import Colors from '../resources/Colors'
import Onboarding from 'react-native-onboarding-swiper';
import { StackActions } from '@react-navigation/native';
import Names from '../screens/names'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../actions/OnboardingActions'

class OnboardingScreen extends React.Component {
    componentDidMount() {
        this.props.setOnboarding()
    }

    moveNext() {
        if (this.props.userId == 'none') {
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
                        title: strings.listScreen,

                    },
                    {
                        backgroundColor: Colors.onBoardColor3,
                        image: <Image style={styles.imageStyleHalf} source={require('../resources/menu.jpg')} />,
                        title: strings.menu,
                        subtitle: strings.menuDesc,
                    }, {
                        backgroundColor: Colors.onBoardColor4,
                        image: <Image style={styles.imageStyle} source={require('../resources/all.jpg')} />,
                        title: strings.startUsing,
                        subtitle: strings.startUsingDesc,
                    }
                ]}
            />
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen)
