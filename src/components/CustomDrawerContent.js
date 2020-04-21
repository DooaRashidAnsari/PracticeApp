import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from './CustomDrawerSt.js'
import strings from '../resources/Strings'
import Colors from '../resources/Colors'
import PropTypes from 'prop-types';
import Session from '../Session'
import names from '../screens/names'
import Database from '../Database';
import { StackActions } from '@react-navigation/native';


const session = new Session()
const db = new Database();
export default class CustomDrawerContent extends Component {
    static propsType = {
        navigation: PropTypes.navigation
    }

    componentDidMount() {
        session.getUserId().then(result => {
            console.log('getting userid')
            console.log(result + '')
            this.setState({ userId: result + '' })
        })

    }


    render() {
        return (
            <View style={styles.mainView}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.editUser.bind(this)}>{strings.editUser}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.listAll.bind(this)}>{strings.listAll}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.deleteAllTodo.bind(this)}>{strings.deleteAll}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.clearCache.bind(this)}>{strings.clearCache}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.removeUserId.bind(this)}>{strings.logout}</Text>
                </TouchableOpacity>


            </View>

        );
    }

    deleteAllTodo() {
        console.log('calling delete all')
        db.deleteAll(this.state.userId).then(result => {
            this.props.navigation.dispatch(StackActions.replace(names.todo));
            //this.props.clearList()           
        })
    }

    removeUserId() {
        session.deleteSession().then(result => {
            if (result)
                this.props.navigation.dispatch(StackActions.replace(names.login));

        })

    }

    editUser() {
        console.log('navigating to signup edit')
        this.props.navigation.dispatch(StackActions.push(names.signUp, { isEdit: true }));
     
    }


    clearCache() {
        session.deleteSession().then(result => {
            db.deleteAllTodays(this.state.userId).then(result => {
                if (result)
                    this.props.navigation.dispatch(StackActions.replace(names.login));

            })


        })
    }

    listAll() {
        this.props.navigation.navigate(names.allTodo)
    }





}