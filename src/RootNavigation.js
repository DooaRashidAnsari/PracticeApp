// RootNavigation.js

import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';


export const isMountedRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function toggleDrawer() {
    if (isMountedRef.current && navigationRef.current) {
      // Perform navigation if the app has mounted
      navigationRef.current.dispatch(DrawerActions.toggleDrawer());

      //navigationRef.current.navigate(name, params);
    } else {
      // You can decide what to do if the app hasn't mounted
      // You can ignore this, or add these actions to a queue you can call later
    }
  }


  export function replace(name,params) {
    if (isMountedRef.current && navigationRef.current) {
      // Perform navigation if the app has mounted
      navigationRef.current.dispatch(StackActions.replace(name,params));

      //navigationRef.current.navigate(name, params);
    } else {
      // You can decide what to do if the app hasn't mounted
      // You can ignore this, or add these actions to a queue you can call later
    }
  }

  export function reset() {
    if (isMountedRef.current && navigationRef.current) {
        navigationRef.current.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Todo' },
                
              ],
            })
          );
        // Perform navigation if the app has mounted
      
      //navigationRef.current.navigate(name, params);
    } else {
      // You can decide what to do if the app hasn't mounted
      // You can ignore this, or add these actions to a queue you can call later
    }
  }

