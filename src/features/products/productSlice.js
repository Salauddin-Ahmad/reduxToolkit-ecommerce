import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[],
    isLoading: false,
    error: null,
};
const BASE_URL = 'http://localhost:3003/products'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
        const res = await axios.get(BASE_URL);
        return res.data;
})

export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Failed to fetch data" || action.error.message;
        })
    }
})


export default productSlice.reducer;
