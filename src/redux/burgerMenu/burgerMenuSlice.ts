import { createSlice } from "@reduxjs/toolkit";

type BurgerMenu = {
    isBurgerMenuOpen: boolean
}

const initialState: BurgerMenu = {
    isBurgerMenuOpen: false,
}

const burgerMenuSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        setisBurgerMenuOpen(state, action) {
            state.isBurgerMenuOpen = action.payload
        }
    }
})

export const { setisBurgerMenuOpen } = burgerMenuSlice.actions

export default burgerMenuSlice.reducer;
