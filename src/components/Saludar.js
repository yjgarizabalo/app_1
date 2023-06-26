import React from 'react'
import { View, Text } from 'react-native'
import propTypes from 'prop-types'

export default function Saludar(props) {
  const { firstname, lastname } = props
  return (
    <View>
      <Text>Saludos {firstname} {lastname} 👋</Text>
    </View>
  )
}

// Saludar.defaultProps = {
//   firstname: "Johe",
//   lastname: "Doe"
// }

Saludar.propTypes = {
  firstname: propTypes.string.isRequired,
  lastname: propTypes.string.isOptional
}