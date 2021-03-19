import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainBottom from './tabs/MainBottom.tab';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainBottom} />
    </Stack.Navigator>
  );
}

export default RootStack;
