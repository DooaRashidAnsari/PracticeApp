import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from './HeaderSt.js'
import strings from '../resources/Strings'
import Colors from '../resources/Colors'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import CustomMenu from './CustomMenu.js';



export default class Header extends Component {
    static propsType = {
        text: PropTypes.string,
        menuVisible: PropTypes.bool,
        navigation: PropTypes.navigation,
        clearList: PropTypes.func

    }

    render() {
        return (
            <View style={styles.mainView}>
                <Text style={styles.textInput}>{this.props.text}</Text>
                <View style={styles.menuStyle}>
                    {this.props.menuVisible && <CustomMenu clearList={this.props.clearList} navigation={this.props.navigation}>

                   </CustomMenu>
                    }

                </View>

            </View>
        );
    }

}