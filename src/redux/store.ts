import { configureStore } from "@reduxjs/toolkit";
import filter from './filters/filtersSlice';
import cart from './cart/cartSlice.';
import collaps from './collapsList/collapsListSlice'
import pizza from './pizza/pizzaSlice'
import burgerMenu from "./burgerMenu/burgerMenuSlice";
import confirmMassage from "./confirmMassage/confirmMassageSlice";


export const store = configureStore({
    reducer: {
        filter,
        cart,
        collaps,
        pizza,
        burgerMenu,
        confirmMassage
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

