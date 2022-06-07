import axios from "axios"

export const logVisitor = async (email, dateCurrent, timeIn, timeOut, loginMethod) => {

    try{
        const result = await axios.post("/visitors", {
            username: email, 
            dateCurrent: dateCurrent, 
            timeIn: timeIn, 
            timeOut: timeOut, 
            loginMethod: loginMethod
        })
        return result;

    }catch(err){
        console.log(err)
    }
}

export const getUsers = async () => {

    try{
        const result = await axios.get("/users");
        return result.data;

    }catch(err){
        console.log(err)
    }
}

export const getVisitors = async () => {

    try{
        const result = await axios.get("/visitors");
        return result.data.rows;

    }catch(err){
        console.log(err)
    }
}

export const sendMail = async (username) => {
    try{
        const result = await axios.get(`/sendMail/${username}`);
        return result;
    }catch(err){
        console.log(err)
    }
}

