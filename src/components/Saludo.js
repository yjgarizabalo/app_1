import { View, Text } from 'react-native'
import propTypes from 'propTypes'
import React from 'react'

export default function Saludo() {
  const { firstname, lastname } = props
  return (
    <View>
      <Text>Saludo {firstname} {lastname} 👋🏽</Text>
    </View>
  )
}

Saludo.prototype = {
  firstname: propTypes.string.isRequired,
  lastname: propTypes.string.isOptional
}