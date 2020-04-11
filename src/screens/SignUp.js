import React from 'react'
import { View,Text,Button ,Alert} from "react-native";
import styles from './styleslogin.js'
import { Component, TextInput } from 'react-native'
import strings from '../resources/Strings'
import Colors from "../resources/Colors.js";
import Database from '../Database';
const db = new Database();


export default class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {username : '', password : ''}
    }
    
    render() {
        return <View style={styles.container}>
            <Text style={styles.textHeading}>
    {strings.signUp}
           </Text>
            <TextInput keyboardType='name'
                style={styles.textInput}
                placeholder={strings.userName}
                onChangeText={(value) => this.setState({ username: value })}
                >

            </TextInput>
            <TextInput keyboardType='text'
                placeholder={strings.password}
                style={styles.textInput}
                onChangeText={(value) => this.setState({ password: value })}
        
            >

            </TextInput>

            <Button
                title={strings.save}
                color={Colors.secondaryColor}
                onPress = {this.saveUser.bind(this)}
            />


        </View>
    }

    saveUser(){
        const { username, password } = this.state;
        if(username==''||password==''){
            Alert.alert(strings.enterValues);
        }else{
            db.insertUser(username,password)
        }
        
    }
}