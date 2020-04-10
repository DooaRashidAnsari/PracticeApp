import * as React from 'react';
import { Text, View,TextInput,Button } from 'react-native';
import styles from './styleslogin.js'
import strings from '../resources/Strings'
import Database from '../Database';
import Colors from '../resources/Colors'
const db = new Database();




export default class AddTodo extends React.Component {
    render(){
        return (<View style={styles.container}>
            <Text style={styles.textHeading}>
                {strings.addToDo}
            </Text>
            <TextInput keyboardType='text'
                style={styles.textInput}
                placeholder={strings.enterWork}
                onChangeText={(value) => this.setState({ work: value })}
            >
            </TextInput>
                <Button
                title={strings.save}
                color={Colors.secondaryColor}
                onPress={this.saveTodo.bind(this)}
            />
        </View>
        )
    }

    saveTodo(){
        const {work} = this.state;
        db.insertWork(work)  
    }


    
}
