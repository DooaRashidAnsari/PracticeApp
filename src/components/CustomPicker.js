import React, { Component, useState } from 'react';
import {
    View,
    Picker,
    TouchableOpacity, Text
} from 'react-native';
import styles from './CustomPickerSt.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import strings from '../resources/Strings'
import Colors from '../resources/Colors'
import PropTypes, { array } from 'prop-types';
import PickerDialog from './PickerDialog.js';
import Sizes from '../resources/Sizes.js';



export default class CustomPicker extends Component {

    constructor(props) {
        super(props)
        this.state = { isVisible: false ,text:'Pakistan'}
    }

    static propsType = {
        placeHolderText: PropTypes.string,
        icon: PropTypes.string,
        keyboardType: PropTypes.string,
        onChangeText: PropTypes.func,
        style: PropTypes.style
    }



    render() {
        return (
            <View style={[styles.mainView, this.props.style]}>
                <FontAwesomeIcon icon={this.props.icon} style={styles.iconStyle} />
                <TouchableOpacity
                    style={styles.touchableStyle}
                    activeOpacity={Sizes.activeOpacity}
                    onPress={() => {this.setState({ isVisible: true })}}
                >
                    <Text style={styles.textInput}>{this.state.text}</Text>
                </TouchableOpacity>
                <PickerDialog
                    data = {['Pakistan','India','Usa','Canada','Russia']}
                    dividerColor = {Colors.white}
                    styleText = {styles.pickerTextStyle}
                    styleItem = {styles.pickerItemStyle}
                    pickerVisibility={this.state.isVisible}
                    closeDialog={(value) => {this.setState({ isVisible: false,text:value }
                        
                        )}}
                ></PickerDialog>

            </View>

        );
    }

    showDialog(status) {
        () => {this.setState({ isVisible: status })}
    }


}