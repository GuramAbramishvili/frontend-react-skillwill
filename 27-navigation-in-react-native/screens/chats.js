import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import contacts from '../contacts'
import RowChats from '../RowChats'


const renderItem = ({item}) => <RowChats name={item.name} date={item.date}/>

const Calls = () => {
  return (
    <FlatList data={contacts} renderItem={renderItem}/>
  )
}

export default Calls
