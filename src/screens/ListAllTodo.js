import * as React from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import styles from './styles/ListAllTodoSt'
import strings from '../resources/Strings'
import Database from '../Database';
import Colors from '../resources/Colors'
import InputField from '../components/InputField.js'
import CustomButton from '../components/CustomButton.js';
import Sizes from '../resources/Sizes.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Header from '../components/Header.js';

import Session from '../Session'
const session = new Session()

const db = new Database();


export default class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []

        }
    }

    getItem() {
        return ({ item }) =>
            <View style={item.isDone?styles.itemStyleDone :styles.itemStyle} onPress={this.getListViewItem.bind(this, item)}>
                <View style={styles.innerList}>
                    <Text style={styles.itemTextStyle}
                    >{item.work}</Text>
                    <Text style={styles.itemTextStyleDesc}
                    >{strings.date}{item.date}</Text>

                </View>
                <View>
                    <Text style={styles.itemTextStyleDesc}>
                        {strings.description}
                    </Text>
                    <Text style={styles.itemTextStyleDescFull}>
                        {item.desc}
                    </Text>
                </View>

                <View style={{
                    backgroundColor: Colors.white,
                    width: '100%',
                    height: Sizes.General.dividerSize
                }}></View>
            </View>

    }


    render() {
        return (

            <View style={styles.topcontainer}>
                <Header menuVisible={false} text={strings.listAllTodo}></Header>

                <View style={styles.container}>
                    <FlatList
                        extraData={this.state.refresh}
                        style={styles.listStyle}
                        data={this.state.data}
                        renderItem={this.getItem()}
                    />

                </View>
            </View>

        )
    }

    getListViewItem = (item) => {
        //    this.props.closeDialog(item)
    }

    componentDidMount() {
        this.listTodo()
    }


    listTodo() {
        session.getUserId().then(result => {
            db.listWorks(result).then(result => {
                this.setState({ data: result })
            })
        })

    }



}
