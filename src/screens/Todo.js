import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddToDo from './AddTodo'
import ListToDo from './ListTodo'

const Tab = createBottomTabNavigator();

export default function Todo() {
  return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Add To Do" component={AddToDo} />
        <Tab.Screen name="List To Do" component={ListToDo} />
      </Tab.Navigator>
    
  );
}
