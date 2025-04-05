import { configureStore } from "@reduxjs/toolkit";
import ProductPage from "../Tabs/ProductPage";
import  productReducer from "./productSlice";

export const store = configureStore({
    reducer:{
        products : productReducer
    }
})