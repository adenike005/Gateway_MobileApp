import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";
import Tabs from './Tabs'

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}> 
        <Stack.Screen name="welcome" component={Login}  /> 
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;

