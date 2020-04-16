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
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';

export default class CustomDatePicker extends Component {

    constructor(props) {
        super(props)
        this.state = { isVisible: false, text: Moment().format('LL') }
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
                    onPress={() => { this.setState({ isVisible: true }) }}
                >
                    <Text style={styles.textInput}>{Moment(this.state.text).format('LL')} </Text>
                </TouchableOpacity>
                {this.state.isVisible&&<DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={new Date(1598051730000)}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={(event,selectedDate)=>{
                        console.log('date')
                        console.log(selectedDate)
                        this.setState({isVisible:false,text:selectedDate})}}
                />}
            </View>

        );
    }

    showDialog(status) {
        () => { this.setState({ isVisible: status }) }
    }


}