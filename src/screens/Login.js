import React from 'react'
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

const db = new Database();


export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isUserNameValid: true, isPasswordValid: true, username: '', password: '' }
    }
    loginUser() {
        const { username, password, isPasswordValid, isUserNameValid } = this.state;
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
        if (proceedPassword && proceedUser) {
            db.searchUser(username, password, (isFound,userId) => {

                if (isFound) {
                    this.props.navigation.dispatch(StackActions.replace(Names.drawer));
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
                style={styles.passwordStyle}
                placeHolderText={strings.password}
                icon='key'
                keyboardType='password'
                onChangeText={(value) => this.setState({ password: value })}

            ></InputField>

            <CustomButton
                style={styles.buttonSave}
                text={strings.login}
                onPress={this.loginUser.bind(this)}
            />



            <Text style={styles.bottomText}
                onPress={() => this.props.navigation.navigate('SignUp',{isEdit:false})}
            >
                {strings.signupMessage}
            </Text>
        </View>
        )
    }


}