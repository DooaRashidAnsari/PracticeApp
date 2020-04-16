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
import CustomDatePicker from '../components/CustomDatePicker.js';
import Moment from 'moment';
import { StackActions } from '@react-navigation/native';
import names from './names'
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements'

const db = new Database();

const saveUserId = async userId => {
    try {
        await AsyncStorage.setItem('userId', userId);
    } catch (error) {
        // Error retrieving data
        console.log(error.message);
    }
};

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFemale: true, isMale: false,
            username: '', password: ''
            , isUserNameValid: true, isPasswordValid: true, isEmailValid: true
        }
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.textHeading}>
                {strings.signUp}
            </Text>

            <InputField
                isError={this.state.isUserNameValid}
                errorMessage={strings.enterUserName}
                placeHolderText={strings.userName}
                icon='user'
                keyboardType='text'
                onChangeText={(value) => this.setState({ username: value })}

            ></InputField>

            <InputField
                isError={this.state.isPasswordValid}
                errorMessage={strings.enterPassword}
                style={styles.inputPassword}
                placeHolderText={strings.password}
                icon='key'
                keyboardType='password'
                onChangeText={(value) => this.setState({ password: value })}

            ></InputField>

            <CustomPicker icon='flag'
                style={styles.pickerStyle}
            ></CustomPicker>
            <CustomDatePicker icon='calendar' style={styles.pickerStyle}></CustomDatePicker>
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    containerStyle={styles.radioButtonStyle}
                    textStyle={styles.checkBoxTextStyle}
                    checkedColor={Colors.headerColor}
                    title='Female'
                    checked={this.state.isFemale}
                    onPress={() => {
                        if (!this.state.isFemale) {
                            this.setState({ isFemale: !this.state.isFemale })
                            this.setState({ isMale: !this.state.isMale })

                        }

                    }}
                />
                <CheckBox
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    containerStyle={styles.radioButtonStyle}
                    textStyle={styles.checkBoxTextStyle}
                    checkedColor={Colors.headerColor}
                    title='Male'
                    checked={this.state.isMale}
                    onPress={() => {
                        if (!this.state.isMale) {
                            this.setState({ isFemale: !this.state.isFemale })
                            this.setState({ isMale: !this.state.isMale })

                        }

                    }}
                />

            </View>

            <CheckBox
                containerStyle={styles.checkboxStyle}
                textStyle={styles.checkBoxTextStyle}
                checkedColor='green'
                title={strings.termsConditions}
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
            />

            <CustomButton
                style={styles.buttonSave}
                text={strings.save}
                onPress={this.saveUser.bind(this)}
            />


        </View>
    }

    saveUser() {
        const { username, password } = this.state;
        let proceedUser = false
        let proceedPassword = false

        if (username == '') {

            console.log('empty username')
            this.setState({ isUserNameValid: false })
        } else {
            proceedUser = true
            this.setState({ isUserNameValid: true })
        }
        if (password == '') {
            console.log('empty password')
            this.setState({ isPasswordValid: false })
        } else {
            proceedPassword = true
            this.setState({ isPasswordValid: true })
        }

        console.log(this.state.isPasswordValid)
        console.log(this.state.isUserNameValid)
        if (this.state.checked && proceedPassword && proceedUser) {
            db.insertUser(username, password).then(result => {
                console.log('saving user id')
                console.log(result)
                saveUserId(result)
                this.props.navigation.dispatch(StackActions.replace(names.todo));

            })

        }


    }
}