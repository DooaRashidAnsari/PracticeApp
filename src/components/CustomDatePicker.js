import React, { Component, useState } from 'react';
import {
    View,
    TouchableOpacity, Text
} from 'react-native';
import styles from './styles/CustomDatePickerSt.js'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import PropTypes from 'prop-types';
import Sizes from '../resources/Sizes.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';

export default class CustomDatePicker extends Component {

    constructor(props) {
        super(props)
        this.state = { isVisible: false, text: this.props.text == null ? Moment().format('LL') : this.props.text }
    }

    static propsType = {
        placeHolderText: PropTypes.string,
        icon: PropTypes.string,
        keyboardType: PropTypes.string,
        onChangeText: PropTypes.func,
        style: PropTypes.style,
        text: PropTypes.string
    }



    render() {
        return (
            <View style={[styles.mainView, this.props.style]}>
                <FontAwesomeIcon icon={this.props.icon} style={[styles.iconStyle, {
                    marginLeft: '5%', marginTop: '5%',
                    marginRight: '4%',marginBottom: '5%',
    

                }]} />
                <TouchableOpacity
                    style={styles.touchableStyle}
                    activeOpacity={Sizes.activeOpacity}
                    onPress={() => { this.setState({ isVisible: true }) }}
                >
                    <Text style={styles.textInput}>{Moment(this.state.text).format('LL')} </Text>
                </TouchableOpacity>
                {this.state.isVisible && <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={new Date(1598051730000)}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={(event, selectedDate) => {
                        console.log('date')
                        console.log(selectedDate)
                        this.setState({ isVisible: false, text: selectedDate })
                    }}
                />}
            </View>

        );
    }

    showDialog(status) {
        () => { this.setState({ isVisible: status }) }
    }

    getSelectedDate() {
        return this.state.text
    }


}