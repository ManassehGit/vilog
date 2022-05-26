import { createSlice, current } from "@reduxjs/toolkit"

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
        addVisitor:  (state, action) => {
            const {email, dateCurrent, timeIn, isLoggedIn, loginMethod} = action.payload;
            console.log(email, dateCurrent, timeIn)
            state.visitorList.push({email: email, dateCurrent: dateCurrent, timeIn: timeIn, isLoggedIn: isLoggedIn, timeOut: null, loginMethod: loginMethod});
            console.log("visitors List", current(state))
            for(let item in state){
                console.log(item)
            }
            state.visitorEmails.push(email);
        },
        logoutVisitor: (state, action) => {
            const {email} = action.payload
            const visitorId = state.visitorList.findIndex(visitor => visitor.email === email)
            if(visitorId){
                state.isLoggedIn = false;
            }
        }

    }
});

export const {addVisitor, logoutVisitor} = visitors.actions;
export default visitors;