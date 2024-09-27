import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './Component/Home';
import Settings from './Component/Settings';
import { Color } from './Const/Colors';
import Transfer from './Component/Transfer'


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
 
    screenOptions={({ route }) => ({
      headerShown: false,

      tabBarIcon: ({ focused, color, size }) => {

        let iconName;




        if (route.name === 'Home') {

          iconName = focused ? 'home' : 'home-outline';

        } else if (route.name === 'Settings') {

          iconName = focused ? 'settings' : 'settings-outline';

        }

        return <Ionicons name={iconName} size={size} color={color} />;

      },

    })}

    tabBarOptions={{

      activeTintColor: Color.background,

      inactiveTintColor: 'gray',

    }}

  >

    <Tab.Screen name="Home" component={Home} />

    <Tab.Screen name="Settings" component={Settings} />

  </Tab.Navigator>
  )
}

export default Tabs