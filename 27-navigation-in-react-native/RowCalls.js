import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 

const Row = ({name, date}) => {
  return (
    <View style={styles.row}>
    <View style={styles.profile}>
      <Image style={styles.img} source={require('./img/avatar.png')}  />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text >{date}</Text>
      </View>
    </View>
      <View style={styles.icon}>
        <MaterialIcons name="phone" size={32} color="#096e57" />
      </View>
    </View>
  )
}

export default Row

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
      marginTop: 20,
      left: 10
    }
})