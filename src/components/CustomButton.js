import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from './CustomButtonSt.js'
import strings from '../resources/Strings'
import Colors from '../resources/Colors'
import PropTypes from 'prop-types';


export default class CustomButton extends Component {
    static propsType = {
      text : PropTypes.string,
      style : PropTypes.style,
      onPress : PropTypes.func
    }
    
    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    styles.opacityView,this.props.style
                ]}
                onPress={this.props.onPress}
            >
            <Text style={styles.textInput}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }

}