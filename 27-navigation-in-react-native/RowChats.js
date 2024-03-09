import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 

const RowChats = ({name, date}) => {
  return (
    <View style={styles.row}>
    <View style={styles.profile}>
      <Image style={styles.img} source={require('./img/avatar.png')}  />
      <Text style={styles.name}>{name}</Text>
    </View>
      <View style={styles.icon}>
        <Text>{date}</Text>
      </View>
    </View>
  )
}

export default RowChats

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderBottomWidth: 1,
        borderColor: '#d8e6db'
    },
    profile: {
      flexDirection: 'row',
      width: 300
    },
    img: {
      width: 70,
      height: 70,
      resizeMode: 'contain',
      marginRight: 10
    },
    name: {
      marginTop: 10,
      fontSize: 17
    },
    icon: {
      marginTop: 10,
    }
})