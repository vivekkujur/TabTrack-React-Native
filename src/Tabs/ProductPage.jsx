import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GlobalStyles } from '../Global_Style'

const ProductPage = () => {


    const [dataList, setDataList] = useState([])
    const [skip, setSkip] = useState(0)
    const [limit, setLimit] = useState(15)


    const getDataFromApi = async () => {
        const response = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
        const data = await response.json()
        setDataList([...dataList, ...data.products])
        console.log(data)

    }


    useEffect(() => {
        getDataFromApi()
    }, [skip])


    const handleEnd=()=>{
        setSkip(prev=> prev+limit)
    }


    const ItemComp = ({ item }) => {
        // console.log("items",item)
        return (<View style={{ marginHorizontal: 20, marginVertical: 10, backgroundColor: '#d4d4d4', borderRadius: 10, padding: 10 }}>
            <Image style={{width:100,   height: undefined,
    aspectRatio: 1,}} source={{uri:item.thumbnail}} />
            <Text style={styles.title_st }>{item.title}</Text>
            <Text>{item.description}</Text>


        </View>)
    }

    return (
        <View style={[GlobalStyles.container, { justifyContent: 'center', alignContent: 'flex-start' }]}>
            <Text style={[GlobalStyles.center_txt,{margin:20, fontWeight:'700'}]}>Products</Text>
            <FlatList
                renderItem={({ item, index }) => <ItemComp item={item} />}
                data={dataList}
                keyExtractor={(_, index) => index}
                onEndReached={handleEnd}


            />

        </View>
    )
}

export default ProductPage

const styles = StyleSheet.create({
    title_st: {
        fontSize: 18,
        marginBottom: 8
    }
})