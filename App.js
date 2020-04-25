import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { createStore } from 'redux'
import CounterApp from './src/CounterApp'
import { Provider } from 'react-redux'
import MainNav from './src/MainNav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

/**
 * Store - holds our state - THERE IS ONLY ONE STATE 
 * Action - State can be modified using actions - SIMPLE OBJECTS 
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state 
 *  - pure functions 
 *  - only mandatory argument is the 'type' 
 * Subscriber - listens for state change to update the ui  
 */
const initialState = {
    isUserNameValid: true, isPasswordValid: true, username: ''
    , password: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VALID_USERNAME':
            return { 
                ...state,
                isUserNameValid: action.payload }
        case 'VALID_PASSWORD':
            return { ...state,isPasswordValid: action.payload }
        case 'USERNAME':
            return { ...state,username: action.payload }
        case 'PASSWORD':
            return { ...state,password: action.payload }
        default: return state
    }
    
}

const store = createStore(reducer)

class App extends Component {
    constructor(props) {
        super(props)
        library.add(fas)

    }

    render() {
        console.disableYellowBox = true;

        return (
            <Provider store={store}>
                <MainNav />
            </Provider>
        );
    }
}

export default App

// export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});