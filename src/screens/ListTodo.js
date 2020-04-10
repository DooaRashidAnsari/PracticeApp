import * as React from 'react';
import { Text, View,FlatList } from 'react-native';
import styles from './styleslogin.js'
import strings from '../resources/Strings'
import Database from '../Database';
const db = new Database();

export default class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {data:[]}
    }
    renderSeparator = () => {  
        return (  
            <View  
                style={{  
                    height: 1,  
                    width: "100%",  
                    backgroundColor: "#000",  
                }}  
            />  
        );  
    };  
  
    getListViewItem = (item) => {  
        Alert.alert(item.work);  
    }  
  
    
    render() {  
        return (  
            <View style={styles.container}>  
                <FlatList  
                    data={this.state.data}  
                    renderItem={({item}) =>  
                        <Text style={styles.item}  
                              onPress={this.getListViewItem.bind(this, item)}>{item.work}</Text>}  
                    ItemSeparatorComponent={this.renderSeparator}  
                />  
            </View>  
        );  
    }
  
    componentDidMount(){
      this.listTodo()
    }

    listTodo(){
        db.listWorks().then(result=>{
            console.log(result)
            this.setState({data:result})
            
        })  
    }


    
}
