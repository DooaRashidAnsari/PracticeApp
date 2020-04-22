import * as React from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import styles from './TodoSt.js'
import strings from '../resources/Strings'
import Database from '../Database';
import Colors from '../resources/Colors'
import Sizes from '../resources/Sizes.js';
import Header from '../components/Header.js';

import Session from '../Session'
const session = new Session()

const db = new Database();


export default class SyncedTodos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading:true

        }
    }


    loadData = async () => {
        this.setState({ results: 'Loading, please wait...' });
        const response = await fetch('http://jsonplaceholder.typicode.com/todos', {
            method: 'GET',
        });
        const results = await response.json();
        console.log(results)
        this.setState({ isLoading:false,data: results });
        
    }


    componentDidMount() {
       this.loadData()
    }


    getItem() {
        return ({ item }) =>
            <View style={item.completed ? styles.itemStyleDone : styles.itemStyle} >
                <View style={styles.innerList}>
                    <Text style={styles.itemTextStyle}
                    >{item.title}</Text>
                    
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
                {this.state.isLoading&&<Text>{strings.loadingData}</Text>}
                <View style={styles.container}>
                    <FlatList
                        style={styles.listStyle}
                        data={this.state.data}
                        renderItem={this.getItem()}
                    />

                </View>
            </View>

        )
    }



}
