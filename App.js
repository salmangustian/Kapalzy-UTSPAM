import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Home from './navigator/Home';
// import Receipt from './navigator/Receipt';
// import Order from './navigator/Order';
import Tab from './navigator/Bar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
      <Tab/>
    </NavigationContainer>
  );
}
export default App;

// initialRouteName="Home"