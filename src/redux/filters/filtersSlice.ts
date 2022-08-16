import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: '',
    categoryId: 0,
    sort: { name: 'popularity', sortSelector: 'rating' }
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setActiveCategory(state, action) {
            state.categoryId = action.payload
        },
        setsortCategory(state, action) {
            state.sort = action.payload
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },

    }
});

export const { setActiveCategory, setsortCategory, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer