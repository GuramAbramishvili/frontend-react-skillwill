import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Navigator from './navigator'
import { NavigationContainer } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import styles from './styles';

export default function App() {
  return (
    <NavigationContainer>
       <View style={styles.header}>
          <Text style={styles.headerLogo}>WhatsApp</Text>
          <SimpleLineIcons style={styles.headerItemF} name="camera" size={26} color="white" />
          <SimpleLineIcons style={styles.headerItem} name="magnifier" size={21} color="white" />
          <MaterialCommunityIcons name="dots-vertical" size={25} color="white" />
       </View>
       <StatusBar style='auto'/>
       <Navigator/>
    </NavigationContainer>
  );
}
