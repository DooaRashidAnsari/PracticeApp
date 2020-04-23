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
import { Avatar } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/native';
import { NavigationActions } from '@react-navigation/native';
import DeleteConfirm from './DeleteConfirm.js';
import * as RootNavigation from '../RootNavigation';

const session = new Session()
const db = new Database();

export default class CustomDrawerContent extends Component {
    constructor(props) {
        super(props)
        this.state = { isVisible: false, fileUri: '', username: 'User Name' }
    }

    static propsType = {
        navigation: PropTypes.navigation
    }

    componentDidMount() {
        //setNavigation()
        this.updateComponent()

    }

    updateComponent() {
        session.getUserId().then(result => {
            console.log('getting userid in custom drawer screen')
            console.log(result + '')
            this.setState({ userId: result + '' })
            db.getUser(result).then(result => {
                console.log(result)
                this.setState({
                    username: result.Name,
                    fileUri: result.Picture
                })


            })
        })
    }
    render() {
        //console.log('render called')
        return (
            <View style={styles.mainView}
            >
                <View style={{ justifyContent: 'center', alignSelf: 'center', paddingTop: 20 }}>
                    <Avatar
                        icon={{ name: 'user', type: 'font-awesome' }}
                        size='medium'
                        onPress={this.chooseImage}
                        rounded
                        source={{ uri: this.state.fileUri }}
                    />

                </View>
                <Text style={styles.smallText}>{this.state.username}</Text>
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
                    <Text style={styles.textInput} onPress={this.showDialog.bind(this)}>{strings.deleteAll}</Text>
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

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.syncData.bind(this)}>{strings.syncData}</Text>
                </TouchableOpacity>

                <DeleteConfirm isVisible={this.state.isVisible}
                    leftFunc={() => { this.setState({ isVisible: false }) }}
                    rightFunc={() => {
                        this.setState({ isVisible: false })
                        this.deleteAllTodo()

                    }}
                    message={strings.deleteSure}
                    buttonTextRight={strings.confirm}
                    buttonTextLeft={strings.cancel}
                >

                </DeleteConfirm>
            </View >

        );
    }

    closeNavigation() {
        RootNavigation.toggleDrawer()

    }

    showDialog() {
        this.closeNavigation()
        this.setState({ isVisible: true })
    }
    deleteAllTodo() {
        this.closeNavigation()
        console.log('calling delete all')
        db.deleteAll(this.state.userId).then(result => {
            RootNavigation.replace(names.todo)
            //this.props.clearList()           
        })
    }

    removeUserId() {
        this.closeNavigation()

        session.deleteSession().then(result => {
            if (result)
                RootNavigation.replace(names.login)

        })

    }

    editUser() {
        this.closeNavigation()
        RootNavigation.replace(names.signUp, { isEdit: true })

        //const navigation = useNavigation();

        //console.log('navigating to signup edit')
        // navigation.dispatch(StackActions.push(names.signUp, { isEdit: true }));

    }


    clearCache() {
        this.closeNavigation()

        session.deleteSession().then(result => {
            db.deleteAllTodays(this.state.userId).then(result => {
                if (result)
                    RootNavigation.replace(names.login)

            })


        })
    }

    listAll() {
        this.closeNavigation()
        RootNavigation.navigate(names.allTodo)

        //this.props.navigation.navigate(names.allTodo)
    }


    syncData() {
        this.closeNavigation()
        RootNavigation.navigate(names.syncData)
    }



}