import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        show(state, action) {
            state.push(action.payload);
        },
    },
})

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;