import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../Global_Style'

const Profile = () => {
  return (
    <View style={[GlobalStyles.container,{justifyContent:'center',alignContent:'center'}]}>
    <Text style={GlobalStyles.center_txt}>Profile Page</Text>
  </View>
  )
}

export default Profile

const styles = StyleSheet.create({})