import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function LoginForm() {
  return (
    <View>
      <Text>LoginForm</Text>
      <TextInput placeholder='Email' />
      <TextInput placeholder='Constraseña'/>
      <Button title='Enviar' />
    </View>
  )
}