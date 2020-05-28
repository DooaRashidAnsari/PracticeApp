import { Overlay } from 'react-native-elements';
import React, { Component } from 'react';
import {
    Text,TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import  Colors  from '../resources/Colors';
import style from './styles/MessageBoxSt'
export default class MessageBox extends Component {

    constructor(props) {
        super(props)
    }
    static propsType = {
        isVisible: PropTypes.bool,
        closeDialog: PropTypes.func,
        message: PropTypes.string,
        buttonText:PropTypes.string

    }

    render() {
        return (
            <Overlay
                isVisible={this.props.isVisible}
                windowBackgroundColor="rgba(255, 255, 255, .5)"
                overlayBackgroundColor={Colors.fieldBackColor}
                width="auto"
                height="auto"
            >
                <Text style = {style.heading}>{this.props.message}</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[style.textInput,{marginTop:'5%'}]}
                    onPress={this.props.closeDialog}
                >
                    <Text style={style.textInput}>{this.props.buttonText}</Text>
                </TouchableOpacity>
            </Overlay>
        );
    }
};



