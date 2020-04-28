import * as React from 'react';
import Session from '../Session'
import todo from '../screens/Todo'
const session = new Session()

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CustomDrawerContent'
const Drawer = createDrawerNavigator();



export default class DrawerScreen extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        session.getUserId().then(result => {
            console.log('getting userid')
            console.log(result + '')
            this.setState({ userId: result + '' })
        })

    }

    render() {
        return (
                <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent navigation={this.props.navigation} />}
                    initialRouteName="Help" >
                    <Drawer.Screen name={'Help'} component={todo} />
                </Drawer.Navigator>

     
        )
    }


}
