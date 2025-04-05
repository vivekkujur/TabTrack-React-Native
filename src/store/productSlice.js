import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: 'product',
    initialState:{
        value : 0,
    },
    reducers:{
        increment:(state)=>{
             state.value  += 1
        },
         incrementByNumber  :(state, action) =>{
            state.value += action.payload 
         }

    }
})

export const {increment,incrementByNumber } = productSlice.actions
export default productSlice.reducer