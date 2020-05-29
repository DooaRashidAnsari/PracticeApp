import React, { Component } from 'react';
import { requireNativeComponent, View } from 'react-native';

const ButtonView = requireNativeComponent(
    'ButtonView',
    AndroidButton, {
    nativeOnly: {
        onChange: true
    }
});


export default class AndroidButton extends Component {
    onChange = (event) => {
        if (this.props.onTap) {
            this.props.onTap(event.nativeEvent.message);
        }
    }
    render() {
        return (
            <ButtonView
                {...this.props}
                onChange={this.onChange}
            />
        );
    }
}
