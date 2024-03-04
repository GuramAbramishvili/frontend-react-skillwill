import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Row = ({name, phone}) => {
  return (
    <View style={styles.row}>
      <Text>{name}</Text>
      <Text>{phone}</Text>
    </View>
  )
}

export default Row

const styles = StyleSheet.create({
    row: {
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#f0f0f0'
    }
})