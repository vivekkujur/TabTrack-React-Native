import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductPage from './Tabs/ProductPage'
import Profile from './Tabs/Profile'
import Settings from './Tabs/Settings'
import StopWatchPage from './Tabs/StopWatch'
import AppProvider from './ContextApi/AppProvider'

const BottomTab_page = () => {
    const Tabs = createBottomTabNavigator()
    return (
        <AppProvider>
            <Tabs.Navigator screenOptions={{ headerShown: false }}>
                <Tabs.Screen name='StopWatch' component={StopWatchPage} />
                <Tabs.Screen name='Products' component={ProductPage} />
                <Tabs.Screen name='Profile' component={Profile} />
                <Tabs.Screen name='Settings' component={Settings} />
            </Tabs.Navigator>
        </AppProvider>

    )
}

export default BottomTab_page

const styles = StyleSheet.create({})