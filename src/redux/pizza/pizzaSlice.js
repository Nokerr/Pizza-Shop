import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    items: [],
    itemsFetchState: 'loading' // loading success erorr
}

export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    async (params) => {
        const { setCategory, sortBy, searchPizza } = params;
        const res = await axios.get(`https://62dfae1d976ae7460bf12076.mockapi.io/pizzas?${setCategory}${sortBy}${searchPizza}`)

        return res.data
    }
)

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        },
    },
    extraReducers: {
        [fetchItems.pending]: (state) => {
            state.itemsFetchState = 'loading';
            state.items = []
        },
        [fetchItems.fulfilled]: (state, action) => {
            state.itemsFetchState = 'success'
            state.items = action.payload
        },
        [fetchItems.rejected]: (state) => {
            state.itemsFetchState = 'erorr'
            state.items = []
        }
    }
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer