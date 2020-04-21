import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './CustomDropdownSt.js'
import strings from '../resources/Strings'
import Colors from '../resources/Colors'
import PropTypes from 'prop-types';
import { Dropdown } from 'react-native-material-dropdown';
import Sizes from '../resources/Sizes.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


export default class CustomButton extends Component {
  static propsType = {
    text: PropTypes.string,
    style: PropTypes.style,
    onPress: PropTypes.func,
    data: PropTypes.array,
    icon : PropTypes.string
  }

  constructor(props){
    super(props)
    this.state = {country:''}
  }

  render() {
   return (
      <View style={[styles.mainView, this.props.style]}>
        <FontAwesomeIcon icon={this.props.icon} style={styles.iconStyle} />
        <Dropdown
          onChangeText = {(value,index,data)=>{
            console.log(value)
            this.setState({country:value})}}
          inputContainerStyle={{ borderBottomWidth: 0 }}
          dropdownOffset={{ top: 10 }}
          fontSize={20}
          labelFontSize={0}
          baseColor={Colors.placeholdeColor}
          textColor={Colors.placeholdeColor}
          itemColor={Colors.placeholdeColor}
          selectedItemColor={Colors.fieldBackColor}
          containerStyle={{ width: '100%' }}
          pickerStyle={{ backgroundColor: Colors.white }}
          label=''
          data={this.props.data}
          value={this.props.text}
        />
      </View>


    );
  }

  getSelectedCountry(){
    return this.state.country 
  }

}