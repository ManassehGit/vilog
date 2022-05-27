import { createSlice } from "@reduxjs/toolkit"

const visitors = createSlice({
    name: "visitors",
    initialState: {
        visitorEmails: [
            "manass@gmail.com",
            "kofi@gmail.com",
            "kwasi@gmail.com",
            "kwadwo@gmail.com"
        ],
        visitorList: []            
    },
    reducers: {
        addVisitor  (state, action) {
            const {email, timeIn, isLoggedIn} = action.payload;
            state.visitorList.push({email: email, timeIn: timeIn, isLoggedIn: isLoggedIn, timeOut: null});
            state.visitorEmails.push({email: email});
        },
        logoutVisitor (state, action) {
            const {email} = action.payload
            const visitorId = state.visitorList.findIndex(visitor => visitor.email === email)
            if(visitorId){
                state.isLoggedIn = false;
            }
        }

    }
});

export default visitors;