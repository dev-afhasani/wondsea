import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home/home';
import WonderEdu from './src/screens/WonderEdu/WonderEdu';
import BottomTab from './src/routes/BottomTab';
import WonderFood from './src/screens/WonderFood/WonderFood';
import MyTambak from './src/screens/MyTambak/MyTambak';
import BukaTambak from './src/screens/MyTambak/BukaTambak';
import DetailVideo from './src/screens/DetailVideo/DetailVideo';
import Benih from './src/screens/MyTambak/Benih';
import Perlengkapan from './src/screens/MyTambak/Perlengkapan';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomTab'>
        <Stack.Screen name='BottomTab'
          component={BottomTab}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WonderEdu"
          component={WonderEdu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WonderFood"
          component={WonderFood}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyTambak"
          component={MyTambak}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailVideo"
          component={DetailVideo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BukaTambak"
          component={BukaTambak}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Benih"
          component={Benih}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Perlengkapan"
          component={Perlengkapan}
          options={{ headerShown: false }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})