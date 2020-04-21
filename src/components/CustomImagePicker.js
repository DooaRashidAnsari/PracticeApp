import React from 'react'
import strings from '../resources/Strings'
import Colors from "../resources/Colors.js";
import { Avatar } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';
import { View } from 'react-native';


export default class CustomImagePicker extends React.Component {

    static propsType = {
        style: PropTypes.style,
        fileUri:PropTypes.string
    }

    constructor(props){
        super(props)
        this.state = {
            fileUri : this.props.fileUri
        }
    }

    componentDidMount(){
        
        //this.setState({fileUri:this.props.fileUri})
    }
    
    chooseImage = () => {
        let options = {
            title: strings.selectImage,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                this.setState({fileUri: response.uri})  
            }
        });
    }
    render() {
        console.log('File Uri')
        console.log(this.state.fileUri)
        return (
            <View style={this.props.style == null ? {} : this.props.style}
            >
                <Avatar
                    icon={{ name: 'user', type: 'font-awesome' }}
                    size='large'
                    onPress={this.chooseImage}
                    rounded
                    source={{ uri: this.state.fileUri }}
                />

            </View>
        )
    }

    getFileUri(){
        return this.state.fileUri
    }

    setFileUri(fileUriU){
        this.setState({fileUri:fileUriU})
    }



}