import * as React from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import styles from './DrawerScreenSt.js'
import strings from '../resources/Strings'
import Colors from '../resources/Colors'
import InputField from '../components/InputField.js'
import CustomButton from '../components/CustomButton.js';
import Sizes from '../resources/Sizes.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Header from '../components/Header.js';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Session from '../Session'
import todo from '../screens/Todo'
import names from '../screens/names'
import Database from '../Database';
import { StackActions } from '@react-navigation/native';
const session = new Session()
const db = new Database();
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';


import update from '../screens/UpdateTodo'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from '../components/CustomDrawerContent'
const Drawer = createDrawerNavigator();



export default class DrawerScreen extends React.Component {
    constructor(props) {
        super(props)
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
                <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent navigation={this.props.navigation} />}
                    initialRouteName="Help" >
                    <Drawer.Screen name={'Help'} component={todo} />
                </Drawer.Navigator>

     
        )
    }


}
