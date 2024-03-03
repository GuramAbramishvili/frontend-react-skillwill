import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';




export default function App() {
  const [likeIcon, setLikeIcon] = useState('hearto')

  const toggleLike = () => {
    if (likeIcon === 'hearto'){
      setLikeIcon('heart')
    }else{
      setLikeIcon('hearto')
    }
  }




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>Instagram</Text>
        <AntDesign name="hearto" size={25} color="black" />
        <FontAwesome5 name="facebook-messenger" style={{marginLeft: 30}} size={24} color="black" />
      </View>
      <View style={styles.imgContainer}>
        <View>
         <Image style={styles.imgItem} source = {require('./img/assassin.png')}/>
         <Text style={styles.imgText}>ezio.audit</Text>
        </View>
        <View>
         <Image style={styles.imgItem} source = {require('./img/bat.png')}/>
         <Text style={styles.imgText}>batman</Text>
        </View>
        <View>
         <Image style={styles.imgItem} source = {require('./img/un.png')}/>
         <Text style={styles.imgText}>nathan</Text>
        </View>
        <View>
         <Image style={styles.imgItem} source = {require('./img/ratchet.png')}/>
         <Text style={styles.imgText}>ratchet</Text>
        </View>
      </View>
      <View
          style={{
          marginTop: 40,
          borderBottomColor: 'black',
          borderBottomWidth: 0.2,
        }}
      />
      <View style={styles.textHeader}>
         <Image style={styles.headerItem} source = {require('./img/assassin.png')}/>
         <View style={{ marginLeft: 10, marginRight: 170}}>
          <Text style={{ fontWeight: 700}}>ezio.auditore</Text>
          <Text>Florence, Italy</Text>
         </View>
         <MaterialCommunityIcons name="dots-vertical" size={28} color="black" />
      </View>
      <Image style={{ width: 400, height: 400, resizeMode: 'contain'}} source = {require('./img/surat.jpg')}/>
      <View style={styles.iconHeader}>
        <AntDesign style={{marginRight: 10}} name={likeIcon} size={25} color="black" onPress={()=>toggleLike()}/>
        <Image style={{height: 30, width: 30, resizeMode: 'contain', marginRight: 10}} source = {require('./img/7938466.png')}/>
        <Image style={{height: 25, width: 25, resizeMode: 'contain', marginRight: 200}} source = {require('./img/2550207.png')}/>
        <Image style={{height: 32, width: 32, resizeMode: 'contain'}} source = {require('./img/60239.png')}/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: { 
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
    marginLeft: 10
  },
  logo: {
    fontSize: 25,
    lineHeight: 26,
    marginRight: 140
  },
  imgContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 10,
    top: 15
  },
  imgItem: {
    padding: 0,
    margin: 0,
    width: 80,
    height: 82,
    marginRight: 5,
    resizeMode: 'contain',
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 40
  },
  imgText: {
    textAlign: 'center',
  },
  textHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 5,
    marginVertical: 20
  },
  headerItem: {
    width: 50,
    height: 50,
  },
  iconHeader:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 5,
    marginTop: 10
  }
});
