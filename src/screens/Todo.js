import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles from './styles/TodoSt.js'
import strings from '../resources/Strings'
import Colors from '../resources/Colors'
import InputField from '../components/InputField.js'
import CustomButton from '../components/CustomButton.js';
import Sizes from '../resources/Sizes.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Header from '../components/Header.js';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from '../actions/TodoActions'
import Constants from '../constants/ReducersCN'
import { connect } from 'react-redux'

class Todo extends React.Component {

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
              item.isDescView = !item.isDescView
              this.props.setValue(Constants.RD_TODO.REFRESH, !this.props.refresh)
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
            extraData={this.props.refresh}
            style={styles.listStyle}
            data={this.props.data}
            renderItem={this.getItem()}
          />

          <View style={{ flex: 0.5 }}>
            <ScrollView >

              <View style={styles.innerListInput}>
                <InputField
                  isError={this.props.isWork}
                  errorMessage={this.props.msgTodo}
                  placeHolderText={strings.enterWork}
                  value={this.props.work}
                  style={styles.inputWork}
                  icon='list'
                  keyboardType='text'
                  onChangeText={(value) => this.props.setValue(Constants.RD_TODO.WORK, value)}

                ></InputField>

                <InputField
                  isError={this.props.isDesc}
                  placeHolderText={strings.enterDesc}
                  value={this.props.desc}
                  style={styles.inputDesc}
                  icon='info'
                  keyboardType='text'
                  onChangeText={(value) => this.props.setValue(Constants.RD_TODO.DESC, value)}
                  multiline={true}
                ></InputField>

              </View>

              {this.props.isUpdate && <View style={{ flex: 0.2, flexDirection: 'row', }}>
                <CustomButton
                  style={styles.buttonUpdate}
                  text={strings.cancel}
                  onPress={this.cancel.bind(this)}
                />
                <CustomButton
                  style={styles.buttonUpdate}
                  text={this.props.buttonText}
                  onPress={this.saveTodo.bind(this)}
                />

              </View>}
              {!this.props.isUpdate && <View style={{ flex: 0.2, flexDirection: 'row', }}>
                <CustomButton
                  style={styles.buttonSave}
                  text={this.props.buttonText}
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
    this.props.updateWorkDone(this.props.userId, item, () => {
      this.props.setValue(Constants.RD_TODO.DATA, result)
    })
  }

  updateItem = (item) => {
    this.props.setUpdatValues(item.work, item.desc, strings.update, item.key)
  }

  deleteItem = (item) => {
    this.props.deleteItem(this.props.userId, item.key)

  }

  componentDidMount() {
    this.props.listTodos(this.props.userId)
    this.props.drawerRef.updateComponent()
  }

  saveTodo() {
    this.props.validateData(this.props.work, strings.work, () => {
      if (this.props.msgTodo == null) {
        if (this.props.isUpdate) {
          this.props.updateWork(this.props.updateId, this.props.work, this.props.desc,strings.save, this.props.userId)
        } else {
          this.props.insertWork(this.props.work, this.props.desc, this.props.userId)
        }
      }
    })
  }

  cancel() {
    this.props.setCancelValues(strings.save)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

