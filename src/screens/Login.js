import React from 'react'
import { View, Text, Button ,Alert} from "react-native";
import styles from './styleslogin.js'
import { TextInput } from 'react-native'
import strings from '../resources/Strings'
import Colors from "../resources/Colors.js";
import Database from '../Database';
import Names from './names'

const db = new Database();



export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {username:"",password:""}
    }
    loginUser() {
        const { username, password } = this.state;
        db.searchUser(username,password,(isFound)=>{
              
              if(isFound)this.props.navigation.navigate(Names.todo)
              else  Alert.alert(strings.userNotExist);
           
            })
            
    }

    render() {
    
    return (<View style={styles.container}>
            <Text style={styles.textHeading}>
                {strings.login}
            </Text>
            <TextInput keyboardType='name'
                style={styles.textInput}
                placeholder={strings.userName}
                onChangeText={(value) => this.setState({ username: value })}

            >

            </TextInput>
            <TextInput keyboardType='password'
                placeholder={strings.password}
                style={styles.textInput}
                onChangeText={(value) => this.setState({ password: value })}

            >

            </TextInput>

            <Button
                style= {styles.buttonStyle}
                title={strings.login}
                color={Colors.secondaryColor}
                onPress={this.loginUser.bind(this)}
                
            />


            <Text style={styles.bottomText}
                onPress={() => this.props.navigation.navigate('SignUp')}
            >
                {strings.signupMessage}
           </Text>
        </View>
        )
    }

    
}