import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import styles from './styles/LoginSt'
import strings from '../resources/Strings'
import Names from './names'
import InputField from '../components/InputField.js'
import CustomButton from '../components/CustomButton.js';
import { connect } from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../actions/LoginAction'



class Login extends Component {
    loginUser() {
        this.props.validateFormData(this.props.username,this.props.password,strings.password,strings.userName)
        if (this.props.msg_username == null && this.props.msg_password==null) {
            this.props.loginUser(this.props.username,this.props.password,this.props.navigation)
        }

    }

    render() {

        return (<View style={styles.container}>
            <Text style={[styles.textHeading,{marginTop:'15%',marginBottom:'15%'}]}>
                {strings.login}
            </Text>
            <InputField
                isError={this.props.isUserNameValid}
                errorMessage={this.props.msg_username}
                placeHolderText={strings.userName}
                icon='user'
                keyboardType='text'
                onChangeText={(value) => this.props.setUserName(value)}

            ></InputField>
            <InputField
                isError={this.props.isPasswordValid}
                errorMessage={this.props.msg_password}
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
            <Text style={[styles.bottomText,{marginTop:'2%'}]}
                onPress={() => this.props.navigation.navigate(Names.signUp, { isEdit: false })}
            >
                {strings.signupMessage}
            </Text>
        </View>
        )
    }


}
export default connect(mapStateToProps,mapDispatchToProps)(Login)


