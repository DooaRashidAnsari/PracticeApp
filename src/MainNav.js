import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './screens/SplashScreen'
import Login from './screens/LoginScreen'
import SignUp from './screens/SignUpScreen'
import Todo from './screens/Todo'
import allTodo from './screens/ListAllTodo'
import onBoarding from './screens/OnboardingScreen'
import drawer from './screens/DrawerScreen'
import syncData from './screens/SyncedTodos'
import Names from './screens/names'
import CustomDrawerContent from './components/CustomDrawerContent'
const Stack = createStackNavigator()
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import { navigationRef, isMountedRef } from './RootNavigation';

function Root() {
  return <Stack.Navigator
    headerMode='none'
    initialRouteName={Names.splash}
  >
    <Stack.Screen name={Names.splash}
      component={Splash}
    >

    </Stack.Screen>

    <Stack.Screen name={Names.login}
      component={Login}
    >

    </Stack.Screen>
    <Stack.Screen name={Names.signUp}
      component={SignUp}
    >

    </Stack.Screen>
    <Stack.Screen name={Names.todo}
      
    >
      {props => <Todo {...props} drawerRef={this._ref} />}
    </Stack.Screen>
    <Stack.Screen name={Names.allTodo}
      component={allTodo}
    >
    </Stack.Screen>

    <Stack.Screen name={Names.drawer}
      component={drawer}
    >
    </Stack.Screen>
    <Stack.Screen name={Names.onBoarding}
      component={onBoarding}
    >
    </Stack.Screen>
    <Stack.Screen name={Names.syncData}
      component={syncData}
    >
    </Stack.Screen>

  </Stack.Navigator>
}
_ref = null
setRef = ref => {
  this._ref = ref
}


function MainNav() {
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {console.log('creating ref')
      }
      {
        console.log(React.createRef())}
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent ref={this.setRef} />}
        headerMode='none'
        initialRouteName="Root" >
        <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>


    </NavigationContainer>)
}


export default MainNav