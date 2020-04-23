import React from 'react';
import {Text} from 'react-native'
import MainNav from './src/MainNav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default class App extends React.Component {
  constructor(props){
    super(props)
    library.add(fas)

  }
  render() {
    console.disableYellowBox = true;
    //console.log
    //console.log(this.props.navigation)
    return (
      <MainNav/>
    );
  }
}
