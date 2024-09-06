import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    isLoading: false,
    error: null,
};
const BASE_URL = 'http://localhost:3000/products'

// fetch request with asynthunk and axios
export const fetchProducts = createAsyncThunk('products/fetchProduct', async () => {
    const res = await axios.get(BASE_URL);
    console.log(res.data)
    return res.data;
})

// delete request with asynthunk and axios
export const deleteProduct = createAsyncThunk('products/delteProduct',
    async (id) => {
        const res = await axios.delete(`${BASE_URL}/${id}`);
        return res
    })

export const createProduct = createAsyncThunk('products/createProduct',
    async (product) => {
        const res = await axios.post(BASE_URL, product);
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
                state.error = action.error.message ?? "Failed to fetch data";
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter(
                    (product) => product.id !== action.payload
                )
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products.push(action.payload)
            })
    }
})


export default productSlice.reducer;
