import React from 'react';

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

const db = new Database();



class CustomMenu extends React.PureComponent {
    static propsType = {
        navigation:PropTypes.navigation,
        clearList:PropTypes.func
      }
      

   constructor(props){
       super(props)
   }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
    deleteAllTodo() {
        this.hideMenu()
        db.deleteAll().then(result => {
            this.props.navigation.dispatch(StackActions.replace(names.todo));
            //this.props.clearList()           
        })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Menu
                    ref={this.setMenuRef}
                    button={<FontAwesomeIcon onPress={this.showMenu} size={20} icon='bars' style={styles.iconStyle} />}
                >
                    <MenuItem onPress={() => {
                        this.hideMenu()
                        this.props.navigation.navigate(names.allTodo)
                    }}> {strings.listAll}</MenuItem>
                    <MenuItem onPress={
                       this.deleteAllTodo.bind(this)            
                    
                    }>{strings.deleteAll}</MenuItem>
                    <MenuItem onPress={this.hideMenu} disabled>
                        {strings.clearCache}
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={this.hideMenu}>{strings.logout}</MenuItem>
                </Menu>
            </View>
        );
    }
}

export default CustomMenu;