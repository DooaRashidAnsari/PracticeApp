import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainNav from './src/MainNav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import rootReducer from './src/reducers/BaseReducer'
import EStyleSheet from 'react-native-extended-stylesheet';

/**
 * Store - holds our state - THERE IS ONLY ONE STATE 
 * Action - State can be modified using actions - SIMPLE OBJECTS 
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state 
 *  - pure functions 
 *  - only mandatory argument is the 'type' 
 * Subscriber - listens for state change to update the ui  
 */

const store = createStore(rootReducer)

class App extends Component {
    constructor(props) {
        super(props)
        library.add(fas)
        EStyleSheet.build();
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