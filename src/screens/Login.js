import React, { Component } from "react";
import { View, Text, Button, Alert } from "react-native";
import styles from './styleslogin.js'
import { TextInput } from 'react-native'
import strings from '../resources/Strings'
import Colors from "../resources/Colors.js";
import Database from '../Database';
import Names from './names'
import InputField from '../components/InputField.js'
import CustomButton from '../components/CustomButton.js';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';
import { connect } from 'react-redux'

const db = new Database();


class Login extends Component {
    loginUser() {
        let proceedUser = false
        let proceedPassword = false

        if (this.props.username == '') {

            console.log('empty username')
            this.props.setValidationUserName(false)
        } else {
            proceedUser = true
            this.props.setValidationUserName(true)
        }
        if (this.props.password == '') {
            console.log('empty password')
            this.props.setValidationPassword(false)
        } else {
            proceedPassword = true
            this.props.setValidationPassword(true)
           
        }

        if (proceedPassword && proceedUser) {
            db.searchUser(this.props.username, this.props.password, (isFound, userId) => {

                if (isFound) {
                    this.props.navigation.dispatch(StackActions.replace(Names.todo));
                }
                else Alert.alert(strings.userNotExist);

            })

        }

    }


    render() {

        return (<View style={styles.container}>
            <Text style={styles.textHeading}>
                {strings.login}
            </Text>
            <InputField
                isError={this.props.isUserNameValid}
                errorMessage={strings.enterUserName}
                placeHolderText={strings.userName}
                icon='user'
                keyboardType='text'
                onChangeText={(value) => this.props.setUserName(value)}

            ></InputField>

            <InputField
                isError={this.props.isPasswordValid}
                errorMessage={strings.enterPassword}
                style={styles.passwordStyle}
                placeHolderText={strings.password}
                icon='key'
                keyboardType='password'
                onChangeText={(value) => this.props.setPassword(value)}

            ></InputField>

            <CustomButton
                style={styles.buttonSave}
                text={strings.login}
                onPress={this.loginUser.bind(this)}
            />
            <Text style={styles.bottomText}
                onPress={() => this.props.navigation.navigate('SignUp', { isEdit: false })}
            >
                {strings.signupMessage}
            </Text>
        </View>
        )
    }


}

function mapStateToProps(state) {
    return { isUserNameValid: state.isUserNameValid, isPasswordValid: state.isPasswordValid, username: state.username
        , password: state.password }
}


function mapDispatchToProps(dispatch) {
    return {
        setValidationUserName: (value) => dispatch({ type: 'VALID_USERNAME',payload:value }),
        setValidationPassword: (value) => dispatch({ type: 'VALID_PASSWORD',payload:value }),
        setUserName: (value) => dispatch({ type: 'USERNAME', payload: value }),
        setPassword: (value) => dispatch({ type: 'PASSWORD',payload:value }),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)


