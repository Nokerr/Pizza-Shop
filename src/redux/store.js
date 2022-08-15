import { configureStore } from "@reduxjs/toolkit";
import filter from './filters/filtersSlice';
import cart from './cart/cartSlice';
import collaps from './collapsList/collapsListSlice'
import pizza from './pizza/pizzaSlice'

export default configureStore({
    reducer: {
        filter,
        cart,
        collaps,
        pizza
    }
});