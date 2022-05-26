import { createSlice } from "@reduxjs/toolkit"

const database = createSlice({
    name: "database",
    initialState: {
        email: 'host@vilog.com',
        password: 'helloworld',
        isAdmin: false,
        isLoggedIn: false
    },
    reducers: {
        toggleAdminStatus (state, action) {
            state.isAdmin = !state.isAdmin;
        },
        logUserOut (state, action){
            state.isLoggedIn = false;
        }

    }
});

 export const {setCurrentUserEmail, toggleLoginStatus, toggleAdminStatus, logUserOut} = database.actions;

export default database;