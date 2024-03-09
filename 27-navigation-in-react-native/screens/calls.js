import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Row from '../RowCalls'
import contacts from '../contacts'

const renderItem = ({item}) => <Row name={item.name} date={item.date}/>

const Calls = () => {
  return (
    <FlatList data={contacts} renderItem={renderItem}/>
  )
}

export default Calls

