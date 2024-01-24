import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    status: "idle"
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload;
        // }
    },
    extraReducers: (bulder) => {
        bulder
            .addCase(getProducts.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = "idel"
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "error"
            })
    }
})

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = await res.data;
    return data;
})

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const res = await axios.get("https://fakestoreapi.com/products");
//         const data = await res.data;
//         dispatch(fetchProducts(data));
//     }
// }
