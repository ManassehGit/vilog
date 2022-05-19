import { createSlice } from "@reduxjs/toolkit"

const host = createSlice({
    name: "host",
    initialState: {
        currentUserEmail: '',
        isLoggedIn: false,
        isAdmin: false
    },
    reducers: {
        setCurrentUserEmail  (state, action) {
            state.currentUserEmail = action.payload;
        },
        toggleLoginStatus (state, action) {
            state.isLoggedIn = true;
        },
        toggleAdminStatus (state, action) {
            state.isAdmin = !state.isAdmin;
        },
        logUserOut (state, action){
            state.isLoggedIn = false;
        }

    }
});

 export const {setCurrentUserEmail, toggleLoginStatus, toggleAdminStatus, logUserOut} = host.actions;

export default host;