import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false
}
const authSlice = createSlice({
    name: 'authenticaion',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            localStorage.setItem('token',action.payload);
        },
        logout(state) {
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
    }
})

setTimeout(() => {
    localStorage.removeItem('token');
}, [50000]);

export const authActions = authSlice.actions;

export default authSlice.reducer;