import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Button, ScrollView, TextInput, FlatList } from 'react-native';
import contacts, { compareNames } from './contacts';
import ContactList from './ContactList';
import Row from './Row';

const renderItem = ({item}) => <Row name={item.name} phone={item.phone}/>

export default function App() {
  const [showContacts, setShowContacts] = useState(false)
  const [sortedContacts, setSortedContacts] = useState(contacts)
  const [showNameInput, setShowNameInput] = useState(false)
  const [showRes, setShowRes] = useState()
  const [dataValue, setDataValue] = useState("")

  const toggleContacts = () => {
    setShowContacts((prev) => !prev)
  }

  const toggleNameInput = () => {
    setShowNameInput((prev) => !prev)
  }

  const sort = () => {
    setSortedContacts((prev) => [...prev.sort(compareNames)])
  }

  
  // const found = contacts.filter(contact => contact.name.startsWith(nameValue))
  
  const onChange = (text) => {
      if (text.trim() == ''){
        setShowRes(false)
      }else if(contacts.map(contact => contact.name.startsWith(text))){
        const found = contacts.filter(contact => contact.name.startsWith(text[0].toUpperCase() + text.slice(1)))
        setDataValue(found)
        setShowRes(true)
      }
  }


  
 
  return <SafeAreaView style={styles.container}>
    <View style={styles.btn}>
      <Button title='toggle contacts' onPress={toggleContacts}/>
    </View>
    <View style={styles.btn}>
      <Button title='sort' onPress={sort}/>
    </View>
    <View style={styles.btn}>
      <Button title='find contact by name' onPress={toggleNameInput}/>
    </View>
    {showNameInput && <TextInput style={styles.nameInput} type='text'  onChangeText={text => onChange(text)} placeholder="Enter name"/>}
    {showRes && <FlatList data={dataValue} renderItem={renderItem}/>}
    {showContacts &&  <ContactList contacts={sortedContacts}/>}
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 50
  },
  nameInput:{
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'cyan'
  },
  btn: {
    width: '80%',
    paddingVertical: 5,
    marginLeft: '10%',
    marginRight: '10%',
  },
});


