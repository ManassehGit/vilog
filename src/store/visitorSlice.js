import { createSlice, current } from "@reduxjs/toolkit";
import {logVisitor} from '../functions/functions';

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

                const {dateCurrent, email, isLoggedIn, loginMethod, timeIn, timeOut} = state.visitorList[visitorId];
                console.log(dateCurrent, email, isLoggedIn, loginMethod, timeIn, timeOut);

                logVisitor(email, dateCurrent, timeIn, timeOut, loginMethod);
                state.visitorList = state.visitorList.filter(visitor => visitor.email !== email);

            }
        }

    }
});

export const {addVisitor, logoutVisitor} = visitors.actions;
export default visitors;