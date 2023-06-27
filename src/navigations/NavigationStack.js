import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen'
import HolaScreen from '../screens/HolaScreen'

const Stack = createNativeStackNavigator()

export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Hola" component={HolaScreen} />
    </Stack.Navigator>
  )
}