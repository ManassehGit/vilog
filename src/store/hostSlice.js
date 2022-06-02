import { createSlice } from "@reduxjs/toolkit"

const host = createSlice({
    name: "host",
    initialState: {
        currentUserEmail: '',
        department: '',
        isLoggedIn: false,
        isAdmin: false
    },
    reducers: {
        setCurrentUserEmail  (state, action) {
            const {usermail} = action.payload;
            state.currentUserEmail = usermail;
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