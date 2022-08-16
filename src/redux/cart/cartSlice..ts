import { createSlice } from "@reduxjs/toolkit";
import { CartSliceState } from "./types";

const initialState: CartSliceState = {
    items: [],
    totalCount: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({ ...action.payload, count: 1 })
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)

            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum
            }, 0)
        },

        minusItem(state, action) {

            const findItem = state.items.find(obj => obj.id === action.payload)

            if (findItem) {
                findItem.count--
            }

            if (findItem && findItem.count < 1) {
                state.items = state.items.filter(item => item.id !== findItem.id)
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)

            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum
            }, 0)
        },

        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)

            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum
            }, 0)
        },

        cleareItemList(state) {
            state.items = []

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)

            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum
            }, 0)
        }

    }
});

export const { addItem, minusItem, removeItem, cleareItemList } = cartSlice.actions;

export default cartSlice.reducer