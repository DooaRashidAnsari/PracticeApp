import React from 'react'
import { View, Text } from "react-native";
import styles from './stylesignup.js'
import strings from '../resources/Strings'
import Colors from "../resources/Colors.js";
import InputField from '../components/InputField.js'
import Database from '../Database';
import CustomButton from '../components/CustomButton.js';
import CustomPicker from '../components/CustomPicker.js';
import CustomDatePicker from '../components/CustomDatePicker.js';
import { StackActions } from '@react-navigation/native';
import names from './names'
import { CheckBox, Avatar } from 'react-native-elements'
import CustomDropdown from '../components/CustomDropdown'
import CustomImagePicker from '../components/CustomImagePicker.js';
import Moment from 'moment';
import {BackHandler} from 'react-native'


const db = new Database();

import Session from '../Session'
const session = new Session()

const backAction = (props) => {
    props.navigation.goBack(null);
        
    return true;
  };


export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            isFemale: true, isMale: false,
            username: '', password: ''
            , isUserNameValid: true, isPasswordValid: true, isEmailValid: true
        }
    }

    _picker = null
    _country = null
    _date = null
    _eventSubs = null

    setRef = ref => {
        this._picker = ref;
    };

    setCountryRef = ref => {
        this._country = ref
    }

    setDateRef = ref => {
        this._date = ref
    }

    
    
    componentWillMount(){
        
        _eventSubs = BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount(){
        _eventSubs.remove()
        // console.log('unMount');
        //BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
      }

    handleBackButton(){
        console.log('back press called')
        this.props.navigation.pop();
        return true;
    }

    componentDidMount() {
        this.setState({ isEdit: this.props.route.params.isEdit })
        if (this.props.route.params.isEdit) {
            session.getUserId().then(result => {
                this.setState({ userId: result })
                db.getUser(result).then(result => {
                    console.log(result)
                    this.setState({
                        username: result.Name,
                        country: result.Country,
                        isFemale: result.Gender == 'Female' ? true : false,
                        isMale: result.Gender == '' ? true : false,
                        birthday: result.Birthday,
                        fileUri: result.Picture
                    })
                })
            })

        }
    }

    render() {
        //const {isEdit} = this.route.params
        //  console.log(this.props.route)
        // console.log(this.props.navigation)
        return <View style={styles.container}>
            {!this.state.isEdit && <Text style={styles.textHeading}>
                {strings.signUp}
            </Text>}

            <CustomImagePicker fileUri={this.state.fileUri} ref={this.setRef}
            ></CustomImagePicker>
            <InputField
                value = {this.state.username}
                style={styles.inputPassword}
                isError={this.state.isUserNameValid}
                errorMessage={strings.enterUserName}
                placeHolderText={strings.userName}
                icon='user'
                keyboardType='text'
                onChangeText={(value) => this.setState({ username: value })}

            ></InputField>

            <InputField
                isError={this.state.isPasswordValid}
                errorMessage={strings.enterPassword}
                style={styles.inputPassword}
                placeHolderText={strings.password}
                icon='key'
                keyboardType='password'
                onChangeText={(value) => this.setState({ password: value })}

            ></InputField>
            <CustomDropdown data={[{ value: 'Pakistan' }, { value: 'India' }, { value: 'Usa' }, { value: 'Canada' }, { value: 'Russia' }]}
                text={this.state.isEdit ? this.state.country : strings.selectCountry} ref={this.setCountryRef} style={styles.pickerStyle} icon='flag'></CustomDropdown>

            <CustomDatePicker text={this.state.isEdit ? this.state.birthday : null} ref={this.setDateRef} icon='calendar' style={styles.pickerStyle}></CustomDatePicker>
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    containerStyle={styles.radioButtonStyle}
                    textStyle={styles.checkBoxTextStyle}
                    checkedColor={Colors.headerColor}
                    title={strings.female}
                    checked={this.state.isFemale}
                    onPress={() => {
                        if (!this.state.isFemale) {
                            this.setState({ isFemale: !this.state.isFemale })
                            this.setState({ isMale: !this.state.isMale })

                        }

                    }}
                />
                <CheckBox
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    containerStyle={styles.radioButtonStyle}
                    textStyle={styles.checkBoxTextStyle}
                    checkedColor={Colors.headerColor}
                    title={strings.male}
                    checked={this.state.isMale}
                    onPress={() => {
                        if (!this.state.isMale) {
                            this.setState({ isFemale: !this.state.isFemale })
                            this.setState({ isMale: !this.state.isMale })

                        }

                    }}
                />

            </View>


            {!this.state.isEdit && <CheckBox
                containerStyle={styles.checkboxStyle}
                textStyle={styles.checkBoxTextStyle}
                checkedColor='green'
                title={strings.termsConditions}
                checked={this.state.checked}
                onPress={() => this.setState({ checked: !this.state.checked })}
            />}


            <CustomButton
                style={styles.buttonSave}
                text={this.state.isEdit ? strings.update : strings.save}
                onPress={this.saveUser.bind(this)}
            />



        </View>
    }

    saveUser() {
        const { username, password } = this.state;
        let proceedUser = false
        let proceedPassword = false

        if (username == '') {

            //  console.log('empty username')

            this.setState({ isUserNameValid: false })
        } else {
            proceedUser = true
            this.setState({ isUserNameValid: true })
        }
        if (password == '') {
            //console.log('empty password')
            this.setState({ isPasswordValid: false })
        } else {
            proceedPassword = true
            this.setState({ isPasswordValid: true })
        }

        //console.log(this.state.isPasswordValid)
        //console.log(this.state.isUserNameValid)
        if (this.state.isEdit) {
            if (proceedPassword && proceedUser) {
                db.updateUser(username, password, this._country.getSelectedCountry()
                    , Moment(this._date.getSelectedDate()).format('LL'), this.state.isFemale ? strings.female : strings.male
                    , this._picker.getFileUri(), this.state.userId
                ).then(result => {
                    console.log('inside update')
                })

            }

        } else {
            console.log('88888888888888888888888888888888888888888888888888888888888888888888888888888888888')
            if (this.state.checked && proceedPassword && proceedUser) {
                console.log('******************************************************************')

                db.insertUser(username, password, this._country.getSelectedCountry()
                    , Moment(this._date.getSelectedDate()).format('LL'), this.state.isFemale ? strings.female : strings.male
                    , this._picker.getFileUri().uri
                ).then(result => {
                    console.log('saving user id')
                    console.log(result)
                    session.saveUserId(result)
                    this.props.navigation.dispatch(StackActions.replace(names.drawer));

                }).catch((err) => {
                    console.log(err);
                });


            }

        }


    }
}