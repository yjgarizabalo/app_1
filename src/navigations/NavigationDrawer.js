import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

// screen 
import HomeScreen from '../screens/HomeScreen'
import HolaScreen from '../screens/HolaScreen'

const Drawer = createDrawerNavigator()

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Hola" component={HolaScreen} />
    </Drawer.Navigator>
  )
}