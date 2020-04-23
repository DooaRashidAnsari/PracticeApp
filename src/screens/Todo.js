import * as React from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';
import styles from './TodoSt.js'
import strings from '../resources/Strings'
import Database from '../Database';
import Colors from '../resources/Colors'
import InputField from '../components/InputField.js'
import CustomButton from '../components/CustomButton.js';
import Sizes from '../resources/Sizes.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Header from '../components/Header.js';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Session from '../Session'
import PropTypes, { array } from 'prop-types';

const db = new Database();
const session = new Session()

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isWork: true, isDesc: true, userId: '',
      data: [], work: '', desc: '', isUpdate: false, updateId: 0, buttonText: strings.save
      , refresh: false
    }
  }

  static propsType = {
    drawerRef: PropTypes.object

  }


  getItem() {
    return ({ item }) =>
      <View style={item.isDone ? styles.itemStyleDone : styles.itemStyle}>
        <View style={styles.innerList}>
          <Text style={styles.itemTextStyle}
            onPress={this.getListViewItem.bind(this, item)}>{item.work}</Text>
          <FontAwesomeIcon icon='eye' size={Sizes.General.fontAwsomeLarge} style={styles.iconStyle}
            onPress={() => {
              console.log('called eye')
              item.isDescView = !item.isDescView
              this.setState({ refresh: !this.state.refresh })
            }}

          />

          <FontAwesomeIcon icon='edit' size={Sizes.General.fontAwsomeLarge} style={styles.iconStyle}
            onPress={this.updateItem.bind(this, item)}
          />
          <FontAwesomeIcon icon='trash-alt' size={Sizes.General.fontAwsomeLarge} style={styles.iconStyle}
            onPress={this.deleteItem.bind(this, item)}
          />

        </View>
        {item.isDescView &&
          <View>
            <View style={styles.dividerStyle}></View>
            <Text style={styles.itemTextStyleDesc}>
              {strings.description}
            </Text>
            <Text style={styles.itemTextStyleDescFull}>
              {item.desc}
            </Text>
          </View>
        }
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
        <Header menuVisible={true} text={strings.toDoList} navigation={this.props.navigation} clearList={this.listTodo}></Header>

        <View style={styles.container}>
          <FlatList
            extraData={this.state.refresh}
            style={styles.listStyle}
            data={this.state.data}
            renderItem={this.getItem()}
          />

          <View style={{ flex: 0.5 }}>
            <ScrollView >

              <View style={styles.innerListInput}>
                <InputField
                  isError={this.state.isWork}
                  errorMessage={strings.enterWork}
                  placeHolderText={strings.enterWork}
                  value={this.state.work}
                  style={styles.inputWork}
                  icon='list'
                  keyboardType='text'
                  onChangeText={(value) => this.setState({ work: value })}

                ></InputField>

                <InputField
                  isError={this.state.isDesc}
                  placeHolderText={strings.enterDesc}
                  value={this.state.desc}
                  style={styles.inputDesc}
                  icon='info'
                  keyboardType='text'
                  onChangeText={(value) => this.setState({ desc: value })}
                  multiline={true}
                ></InputField>

              </View>

              {this.state.isUpdate && <View style={{ flex: 0.2, flexDirection: 'row', }}>
                <CustomButton
                  style={styles.buttonUpdate}
                  text={strings.cancel}
                  onPress={this.cancel.bind(this)}
                />
                <CustomButton
                  style={styles.buttonUpdate}
                  text={this.state.buttonText}
                  onPress={this.saveTodo.bind(this)}
                />

              </View>}
              {!this.state.isUpdate && <View style={{ flex: 0.2, flexDirection: 'row', }}>
                <CustomButton
                  style={styles.buttonSave}
                  text={this.state.buttonText}
                  onPress={this.saveTodo.bind(this)}
                />

              </View>}

            </ScrollView>

          </View>

        </View>
      </View>



    )
  }

  getListViewItem = (item) => {
    db.updateWorkDone(item.key).then(result => {
      this.listTodo()
    })

  }

  updateItem = (item) => {
    this.setState({ work: item.work, desc: item.desc, isUpdate: true, buttonText: strings.update, updateId: item.key })
    //db.updateWork(id,work)
  }

  deleteItem = (item) => {
    db.deleteWork(item.key).then(result => {
      this.listTodo()
    })
  }

  listTodo() {
    console.log('List to do method')
    console.log(this.state.userId)
    db.listWorksToday(this.state.userId).then(result => {
      //console.log(result)
      this.setState({ data: result })
      //console.log('Current state')
      //console.log(this.state.data)

    })
  }

  componentDidMount() {
    console.log('Drawer ref')
    console.log(this.props.drawerRef)
    
    session.getUserId().then(result => {
      console.log('getting userid')
      console.log(result + '')
      this.setState({ userId: result + '' })
      this.listTodo()
    })
    this.props.drawerRef.updateComponent()
  }

  saveTodo() {
    if (this.state.work == '') {
      this.setState({ isWork: false })
    } else {
      this.setState({ isWork: true })

      if (this.state.isUpdate) {
        db.updateWork(this.state.updateId, this.state.work, this.state.desc).then(result => {
          this.setState({ isUpdate: false, buttonText: strings.save })
          console.log('inside listing update')
          this.listTodo()
        })
      } else {
        console.log('inserting')
        db.insertWork(this.state.work, this.state.desc, this.state.userId).then(result => {
          console.log('inside listing')
          this.listTodo()


        })
      }

    }

  }

  cancel() {
    this.setState({ work: '', desc: '', isUpdate: false, buttonText: strings.save })


  }


}
