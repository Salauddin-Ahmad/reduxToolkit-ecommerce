import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    isLoading: false,
    error: null,
};
const BASE_URL = 'http://localhost:3000/products'

// fetch request with asynthunk and axios
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const res = await axios.get(BASE_URL);
    console.log(res.data)
    return res.data;
})

// delete request with asynthunk and axios
export const deleteProduct = createAsyncThunk('products/delteProducts',
    async (id) => {
        const res = await axios.delete(`${BASE_URL}/${id}`);
        console.log(res.id)
        return res
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
                state.error = action.error.message ?? "Failed to fetch data";
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(
                    (product) => product.id !== action.payload
                )
            })
    }
})


export default productSlice.reducer;
