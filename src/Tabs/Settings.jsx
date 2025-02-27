import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../Global_Style'

const Settings = () => {
  return (
    <View style={[GlobalStyles.container,{justifyContent:'center',alignContent:'center'}]}>
    <Text style={GlobalStyles.center_txt}>Settings page</Text>
  </View>
  )
}

export default Settings

const styles = StyleSheet.create({})