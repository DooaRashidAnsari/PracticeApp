import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from './styles/CustomDrawerSt.js'
import strings from '../resources/Strings'
import names from '../screens/names'
import { Avatar } from 'react-native-elements'
import DeleteConfirm from './DeleteConfirm.js';
import * as RootNavigation from '../RootNavigation';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../actions/ComponentDrawerActions'

class CustomDrawerContent extends Component {

    componentDidMount() {
        this.props.setDrawerRef(this)
        this.updateComponent()

    }

    updateComponent() {
        this.props.getUserData(this.props.userId)
    }
    render() {
        return (
            <View style={styles.mainView}
            >
                <View style={{ justifyContent: 'center', alignSelf: 'center', paddingTop: 20 }}>
                    <Avatar
                        icon={{ name: 'user', type: 'font-awesome' }}
                        size='medium'
                        onPress={this.chooseImage}
                        rounded
                        source={{ uri: this.props.picture }}
                    />

                </View>
                <Text style={{ marginBottom: '5%' }, styles.smallText}>{this.props.username}</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView, { marginTop: '0.1%' }
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.editUser.bind(this)}>{strings.editUser}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView, { marginTop: '0.1%' }
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.listAll.bind(this)}>{strings.listAll}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView, { marginTop: '0.1%' }
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.showDialog.bind(this)}>{strings.deleteAll}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView, { marginTop: '0.1%' }
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.clearCache.bind(this)}>{strings.clearCache}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView, { marginTop: '0.1%' }
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.removeUserId.bind(this)}>{strings.logout}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.opacityView, { marginTop: '0.1%' }
                    ]}
                >
                    <Text style={styles.textInput} onPress={this.syncData.bind(this)}>{strings.syncData}</Text>
                </TouchableOpacity>

                <DeleteConfirm isVisible={this.props.isVisible}
                    leftFunc={() => { this.props.setDialogVisible(false) }}
                    rightFunc={() => {
                        this.props.setDialogVisible(false)
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
        this.props.setDialogVisible(true)

    }
    deleteAllTodo() {
        this.closeNavigation()
        this.props.deletAll(this.props.userId, () => {
            RootNavigation.replace(names.todo)
        })

    }

    removeUserId() {
        this.closeNavigation()
        this.props.deleteSession(() => {
            if (result)
                RootNavigation.replace(names.login)

        })

    }

    editUser() {
        console.log('inside edit user')
        this.closeNavigation()
        RootNavigation.replace(names.signUp, { isEdit: true })
    }


    clearCache() {
        this.closeNavigation()
        this.props.deleteSession(() => { RootNavigation.replace(names.login) })

    }

    listAll() {
        this.closeNavigation()
        RootNavigation.navigate(names.allTodo)
    }


    syncData() {
        this.closeNavigation()
        RootNavigation.navigate(names.syncData)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent)
