import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AccountIcon,
  ListIcon,
  MessageIcon,
  NavigationIcon,
  WalletIcon,
} from '../../assets/icon';

import Home from '../../screens/Home';
import List from '../../screens/List';
import Wallet from '../../screens/Wallet';
import Message from '../../screens/Message';
import Account from '../../screens/Account';

import color from '../../utils/colors';
import styles from './MainBottom.styles';

const Tab = createBottomTabNavigator();

function MainBottomTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: color.green,
        labelStyle: styles.labelStyle,
        style: styles.container,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <NavigationIcon color={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={List}
        options={{
          tabBarIcon: ({color, size}) => (
            <ListIcon color={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({color, size}) => (
            <WalletIcon color={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({color, size}) => (
            <MessageIcon color={color} width={24} height={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => (
            <AccountIcon color={color} width={24} height={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainBottomTabs;
