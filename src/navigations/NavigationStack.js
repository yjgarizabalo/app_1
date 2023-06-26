import React from 'react'
// import { createStackNavigaitor } from "@react-navigation/stack"

import HomeScreen from '../screens/HomeScreen'
import HolaScreen from '../screens/HolaScreen'

const Sackt = createStackNavigaitor()

export default function NavigationStack() {
  return (
    <Sackt.Navigaitor>
      <Stack.screen name="Home" component={HomeScreen} />
      <Stack.screen name="Hola" component={HolaScreen} />
    </Sackt.Navigaitor>
  )
}