import { createSlice } from "@reduxjs/toolkit";
import { CartSliceState } from "./types";
import { calcTotalCount } from "../../utils/calcTotalCount";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLS";

const initialState: CartSliceState = getCartFromLS()

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

            state.totalPrice = calcTotalPrice(state.items)

            state.totalCount = calcTotalCount(state.items)
        },

        minusItem(state, action) {

            const findItem = state.items.find(obj => obj.id === action.payload)

            if (findItem) {
                findItem.count--
            }

            if (findItem && findItem.count < 1) {
                state.items = state.items.filter(item => item.id !== findItem.id)
            }

            state.totalPrice = calcTotalPrice(state.items)

            state.totalCount = calcTotalCount(state.items)
        },

        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)

            state.totalPrice = calcTotalPrice(state.items)

            state.totalCount = calcTotalCount(state.items)
        },

        cleareItemList(state) {
            state.items = []

            state.totalPrice = calcTotalPrice(state.items)

            state.totalCount = calcTotalCount(state.items)
        }

    }
});

export const { addItem, minusItem, removeItem, cleareItemList } = cartSlice.actions;

export default cartSlice.reducer