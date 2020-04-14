import React, { Component } from 'react';
import {
    View,
    TextInput
} from 'react-native';
import styles from './inputFieldSt.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import strings from '../resources/Strings'
import Colors from '../resources/Colors'
import PropTypes from 'prop-types';

export default class InputField extends Component {
   constructor(props){
       super(props)
       this.state = {inputvalue:''}
   }

   static propsType = {
     placeHolderText:PropTypes.string,
     icon:PropTypes.string,
     keyboardType:PropTypes.string,
     onChangeText:PropTypes.func,
     style:PropTypes.style
   }

    render() {
        return (
            <View style={[styles.mainView,this.props.style]}>
                <FontAwesomeIcon icon={this.props.icon} style={styles.iconStyle} />

                <TextInput keyboardType= {this.props.keyboardType}
                    secureTextEntry = {this.props.keyboardType == 'password'}
                    placeholderTextColor={Colors.placeholdeColor}
                    placeholder={this.props.placeHolderText}
                    style={styles.textInput}
                    onChangeText={this.props.onChangeText}

                ></TextInput>


            </View>

        );
    }

    
}