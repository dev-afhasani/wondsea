import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home/home';
import WonderEdu from '../../screens/WonderEdu/WonderEdu';
import WonderFood from '../../screens/WonderFood/WonderFood';
import { ms } from 'react-native-size-matters';

import IC_Home from '../../assets/icons/home.png';
import IC_Course from '../../assets/icons/Course.png';
import IC_Food from '../../assets/icons/Food.png';
import IC_Mitra from '../../assets/icons/mitra.png';
import Mitra from '../../screens/Mitra/Mitra';
import MyTambak from '../../screens/MyTambak/MyTambak';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator styles={styles.home} screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        borderTopColor: '#AAA',
        height: ms(60),

      }
    }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', width: ms(70) }}>
              <Image source={IC_Home} resizeMode='contain' style={{ width: ms(24), height: ms(24), tintColor: focused ? '#19A7CE' : '#AAAAAA' }} />
              <Text style={{ color: focused ? '#19A7CE' : '#AAAAAA' }} >
                Home
              </Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name='MyTambak'
        component={MyTambak}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', width: ms(70) }}>
              <Image source={IC_Food} resizeMode='contain' style={{ width: ms(24), height: ms(24), tintColor: focused ? '#19A7CE' : '#AAAAAA' }} />
              <Text style={{ color: focused ? '#19A7CE' : '#AAAAAA' }} >
                My Tambak
              </Text>
            </View>
          )
        }} />

      <Tab.Screen
        name='Mitra Kami'
        component={Mitra}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', width: ms(70) }}>
              <Image source={IC_Mitra} resizeMode='contain' style={{ width: ms(24), height: ms(24), tintColor: focused ? '#19A7CE' : '#AAAAAA' }} />
              <Text style={{ color: focused ? '#19A7CE' : '#AAAAAA' }} >
                Mitra kami
              </Text>
            </View>
          )
        }} />


    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({

})