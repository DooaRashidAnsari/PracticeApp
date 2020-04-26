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
import {mapStateToProps,mapDispatchToProps} from '../actions/LoginAction'
import Validations from '../helpers/Validations'
import ValidationCN from '../constants/ValidationCN'

const db = new Database();


class Login extends Component {
    loginUser() {
        object =  this.validate()
        if (object.usernameMsg == null && object.passwordMsg == null) {
            db.searchUser(this.props.username, this.props.password, (isFound, userId) => {

                if (isFound) {
                    this.props.navigation.dispatch(StackActions.replace(Names.todo));
                }
                else Alert.alert(strings.userNotExist);

            })

        }

    }

    validate(){
        msgUserName = this.internalValidation(this.props.username,this.props.setUserNameMsg.bind(this),this.props.setValidationUserName.bind(this))
        msgPassword = this.internalValidation(this.props.password,this.props.setPasswordMsg.bind(this),this.props.setValidationPassword.bind(this))
        return {usernameMsg:msgUserName,passwordMsg:msgPassword}
    }

    internalValidation(fieldName,funcMsg,funcIs){
        var isFalse = Validations.validate([ValidationCN.EMPTY],fieldName)
        funcMsg(isFalse)
        funcIs(isFalse?false:true)
        return isFalse
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


export default connect(mapStateToProps,mapDispatchToProps)(Login)


