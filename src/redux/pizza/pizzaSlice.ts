import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { Pizza, PizzaSliceSate, SearchPizzaParams, Status } from "./types";

const initialState: PizzaSliceSate = {
    items: [],
    status: Status.LOADING //loading success erorr
};


export const fetchItems = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'items/fetchItems',
    async (params) => {
        const { setCategory, sortBy, searchPizza } = params;
        const res = await axios.get<Pizza[]>(`https://62dfae1d976ae7460bf12076.mockapi.io/pizzas?${setCategory}${sortBy}${searchPizza}`)

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
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCSESS;
        });
        builder.addCase(fetchItems.rejected, (state) => {
            state.status = Status.ERORR;
            state.items = [];
        });

    }
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer