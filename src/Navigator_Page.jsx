import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab_page from './BottomTab_page'

const Navigator_Page = () => {

    const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='BottomTabPage'  screenOptions={{ headerShown: false }}>
            <Stack.Screen name='BottomTabPage'  component={BottomTab_page}/>
        </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default Navigator_Page

const styles = StyleSheet.create({})