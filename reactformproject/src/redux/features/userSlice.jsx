import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: "",
    user: {},
    productsData: []
}

export const getProductsData = createAsyncThunk(
    "product/getProductData",
    async () => {
        try {
            const response = await fetch("https://api.kitapbulal.com/test/getproducts")
            return response.json()
        } catch (error) {
            return console.log(error.message)
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsData.pending, (state) => {
            state.loading = true;
        }).addCase(getProductsData.fulfilled, (state, action) => {
            state.loading = false;
            state.productsData = action.payload
            state.error = false;
        }).addCase(getProductsData.rejected, (state) => {
            state.loading = true;
            state.error = true;
        })
    }
})