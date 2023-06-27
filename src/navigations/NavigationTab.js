import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// screen
import HomeScreen from '../screens/HomeScreen';
import HolaScreen from '../screens/HolaScreen';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Hola" component={HolaScreen}/>
    </Tab.Navigator>
  )
}