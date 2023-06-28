import { Text, TextInput, Button, SafeAreaView  } from 'react-native'
import React from 'react'

export default function LoginForm() {
  return (
    <SafeAreaView>
      <Text>LoginForm</Text>
      <TextInput placeholder='Email' />
      <TextInput placeholder='Constraseña'/>
      <Button title='Enviar' />
    </SafeAreaView>
  )
}