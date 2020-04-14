import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Modal,
    Alert
} from 'react-native';
import PropTypes from 'prop-types';
import stylesPicker from './PickerDialogSt'
import Sizes from '../resources/Sizes';
import Colors from '../resources/Colors';

export default class PickerDialog extends Component {

    constructor(props) {
        super(props)
        this.state = { isVisible: false }
    }
    static propsType = {
        pickerVisibility: PropTypes.bool,
        closeDialog: PropTypes.func,
        data: PropTypes.array,
        styleItem: PropTypes.style,
        styleText: PropTypes.style,
        dividerColor: PropTypes.string
    }

    getListViewItem = (item) => {
        this.props.closeDialog(item)
    }


    getItem() {
        return ({ item }) =>
            <View style={this.props.styleItem}>
                <Text style={this.props.styleText}
                    onPress={this.getListViewItem.bind(this, item)}>{item}</Text>
                <View style={{
                    backgroundColor: Colors.white,
                    width: '100%',
                    height: Sizes.General.dividerSize
                }}></View>
            </View>

    }
    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={this.props.pickerVisibility}
                onRequestClose={() => {
                    Alert.alert('Modal has now been closed.');
                }}>
                <View style={{ backgroundColor: Colors.opbackgroundScreen ,flex: 1,}}>

                    <View style={stylesPicker.pickerView}>
                        <FlatList
                            data={this.props.data}
                            renderItem={this.getItem()}
                        />

                    </View>
                </View>

            </Modal>




        );
    }
};

