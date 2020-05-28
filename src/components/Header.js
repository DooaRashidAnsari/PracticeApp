import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from './styles/HeaderSt.js'
import PropTypes from 'prop-types';



export default class Header extends Component {
    static propsType = {
        text: PropTypes.string,
        menuVisible: PropTypes.bool,
        navigation: PropTypes.navigation,
        clearList: PropTypes.func

    }

    render() {
        return (
            <View style={[{ marginBottom: '2%' }, styles.mainView]}>
                <Text style={[{marginLeft:'5%'},styles.textInput]}>{this.props.text}</Text>
                <View style={styles.menuStyle}>


                </View>

            </View>
        );
    }

}