import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './screens/Splash'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Todo from './screens/Todo'
import updateTodo from './screens/UpdateTodo'
import allTodo from './screens/ListAllTodo'
import drawer from './screens/DrawerScreen'
import Colors from './resources/Colors'
import Strings from './resources/Strings'
import Names from './screens/names'
const Stack = createStackNavigator()

function MainNav() {


return (<NavigationContainer>
        <Stack.Navigator
            initialRouteName={Names.splash}
            headerMode = 'none'
        >
            <Stack.Screen name={Names.splash}
             component={Splash}
             options={getHeaderOptionsForSplash()}
            >
            
            </Stack.Screen>
            <Stack.Screen name= {Names.login}
             component={Login}
            >
            
            </Stack.Screen>
            <Stack.Screen name= {Names.signUp}
             component={SignUp}
            >
            
            </Stack.Screen>
            <Stack.Screen name= {Names.todo}
             component={Todo}
            >
            
            </Stack.Screen>
            <Stack.Screen name= {Names.update}
             component={updateTodo}
            >
            </Stack.Screen>
            <Stack.Screen name= {Names.allTodo}
             component={allTodo}
            >
            </Stack.Screen>
            
            <Stack.Screen name= {Names.drawer}
             component={drawer}
            >
            </Stack.Screen>
            
        </Stack.Navigator>
    </NavigationContainer>)
}

function getHeaderOptionsForSplash(){
    return {
        title:Strings.home,
        headerStyle: {
          backgroundColor:Colors.primaryColor,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
        
      }
}

export default MainNav