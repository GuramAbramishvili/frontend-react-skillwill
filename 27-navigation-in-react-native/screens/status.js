import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Row from '../RowCalls'

const Status = () => {
  return (
    <View style={styles.row}>
      <View style={styles.profile}>
        <Image style={styles.img} source={require('../img/avatar.png')}  />
        <View>
          <Text style={styles.name}>Status</Text>
          <Text style={styles.string}>Click, to add new status</Text>
        </View>
      </View>
    </View>
  )
}

export default Status

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
},
string: {
  marginTop: 7,
  fontSize: 17,
  color: '#096e57'
}
})