import React from 'react';
import {Text} from 'react-native'
import MainNav from './src/MainNav'

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <MainNav/>
    );
  }
}
