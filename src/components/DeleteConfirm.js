import { Overlay } from 'react-native-elements';
import React, { Component } from 'react';
import {
    Text, TouchableOpacity, View, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../resources/Colors';
import styles from '../components/DialogSt'
import Sizes from '../resources/Sizes';

export default class DeleteConfirm extends Component {

    constructor(props) {
        super(props)
    }

    static propsType = {
        isVisible: PropTypes.bool,
        leftFunc: PropTypes.func,
        rightFunc:PropTypes.func,
        message: PropTypes.string,
        buttonTextRight: PropTypes.string,
        buttonTextLeft: PropTypes.string
    }

    render() {
        return (
            <Overlay
                isVisible={this.props.isVisible}
                windowBackgroundColor="rgba(255, 255, 255, .5)"
                overlayBackgroundColor={Colors.fieldBackColor}
                width="80%"
                height="auto"
            >
                <Text style={styles.dialogWindowText}>{this.props.message}</Text>
                <View style={styles.mainView}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[styles.buttonStyle,{marginLeft:Sizes.Margin.small}]}
                        onPress={this.props.leftFunc}
                    >
                        <Text style={styles.buttonText}>{this.props.buttonTextLeft}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[styles.buttonStyle,{marginLeft:Sizes.Margin.xsmall,marginRight:Sizes.Margin.small}]}
                        onPress={this.props.rightFunc}
                    >
                        <Text style={styles.buttonText}>{this.props.buttonTextRight}</Text>
                    </TouchableOpacity>
                </View>

            </Overlay>
        );
    }
};



