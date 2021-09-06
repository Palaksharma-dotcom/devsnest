import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './homeAPI';

const initialState = {
    status: 'idle',
    data: null,
};

export const fetchProductsAsync = createAsyncThunk(
    'home/fetchProducts',
    async () => {
        const response = await fetchProducts();
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    
  
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload;
            });
    },
});

export const selectProductsData = (state) => state.home.data;

export default homeSlice.reducer;