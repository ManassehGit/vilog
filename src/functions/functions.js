import axios from "axios"

export const logVisitor = async (email, dateCurrent, timeIn, timeOut, loginMethod) => {

    try{
        const result = await axios.post("/addVisitor", {
            username: email, 
            dateCurrent: dateCurrent, 
            timeIn: timeIn, 
            timeOut: timeOut, 
            loginMethod: loginMethod
        })
        console.log("Result----", result)
        return result;

    }catch(err){
        console.log(err)
    }
}