import { createSlice } from "@reduxjs/toolkit"

const visitors = createSlice({
    name: "visitors",
    initialState: {
            
    },
    reducers: {
        addVisitor  (state, action) {
            const {email, time, isLoggedIn} = action.payload
            state.push({email, time, isLoggedIn})
        },
        logoutVisitor (state, action) {
            const {email} = action.payload
            const visitorId = state.find(visitor => visitor.email === email)
            if(visitorId){
                state.isLoggedIn = false;
            }
        }

    }
});

export default visitors;