import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/productSlice";

export default configureStore({
    reducer: {
        productsR: productSlice,
        reducer: {

        }
    },
})