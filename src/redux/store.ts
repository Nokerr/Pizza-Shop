import { configureStore } from "@reduxjs/toolkit";
import filter from './filters/filtersSlice';
import cart from './cart/cartSlice.';
import collaps from './collapsList/collapsListSlice'
import pizza from './pizza/pizzaSlice'
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        filter,
        cart,
        collaps,
        pizza
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;