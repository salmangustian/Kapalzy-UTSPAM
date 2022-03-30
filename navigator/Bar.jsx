import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
// import App from './App';
import Stack from './Stack';
import Receipt from './Receipt';
import Cancel from './Cancel';

// import Home from './Home';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        component={Stack}
        tabBarLabel="HomePage"
        color="#000080"
        
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="home" size={22} color="#11468F" />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pesanan Tiket Saya"
        component={Receipt}
        tabBarLabel="Receipt"
        color="#000080"
        
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="book" size={22} color="#11468F" />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pembatalan"
        component={Cancel}
        tabBarLabel="Pembatalan"
        color="#000080"
        
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome name="receipt" size={22} color="#11468F" />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
          headerShown: false,
        }}
      />

      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default MyTabs;