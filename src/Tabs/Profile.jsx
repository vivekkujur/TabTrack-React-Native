import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { GlobalStyles } from '../Global_Style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from '../Constants'
import { AppContext } from '../ContextApi/AppProvider'


const Profile = () => {


    const {refresh ,setRefresh}  = useContext(AppContext)
    const [userData , setUserData] = useState({})

    const getProfileData =async()=>{

      const data  =  await AsyncStorage.getItem(Constants.USER_DATA)

      if(data!=null){
        setUserData(JSON.parse(data))
      }

    }
    useEffect(()=>{
        getProfileData()
    },[])

    useEffect(()=>{
        if(refresh==true){
            setRefresh(false)
            getProfileData()
        }
    },[refresh])

    


  return (
    <View style={[GlobalStyles.container,{justifyContent:'center',alignContent:'center'}]}>
    <Text style={GlobalStyles.center_txt}>Profile Page</Text>
    <View style={{borderRadius:10, backgroundColor:'grey',paddingHorizontal:20,paddingVertical:20,margin:30}}>
        <Text style={styles.txt_style}>User Name : {userData.name??""}</Text>
        <Text style={styles.txt_style}>User Email : {userData.email??""}</Text>

    </View>
  </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    txt_style:{
        fontSize:16, marginTop:10,textAlign:'left',color:'black'
    }
})