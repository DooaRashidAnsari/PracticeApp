import React from 'react'
import { View, Text } from "react-native";
import styles from './styles/SignUpSt.js'
import strings from '../resources/Strings'
import Colors from "../resources/Colors.js";
import InputField from '../components/InputField.js'
import Database from '../Database';
import CustomButton from '../components/CustomButton.js';
import CustomDatePicker from '../components/CustomDatePicker.js';
import { StackActions } from '@react-navigation/native';
import names from './names'
import { CheckBox, Avatar } from 'react-native-elements'
import CustomDropdown from '../components/CustomDropdown'
import CustomImagePicker from '../components/CustomImagePicker.js';
import Moment from 'moment';
import MessageBox from '../components/MessageBox'
import { CommonActions } from '@react-navigation/native';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../actions/SignUpActions'

class SignUpScreen extends React.Component {

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

    componentDidMount() {
        this.props.setIsEdit(this.props.route.params.isEdit)
        if (this.props.route.params.isEdit) {
            this.props.getUserData(this.props.userId)
            this._picker.setFileUri(result.Picture)

        }
    }

    render() {
        return <View style={styles.container}>
            {!this.props.isEdit && <Text style={styles.textHeading}>
                {strings.signUp}
            </Text>}
            <CustomImagePicker fileUri={this.props.picture} ref={this.setRef}
            ></CustomImagePicker>
            <InputField
                value={this.props.username}
                style={styles.inputPassword}
                isError={this.props.isUserNameValid}
                errorMessage={this.props.msg_username}
                placeHolderText={strings.userName}
                icon='user'
                keyboardType='text'
                onChangeText={(value) => this.props.setUserName(value)}

            ></InputField>

            {!this.props.isEdit && <InputField
                isError={this.props.isPasswordValid}
                errorMessage={this.props.msg_password}
                style={styles.inputPassword}
                placeHolderText={strings.password}
                icon='key'
                keyboardType='password'
                onChangeText={(value) => this.props.setPassword(value)}

            ></InputField>}
            <CustomDropdown data={this.props.countryData}
                text={this.props.isEdit ? this.props.country : strings.selectCountry} ref={this.setCountryRef} style={styles.pickerStyle} icon='flag'></CustomDropdown>

            <CustomDatePicker text={this.props.isEdit ? this.props.birthday : null} ref={this.setDateRef} icon='calendar' style={styles.pickerStyle}></CustomDatePicker>
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    containerStyle={styles.radioButtonStyle}
                    textStyle={styles.checkBoxTextStyle}
                    checkedColor={Colors.headerColor}
                    title={strings.female}
                    checked={this.props.isFemale}
                    onPress={() => {
                        if (!this.props.isFemale) {
                            this.props.setRadioData(!this.props.isFemale, !this.props.isMale)
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
                    checked={this.props.isMale}
                    onPress={() => {
                        if (!this.props.isMale) {
                            this.props.setRadioData(!this.props.isFemale, !this.props.isMale)

                        }

                    }}
                />

            </View>


            {!this.props.isEdit && <CheckBox
                containerStyle={styles.checkboxStyle}
                textStyle={styles.checkBoxTextStyle}
                checkedColor='green'
                title={strings.termsConditions}
                checked={this.props.termsCheck}
                onPress={() => this.props.setTermsCheck(!this.props.termsCheck)}
            />}


            <CustomButton
                style={styles.buttonSave}
                text={this.props.isEdit ? strings.update : strings.save}
                onPress={this.saveUser.bind(this)}
            />
            <MessageBox isVisible={this.props.isVisible} message={strings.userUpated} buttonText={strings.ok}
                closeDialog={() => {
                    this.props.setDialogVisible(false)
                    this.props.navigation.dispatch(StackActions.replace(names.todo));

                }}
            ></MessageBox>
        </View>
    }

    saveUser() {
        this.props.validateFormData(this.props.username, this.props.password, strings.password, strings.userName
            , () => {
                if (this.props.isEdit) {
                    this.props.updateUser(this.props.username, this._country.getSelectedCountry()
                        , Moment(this._date.getSelectedDate()).format('LL'), this.props.isFemale ? strings.female : strings.male
                        , this._picker.getFileUri(), this.props.userId
                    )
                } else {
                    this.props.insertUser(username, password, this._country.getSelectedCountry()
                        , Moment(this._date.getSelectedDate()).format('LL'), this.props.isFemale ? strings.female : strings.male
                        , this._picker.getFileUri(), this.moveToNextScreen)
                }
            }
        )





    }

    moveToNextScreen() {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: names.todo },

                ],
            })
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
