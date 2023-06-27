import { SafeAreaView, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
  const { navigation } = props
  const goToHola = () => {
    navigation.navigate("Hola")
  }
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToHola} title='Hola 👋'/>
    </SafeAreaView>
  )
}