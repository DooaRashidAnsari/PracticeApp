import * as React from 'react';
import { Text, View,TextInput,Button,Alert } from 'react-native';
import styles from './styleslogin.js'
import strings from '../resources/Strings'
import Database from '../Database';
import Colors from '../resources/Colors'
const db = new Database();

export default class UpdateTodo extends React.Component {

   constructor(props){
       super(props)
       //this.state = {id:this.props.navigation.getParam('itemId0','')}
   }

    render(){
        return (<View style={styles.container}>
            <Text style={styles.textHeading}>
                {strings.updateTodo}
            </Text>
            <TextInput keyboardType='text'
                style={styles.textInput}
                placeholder={strings.enterNewValue}
                onChangeText={(value) => this.setState({ work: value })}
            >
            </TextInput>
                <Button
                title={strings.save}
                color={Colors.secondaryColor}
                onPress={this.updateTodo.bind(this)}
            />
        </View>
        )
    }

    updateTodo(){
        const {work} = this.state;
        var id = this.props.route.params
        db.updateWork(id,work)  
    }


    
}
