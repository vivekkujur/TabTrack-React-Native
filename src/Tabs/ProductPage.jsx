import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../Global_Style'

const ProductPage = () => {
  return (
    <View style={[GlobalStyles.container,{justifyContent:'center',alignContent:'center'}]}>
      <Text style={GlobalStyles.center_txt}>ProductPage</Text>
    </View>
  )
}

export default ProductPage

const styles = StyleSheet.create({})