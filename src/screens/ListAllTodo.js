import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles/ListAllTodoSt'
import strings from '../resources/Strings'
import Colors from '../resources/Colors'
import Sizes from '../resources/Sizes.js';
import Header from '../components/Header.js';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../actions/ListAllTodoActions'



class ListAllTodo extends React.Component {
    getItem() {
        return ({ item }) =>
            <View style={item.isDone ? styles.itemStyleDone : styles.itemStyle} onPress={this.getListViewItem.bind(this, item)}>
                <View style={styles.innerList}>
                    <Text style={styles.itemTextStyle}
                    >{item.work}</Text>
                    <Text style={[styles.itemTextStyleDesc,{marginLeft:'5%'}]}
                    >{strings.date}{item.date}</Text>

                </View>
                <View>
                    <Text style={[styles.itemTextStyleDesc,{marginLeft:'5%'}]}>
                        {strings.description}
                    </Text>
                    <Text style={[styles.itemTextStyleDescFull,{marginLeft:'5%'}]}>
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
                        style={styles.listStyle}
                        data={this.props.data}
                        renderItem={this.getItem()}
                    />

                </View>
            </View>

        )
    }

    getListViewItem = (item) => {
    }

    componentDidMount() {
        this.listTodo()
    }


    listTodo() {
        this.props.listAllTodos(this.props.userId)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListAllTodo)
