import { createSlice } from "@reduxjs/toolkit"

const visitors = createSlice({
    name: "visitors",
    initialState: {
            
    },
    reducers: {
        addVisitor  (state, action) {
            const {email, timeIn, isLoggedIn} = action.payload
            state.push({email: email, timeIn: timeIn, isLoggedIn: isLoggedIn, timeOut: null})
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