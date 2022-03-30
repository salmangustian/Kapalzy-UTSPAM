import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './Home';
import Receipt from './Receipt';
import Order from './Order';
import Cancel from './Cancel';
// import Tab from './Bottombar';

const Stack = createNativeStackNavigator();

const SrcStack = () => {
    return (
        <Stack.Navigator
         initialRouteName={'Home'}
         screenOptions={{
             headerShown: true,
        }}>
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='Receipt'
                component={Receipt}
                options={{
                    title: 'Home'
            }}
            />
            <Stack.Screen
                name='Order'
                component={Order}
                options={{
                    title: 'Daftar Pesanan Tiket'
            }}
            />
            <Stack.Screen
                name='Pembatalan'
                component={Cancel}
                options={{
                    title: 'Daftar Pembatalan Pemesanan Tiket'
            }}
            />
                
        </Stack.Navigator>
            
    );
};

export default SrcStack;