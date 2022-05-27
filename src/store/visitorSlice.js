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
            console.log(email, dateCurrent, timeIn, loginMethod)
            state.visitorList.push({email: email, dateCurrent: dateCurrent, timeIn: timeIn, isLoggedIn: isLoggedIn, timeOut: null, loginMethod: loginMethod});
            console.log("visitors List", current(state))
            
            state.visitorEmails.push(email);
        },
        logoutVisitor: (state, action) => {
            const {email, time} = action.payload;
            console.log(email, time)
            let visitorId = state.visitorList.findIndex(visitor => visitor.email === email);
            console.log(visitorId);
            if(visitorId !== -1){
                state.visitorList[visitorId].isLoggedIn = false;
                state.visitorList[visitorId].timeOut = time;

                console.log("visitor slice-----",state.visitorList[visitorId]);

            }
        }

    }
});

export const {addVisitor, logoutVisitor} = visitors.actions;
export default visitors;