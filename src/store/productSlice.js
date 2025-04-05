import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk('product/fetchProduct',async ()=>{
    const response = await fetch(`https://dummyjson.com/products?skip=0&limit=50`)
    const data = await response.json()
    console.log("redux api call ", data)
    return data.products
})

export const productSlice = createSlice({
    name: 'product',
    initialState:{
        value : 0,
        productList : [],
        isLoading :false,
        error:null
         
    },
    reducers:{
        increment:(state)=>{
             state.value  += 1
        },
         incrementByNumber  :(state, action) =>{
            state.value += action.payload 
         }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending, (state)=>{
            state.isLoading =true
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.isLoading = false
            state.productList =  action.payload
        })
       
    }
})

export const {increment,incrementByNumber } = productSlice.actions
export default productSlice.reducer