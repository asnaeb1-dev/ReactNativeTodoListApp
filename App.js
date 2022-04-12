import React from "react";
import { View } from 'react-native'

import HomeScreen from "./src/Screens/HomeScreen";
import DetailScreen from "./src/Screens/DetailsScreen";
import AboutScreen from "./src/Screens/AboutScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoScreen from "./src/Screens/TodoScreen";

const Stack = createNativeStackNavigator()

const App = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Todo" component={TodoScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
      
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App