import { Overlay } from 'react-native-elements';
import React, { Component } from 'react';
import {
    Text,TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import  Colors  from '../resources/Colors';

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
                <Text style = {{fontSize:20,color:Colors.placeholdeColor}}>{this.props.message}</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{width:'50%',height:30,marginTop:20,justifyContent:'center',alignSelf:'center'}}
                    onPress={this.props.closeDialog}
                >
                    <Text style={{fontSize:20,color:Colors.placeholdeColor}}>{this.props.buttonText}</Text>
                </TouchableOpacity>
            </Overlay>
        );
    }
};



