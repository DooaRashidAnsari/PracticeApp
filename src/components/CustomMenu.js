import React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import styles from './CustomMenuSt.js'
import strings from '../resources/Strings'
import { string } from 'prop-types';
import names from '../screens/names'
import PropTypes from 'prop-types';
import Database from '../Database';
import { StackActions } from '@react-navigation/native';
import Session from '../Session'
const session = new Session()
const db = new Database();



class CustomMenu extends React.PureComponent {
    static propsType = {
        navigation: PropTypes.navigation,
        clearList: PropTypes.func
    }


    constructor(props) {
        super(props)
    }

    componentDidMount() {
        session.getUserId().then(result => {
            this.setState({ userId: result })
        })
    }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };


    showMenu = () => {
        //this.props.navigation.navigate('Todo',{screen:'DrawerOpen'})
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                
        //this._menu.show();
    };
    deleteAllTodo() {
        this.hideMenu()
        db.deleteAll(this.state.userId).then(result => {
            this.props.navigation.dispatch(StackActions.replace(names.todo));
            //this.props.clearList()           
        })
    }

    removeUserId() {
        this.hideMenu()
        session.deleteSession().then(result => {
            if (result)
                this.props.navigation.dispatch(StackActions.replace(names.login));

        })
    }

    editUser() {
        this.hideMenu()
        this.props.navigation.navigate(names.signUp, { isEdit: true });

    }


    clearCache() {
        this.hideMenu()
        session.deleteSession().then(result => {
            db.deleteAllTodays(this.state.userId).then(result => {
                if (result)
                    this.props.navigation.dispatch(StackActions.replace(names.login));

            })


        })
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Menu
                    ref={this.setMenuRef}
                    button={<FontAwesomeIcon onPress={this.showMenu} size={20} icon='bars' style={styles.iconStyle} />}
                >
                    <MenuItem onPress={this.editUser.bind(this)}> {strings.editUser}</MenuItem>
                    
                    <MenuItem onPress={() => {
                        this.hideMenu()
                        this.props.navigation.navigate(names.allTodo)
                    }}> {strings.listAll}</MenuItem>
                    <MenuItem onPress={
                        this.deleteAllTodo.bind(this)

                    }>{strings.deleteAll}</MenuItem>
                    <MenuItem onPress={this.clearCache.bind(this)}>
                        {strings.clearCache}
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={this.removeUserId.bind(this)}>{strings.logout}</MenuItem>
                </Menu>
            </View>
        );
    }
}

export default CustomMenu;