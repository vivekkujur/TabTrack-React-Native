import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalStyles } from '../Global_Style'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Constants from '../Constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppContext } from '../ContextApi/AppProvider'

const Settings = () => {
    const {refresh ,setRefresh}  = useContext(AppContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const clickedSave = ()=>{

        if(name.trim().length==0 || email.trim().length==0 ){
            showAlert("All field required")
        }else {
            saveDataTolocal()
          
        }

    }
    const showAlert=(message) =>{
        Alert.alert(message)

    }

    const saveDataTolocal = async()=>{
         let data={
            name:name,
            email:email
         }

         try{
            await AsyncStorage.setItem(Constants.USER_DATA,JSON.stringify(data))
            setName("")
            setEmail("")
            setRefresh(true)
            showAlert("User Data updated")
         }catch(e){
            showAlert(e.message)

         }

    }

    return (
        <View style={[GlobalStyles.container, { justifyContent: 'center', alignContent: 'center' }]}>
            <Text style={GlobalStyles.center_txt}>Settings page</Text>
            <View style={{ margin: 30 }}>

                <TextInput
                    defaultValue={name}
                    onChangeText={setName}
                    placeholder='Enter Name'
                    style={{ height: 50, padding: 5, borderColor: "#6200ea", borderWidth: 1, borderRadius: 8 }}
                />

                <TextInput
                    defaultValue={email}
                    onChangeText={setEmail}
                    placeholder='Enter Email'
                    style={{ height: 50, padding: 5, borderColor: "#6200ea", borderWidth: 1, borderRadius: 8, marginTop: 20 }}
                />


                <TouchableOpacity  onPress={clickedSave} style={{ backgroundColor: 'blue', borderRadius: 8, height: 50, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                    <Text style={{ color: 'white' }}>Save</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})