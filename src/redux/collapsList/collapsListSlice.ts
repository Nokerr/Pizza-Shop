import { createSlice } from "@reduxjs/toolkit";

type CollapsList = {
    isOpenedCollapse: boolean
}

const initialState: CollapsList = {
    isOpenedCollapse: false,
}

const collapsListSlice = createSlice({
    name: 'collaps',
    initialState,
    reducers: {
        setIsopendCollapse(state, action) {
            state.isOpenedCollapse = action.payload
        }
    }
})

export const { setIsopendCollapse } = collapsListSlice.actions

export default collapsListSlice.reducer;


