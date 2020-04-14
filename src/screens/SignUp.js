import React from 'react'
import { View, Text, Button, Alert } from "react-native";
import styles from './stylesignup.js'
import { Component, TextInput } from 'react-native'
import strings from '../resources/Strings'
import Colors from "../resources/Colors.js";
import InputField from '../components/InputField.js'
import Database from '../Database';
import CustomButton from '../components/CustomButton.js';
import CustomPicker from '../components/CustomPicker.js';
const db = new Database();


export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: ''}
    }

    render() {
        return <View style={styles.container}>
            <InputField placeHolderText={strings.userName}
                icon='user'
                keyboardType='text'
                onChangeText={(value) => this.setState({ username: value })}

            ></InputField>

            <InputField
                style={styles.inputPassword}
                placeHolderText={strings.password}
                icon='key'
                keyboardType='password'
                onChangeText={(value) => this.setState({ password: value })}

            ></InputField>

            <CustomPicker icon='venus-mars'
                style={styles.pickerStyle}
            ></CustomPicker>


            <CustomButton
                style={styles.buttonSave}
                text={strings.save}
                onPress={this.saveUser.bind(this)}
            />


        </View>
    }

    saveUser() {
        const { username, password } = this.state;
        if (username == '' || password == '') {
            Alert.alert(strings.enterValues);
        } else {
            db.insertUser(username, password)
        }

    }
}