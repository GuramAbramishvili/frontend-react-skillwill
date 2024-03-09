import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from './screens/chats';
import Status from './screens/status';
import Calls from './screens/calls';
import styles from './styles'


const Tab = createMaterialTopTabNavigator();


const Navigator = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarLabelStyle: { color: 'white', fontWeight: '500' }, tabBarStyle: { backgroundColor: '#096e57', color: 'white' } }}>
            <Tab.Screen name='Chats' component={Chats}/>
            <Tab.Screen name='Status' component={Status}/>
            <Tab.Screen name='Calls' component={Calls}/>
        </Tab.Navigator>
    )
}

export default Navigator 