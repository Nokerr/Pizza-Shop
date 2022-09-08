import { createSlice } from "@reduxjs/toolkit";

type confirmMassage = {
    isconfirmMassageOpen: boolean
}

const initialState: confirmMassage = {
    isconfirmMassageOpen: false,
}

const confirmMassageSlice = createSlice({
    name: 'confirmMassage',
    initialState,
    reducers: {
        setisconfirmMassageOpen(state, action) {
            state.isconfirmMassageOpen = action.payload
        }
    }
})

export const { setisconfirmMassageOpen } = confirmMassageSlice.actions

export default confirmMassageSlice.reducer;