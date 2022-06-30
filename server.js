const sendVisitorQR = require('./mailing/sendMail');
const express = require('express');
const path = require('path');
const {Pool} = require('pg');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
require('dotenv').config()


swaggerDocument = require('./swagger.json');


const uri = process.env.DATABASE_URL
const app = express();

//Configure cors
app.use(cors())

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

let port = process.env.PORT || 8000;

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const pool = new Pool({
 connectionString: uri,
 ssl: {
    rejectUnauthorized: false
    }
});

app.get("/", async (req, res) => {
    const message = `
            <div style="margin-top: 10em;display: flex;align-items: center;justify-content: space-evenly;">
                <h1 style="font-size: 4em;">Welcome to V<span style="color:orange;">i</span>Log</h1>
            </div>
    `
    res.status(201).send(message);
})

app.get("/sendMail/:usermail", async (req, res) => {
    const {usermail} = req.params;
    let result = await sendVisitorQR.sendQRMail(`${usermail}`)
    res.json(result.rows);
    console.log("result", result)
})


// Routes
app.get('/users', async (req, res, next) => {
    // res.status(201).json({msg: "Welcome to the serve page"});
    try{
        const result = await pool.query(`SELECT * FROM Users;`);
        res.json(result.rows);
    }catch(err){
        console.log(err)
    }
   
    

})

app.get('/visitors', async (req, res, next) => {
    try{
        const result = await pool.query(`SELECT * FROM Visitors;`);
        res.json(result.rows);
    }catch(err){
        console.log(err);
    }
   

})

app.post('/addUser', async (req, res, next) => {
    try{
        console.log(req.body)
        const {firstname, password, department} = req.body;
        const result = await pool.query(`INSERT INTO Users(username, user_password, department) VALUES('${firstname}', '${password}', '${department}') RETURNING *;`)
        
        res.json(result.rows);
    
    }catch(err){
        console.log("Sorry error",err.message);
    }
})

app.post('/addVisitor', async (req, res, next) => {
    try{
        console.log("Req bosy",req.body)
        const {username, dateCurrent, timeIn, timeOut, loginMethod} = req.body;
        
        const result = await pool.query(`INSERT INTO Visitors(username, date_current, time_in, time_out, login_method) VALUES('${username}', '${dateCurrent}', '${timeIn}', '${timeOut}', '${loginMethod}') RETURNING *;`)
        res.json(result.rows);
    
    }catch(err){
        console.log("Sorry error",err.message);
    }
})

app.delete('/users/:id', async (req, res, next) => {
    console.log(req.params);
    try{
        const {id} = req.params;
        
        const result = await pool.query(`DELETE FROM Users WHERE id='${id}' RETURNING *;`)
        console.log(result.rows)
        res.json(result.rows);
    
    }catch(err){
        console.log("Sorry error",err.message);
    }
})

app.put('/users/:id', async (req, res, next) => {
    console.log(JSON.stringify(req.body))
    const { id } = req.params;

        let columns = [
            "username", 
            "user_password", 
            "department"
        ]

        for (let i = 0; i < columns.length; i++) {

            if (req.body.hasOwnProperty(columns[i])) {
                let key = columns[i]
                const value = req.body[key];
                const update = await pool.query(`UPDATE users SET ${key} = $1 WHERE id = $2`,
                    [value, id]);
            }
        }

})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})